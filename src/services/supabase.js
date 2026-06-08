const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export async function guardarEnSupabase(datos) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error('❌ Supabase URL or Anon Key are missing in environment variables.');
    return;
  }

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/solicitudes`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({ datos_completos: datos })
    });

    if (res.ok) {
      console.log('✅ Lead guardado en Supabase. ID:', datos.solicitudId,
                  '| Perfil:', datos.perfil, '| Score:', datos.score);
    } else {
      const txt = await res.text();
      console.warn('⚠️ Supabase HTTP', res.status,
        '\nURL:', `${SUPABASE_URL}/rest/v1/solicitudes`,
        '\nRespuesta:', txt);
    }
  } catch (err) {
    console.error('❌ Error de red al conectar con Supabase:', err.message);
  }
}
