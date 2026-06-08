# Changelog - Visazo Pro

Todos los cambios notables en este proyecto serán documentados en este archivo.

---

## [2.4.0] - 2026-06-08

### 🚀 Novedades y Refactorización
*   **Migración a React + Vite + Tailwind CSS**: Conversión del antiguo archivo único `index.html` a una aplicación modular y escalable.
*   **Variables de Entorno**: Implementación de `.env.local` para manejar la URL de Supabase, la clave anónima y los enlaces de MercadoPago de forma aislada.
*   **Pipeline de Despliegue en GitHub Pages**: Adición de la dependencia `gh-pages` y scripts en `package.json` para publicar automáticamente el build de producción desde la consola local.
*   **Base URL Dinámica**: Configuración en `vite.config.js` para servir en la raíz (`/`) localmente durante el desarrollo y con el prefijo `/visazoDraft/` en la compilación de producción.

### 🛠️ Corrección de Errores y Mejoras
*   **Corrección del Cargador (Stuck Loading)**: Ajuste en la regla CSS del elemento `#loverlay` para definir `display: none;` por defecto, evitando que la animación de carga se quedase bloqueada sobre el formulario.
*   **Exclusiones en Git**: Configuración robusta en `.gitignore` para bloquear de forma segura cualquier variable de entorno local, evitando fugas en el repositorio público.
