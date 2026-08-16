# CARPETA DE REVISIÓN: ARCHIVOS PROPUESTOS PARA FASE 1 (KUZKA CHECK)

Esta carpeta `cli/` contiene los archivos propuestos para conectar el Onboarding con las 15 preguntas y el diagnóstico psicométrico, disponibles para tu revisión antes de aplicarse al código base principal.

---

## Estructura de Archivos en `cli/`

1. **`cli/fase1-check/KuskaCheckView.jsx`**:
   - Conecta el botón `INICIAR AUDITORÍA` (`handleOnboardingComplete`).
   - Controla el flujo de estados: Onboarding ➔ Transición (Nivel 1) ➔ Preguntas dinámicas 1 a 15 ➔ Pantalla de Diagnóstico.
   - Gestiona el conteo de ítems en el header y el `RadarTimer` en el footer.

2. **`cli/fase1-check/utils/scoring.js`**:
   - Función `calculatePsychometricResult`: calcula el puntaje global (0-15) y el desglose en las 3 dimensiones (*Reflejos*, *Agudeza Forense*, *Discernimiento Ético*).
   - Función `getArchetype`: asigna el arquetipo oficial (*Vulnerable Contagioso*, *Usuario en Autopiloto*, *Auditor Cognitivo*) con sus colores y descripciones.

3. **`cli/fase1-check/components/SwipeCard/SwipeCard.jsx`**:
   - Mecánica de swipe táctil con Framer Motion.
   - Añade botones de apoyo accesibles (`Falso / IA` y `Es Real`) para interacción con ratón.

4. **`cli/fase1-check/components/LupaCard/LupaCard.jsx`**:
   - Mecánica de lupa interactiva (hover/touch) que revela la pista forense sobre la imagen sin bloquear botones.

5. **`cli/fase1-check/components/MatrixCard/MatrixCard.jsx`**:
   - Mecánica de dilema ético con botones de `Mala Práctica` y `Buena Práctica`.

6. **`cli/fase1-check/components/SectionTransition.jsx`**:
   - Transiciones entre niveles con explicación pedagógica, temporizador y botón manual para comenzar inmediatamente.

7. **`cli/fase1-check/components/DiagnosticCard/DiagnosticCard.jsx`**:
   - Pantalla de diagnóstico final con score global, arquetipo, 3 barras de progreso dimensionales y botón hacia KUZKA KIT.

8. **`cli/tests/psychometrics.test.js`**:
   - Suite de 7 pruebas unitarias para validar la integridad de las 15 preguntas y los cálculos psicométricos.
