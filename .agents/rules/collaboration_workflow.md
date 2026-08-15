---
description: Reglas y protocolos para la distribución de trabajo colaborativo en equipo mediante ramas de Git.
---

# GUÍA DE COLABORACIÓN Y ESTRATEGIA DE RAMAS (GIT WORKFLOW)

Este proyecto está diseñado para desarrollarse de manera colaborativa y distribuida entre dos o más desarrolladores en equipos independientes. Para garantizar una integración limpia, prevenir conflictos de fusión (*merge conflicts*) y mantener un flujo continuo, se debe seguir estrictamente esta directiva.

---

## 1. ESTRUCTURA DE RAMAS (BRANCHING STRATEGY)

```
[main]          ◄── Rama de producción / entrega oficial a UNESCO (Protegida)
  ▲
  │ (Pull Request de release)
  │
[dev]           ◄── Rama principal de integración y desarrollo continuo
  ▲
  ├── [feature/shared-design-system]   ◄── Tokens CSS globales, componentes base UI
  ├── [feature/fase1-kuzkacheck]       ◄── Desarrollador A: Web-App Swipe, Radar, Quiz Engine
  ├── [feature/fase2-kuzkakit]         ◄── Desarrollador B: Decks, Crypto-Grid UI, Blueprint
  └── [feature/fase3-kuzkipet]         ◄── Desarrollador A/B: Tamagotchi Avatar, Sandbox, Dashboard
```

### Roles de las Ramas:
1. **`main`**: Código estable y verificado. Solo se actualiza al finalizar hitos mediante Pull Requests desde `dev`.
2. **`dev`**: Rama madre para todo el desarrollo activo. Todos los colaboradores sincronizan y envían sus cambios aquí.
3. **`feature/<modulo>`**: Ramas de trabajo individual por cada desarrollador. Ningún desarrollador trabaja directamente en `dev` o `main`.

---

## 2. ASIGNACIÓN Y DISTRIBUCIÓN DEL TRABAJO

Para evitar colisiones en los mismos archivos:

* **Desarrollador 1 (Lead Frontend / Fase 1 & 3):**
  * **Rama:** `feature/fase1-kuzkacheck` y `feature/fase3-kuzkipet`
  * **Archivos/Directorios exclusivos:** `src/fase1-check/`, `src/fase3-pet/`
  * **Responsabilidad:** Motor de Swipe táctil, temporizador circular radar, arquetipos minimalistas, Tamagotchi avatar, dashboard de estadísticas y sliders sandbox.

* **Desarrollador 2 (Co-Developer / Fase 2 & Asset Pipeline):**
  * **Rama:** `feature/fase2-kuzkakit`
  * **Archivos/Directorios exclusivos:** `src/fase2-kit/`, `public/assets/decks/`, `public/assets/blueprint/`
  * **Responsabilidad:** Visor de cartas y barajas figitales, simulación interactiva de Crypto-Grid (alineación vectorial), maquetación del tablero Blueprint en malla azul (`#2058CC`), integración de QR esquina.

* **Módulo Compartido (Design System):**
  * **Rama:** `feature/shared-design-system`
  * **Archivos/Directorios:** `src/shared/` (variables CSS, tokens, fuentes `Gill Sans MT Ext Condensed Bold` y `Montserrat`).
  * **Regla:** Cualquier cambio a variables o colores globales se aprueba entre ambos miembros antes de hacer *merge*.

---

## 3. PROTOCOLO DE CONVENCION DE COMMITS

Cada commit debe seguir el formato estándar de **Conventional Commits**:

```bash
feat(fase1): agregar animacion glitch rojo en swipe incorrecto
feat(fase2): implementar alineacion vectorial de crypto-grid
fix(ui): corregir contraste de texto negro carbon en tarjetas
docs(design): actualizar tokens de color en design.md
```

Prefijos permitidos: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`.

---

## 4. RUTINA DIARIA DE SINCRONIZACIÓN (STEP-BY-STEP)

### A. Al iniciar la jornada laboral:
```bash
# 1. Posicionarse en dev y traer los últimos cambios del compañero
git checkout dev
git pull origin dev

# 2. Ir a tu rama de trabajo y rebasar con dev
git checkout feature/fase1-kuzkacheck
git rebase dev
```

### B. Al finalizar una tarea o función:
```bash
# 1. Añadir y guardar tus cambios
git add .
git commit -m "feat(fase1): implementar temporizador circular radar amarillo"

# 2. Subir tu rama a GitHub
git push origin feature/fase1-kuzkacheck
```

### C. Para integrar tu trabajo en `dev` (Pull Request):
1. Abrir un **Pull Request (PR)** en GitHub de `feature/fase1-kuzkacheck` hacia `dev`.
2. Notificar al compañero para revisión.
3. Tras la aprobación, realizar el **Merge** en GitHub.
