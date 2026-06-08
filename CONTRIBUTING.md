# Guía de Colaboración — Visazo Pro

¡Gracias por contribuir a Visazo Pro! Esta guía define el flujo de trabajo, las reglas del repositorio y el checklist obligatorio para mantener la estabilidad del código y proteger la seguridad de los datos.

---

## 1. Estrategia de Ramas en Git

Para garantizar la estabilidad del software, el repositorio está estructurado en dos ramas principales:

*   **`main`**: Contiene todo el código de desarrollo en React. Las contribuciones se integran aquí tras pasar el proceso de revisión y aprobación de Pull Requests.
*   **`gh-pages`**: Rama exclusiva de producción. Solo contiene los archivos estáticos listos para producción autogenerados por el bundler de Vite. **No modifiques esta rama manualmente**.

---

## 2. Desarrollo Basado en Issues

Cualquier cambio, corrección de errores o nueva característica debe estar respaldada por un **GitHub Issue**:

1.  **Revisa los Issues existentes** en el repositorio. Si no existe uno que cubra el cambio planificado, abre un nuevo Issue describiendo detalladamente el problema o mejora.
2.  **Asigna el Issue** o comenta en él para coordinar su desarrollo.
3.  **Crea una rama local** para trabajar en el Issue. La nomenclatura de ramas debe seguir este formato:
    *   Características / Funcionalidades: `feature/issue-[ID]-[nombre-corto]` (ej. `feature/issue-12-pasarela-pago`)
    *   Corrección de errores: `bugfix/issue-[ID]-[nombre-corto]` (ej. `bugfix/issue-34-alerta-edad`)
    *   Actualizaciones urgentes en producción: `hotfix/[nombre-corto]` (ej. `hotfix/loader-bloqueado`)

---

## 3. Guía de Pull Requests (PR)

Cuando finalices tus modificaciones locales y desees integrarlas a la rama `main`, abre un Pull Request en GitHub. 

### **Checklist Obligatorio de Comprobación Previa (Pre-Flight Checklist)**
Antes de enviar tu solicitud de Pull Request, debes validar cada uno de los siguientes puntos en tu entorno local:

- [ ] **Compilación sin errores**: Ejecuta `npm run build` en la terminal. El comando debe finalizar con éxito sin ningún error ni advertencia de linting.
- [ ] **Auditoría de seguridad limpia**: Ejecuta `npm audit` para certificar que ninguna de las librerías instaladas en el repositorio posea vulnerabilidades de seguridad conocidas.
- [ ] **Verificación manual del flujo**: Completa el flujo del Evaluador localmente en tu navegador y valida:
  - [ ] Paso 1 (Datos Personales): Validación del Regex del Email y longitud mínima de 10 dígitos en WhatsApp.
  - [ ] Flujo B1/B2 Primera Vez: Cálculo correcto de scoring y asignación de perfil (Verde/Naranja/Rojo).
  - [ ] Flujo Renovación Limpia: Redirección directa al resultado.
  - [ ] Flujo Renovación con alerta: Apertura de modal de entrevista y redirección a Perfil Económico.
  - [ ] Flujo Alternativo (F1/M1, Trabajo, Especial): Visualización correcta de pantallas correspondientes.
- [ ] **Verificación de persistencia en Supabase**: Abre la consola de desarrollo del navegador en las pantallas de resultados y certifique que el log confirme `✅ Lead guardado en Supabase` correctamente.
- [ ] **Prevención de Filtraciones**: Ejecuta `git status` o `git diff` y asegúrate de que ningún archivo de entorno local (como `.env.local` o `.env`) esté marcado para ser commiteado.
- [ ] **Enlace de Issue**: Añade una descripción al Pull Request enlazando el Issue correspondiente usando la sintaxis de GitHub (ej. `Closes #12`).

---

## 4. Pipeline de Despliegue en Producción

El despliegue en GitHub Pages está automatizado a través de scripts npm en tu máquina local. Una vez que tu PR sea aprobado y fusionado en `main` en GitHub:

1.  Posiciónate en la rama `main` de tu computadora y actualízala:
    ```powershell
    git checkout main
    git pull origin main
    ```
2.  Despliega el código compilado ejecutando:
    ```powershell
    npm run deploy
    ```
    *Este comando ejecutará automáticamente la compilación (`npm run build`) y publicará los assets resultantes en la rama `gh-pages` en el servidor de GitHub.*
