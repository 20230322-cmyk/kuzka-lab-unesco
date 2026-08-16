# HISTORIAL Y ESTADO DE SESIÓN (KUZKA LAB)

> **Documento de Contexto de Proyecto para Agentes de Antigravity**  
> **Última actualización:** 16 de Agosto, 2026  
> **Proyecto:** KUZKA LAB — UNESCO Youth Hackathon 2026  
> **Rama de trabajo activa:** `feature/shared-design-system`  

---

## 1. RESUMEN EJECUTIVO DEL PROYECTO

- **Competencia:** UNESCO Youth Hackathon 2026 (Global Innovation and Scholarship).
- **Propósito:** Plataforma lúdica e interactiva de inmunidad cognitiva contra la desinformación y el sesgo algorítmico, integrando dinámicas STEAM.
- **Cuaderno NotebookLM MCP vinculado:**
  - Nombre: `UNESCO Youth Hackathon 2026: Global Innovation and Scholarship Guide`
  - URL: https://notebook.google.com/notebook/5548b2d7-abe8-4d40-be44-20080122aaf3 

---

## 2. HISTORIAL DE LO REALIZADO EN ESTA SESIÓN

### A. Creación de la Estación Central (Home Hub)
- Se desarrolló [`src/features/hub/views/HomeHubView.jsx`](file:///home/laptop/Documentos/kuzka-lab-unesco/src/features/hub/views/HomeHubView.jsx) como el portal unificado de bienvenida para visitantes, estudiantes, docentes y familias.
- Incluye:
  - Hero institucional con gancho socrático (*"Inmunidad Cognitiva contra la PandemIA"*).
  - Selector matricial de arquetipos de usuario en la coyuntura peruana (Estudiante Sofía, Universitario Mateo, Adulta Mayor Doña Rosa).
  - Bento Grid con accesos directos a las 3 Fases del Ecosistema (*Kuska Check*, *Kuska Kit*, *Kuzk! Pet*).
  - Vitrina de módulos de extensión (Cursos STEAM, Blog e Investigaciones, Foro Comunitario).

### B. Navbar Global Sólido y Permanente (`Navbar.jsx`)
- Se implementó [`src/shared/components/Navbar.jsx`](file:///home/laptop/Documentos/kuzka-lab-unesco/src/shared/components/Navbar.jsx) y [`src/shared/components/MainLayout.jsx`](file:///home/laptop/Documentos/kuzka-lab-unesco/src/shared/components/MainLayout.jsx).
- Proporciona navegación fija con efecto `backdrop-blur-md`, badges de fase, indicador de ruta activa, botón CTA *"Test de Instinto"* y menú móvil deslizable.

### C. Módulo de Cursos / Academia STEAM (`CoursesView.jsx`)
- 4 módulos estructurados en [`src/features/courses/data/coursesData.js`](file:///home/laptop/Documentos/kuzka-lab-unesco/src/features/courses/data/coursesData.js) y [`src/features/courses/views/CoursesView.jsx`](file:///home/laptop/Documentos/kuzka-lab-unesco/src/features/courses/views/CoursesView.jsx):
  1. *Prompting Socrático & Modelos Generativos*.
  2. *Detección Forense de Deepfakes & Procedencia C2PA*.
  3. *Ciberseguridad Familiar & Protocolo Zero-Data*.
  4. *Ética Digital, Convivencia Escolar & Unidad DPCC*.
- Visor modal de lecciones con seguimiento de progreso y tips socráticos.

### D. Módulo de Blog / Bitácora & Investigaciones (`BlogView.jsx`)
- Artículos educativos en [`src/features/blog/data/blogData.js`](file:///home/laptop/Documentos/kuzka-lab-unesco/src/features/blog/data/blogData.js) y [`src/features/blog/views/BlogView.jsx`](file:///home/laptop/Documentos/kuzka-lab-unesco/src/features/blog/views/BlogView.jsx):
  - Extorsión por clonación de voz en Lima.
  - Comprobantes de pago falsos (Yape/Plin) en Gamarra.
  - La paradoja de la dependencia de la IA.
  - Combate al olvido y Booster Shots (Oxford / Nature Communications).
- Lector modal optimizado y filtrado por categorías/búsqueda.

### E. Módulo de Foro Comunitario (`ForumView.jsx`)
- Espacio cívico en [`src/features/forum/data/forumData.js`](file:///home/laptop/Documentos/kuzka-lab-unesco/src/features/forum/data/forumData.js) y [`src/features/forum/views/ForumView.jsx`](file:///home/laptop/Documentos/kuzka-lab-unesco/src/features/forum/views/ForumView.jsx):
  - Publicación interactiva de alertas ciudadanas.
  - Sistema de votos *"Inmunidad +1"*, respuestas anidadas y etiquetas.

### F. Vistas Interactivas para Fase 2 (Kit) y Fase 3 (Pet)
- **Kuska Kit (`KuskaKitView.jsx`):** Simulador de encaje de la Cripto-Retícula (*Crypto-Grid*) conectando Síntomas, Herramientas y Acciones, y visualizador del Blueprint de los 4 Laboratorios con fondo azul técnico.
- **Kuzk! Pet (`KuzkPetView.jsx`):** Dashboard interactivo con avatar humanoide/geométrico, perillas de dieta informativa algorítmica (Sensacionalismo, Lectura Lateral, Filtros Burbuja, Indignación) y simulador de Booster Shot de 30 segundos.

---

## 3. ENRUTAMIENTO INTEGRAL ACTUAL (`App.jsx`)

| Ruta | Componente | Descripción |
| :--- | :--- | :--- |
| `/` | `<HomeHubView />` | Estación Central / Home |
| `/check` & `/test` | `<KuskaCheckView />` | Fase 1: Kuska Check (Evaluación de Instinto) |
| `/kit` | `<KuskaKitView />` | Fase 2: Kuska Kit (Botiquín Figital & Crypto-Grid) |
| `/pet` | `<KuzkPetView />` | Fase 3: Kuzk! Pet (Simulador Algorítmico) |
| `/cursos` | `<CoursesView />` | Academia STEAM & Módulos |
| `/blog` | `<BlogView />` | Bitácora & Investigaciones |
| `/foro` | `<ForumView />` | Foro Comunitario & Alertas |
