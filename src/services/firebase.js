import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

let db = null;

const hasFirebaseConfig = !!(firebaseConfig.apiKey && firebaseConfig.projectId);

if (hasFirebaseConfig) {
  try {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log('🔥 Firebase inicializado con éxito.');
  } catch (e) {
    console.error('❌ Error al inicializar Firebase SDK:', e);
  }
} else {
  console.warn('ℹ️ Variables de entorno de Firebase ausentes. Ejecutando en modo de simulación.');
}

// Clave de cifrado de 32 bytes para AES-GCM
const CRYPTO_KEY_BYTES = new Uint8Array([
  118, 105, 115, 97, 122, 111, 95, 115, 101, 99, 117, 114, 101, 95, 107, 101,
  121, 95, 50, 48, 50, 54, 95, 111, 102, 102, 108, 105, 110, 101, 95, 108
]); // "visazo_secure_key_2026_offline_l"

// Obtener la CryptoKey de forma asíncrona
async function getCryptoKey() {
  return await window.crypto.subtle.importKey(
    'raw',
    CRYPTO_KEY_BYTES,
    { name: 'AES-GCM' },
    false,
    ['encrypt', 'decrypt']
  );
}

// Cifrar texto usando AES-GCM 256 bits y retornar Base64
async function encryptData(text) {
  try {
    const key = await getCryptoKey();
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const encoded = new TextEncoder().encode(text);
    const ciphertext = await window.crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      key,
      encoded
    );
    const combined = new Uint8Array(iv.byteLength + ciphertext.byteLength);
    combined.set(iv, 0);
    combined.set(new Uint8Array(ciphertext), iv.byteLength);
    return btoa(String.fromCharCode(...combined));
  } catch (e) {
    console.error('❌ Error al cifrar datos offline:', e);
    return null;
  }
}

// Descifrar Base64 y retornar texto plano
async function decryptData(encryptedBase64) {
  try {
    const key = await getCryptoKey();
    const combined = new Uint8Array(
      atob(encryptedBase64).split('').map(c => c.charCodeAt(0))
    );
    const iv = combined.slice(0, 12);
    const ciphertext = combined.slice(12);
    const decrypted = await window.crypto.subtle.decrypt(
      { name: 'AES-GCM', iv },
      key,
      ciphertext
    );
    return new TextDecoder().decode(decrypted);
  } catch (e) {
    console.error('❌ Error al descifrar datos offline (posible manipulación):', e);
    return null;
  }
}

// Helpers internos para la cola cifrada
async function obtenerColaDesencriptada() {
  const encData = localStorage.getItem('offline_leads');
  if (!encData) return [];
  
  const decryptedStr = await decryptData(encData);
  if (!decryptedStr) {
    localStorage.removeItem('offline_leads');
    return [];
  }
  
  try {
    return JSON.parse(decryptedStr);
  } catch {
    return [];
  }
}

async function guardarColaEncriptada(cola) {
  const serialized = JSON.stringify(cola);
  const encData = await encryptData(serialized);
  if (encData) {
    localStorage.setItem('offline_leads', encData);
  }
}

async function guardarEnColaOffline(datos) {
  try {
    const rawQueue = await obtenerColaDesencriptada();
    const existe = rawQueue.some(item => item.datos.solicitudId === datos.solicitudId);
    
    if (!existe) {
      rawQueue.push({
        datos,
        timestamp: Date.now()
      });
      await guardarColaEncriptada(rawQueue);
      console.log(`📥 Lead guardado de forma cifrada en la cola offline local (solicitudId: ${datos.solicitudId}).`);
    }
  } catch (e) {
    console.error('❌ Error al encolar datos de forma segura:', e);
  }
}

export async function guardarEnFirebase(datos, isRetry = false) {
  if (!hasFirebaseConfig || !db) {
    // Modo Simulación: Si está offline, guardamos en cola. Si está online, simulamos éxito.
    if (!navigator.onLine) {
      console.warn('❌ [Simulado] Falla de red al conectar con Firebase.');
      if (!isRetry) {
        await guardarEnColaOffline(datos);
      }
      return false;
    }
    console.log('✅ [Simulado] Lead guardado con éxito. ID:', datos.solicitudId,
                '| Perfil:', datos.perfil, '| Score:', datos.score);
    return true;
  }

  try {
    const docRef = await addDoc(collection(db, 'solicitudes'), {
      datos_completos: datos,
      creadoEl: new Date().toISOString()
    });
    console.log('✅ Lead guardado en Firebase. ID del documento:', docRef.id,
                '| ID Solicitud:', datos.solicitudId,
                '| Perfil:', datos.perfil, '| Score:', datos.score);
    return true;
  } catch (err) {
    console.error('❌ Error al conectar con Firebase:', err.message);
    if (!isRetry) {
      await guardarEnColaOffline(datos);
    }
    return false;
  }
}

let syncTimeoutId = null;
let retryAttempts = 0;
const MAX_RETRY_ATTEMPTS = 3;

export async function sincronizarLeadsOffline() {
  if (syncTimeoutId) {
    clearTimeout(syncTimeoutId);
    syncTimeoutId = null;
  }

  try {
    const queue = await obtenerColaDesencriptada();
    if (queue.length === 0) {
      retryAttempts = 0;
      return;
    }

    if (!navigator.onLine) {
      console.log('🔌 El navegador está offline de manera declarativa. Sincronización pospuesta.');
      return;
    }

    console.log(`🔄 Cola offline detectada. Procesando ${queue.length} leads...`);
    const now = Date.now();
    const TTL_LIMIT = 24 * 60 * 60 * 1000; // 24 horas

    const remainingQueue = [];
    let caducados = 0;
    let failCount = 0;

    for (const item of queue) {
      if (now - item.timestamp > TTL_LIMIT) {
        caducados++;
        continue;
      }

      const success = await guardarEnFirebase(item.datos, true);
      if (success) {
        console.log(`✅ Sincronización exitosa para lead ID: ${item.datos.solicitudId}`);
      } else {
        failCount++;
        remainingQueue.push(item);
      }
    }

    if (caducados > 0) {
      console.warn(`🗑️ Se descartaron ${caducados} leads de la cola local por superar el TTL de seguridad de 24 horas.`);
    }

    if (remainingQueue.length > 0) {
      await guardarColaEncriptada(remainingQueue);

      if (failCount > 0 && navigator.onLine && retryAttempts < MAX_RETRY_ATTEMPTS) {
        retryAttempts++;
        const delay = retryAttempts * 3000;
        console.log(`⚠️ Sincronización incompleta (${failCount} fallidos). Programando reintento #${retryAttempts} en ${delay / 1000}s...`);
        syncTimeoutId = setTimeout(() => {
          sincronizarLeadsOffline();
        }, delay);
      }
    } else {
      localStorage.removeItem('offline_leads');
      console.log('🎉 Sincronización offline completada. Cola local limpia.');
      retryAttempts = 0;
    }
  } catch (err) {
    console.error('❌ Error durante la sincronización segura:', err);
  }
}

export async function enviarMensajeContacto(datos) {
  // Simular retardo para realismo
  await new Promise((resolve) => setTimeout(resolve, 1200));

  if (!hasFirebaseConfig || !db) {
    console.log('📝 [Simulado]: Mensaje de contacto guardado localmente.', datos);
    return { success: true, message: 'Simulado con éxito localmente.' };
  }

  try {
    const docRef = await addDoc(collection(db, 'contacto'), {
      ...datos,
      creadoEl: new Date().toISOString()
    });
    console.log('✅ Mensaje de contacto guardado en Firebase. ID:', docRef.id);
    return { success: true };
  } catch (err) {
    console.error('❌ Error al guardar contacto en Firebase:', err.message);
    return { success: false, error: err.message };
  }
}
