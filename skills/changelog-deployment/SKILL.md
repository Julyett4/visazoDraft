---
name: changelog-deployment
description: Administra el control de versiones y el registro de cambios (CHANGELOG.md) para el proyecto webVisazo, coordinando los deploys locales a GitHub Pages.
---

# Skill de Control de Versión y Despliegue de Producción (webVisazo)

Este skill define la secuencia que el Agente de IA debe seguir para gestionar los incrementos de versión, actualizar el archivo `CHANGELOG.md` y realizar el pipeline de despliegue a GitHub Pages en el proyecto **`webVisazo`**.

---

## 1. Comportamiento ante "Vamos a hacer un deploy" o "Vamos a actualizar la versión"

Cuando el usuario solicite un deploy o una actualización de código a producción, el Agente debe ejecutar los siguientes pasos en orden secuencial:

### Paso 1: Comprobación del Checklist de Pull Request
El Agente debe validar (o recordar al desarrollador validar) que el código cumpla con los requisitos del **Checklist de Comprobación Previa (Pre-Flight Checklist)** detallados en el [CONTRIBUTING.md](file:///c:/Users/Susan/Desktop/Susan/Susan%20Negocios/Emprendimiento/Visazo%20Pro/webVisazo/CONTRIBUTING.md).

### Paso 2: Incremento de Versión en el Código
El Agente debe actualizar la versión del software en dos lugares clave:
1.  **`src/App.jsx`**: Localizar el objeto `metadata` que se envía a Supabase en la función `handlePaymentConfirm` y actualizar la propiedad `version` (ej. `'2.4'` -> `'2.5'`).
2.  **`CHANGELOG.md`**: Añadir el encabezado para la nueva versión, la fecha actual y las novedades o correcciones correspondientes.

### Paso 3: Actualizar el CHANGELOG.md
Crear o añadir un bloque en [CHANGELOG.md](file:///c:/Users/Susan/Desktop/Susan/Susan%20Negocios/Emprendimiento/Visazo%20Pro/webVisazo/CHANGELOG.md) estructurado de la siguiente forma:

```markdown
## [VERSION_NAME] - [FECHA]

### 🚀 Novedades y Refactorización
*   [Detalle de las características nuevas...]

### 🛠️ Corrección de Errores y Mejoras
*   [Detalle de las correcciones de bugs y optimizaciones...]
```

### Paso 4: Solicitar Aprobación de Commit y Push de Desarrollo
> [!IMPORTANT]
> **POLÍTICA DE CONFIRMACIÓN OBLIGATORIA**: El Agente nunca debe realizar un commit o un push automático. Debe mostrar la lista de archivos modificados y solicitar aprobación explícita al usuario.

Una vez aprobada la subida de desarrollo:
```powershell
git add .
git commit -m "chore: release v[VERSION_NAME]"
git push origin main
```

### Paso 5: Despliegue a GitHub Pages
Con la aprobación del usuario obtenida para el deploy, el Agente ejecutará:
```powershell
npm run deploy
```
Este comando compilará el código y publicará el build en la rama `gh-pages` de GitHub, actualizando la web en vivo.

---

## 2. Comandos de Consola Rápidos para el Agente

### Verificar que no hay credenciales en el commit
```powershell
git status
```
*Garantizar que ningún archivo `.env` o `.local` esté listado como modificado.*

### Ejecutar compilación de prueba y auditoría
```powershell
npm run build
npm audit
```
*Ambos comandos deben finalizar de forma limpia sin errores de compilación ni vulnerabilidades críticas antes de proceder al deploy.*
