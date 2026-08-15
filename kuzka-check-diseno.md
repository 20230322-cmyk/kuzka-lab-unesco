# FASE 1: KUSKA CHECK (Radar de Instinto)
## Diseño, Implementación, Evaluación y Sinergia Figital del Simulador de Supervivencia
**Propuesta Técnica Detallada para el UNESCO Youth Hackathon 2026** [645, 794]
**Eje de Desafío Principal:** *AI and Media Information Literacy* [645, 798]
**Lema de la Convocatoria:** *“Play Your Part: Youth Designing the Future of Media and Information Literacy”* [645, 818]

---

## 1. Enfoque Estratégico de Campaña: "The PandemAIc"

La primera fase de **KUSKA Lab** se articula bajo la campaña interactiva **"¿SOBREVIVIRÍAS LA PANDEMIA?"** (en español) y **"CAN YOU CONTAIN THE SPREAD?"** (en inglés), jugando tipográficamente con las siglas **AI** (*Artificial Intelligence*) en todas las piezas gráficas para evocar una epidemia de desorden cognitivo en la era de la inteligencia artificial generativa [288, 704]. 

### A. Psicología de la Inoculación Preventiva (Prebunking)
Tradicionalmente, las iniciativas de alfabetización digital fracasan porque adoptan formatos institucionales paternalistas que dictan al usuario qué creer o lo aburren con glosarios de términos en PDF [288, 646]. **KUSKA Check** rechaza de manera absoluta este enfoque y se fundamenta científicamente en la **Teoría de la Inoculación Psicológica (Prebunking)**, desarrollada por investigadores de la Universidad de Cambridge [288, 677, 745]. 

El juego funciona como una **"vacuna cognitiva"** [677, 725, 745]:
1.  **Exposición Preventiva:** En lugar de reaccionar después de que el usuario ha sido engañado (debunking reactivo), la web-app lo expone a dosis atenuadas y controladas de manipulación técnica en un entorno simulado de bajo riesgo [677, 724, 745].
2.  **Refutación Preventiva:** Al interactuar con el estímulo, el usuario deconstruye activamente la lógica detrás de la mentira (la urgencia artificial, la inconsistencia física o el sesgo de indignación), generando "anticuerpos cognitivos" que bloquean la persuasión e interrumpen el reenvío compulsivo en sus redes reales [677, 745].
3.  **Romper la Apatía sin Cringe:** Al presentarse como un reto lúdico de agudeza visual y "ego" (*"¿Qué tan resistente eres al virus de la IA?"*), se anula la resistencia cognitiva inicial (*reactance*) y se fomenta una participación orgánica, voluntaria y adictiva [288, 648, 704].

---

## 2. Modo de Implementación: Captación sin Fricción y Nudging

El onboarding de KUSKA Check está diseñado bajo el principio de **bajísimo esfuerzo de entrada** [289, 484]. No obliga al usuario a descargar aplicaciones pesadas de tiendas oficiales ni a rellenar formularios aburridos de registro, lo que garantiza una participación masiva y democrática [289, 705, 841]. La captación utiliza tácticas de **Marketing de Guerrilla** e intervenciones en el entorno de **micro-ocio cotidiano** de los estudiantes y vecinos en Lima Metropolitana [289, 705].

```
                     [ PUNTOS DE CAPTACIÓN EN ENTORNO REAL ]
    ┌──────────────────────────────┼──────────────────────────────┐
    ▼                              ▼                              ▼
[ Mangas de Café ]         [ Acertijos Urbanos ]         [ El "Aura Test" ]
Cafeterías universitarias    Paraderos de transporte      Historias y trends
(ULima, PUCP, UPC)           público de Lima             con micro-influencers
    │                              │                              │
    └──────────────────────────────┼──────────────────────────────┘
                                   ▼
                       [ ESCANEO DE CÓDIGO QR ]
                                   │
                                   ▼
                    [ WEB-APP ULTRA LIGERA RESPONSIVA ]
                  (Cero descargas, inicio instantáneo)
```

### A. Mangas de Café Fisiológicas (Entorno Universitario)
Mediante alianzas estratégicas con cafeterías locales situadas en los alrededores de campus universitarios e institutos de Lima (como la Universidad de Lima, PUCP, UPC), se distribuyen protectores térmicos de cartón para vasos de café impresos en marrón chocolate con un diseño minimalista [289, 705]:
> *"Antes de tu primer sorbo: ¿sobrevivirías la pandemIA? Escanea para probar tu instinto en 10 segundos".* [289, 705]
El código QR grabado en el cartón actúa como el puente de entrada instantáneo mientras el estudiante espera su clase o toma su bebida [289, 705].

### B. Acertijos Visuales Urbanos (Entorno Urbano)
Afiches minimalistas colocados en paraderos del transporte público (Metropolitano, Corredores viales) y pizarras informativas escolares de Lima Metropolitana [289, 705]. Los afiches muestran dos imágenes idénticas lado a lado con la frase [289, 705]:
> *"Una de estas imágenes es una estafa generada por IA. El 80% de tu campus falla. Escanea y haz tu elección".* [289, 705]
Apela directamente al instinto de competencia y al ego del transeúnte que busca matar el tiempo de espera [289, 705].

### C. The "Aura Test" en Redes (Entorno Digital)
En colaboración con jóvenes universitarios y creadores de contenido educativo peruanos, se lanzan filtros de realidad aumentada en Instagram y TikTok [289, 705]. Los creadores suben videos cortos interactuando con el filtro y retando a sus audiencias: *"Hice el test de instinto de KUSKA y me salió que mi Aura Digital es 'Navegante Vulnerable'. A ver quién del salón me supera"* [289, 705]. Esto genera viralidad orgánica impulsando a los jóvenes a compartir sus resultados en sus historias de redes sociales [289, 705].

---

## 3. Arquitectura de Interfaz y Diseño UI/UX

La interfaz de la web-app de KUSKA Check está diseñada para ser ultra ligera, de carga instantánea (desarrollada como Progressive Web App - PWA) y con un alto nivel de refinamiento visual [290, 706].

### A. La Psicología del Color "Cozy-Minimalist"
El entorno visual rechaza las pantallas de alerta estresantes o de estética corporativa fría [290, 702]. Adopta una paleta terrosa, cálida y acogedora que invita a la pausa reflexiva [290, 702]:
*   **Blanco Hueso (Fondos):** Simula la textura del papel Kraft o del papel texturado de alto gramaje, dando aire y sofisticación visual [290, 702].
*   **Marrón Chocolate (Textos y Grillas):** Sustituye al negro puro para suavizar la lectura y estructurar menús legibles y tipografías limpias [290, 702].
*   **Color Miel (Interacciones Positivas):** Reservado para botones de acción positiva, aciertos táctiles y el radar de barrido circular [290, 702].
*   **Cereza Oscuro (Alertas y Glitches):** Exclusivo para advertencias, fallos visuales de IA, elementos desinformantes y cartas de Síntoma [290, 702].

### B. Dinámica de Interacción: Swipe Táctil sin Sobrecarga Cognitiva
Al escanear el QR, la pantalla muestra un mensaje de inicio limpio blanco hueso con un temporizador circular color miel que imita el barrido de un radar analógico de barrido, añadiendo dinamismo sin generar estrés cognitivo [290]. El usuario se enfrenta a **5 pruebas rápidas de interacción táctil (estilo Tinder Swipe)** [290, 706]:
*   **Deslizar a la Derecha (Real / Seguro):** Si el usuario determina que el estímulo es verídico o que la conducta representada es segura [290, 706].
*   **Deslizar a la Izquierda (Falso / IA / Inseguro):** Si el usuario detecta una anomalía generada por IA, phishing, fraude comercial o una conducta insegura [290, 706].
La interfaz es sumamente limpia: muestra únicamente la tarjeta central con el estímulo (imagen, texto o reproductor de audio con metadatos), una barra superior de progreso (1 a 5) y el radar temporizador circular [290].

---

## 4. Contenido de la Evaluación: Las 5 Preguntas de Inoculación

Las 5 pruebas del test están estrictamente contextualizadas en la coyuntura del Perú actual y evalúan de manera integral la capacidad de discernimiento de contenidos sintéticos, la ciberseguridad práctica y el uso ético y productivo de asistentes de IA [291, 634, 706].

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│ KUSKA CHECK (Radar de Instinto) - 5 Casos de la Coyuntura Peruana                │
├──────────────────────────────────────────────────────────────────────────────────┤
│ Caso 1: Chat de Redacción (Uso de IA / Privacidad "Zero-Data")                   │
│         ➔ Evalúa si el usuario filtra datos confidenciales (DNI, nombres) en LLMs │
├──────────────────────────────────────────────────────────────────────────────────┤
│ Caso 2: Captura de Plin/Yape (Imagen / Fraude de Consumo en Gamarra)            │
│         ➔ Evalúa si sabe verificar mediante saldo real en la app de banca móvil  │
├──────────────────────────────────────────────────────────────────────────────────┤
│ Caso 3: SMS de la "Facultad" (Texto / Enlace sospechoso - Phishing)            │
│         ➔ Evalúa detección de dominios sospechosos y el peligro de links acortados│
├──────────────────────────────────────────────────────────────────────────────────┤
│ Caso 4: Isotipo Content Credentials (procedencia / Estándar C2PA)                │
│         ➔ Evalúa interpretación de metadatos criptográficos en periodismo real  │
├──────────────────────────────────────────────────────────────────────────────────┤
│ Caso 5: Notificación Vecinal en WhatsApp (Texto / Cadena de Pánico)              │
│         ➔ Evalúa la aplicación de la pausa cognitiva y verificación en Sedapal   │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### Prueba 1: El Chat de Redacción (Buen uso de IA / Privacidad "Zero-Data")
*   **Estímulo Visual:** Captura de pantalla del chat de un usuario con ChatGPT que dice: *"Redacta un contrato de servicios formal para mi cliente Juan Pérez, DNI 09876543, residente en Av. Larco 123, Miraflores, con número de cuenta..."* [291].
*   **Anomalía / Pregunta Crítica:** El usuario introduce directamente datos personales, financieros e información altamente sensible en un servidor público de IA generativa de acceso abierto [291, 634].
*   **Habilidad de Alfabetización Evaluada:** Comprender la privacidad de datos "Zero-Data" [291, 634]. El usuario debe saber que subir datos personales reales entrena al modelo público y rompe la confidencialidad, debiendo anonimizar el prompt utilizando variables ficticias (ej. *"DNI: [DNI CLIENTE]"*) antes de enviar el prompt [291, 634, 658].
*   **Acción del Usuario:** **Deslizar a la Izquierda (Inseguro)** [291].

### Prueba 2: El Comprobante Adulterado (Imagen / Fraude de Consumo en Gamarra)
*   **Estímulo Visual:** Captura de pantalla de un comprobante de transferencia bancaria por Plin o Yape por S/. 150 enviado por un cliente para recoger prendas de vestir en un negocio del emporio de Gamarra [292, 634].
*   **Anomalía / Pregunta Crítica:** Al hacer un zoom táctil en la imagen, los números del monto total, la tipografía y la fecha muestran un ligero desfase de píxeles y una sombra inconsistente en los bordes, típica de una edición digital apresurada [292, 634].
*   **Habilidad de Alfabetización Evaluada:** Entender que las capturas de pantalla son fácilmente manipulables mediante software de diseño sencillo [292, 634]. La única forma segura de validar la transacción es cruzar los datos revisando directamente el saldo real en la propia aplicación móvil del banco, ignorando la imagen enviada por el cliente [292, 634].
*   **Acción del Usuario:** **Deslizar a la Izquierda (Falso / Fraude)** [292, 634].

### Prueba 3: El SMS de Pérdida de Matrícula (Texto / Enlace Sospechoso - Phishing)
*   **Estímulo Visual:** Captura de pantalla de un mensaje de texto SMS urgente que dice: *"Urgente: Tu matrícula universitaria en Lima ha sido desactivada por inconsistencias de pago. Evita la pérdida de tu ciclo académico ingresando aquí: bit.ly/Matricula2026"* [293, 634].
*   **Anomalía / Pregunta Crítica:** El mensaje proviene de una línea móvil común no registrada (no un canal corporativo) y utiliza un enlace acortado (`bit.ly`) que oculta el dominio real de destino para redirigir a una web falsa de captura de credenciales [293].
*   **Habilidad de Alfabetización Evaluada:** Identificar dominios institucionales seguros frente a enlaces acortados sospechosos de ingeniería social académica, y aplicar la pauta de no hacer clic en enlaces de remitentes desconocidos [293].
*   **Acción del Usuario:** **Deslizar a la Izquierda (Inseguro)** [293].

### Prueba 4: El Reportaje Fotográfico (procedencia criptográfica / Estándar C2PA)
*   **Estímulo Visual:** Una fotografía de prensa legítima que documenta una asamblea de Juntas Vecinales en Lima. En la esquina superior derecha se observa el pequeño isotipo criptográfico circular "CR" (Content Credentials) [294].
*   **Anomalía / Pregunta Crítica:** El usuario debe discernir si la presencia de este isotipo garantiza la trazabilidad del archivo o si es una marca comercial [294].
*   **Habilidad de Alfabetización Evaluada:** Reconocer e interpretar la procedencia de la imagen mediante metadatos protegidos criptográficamente bajo el estándar de la Coalición para la Procedencia y Autenticidad del Contenido (C2PA) en la prensa, para validar la autoría original y confirmar si fue modificada antes de su publicación [294].
*   **Acción del Usuario:** **Deslizar a la Derecha (Seguro)** [294].

### Prueba 5: El Pánico del Agua de Sedapal (Texto / Cadena de WhatsApp Vecinal)
*   **Estímulo Visual:** Un mensaje compartido masivamente en grupos vecinales de WhatsApp de distritos populosos como Chorrillos o Ate, alertando en tono alarmante: *"¡Vecinos de Lima! EsSalud confirma que debido a la contaminación del río Rímac se cortará el agua por 5 días en toda la ciudad. Junten agua ya. Compartan antes de que apaguen los servidores"* [295, 634, 636].
*   **Anomalía / Pregunta Crítica:** El mensaje no incluye hipervínculos oficiales, mezcla marcas institucionales contradictorias (EsSalud en vez de Sedapal), utiliza un lenguaje de pánico extremo y exige la difusión rápida ("comparte ya") [636, 659].
*   **Habilidad de Alfabetización Evaluada:** Aplicar la "Pausa Cognitiva" [636, 659]. El usuario debe reprimir el impulso de compartir mensajes alarmantes que explotan emociones intensas y verificar de manera independiente en los canales oficiales de Sedapal antes de generar pánico vecinal innecesario [636, 659].
*   **Acción del Usuario:** **Deslizar a la Izquierda (Sospechoso / Inseguro)** [636].

---

## 5. El Diagnóstico de Salud Inmunológica (El Output)

Al finalizar la quinta prueba de Swipe, el sistema no entrega una calificación fría o un "desaprobado" escolar tradicional que desmotive al participante [300]. En su lugar, el algoritmo procesa las respuestas del usuario y genera un **Diagnóstico de Salud Inmunológica Digital** en una tarjeta estética Cozy-Minimalist lista para ser guardada en el dispositivo o compartida directamente en historias de redes sociales [300]:

```
      [ PANTALLA DE RESULTADOS DE KUSKA CHECK ]
┌─────────────────────────────────────────────────┐
│              TU DIAGNÓSTICO DIGITAL             │
│                                                 │
│       Tu instinto está al 40% (2 aciertos)      │
│                                                 │
│       ARQUETIPO: NAVEGANTE VULNERABLE           │
│                                                 │
│  "La PandemAIc ha comprometido severamente tus  │
│   defensas. Eres un blanco fácil para las       │
│   estafas y desinformaciones en internet."      │
│                                                 │
│        [ RECLAMAR MI RECETA DIGITAL ]           │
└─────────────────────────────────────────────────┘
```

El algoritmo clasifica al usuario dentro de uno de los tres **Arquetipos de Resiliencia Digital** [300]:
1.  **Navegante Vulnerable (0 a 2 aciertos):** *“La PandemAIc ha comprometido severamente tus defensas digitales. Eres un blanco fácil para las estafas y desinformaciones en internet. Necesitas de inmediato un botiquín de primeros auxilios cognitivos”* [300].
2.  **Explorador en Alerta (3 a 4 aciertos):** *“Tu instinto digital está alerta, pero tus defensas necesitan afilar sus herramientas técnicas de deconstrucción antes de que el virus de la IA mute”* [300].
3.  **Guardián Inmune (5 aciertos):** *“¡Máxima resiliencia cognitiva! Estás inmunizado frente a la PandemAIc y listo para ser el facilitador que cure a su comunidad”* [300].

### La "Receta Médica Digital"
Al hacer clic en el botón de salida, el sistema genera una **"Receta Médica Digital"** de primeros auxilios [301]. Esta receta no se limita a criticar al usuario, sino que le explica de forma constructiva cuáles de sus respuestas fallaron, cuáles emociones fueron explotadas por los estímulos de la prueba y cómo puede subir de nivel para proteger a su familia de estafas reales [301]. Esta receta es el **onboarding y gancho de enganche natural hacia la Fase 2** [301].

---

## 6. Sinergia Figital con la Fase 2 (KUSKA Deck)

KUSKA Check actúa como la puerta de enlace física y digital (figital) hacia el **Kuska Deck** (el botiquín físico de cartas) [301]:

```
  [ FASE 1: KUSKA CHECK ]
             │
             ▼ Genera Diagnóstico / Receta Médica Digital
  [ LA LLAVE DE ACCESO HÍBRIDA ]
    ┌────────┼────────┐
    ▼                 ▼
[ VIRTUAL ]      [ FÍSICO ]
Carga mazo       Código de descarga
virtual de       para el PDF vectorial
cartas en la     "Print-and-Play" para
web-app.         armar en la escuela.
    │                 │
    └────────┬────────┘
             ▼
  [ FASE 2: KUSKA DECK ]
  Juego cooperativo del Botiquín
```

### A. El Pase Híbrido (Onboarding de la Fase 2)
Dependiendo de su arquetipo, el usuario recibe su **Pase de Entrada KUSKA** [301]:
1.  **En lo Virtual (Web-App):** Desbloquea instantáneamente el mazo digital de cartas interactivo en la web-app de KUSKA, cargando su progreso al perfil global y activando la interfaz táctil de arrastrar y soltar (*drag-and-drop*) para que comience a jugar de forma remota [301].
2.  **En lo Físico (Print-and-Play Descentralizado):** Otorga un código de acceso único que genera un archivo PDF vectorial de alta definición de descarga libre [301]. Este archivo permite a docentes, alumnos, líderes de juntas vecinales o municipalidades descargar e imprimir de forma descentralizada el mantel-blueprint plegable y las barajas de juego en hojas A4 estándar, posibilitando talleres presenciales de bajo costo y autónomos [301].

### B. Transición de Animación: El Crypto-Grid en Acción
Para familiarizar al usuario con el juego de la Fase 2, la pantalla de resultados muestra una animación interactiva fluida de 5 segundos [301]. Muestra visualmente la combinación de tres cartas virtuales: una de **Síntoma** (Cereza), una de **Herramienta** (Miel) y otra de **Acción** (Blanco Hueso) deslizándose en la pantalla [301]. 

La animación muestra cómo las cartas tienen líneas geométricas continuas en sus bordes laterales (la **Cripto-Retícula de Encaje**) [301]. Al acercar las cartas de izquierda a derecha, si la combinación propuesta es la correcta de resiliencia, las líneas se alinean milimétricamente en la interfaz móvil, emitiendo un destello de luz color miel y un sonido armónico sutil, enseñándole al usuario la mecánica del **Kuska Loop** antes de que toque las cartas físicas en el taller [301].

---

## 7. Alineación Estratégica con los Criterios de la UNESCO 2026

Fase 1 se ha diseñado rigurosamente bajo los estándares del jurado del UNESCO Youth Hackathon 2026 [794, 799]:

*   **Innovación frente a la Trivia Lineal:** Supera el formato tradicional de preguntas y respuestas escritas aburridas [288]. KUSKA Check utiliza el diseño de juegos serios y el microaprendizaje (*microlearning*) en cápsulas cortas de alta tracción móvil estilo *Swipe*, lo que aumenta la conversión de usuarios y los expone a la heurística de la deconstrucción [288, 489, 706].
*   **Enfoque Preventivo de Inoculación (SDG 4 - Educación de Calidad):** Se alinea con el Objetivo de Desarrollo Sostenible de la ONU al promover un pensamiento crítico autónomo en los adolescentes peruanos [843]. No es un software cerrado que dicta veredictos como un filtro automático; es un simulador que genera anticuerpos cognitivos y enseña a interactuar éticamente con asistentes de IA en su vida real [288, 646, 677].
*   **Inclusión Intergeneracional de Bajo Esfuerzo:** La captación en entornos físicos reales (vasos de café, paraderos) y la facilidad técnica de la interfaz web responsiva (sin requerir descargas pesadas ni celulares de última generación) aseguran la apropiación del proyecto en comunidades rurales o distritos con brechas de conectividad del Perú [289, 484, 707].

---
*Documento de planificación y modelado técnico de KUSKA Lab Fase 1, atribuido por Gemini Notebook para la postulación al certamen de la UNESCO 2026 en Grecia.* [Authorship Attribution Policy]