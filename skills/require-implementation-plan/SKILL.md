---
name: require-implementation-plan
description: Obliga al agente de IA a preparar siempre un plan de implementación detallado y a obtener aprobación explícita del usuario antes de realizar cambios de código o ejecutar comandos de modificación en el repositorio.
---

# Skill de Obligatoriedad de Plan de Implementación y Aprobación del Usuario

Este skill define una directiva inquebrantable de control, seguridad y comunicación que **cualquier agente de IA** debe seguir al interactuar con el código fuente y los entornos de este repositorio.

---

## 1. Regla Fundamental

> [!CAUTION]
> **PROHIBICIÓN DE EDICIONES AUTOMÁTICAS**: 
> Bajo ninguna circunstancia el Agente de IA realizará cambios en archivos de código fuente, creará nuevos archivos de lógica, ni ejecutará comandos en la terminal que modifiquen el estado del proyecto sin haber presentado un **Plan de Implementación** previo y haber recibido la **aprobación explícita** del usuario en la conversación.

---

## 2. Flujo de Trabajo Requerido (Workflow de Modificación)

El agente debe estructurar su interacción en las siguientes cuatro fases diferenciadas:

### Fase 1: Investigación y Análisis
- Realizar búsquedas de archivos, análisis de dependencias e inspección de código mediante herramientas de lectura (`view_file`, `grep_search`, `list_dir`).
- **Prohibido**: Ejecutar herramientas de edición (`replace_file_content`, `multi_replace_file_content`, `write_to_file`) sobre archivos del proyecto durante esta fase.

### Fase 2: Creación del Plan de Implementación
- Crear o actualizar el archivo de plan de implementación (`implementation_plan.md`) detallando:
  - **Objetivo**: Qué problema se resuelve y qué se logrará.
  - **Revisión Requerida**: Cualquier decisión de diseño, cambio importante o dato legal/tecnológico que requiera el visto bueno del usuario.
  - **Cambios Propuestos**: Lista exacta de archivos a modificar (`[MODIFY]`), crear (`[NEW]`) o eliminar (`[DELETE]`) con enlaces directos en formato markdown.
  - **Plan de Verificación**: Cómo se probarán los cambios (ej. comandos de compilación, linter, pruebas manuales).
- Solicitar feedback configurando la metadata del artefacto correspondiente y deteniendo la ejecución de herramientas para permitir la respuesta del usuario.

### Fase 3: Espera de Aprobación
- El agente debe esperar a que el usuario lea el plan de implementación y responda otorgando su aprobación expresa en el chat.
- **Nota**: Si el sistema reporta una aprobación automática de políticas, se puede proceder; de lo contrario, la aprobación humana en el chat es mandatoria.

### Fase 4: Ejecución y Registro de Tareas
- Crear un archivo de lista de tareas (`task.md`) para rastrear el progreso.
- Llevar a cabo los cambios usando las herramientas de edición correspondientes.
- Actualizar `task.md` progresivamente marcando tareas completadas (`[x]`) o en curso (`[/]`).

### Fase 5: Validación y Cierre
- Ejecutar pruebas automatizadas, compilación local y linter (`eslint`) para garantizar que el código introducido esté libre de errores.
- Crear o actualizar el reporte de cierre (`walkthrough.md`) detallando los cambios implementados y los resultados de las verificaciones.

---

## 3. Ejemplo de Plantilla de Plan de Implementación

El plan propuesto al usuario debe seguir el siguiente formato markdown:

```markdown
# Plan de Implementación - [Breve Título de la Tarea]

[Descripción clara del objetivo y alcance del cambio]

## Puntos para Revisión del Usuario
> [!IMPORTANT]
> [Detallar decisiones críticas, dependencias o campos configurables]

## Cambios Propuestos
### [Componente/Módulo]
#### [MODIFY/NEW/DELETE] [Nombre del Archivo](file:///ruta/absoluta/al/archivo)
- [Descripción corta de la modificación o contenido]

## Plan de Verificación
- **Pruebas**: [Comandos a ejecutar]
- **Linter**: [Comandos de validación de estilo]
```
