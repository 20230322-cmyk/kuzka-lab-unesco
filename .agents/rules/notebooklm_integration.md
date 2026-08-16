# Integración MCP de NotebookLM para KUZKA LAB

Este proyecto cuenta con acceso directo al servidor MCP global **NotebookLM**, respaldado por una sesión persistente sin expiración.

## Cuadernos Registrados para KUZKA LAB / UNESCO
El agente puede consultar los siguientes cuadernos utilizando las herramientas MCP (`call_mcp_tool` en el servidor `NotebookLM`):

1. **Bases y Criterios del Concurso:**
   - **ID:** `concurso-bases-de-la-hackathon`
   - **Nombre:** `[CONCURSO] Bases de la Hackathon en Tecnologías Digitales 2026`
   - **Uso:** Consultar requisitos oficiales, rúbricas de evaluación del Hackathon UNESCO y especificaciones técnicas.

2. **Plataforma Educativa STEAM e IA:**
   - **ID:** `web-il-plataforma-educativa-st`
   - **Nombre:** `[web-IL] Plataforma educativa STEAM con IA`
   - **Uso:** Consultar lineamientos pedagógicos, arquitectura STEAM y flujos de aprendizaje adaptativo.

## Herramientas MCP Disponibles
- **`ask_question`**: Realiza consultas RAG fundamentadas en las fuentes del cuaderno seleccionado.
  - Parámetros: `question` (string), `notebook_id` (opcional).
- **`list_notebooks`**: Lista todos los cuadernos disponibles en la biblioteca local.
- **`select_notebook`**: Fija el cuaderno activo por defecto para consultas posteriores.
- **`add_source`**: Agrega nuevos documentos, textos o URLs al cuaderno.
