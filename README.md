# Evaluador de Viabilidad Consular — Visazo Pro

Este proyecto es una herramienta interactiva diseñada para evaluar perfiles de solicitantes de visa americana (B1/B2, F1/M1, Trabajo y Especiales). Aplica un motor de scoring basado en las directrices consulares del Departamento de Estado de EE. UU. e integra flujos de pago seguro de MercadoPago y persistencia de leads en Supabase.

---

## 🚀 Stack Tecnológico

El proyecto está desarrollado sobre una arquitectura modular de alto rendimiento:
*   **Core**: [React 19](https://react.dev/)
*   **Herramienta de Construcción (Bundler)**: [Vite 8](https://vite.dev/)
*   **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Despliegue**: [GitHub Pages](https://pages.github.com/) (sirviendo el build estático desde la rama `gh-pages`)
*   **Persistencia**: [Supabase](https://supabase.com/) (REST API)
*   **Pasarela de Pago**: [MercadoPago](https://www.mercadopago.com.co/)

---

## 📁 Estructura del Proyecto

```
webVisazo/
├── .gitignore
├── .env.local             # Archivo local con credenciales (IGNORADO POR GIT)
├── package.json           # Dependencias y scripts de ejecución
├── vite.config.js         # Configuración del bundler y base paths
├── index.html             # Punto de entrada de la SPA
└── src/
    ├── main.jsx           # Script de renderizado React
    ├── App.jsx            # Controlador de navegación y scoring engine
    ├── index.css          # Estilos globales y Tailwind CSS
    ├── data/
    │   └── db.js          # Base de datos local de preguntas, opciones y planes
    ├── services/
    │   └── supabase.js    # Servicio de persistencia de leads
    └── components/        # Componentes reutilizables e independientes del formulario
```

---

## 🛠️ Instalación y Configuración Local

### Requisitos Previos
Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 20 o superior) y Git en tu computadora.

### 1. Clonar el repositorio e instalar dependencias
```powershell
# Instalar dependencias del proyecto
npm install
```

### 2. Configurar Variables de Entorno (Ciberseguridad)
Para evitar la filtración de credenciales sensibles en el repositorio público, el proyecto utiliza variables de entorno.
1. Crea un archivo llamado **`.env.local`** en la raíz del proyecto.
2. Añade el siguiente bloque de configuración:
```env
VITE_SUPABASE_URL=https://aoeabaoicxztodmlmezu.supabase.co
VITE_SUPABASE_ANON_KEY=tu_anon_key_de_supabase_aqui

# Enlaces de MercadoPago
VITE_LINK_PASAPORTE=enlace_mercado_pago_pasaporte_exito
VITE_LINK_PRO=enlace_mercado_pago_plan_pro
VITE_LINK_PREMIUM=enlace_mercado_pago_plan_premium
VITE_LINK_RENOV_PRO=https://mpago.li/2ZTxuW5
VITE_LINK_RENOV_PREMIUM=https://mpago.li/2ZoUmBu
VITE_LINK_ESPECIAL=https://mpago.li/1sczD47
```
*Nota: El archivo `.env.local` está configurado en `.gitignore` y nunca se subirá a GitHub por razones de seguridad.*

---

## 💻 Comandos Útiles del Proyecto

### Iniciar Servidor de Desarrollo
Para probar la aplicación en tu computadora localmente:
```powershell
npm run dev
```
El servidor se iniciará en `http://localhost:5173/`. Abre esta dirección en tu navegador para interactuar con el evaluador.

### Probar Compilación de Producción
Para validar que el código compile de manera correcta y libre de errores antes de subirlo:
```powershell
npm run build
```

### Ejecutar Despliegue en GitHub Pages
Para compilar y publicar los cambios en vivo en tu enlace público (`https://julyett4.github.io/visazoDraft/`):
```powershell
npm run deploy
```
*Este comando compilará automáticamente el proyecto y subirá los archivos compilados a la rama `gh-pages` de tu repositorio GitHub.*
