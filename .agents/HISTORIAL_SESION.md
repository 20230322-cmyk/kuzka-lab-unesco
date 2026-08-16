# HISTORIAL Y ESTADO DE SESIÓN (KUZKA LAB)

> **Documento de Contexto de Proyecto para Agentes de Antigravity**  
> **Última actualización:** 16 de Agosto, 2026  
> **Proyecto:** KUZKA LAB — UNESCO Youth Hackathon 2026  
> **Rama de trabajo activa:** `feature/shared-design-system`  
> **Último Commit:** `746dacf` (*fix(fase1): corregir visibilidad continua del bichito y animar botón CTA con pulso/glow*)

---

## 1. RESUMEN EJECUTIVO DEL PROYECTO

- **Competencia:** UNESCO Youth Hackathon 2026 (Global Innovation and Scholarship).
- **Propósito:** Plataforma lúdica e interactiva de inmunidad cognitiva contra la desinformación y el sesgo algorítmico, integrando dinámicas STEAM.
- **Cuaderno NotebookLM MCP vinculado:**
  - Nombre: `UNESCO Youth Hackathon 2026: Global Innovation and Scholarship Guide`
  - URL: https://notebook.google.com/notebook/5548b2d7-abe8-4d40-be44-20080122aaf3 

---

## 2. HISTORIAL COMPLETO DE LO REALIZADO EN LA SESIÓN ANTERIOR

### A. Manual Psicométrico y Diseño de Preguntas
- Se estructuró y redactó el documento completo [`docs/manual_psicometrico_kuska.md`](file:///home/laptop/Documentos/kuzka-lab-unesco/docs/manual_psicometrico_kuska.md) que contiene el test diagnóstico de **15 reactivos/preguntas** distribuidos en 3 mecánicas:
  1. **Mecánica Swipe (Radar)**: 7 preguntas de clasificación binaria rápida (Peligro / Seguro).
  2. **Mecánica Lab Forense (Lupa)**: 5 preguntas con análisis de metadatos, inspección táctil profunda y pistas ocultas.
  3. **Mecánica Cuarentena Ética (Matrix)**: 3 dilemas sobre sesgo y comportamiento ético digital.
- Se definieron 4 arquetipos de diagnóstico final: *Inmune Digital*, *Verificador Metódico*, *Navegante Intuitivo* y *Vector Vulnerable*.

### B. Generación de Assets y Recursos Gráficos
- Se generaron y ubicaron en `public/` los recursos visuales y assets para los reactivos (ej. `q5_sneakers`, `q6_arrest`, `q7_press`, `q9_influencer`, `q11_bias`, `q12_autopilot`, `q13_crossroad`, `q14_echo`, `q15_ethics`).

### C. Rediseño de Arquitectura de Interfaz UI/UX
- **Estructura en 3 tercios verticales:**
  - Tercio Superior: Header con logotipo escalable `cuzca check`, indicador de perfil y barra de progreso.
  - Tercio Medio: Lienzo interactivo principal (Onboarding / Cartas de juego).
  - Tercio Inferior: Controles de acción, botones de auditoría y feedback visual.
- **Identidad de Marca y Tokens:**
  - Fondo Crema Canvas: `#FBF9F5` (`var(--bg-crema)`)
  - Texto Negro Carbón Neutro: `#111111` (`var(--text-main)`)
  - Línea divisoria y bordes de acento: Rojo Alerta `#CA3606`
  - Botones y acciones primarias: Naranja Kuska `#DE711E`

### D. Rediseño Total del Flujo de Onboarding (`OnboardingFlow.jsx`)
- **Paso 1 (Hook / PandemIA):**
  - Icono del bichito (`<Bug />`) con animación suave continua (respiración, sutil balanceo e inclinación en bucle).
  - Titular: *PandemIA*.
  - Copy descriptivo: *"¿SOBREVIVIRÁS? Tus defensas cognitivas están a prueba."*
  - Botón CTA: *"EVALUAR MIS DEFENSAS"* con animación de pulso y resplandor continuo (*glow* naranja).
- **Paso 2 (Hábitos):** Selección de fuente de consumo de noticias (Redes, Mensajería, Tradicional).
- **Paso 3 (Confianza):** Autoevaluación de detección de estafas (Experto, Promedio, Vulnerable).
- **Paso 4 (Calibrando):** Radar circular rotatorio con efecto visual de escaneo.
- **Paso 5 (StepTutorial / "Entrena tu Instinto"):**
  - Implementado como **Bento Grid** responsivo de alta gama:
    - Bloque 1: *Radar (Swipe)* con escudo de alerta.
    - Bloque 2: *Lab Forense (Lupa)* con lupa azul tech.
    - Bloque 3: *Cuarentena Ética* con matriz amarilla.
  - Botón fijo *"INICIAR AUDITORÍA"* en negro carbón institucional.

---

## 3. ESTADO ACTUAL DEL CÓDIGO

- **Archivos Clave Modificados y Verificados:**
  - [`src/fase1-check/components/Onboarding/OnboardingFlow.jsx`](file:///home/laptop/Documentos/kuzka-lab-unesco/src/fase1-check/components/Onboarding/OnboardingFlow.jsx)
  - [`src/fase1-check/views/KuskaCheckView.jsx`](file:///home/laptop/Documentos/kuzka-lab-unesco/src/fase1-check/views/KuskaCheckView.jsx)
  - [`src/fase1-check/layouts/KuskaCheckLayout.jsx`](file:///home/laptop/Documentos/kuzka-lab-unesco/src/fase1-check/layouts/KuskaCheckLayout.jsx)
  - [`src/shared/design-system.css`](file:///home/laptop/Documentos/kuzka-lab-unesco/src/shared/design-system.css)
  - [`docs/manual_psicometrico_kuska.md`](file:///home/laptop/Documentos/kuzka-lab-unesco/docs/manual_psicometrico_kuska.md)
  - [`docs/design.md`](file:///home/laptop/Documentos/kuzka-lab-unesco/docs/design.md)
- **Estado de Git:**
  - Rama: `feature/shared-design-system`
  - Estado del árbol: Limpio (*working tree clean*).

---

## 4. GUÍA PARA EL AGENTE: CÓMO PROCEDER A CONTINUACIÓN

Cualquier agente que retome el trabajo debe seguir estos pasos en orden:

1. **Transición Onboarding ➔ Juego Activo:**
   - El botón `INICIAR AUDITORÍA` en `OnboardingFlow.jsx` invoca `onComplete`.
   - Asegurar que `KuskaCheckView.jsx` maneje el cambio de estado de `onboarding` a `playing` sin parpadeos.
2. **Carga y Ejecución de las 15 Preguntas:**
   - Cargar las 15 preguntas psicométricas desde [`docs/manual_psicometrico_kuska.md`](file:///home/laptop/Documentos/kuzka-lab-unesco/docs/manual_psicometrico_kuska.md) en el archivo de datos [`src/fase1-check/data/mock_questions.js`](file:///home/laptop/Documentos/kuzka-lab-unesco/src/fase1-check/data/mock_questions.js).
   - Renderizar el componente correspondiente según el tipo de carta (`SwipeCard`, `LupaCard`, `MatrixCard`).
3. **Puntuación y Diagnóstico:**
   - Acumular las respuestas del usuario y calcular los puntajes en los 3 ejes (Verificación, Sesgo, Seguridad).
   - Renderizar la pantalla de resultados con el arquetipo asignado y el botón para exportar o pasar a la siguiente fase (Kuzka Kit).
