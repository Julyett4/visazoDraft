---
name: visazo-style-a11y-guard
description: Guía de diseño y accesibilidad para mantener la estética premium de Visazo Pro y cumplir con WCAG 2.1 AA.
---

# Visazo Pro: Guía de Estética Premium y Accesibilidad WCAG 2.1 AA

Esta guía técnica describe las pautas obligatorias para realizar modificaciones en el diseño visual, estilos (CSS) o HTML de Visazo Pro, asegurando que la interfaz mantenga su aspecto moderno y de alta gama sin fallar las auditorías de accesibilidad.

---

## 1. Principios de Contraste y Colores

Visazo Pro utiliza una paleta de colores oscuros combinada con una tarjeta central clara. Todo cambio de color o texto nuevo debe respetar las siguientes relaciones de contraste:

### A. Elementos sobre Fondo Claro (Dentro de `#card` y Modales)
- **Texto Principal (`var(--g900)`)**: `#0f172a` (Contraste `16.4:1` - Cumple holgadamente). Usado en títulos principales (`.stitle`, `.rtitle`).
- **Texto de Entrada / Etiquetas (`var(--g700)`)**: `#334155` (Contraste `9.3:1` - Cumple holgadamente).
- **Texto Secundario / Descriptivo (`var(--g500)`)**: `#57687d`. Este tono específico asegura un contraste mínimo de `5.46:1` sobre el fondo claro de la tarjeta (`#ffffff`) y de `4.58:1` sobre fondos de control como `var(--g50)` (`#f8fafc`). **No usar grises más claros que `#57687d` para textos legibles.**
- **Texto de Ayuda / Advertencias Secundarias (`var(--g600)`)**: `#475569`. Contraste de `5.11:1`. Usar para pequeños hints o detalles.

### B. Elementos sobre Fondo Oscuro (Header, Footer y Secciones Exteriores)
- **Texto Principal**: `#ffffff` (Contraste máximo).
- **Enlaces del Header / Subtítulos (`text-white/55` o `rgba(255, 255, 255, 0.55)`)**: Genera un color efectivo de `#919da9` sobre el fondo azul marino (`#0a2540`). Contraste de `5.69:1` (Pasa AA).
- **Enlaces del Footer / Descripción (`rgba(255, 255, 255, 0.65)`)**: Genera contraste de aprox. `6.5:1`. **No reducir la opacidad del texto blanco por debajo del 55% en fondos oscuros.**

---

## 2. Interactividad por Teclado Sin Degradación Visual

Para garantizar que los usuarios visuales de ratón no vean anillos de enfoque intrusivos, pero los usuarios de teclado mantengan una navegación perfecta:

1. **Uso de `:focus-visible`**:
   - Nunca utilices `:focus` plano con `outline: none` sin proveer una alternativa.
   - Define siempre estilos usando `:focus-visible`. Esto restringe la aparición del anillo de enfoque a cuando el elemento es activado vía **teclado (Tab)**.
   ```css
   /* Correcto */
   .btn:focus-visible {
     outline: 2px solid var(--blue2);
     outline-offset: 2px;
   }
   /* Evitar esto si es posible */
   .btn:focus {
     outline: 2px solid var(--blue2); /* Muestra el anillo en clics de mouse */
   }
   ```
2. **Enfoques Redondeados**:
   - Para botones con bordes muy redondeados o tarjetas interactivas, asegúrate de que el anillo de enfoque acompañe a la curvatura.
   - En CSS moderno, `outline` sigue automáticamente la propiedad `border-radius`. Alternativamente, utiliza `box-shadow` combinada.
   ```css
   .cc input:focus-visible + .ci {
     outline: 2px solid var(--blue);
     outline-offset: 2px;
     box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.2);
   }
   ```

---

## 3. Jerarquía y Estructura Semántica

Para que las auditorías de Lighthouse no penalicen la página con 0 en estructura:

- **Un solo `h1` por vista**: Dado que la aplicación renderiza las páginas condicionalmente (Wizard, Precios, Nosotros, etc.), cada vista renderizada debe contener exactamente un `h1` principal.
- **Flujo lógico de encabezados**: Los títulos debajo del `h1` deben descender en orden secuencial (`h2`, `h3`, `h4`). No saltes niveles (ej. no pases de `h1` a `h4` directamente; usa `h2` o `h3`).

---

## 4. Soporte para Asistencia de Pantalla (ARIA)

Al crear formularios o cargadores dinámicos interactivos:

- **Contenedores Dinámicos (`aria-live`)**:
  - Para loaders globales que bloquean la pantalla (como `#loverlay`), utiliza `role="status"`, `aria-live="assertive"`, y `aria-busy={loading}`.
  - Para barras de progreso, usa `role="progressbar"` con `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, y `aria-valuetext`.
- **Estados de Error Dinámicos**:
  - Cuando un campo de formulario falle, añade dinámicamente `aria-invalid="true"` al input y enlázalo con el texto de error usando `aria-describedby="[id_del_error]"`.
  - Estiliza los campos inválidos en CSS para dar feedback visual directo:
    ```css
    .fi[aria-invalid="true"] {
      border-color: var(--rojo) !important;
      background-color: rgba(220, 38, 38, 0.02) !important;
    }
    ```

---

## 5. Respeto al Movimiento Reducido

Las animaciones flotantes premium de fondo (`.orb`, `.spin`) deben desactivarse automáticamente si el usuario lo prefiere en la configuración de su sistema operativo:

```css
@media (prefers-reduced-motion: reduce) {
  .orb, .spin, .orb1, .orb2 {
    animation: none !important;
    transform: none !important;
    transition: none !important;
  }
}
```
