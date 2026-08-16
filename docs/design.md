# KUZKA LAB — DESIGN SYSTEM & MASTER SPECIFICATION (design.md)
**Ecosistema Figital de Inmunización Cognitiva y Alfabetización Activa contra la "PandemIA"**
*Propuesta Estratégica y Sistema de Diseño UX/UI alineado para el UNESCO Youth Hackathon 2026*

---

## 1. ALINEACIÓN ESTRATÉGICA UNESCO 2026

* **Desafío Principal:** *AI and Media Information Literacy (MIL)*
* **Lema de la Convocatoria:** *“Play Your Part: Youth Designing the Future of Media and Information Literacy”*
* **Propósito Central:** Contener la propagación de desinformación sintética, estafas virtuales y manipulaciones algorítmicas mediante un modelo de **Inoculación Cognitiva Preventiva (Prebunking)** y **Entrenamiento Socrático**, transformando a los usuarios en agentes activos e inmunes.
* **Estilo Visual Dominante:** **Cozy-Minimalist** (cálido, analógico, no alarmista, lúdico pero de alta sofisticación editorial, evitando el "cringe" juvenil e infantil, utilizando exclusivamente contrastes puros en negro y blanco hueso).

---

## 2. IDENTIDAD DE MARCA GLOBAL (LA ESENCIA DE KUZKA LAB)

### 2.1. Valores Fundamentales y Esencia Visual
Para garantizar que todos los recursos gráficos y componentes de UI transmitan el mensaje correcto, KUZKA LAB se rige bajo los siguientes pilares de diseño:
* **Family-Friendly & Empático:** El diseño debe ser acogedor para todas las edades. Evitamos la estética corporativa aburrida o la estética "hacker oscura" intimidante.
* **Integridad Institucional:** Aunque es lúdico, nunca pierde la seriedad de su misión (alfabetización mediática). Representa la verdad, la transparencia y la educación.
* **Moderno y "Eye-Friendly":** Interfaces limpias, tipografías amplias y espacios de respiración masivos. El diseño debe descansar la vista, no sobrecargarla.
* **Frescura y Calidez Cromática:** Los colores base (Blanco Hueso) y los acentos (Naranja, Amarillo) irradian calidez, calma y esperanza, contrarrestando la ansiedad de la desinformación.
* **Pureza de Forma (Cero Outlines):** Los elementos UI (botones, tarjetas, íconos) se construyen con colores enteros (Flat Design sólido). **Queda estrictamente prohibido el uso de outlines o bordes negros duros** que rompan la frescura o den un aspecto de "cómic" o brutalismo pesado.

### 2.2. Naming y Arquitectura de Marca
El ecosistema evoluciona bajo la marca maestra **KUZKA** (con "Z"), manteniendo la raíz conceptual quechua *"Juntos"*. La marca proyecta unión intergeneracional y empoderamiento comunitario.

* **Marca Paraguas:** `KUZKA LAB`
* **Fase 1 (Evaluación Diagnóstica):** `KUSKA TEST / CHECK`
* **Fase 2 (Botiquín Figital / Decks):** `KUZKA KIT`
* **Fase 3 (Tamagotchi de Inmunidad):** `KUZK! PET` (reemplazo rupturista de la 'A' por '!').

### 2.2. Paleta de Colores Oficial (Color Tokens Hexadecimales)

La propuesta cromática garantiza un contraste limpio y accesible, sin tonos marrones de ningún tipo:

| Nombre del Color | Código HEX | Rol de Diseño & Sistema de Interacción |
| :--- | :--- | :--- |
| **Blanco Hueso / Crema** | `#FBF9F5` | **Fondo General Canvas / UI Base.** Otorga respiro visual, textura de papel analógico y calma cognitiva. |
| **Negro Carbón Neutro** | `#111111` | **Texto Principal, Tipografía y Grillas.** Máxima legibilidad, contraste puro y limpieza cromática absoluta. |
| **Naranja Éxito Socrático** | `#DE711E` | **Color Primario de Marca, Herramientas y Aciertos.** Transmite energía, curiosidad y amigabilidad. |
| **Rojo Cereza / Terracota** | `#CA3606` | **Alertas, Glitches, Síntomas y Amenazas.** Representa la desinformación, extorsión y virus cognitivos. |
| **Amarillo Claro** | `#E7CE7B` | **Acentos Secundarios, Temporizador Radar y Estado Inmune.** Luz de atención socrática. |
| **Azul Tech Web-App** | `#1D6CFF` | **Enlace Tecnológico, Respuestas Correctas Swipe y Lupa de Alerta.** Mantiene el toque digital. |
| **Azul Oscuro Analítico** | `#2058CC` | **Chips NFC, Discernimiento Forense y Fondo del Blueprint.** Solidez y precisión técnica. |

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ PALETA DE COLORES OFICIAL - KUZKA LAB (SIN MARRÓN)                           │
├──────────────┬──────────────┬──────────────┬──────────────┬─────────────────┤
│ `#FBF9F5`    │ `#111111`    │ `#DE711E`    │ `#CA3606`    │ `#1D6CFF`       │
│ Blanco Hueso │ Negro Carbón │ Naranja      │ Rojo Cereza  │ Azul Tech       │
└──────────────┴──────────────┴──────────────┴──────────────┴─────────────────┘
```

### 2.3. Tipografía Corporativa y Jerarquía

1. **Logotipo y Títulos de Gran Jerarquía (H1, Banners, Portadas):**
   * **Tipografía:** `Gill Sans MT Ext Condensed Bold` (Sans-serif condensada, alargada y altamente estructurada).
   * **Uso:** Exclusivo para el monograma KUZKA, encabezados de fase y portadas de decks.
2. **Textos Explicativos, Cartas, UI, Botones y Lectura (H2, H3, Body, Microcopy):**
   * **Familia Tipográfica:** `Montserrat` (Google Fonts).
   * **Variantes:**
     * `Montserrat Bold` (700): Títulos de tarjetas, métricas clave, botones primarios.
     * `Montserrat Medium` (500): Subtítulos, descripciones de herramientas y etiquetas de UI.
     * `Montserrat Regular` (400): Texto de cartas de lectura en Negro Carbón (`#111111`), explicaciones socráticas y cuerpo general.

### 2.4. Isotipo y Elementos Dinámicos (Nodos de Red)
* **Isotipo Unificado:** Construido con la 'K' geométrica del logotipo central.
* **Nodos de Red Comunitarios:** Puntos circulares flotantes en la UI y piezas gráficas impresas en los colores de la paleta (`#DE711E`, `#CA3606`, `#E7CE7B`, `#1D6CFF`). Representan la conexión intergeneracional, los *Booster Shots* y el flujo del ecosistema figital.

---

## 3. FASE 1: KUZKACHECK (EVALUACIÓN DIAGNÓSTICA / RADAR DE INSTINTO)

### 3.1. Identidad Gráfica y Eslogan
* **Logotipo:** Marca `KUZKA` con el distintivo `CHECK` acoplado en menor escala en la parte derecha.
* **Slogan Integrado:** *"¿SOBREVIVIRÍAS LA PANDEMIA?"* (Gancho visual de provocación socrática).

### 3.2. Interfaz Táctil Web-App (Mecánica Swipe)
* **Formato:** Web-App responsiva de carga instantánea sin registro obligatorio.
* **Temporizador Circular de Radar:** Reloj analógico minimalista en color Amarillo Claro (`#E7CE7B`) que realiza un barrido giratorio simulando un sonar de auditoría de instinto.
* **Micro-animaciones de Feedback:**
  * **Deslizamiento Incorrecto (Caída en la trampa desinformativa):** Sutil *glitch* visual con resplandor en Rojo Cereza Oscuro (`#CA3606`) en los bordes de la tarjeta, acompañado de una vibración háptica corta.
  * **Deslizamiento Correcto (Filtro socrático superado):** Iluminación perimetral en Azul Tech (`#1D6CFF`) con transición fluida de salida hacia la siguiente pregunta.

### 3.3. Representación Visual de Arquetipos (Sin "Cringe" Infantil)
Al finalizar el test de 5 situaciones, la pantalla de resultados no usa personajes caricaturescos, sino tótems minimalistas y elegantes sobre fondo Blanco Hueso (`#FBF9F5`) con trazo en Negro Carbón (`#111111`):

```
┌─────────────────────────┬─────────────────────────┬─────────────────────────┐
│     TERMÓMETRO ROJO     │        LUPA AZUL        │   MASCARILLA AMARILLA   │
│        `#CA3606`        │        `#1D6CFF`        │        `#E7CE7B`        │
│  ARQUETIPO VULNERABLE   │   ARQUETIPO EN ALERTA   │    ARQUETIPO INMUNE     │
│  Requiere dosis urgente │   Discernimiento activo │   Guardián comunitario  │
└─────────────────────────┴─────────────────────────┴─────────────────────────┘
```

### 3.4. Maquetación Tarjeta Multimedia e Íconos por Formato
Las tarjetas digitales de evaluación presentan el estímulo según su naturaleza con un ícono identificador en la esquina superior izquierda:
* **Audio Sintético / Clonación de Voz:** Oscilograma de onda de audio interactivo en Naranja (`#DE711E`) sobre fondo blanco, con botón táctil de reproducción (Play/Pause). *Ícono:* Onda sonora.
* **Imagen Sintética / Deepfake:** Previsualización limpia y automática con zoom táctil. *Ícono:* Cuadro fotográfico.
* **Mensaje de Phishing / WhatsApp:** Globo de diálogo realista. *Ícono:* Globos de chat.
* **Noticia Falsa / Fake News:** Formato de encabezado de periódico. *Ícono:* Periódico minimalista.
* **Duda Socrática / Triaje:** *Íconos:* Portapapeles de diagnóstico y signos de interrogación.

---

## 4. FASE 2: KUZKAKIT (EL BOTIQUÍN FIGITAL & JUEGO DE DECKS)

### 4.1. Concepto y Empaque
* **Nombre de Fase:** `KUZKA KIT`
* **Packaging:** Caja contenedora rígida diseñada como un **Mini-Botiquín Editorial Coleccionable** (tamaño compacto para decks A5). Transmite la sensación de un kit de primeros auxilios científicos que las escuelas y juntas vecinales exhiben con orgullo.

### 4.2. Iconografía de las Barajas (Centro de Cartas)
Las 3 barajas de cartas se identifican al instante por íconos centrales abstractos:

1. **Baraja de Síntomas (Amenazas - Color Cereza Oscuro `#CA3606`):**
   * **Ícono Central:** Germen / Virus minimalista.
   * **Contenido:** Deepfakes, clones de voz, phishing financiero, sesgos de confirmación.
2. **Baraja de Herramientas (Pausas Cognitivas - Color Naranja `#DE711E`):**
   * **Ícono Central:** 3 Pastillas / Píldoras socráticas.
   * **Contenido:** Verificación lateral, análisis C2PA, búsqueda inversa, pausa respiratoria.
3. **Baraja de Acciones & Roles (Alfabetización Activa - Blanco Hueso `#FBF9F5` con texto Negro Carbón `#111111`):**
   * **Ícono Central:** Dos curitas / tiritas cruzadas.
   * **Contenido:** Creación ética, reporte comunitario, no revictimización.

* Iconografía médica complementaria en la guía: Maletín de primeros auxilios, estetoscopio, microscopio, laptop y mano con signos positivos.

### 4.3. El Crypto-Grid (Cripto-Retícula de Encaje Vectorial)
En los bordes lateral izquierdo y derecho de cada tarjeta física hay impresos patrones de líneas paralelas y laberintos vectoriales geométricos en Negro Carbón (`#111111`). 
* **Mecánica Física:** Al colocar sobre la mesa la secuencia exacta de **Síntoma ➔ Herramienta ➔ Acción**, las líneas geométricas se alinean milimétricamente entre las tres cartas, formando un circuito fluido que valida físicamente el acierto sin requerir pantallas.

```
Carta Síntoma          Carta Herramienta       Carta Acción
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│ [Germen]     │     │ [3 Pastillas]│     │ [Curitas]    │
│              │═ ═ ═│              │═ ═ ═│              │ ◄── Crypto-Grid
│ `#CA3606`    │     │ `#DE711E`    │     │ `#FBF9F5`    │     (Líneas alineadas)
└──────────────┘     └──────────────┘     └──────────────┘
```

### 4.4. Blueprint Desplegable (Tablero Kraft de 4 Laboratorios)
* **Estética:** Impresión tipo plano técnico/arquitectónico sobre fondo **Azul Oscuro (`#2058CC`)** con tipografía blanca minimalista y una **cuadrícula/malla blanca** de fondo.
* **Cuadrantes de Operación:**
  1. `PROMPT LAB`: Arquitectura de prompting socrático.
  2. `FORENSE LAB`: Verificación C2PA e inconsistencias físicas en IA.
  3. `PRIVACIDAD LAB`: Seguridad de datos personales y Zero-Data.
  4. `CREATOR LAB`: Ética de contenidos digitales y libertad de expresión.

### 4.5. Integración Discreta de Códigos QR
Los códigos QR coleccionables se ubican en una **esquina inferior pequeña** de las cartas de Acción, enmarcados dentro de un patrón decorativo geométrico/isotipo. Esto permite el escaneo inmediato con el smartphone para activar recursos multimedia sin romper la limpieza editorial del naipe.

---

## 5. FASE 3: KUZK!PET (EL TAMAGOTCHI DE INMUNIDAD & DASHBOARD)

### 5.1. Identidad Gráfica y Mascota
* **Nombre de Fase:** `KUZK! PET` (reemplazo de la 'A' por '!' para aportar dinamicidad emocional).
* **Personaje / Avatar:** Mini avatar humanoide (hombre/mujer) personalizable con estética limpia inspirada en la amigabilidad de Duolingo, pero manteniendo el rigor visual Cozy-Minimalist. Expresa tranquilidad y estados de ánimo con sobriedad.

### 5.2. Morfología Dinámica & Estado "Infoxicado"
Cuando la dieta informativa del usuario empeora en el feed simulado:
* **Estado Inmune / Saludable:** Geometría suave, posturas relajadas y acentos en Naranja (`#DE711E`) y Amarillo (`#E7CE7B`).
* **Estado Infoxicado (Glitch Visual):** El personaje y la interfaz generan líneas dentadas, estática analógica en color **Rojo Cereza Oscuro (`#CA3606`)** y una sutil fragmentación geométrica en pantalla.

```
┌────────────────────────────────────────────────────────┐
│ KUZK!PET DASHBOARD                                     │
├────────────────────────────────────────────────────────┤
│ AVATAR HUMANOIDE        MÉTRICAS CLAVE (LINEAL)        │
│                         Pensamiento Crítico            │
│   ┌────────┐            [████████████████░░] 85%       │
│   │ ( ◡‿◡ )│            Estrés Cognitivo               │
│   │  /█\   │            [████░░░░░░░░░░░░░░] 20%       │
│   └────────┘            Integridad de Creación         │
│                         [██████████████░░░░] 72%       │
└─────────────────────────┴──────────────────────────────┘
```

### 5.3. Dashboard de Estadísticas UI/UX
* **Estilo:** Fondo Blanco Hueso (`#FBF9F5`) ultralimpio con tipografía y grillas en Negro Carbón (`#111111`).
* **Visualización:** Barras de progreso lineales horizontales de alta legibilidad con tipografía `Montserrat Bold` para porcentajes.
* **Métricas:**
  1. *Pensamiento Crítico* (Naranja `#DE711E`)
  2. *Estrés Cognitivo* (Rojo Cereza `#CA3606`)
  3. *Integridad de Creación* (Azul Tech `#1D6CFF`)

### 5.4. Sandbox (Simulador Algorítmico de Feed)
* **Interfaz:** Fondo blanco pulcro con texto en Negro Carbón (`#111111`) y color limitado exclusivamente a los elementos interactivos y botones de acción según la paleta oficial.
* **Deslizadores Táctiles (Sliders):** Controlan en tiempo real las 4 variables de la dieta informativa:
  * *Sensacionalismo*
  * *Lectura Lateral*
  * *Filtros Burbuja*
  * *Indignación*

---

## 6. RESUMEN DE COMPONENTES FRONTEND PARA DESARROLLO

Para la construcción de la Web-App en HTML/CSS/JS o React/Vite:

```css
/* TOKENS DE DISEÑO KUZKA LAB (SIN MARRÓN) */
:root {
  --bg-crema: #FBF9F5;
  --text-main: #111111; /* Negro Carbón Neutro Puro */
  --naranja-exito: #DE711E;
  --rojo-alerta: #CA3606;
  --amarillo-radar: #E7CE7B;
  --azul-tech: #1D6CFF;
  --azul-blueprint: #2058CC;
  
  --font-logo: 'Gill Sans MT Ext Condensed Bold', 'Arial Narrow', sans-serif;
  --font-body: 'Montserrat', sans-serif;
}
```

---

*Este documento `design.md` constituye la guía maestra visual e interactiva para el desarrollo del MVP de KUZKA LAB en el UNESCO Youth Hackathon 2026.*
