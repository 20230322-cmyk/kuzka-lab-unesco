# REGLAS Y DIRECTIVAS DE AGENTE (KUZKA LAB)

Bienvenido al repositorio oficial de **KUZKA LAB** para el **UNESCO Youth Hackathon 2026**.

## 0. CONTEXTO Y ESTADO DE SESIÓN ANTERIOR
- Para conocer todo lo avanzado en las sesiones previas, estado exacto de commits, componentes completados y hoja de ruta inmediata, lee obligatoriamente:
  👉 [`.agents/HISTORIAL_SESION.md`](file:///home/laptop/Documentos/kuzka-lab-unesco/.agents/HISTORIAL_SESION.md)

## 1. REGLAS FUNDAMENTALES DE DESARROLLO
1. **Estricta Adherencia al Sistema de Diseño (`design.md`):**
   - **FONDO:** Blanco Hueso / Crema (`#FBF9F5`).
   - **TEXTO:** Negro Carbón Neutro (`#111111`). NADA DE TONOS MARRONES.
   - **COLORES DE ACCIÓN:** Naranja (`#DE711E`), Rojo Cereza Oscuro (`#CA3606`), Amarillo Claro (`#E7CE7B`), Azul Tech (`#1D6CFF`), Azul Oscuro (`#2058CC`).
   - **TIPOGRAFÍA:** Logotipos y títulos principales en `Gill Sans MT Ext Condensed Bold`. Cuerpo, UI y botones en `Montserrat`.

2. **Arquitectura Modular por Fases:**
   - La base de código debe estar rigurosamente aislada por módulos para facilitar el trabajo colaborativo en paralelo entre desarrolladores:
     - `src/shared/`: Tokens CSS, estilos globales y componentes comunes.
     - `src/fase1-check/`: Lógica y componentes de KUZKA CHECK (Swipe engine, radar, arquetipos).
     - `src/fase2-kit/`: Lógica y componentes de KUZKA KIT (Crypto-Grid UI, Decks, Blueprint viewer).
     - `src/fase3-pet/`: Lógica y componentes de KUZK!PET (Tamagotchi avatar, Sandbox feed simulator, Dashboard).

3. **Flujo de Trabajo Git Obligatorio:**
   - Queda estrictamente prohibido hacer commits directos en la rama `main` o `master`.
   - Todo trabajo se realiza en ramas de características (`feature/...`) partiendo de `dev`.
   - Consultar `COLLABORATION.md` y `.agents/rules/collaboration_workflow.md` para el protocolo completo.

4. **Integración con NotebookLM MCP:**
   - El proyecto cuenta con acceso global al servidor MCP `NotebookLM`.
   - Para consultar bases oficiales del hackathon, rúbricas de evaluación o arquitectura STEAM, utiliza las herramientas MCP (`ask_question`, `list_notebooks`, `select_notebook`).
   - Consultar `.agents/rules/notebooklm_integration.md` para los IDs de los cuadernos disponibles.
