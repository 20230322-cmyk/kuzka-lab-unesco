export const coursesData = [
  {
    id: 'curso-prompting-socratico',
    title: 'Prompting Socrático & Modelos Generativos',
    subtitle: 'Aprende a usar la IA como tutor de pensamiento en lugar de una muleta que atrofia el criterio.',
    tag: 'Laboratorio de IA',
    level: 'Principiante / Intermedio',
    duration: '35 min',
    modulesCount: 4,
    color: '#DE711E',
    icon: 'Terminal',
    badge: 'Recomendado',
    summary: 'La paradoja de dependencia de la IA demuestra que copiar y pegar respuestas generadas atrofia la capacidad de juicio autónomo. En este curso aprenderás la arquitectura socrática (Rol + Contexto + Tarea + Restricciones) para obligar al modelo a guiarte.',
    lessons: [
      {
        id: 'l1',
        title: '1. La Trampa de la "Muleta Cognitiva"',
        description: 'Cómo delegar tareas ciegas a LLMs reduce la retención y el discernimiento crítico en un 15%.',
        duration: '8 min',
        keyTakeaway: 'Usa la IA para formular preguntas dialógicas, no para reemplazar tu proceso de síntesis.'
      },
      {
        id: 'l2',
        title: '2. Estructura de un Prompt Socrático (R-C-T-R)',
        description: 'Desglose paso a paso: Asignación de Rol, Definición de Contexto, Tarea Específica y Restricciones de no-resolución.',
        duration: '10 min',
        keyTakeaway: 'Ejemplo: "Actúa como docente de redacción. Revisa mi borrador y hazme 3 preguntas para mejorar la coherencia sin reescribirlo".'
      },
      {
        id: 'l3',
        title: '3. Detección de Alucinaciones en Respuestas Sintéticas',
        description: 'Estrategias de verificación cruzada y técnicas de calibración para identificar sesgos o datos inventados.',
        duration: '9 min',
        keyTakeaway: 'Verifica siempre citas, fechas y cálculos con fuentes primarias independientes.'
      },
      {
        id: 'l4',
        title: '4. Taller Práctico: Desafío de Tutoría',
        description: 'Simulación interactiva para transformar 3 prompts destructivos en prompts de aprendizaje socrático.',
        duration: '8 min',
        keyTakeaway: 'Gana 50 puntos de salud cognitiva para tu Kuzk! Pet.'
      }
    ]
  },
  {
    id: 'curso-forense-deepfakes-c2pa',
    title: 'Detección Forense de Deepfakes & Procedencia C2PA',
    subtitle: 'Deconstruye imágenes sintéticas, audios clonados y aprende a leer metadatos de autenticidad.',
    tag: 'Forense Digital',
    level: 'Todos los niveles',
    duration: '40 min',
    modulesCount: 4,
    color: '#1D6CFF',
    icon: 'ScanSearch',
    badge: 'Esencial',
    summary: 'Aprende los patrones físicos que delatan a las IAs generativas de imágenes (StyleGAN, Diffusion) y conoce el estándar criptográfico Content Credentials (C2PA) para comprobar la procedencia del periodismo verídico.',
    lessons: [
      {
        id: 'l1',
        title: '1. Anomalías Físicas en Rostros y Entornos',
        description: 'Inspección de lóbulos de orejas, simetría de accesorios, reflejos pupilares y coherencia de sombras.',
        duration: '10 min',
        keyTakeaway: 'Los modelos generativos suelen fallar en la geometría de manos, dientes y fondos repetitivos.'
      },
      {
        id: 'l2',
        title: '2. Clonación de Voz: La Extorsión Telefónica',
        description: 'Cómo funcionan los sintetizadores de voz por IA y la regla socrática de los 3 segundos de pausa de confirmación.',
        duration: '10 min',
        keyTakeaway: 'Ante llamadas de supuesta urgencia familiar, cuelga y marca directamente al número habitual conocido.'
      },
      {
        id: 'l3',
        title: '3. El Estándar C2PA y Content Credentials',
        description: 'Cómo leer el isotipo invisible [CR] en fotografías de prensa legítimas para verificar trazabilidad.',
        duration: '10 min',
        keyTakeaway: 'La procedencia criptográfica permite validar si una foto fue tomada por una cámara real o generada sintéticamente.'
      },
      {
        id: 'l4',
        title: '4. Caso de Estudio: Comprobantes de Pago Falsos (Yape/Plin)',
        description: 'Análisis forense de tipografías desalineadas y artefactos de compresión en capturas de pantalla de transferencias.',
        duration: '10 min',
        keyTakeaway: 'La única confirmación segura en micro-negocios es verificar el saldo en la propia app bancaria.'
      }
    ]
  },
  {
    id: 'curso-ciberseguridad-zero-data',
    title: 'Ciberseguridad Familiar & Protocolo Zero-Data',
    subtitle: 'Protege la privacidad de tu familia y negocio antes de interactuar con plataformas públicas.',
    tag: 'Privacidad & Seguridad',
    level: 'Familiar / Micro-empresas',
    duration: '30 min',
    modulesCount: 3,
    color: '#CA3606',
    icon: 'ShieldAlert',
    badge: 'Seguridad',
    summary: 'Todo dato ingresado a modelos públicos puede ser usado para reentrenar sistemas. Aprende el protocolo Zero-Data para anonimizar DNI, nombres reales, estados de cuenta y contraseñas de forma ágil.',
    lessons: [
      {
        id: 'l1',
        title: '1. Qué es la Fuga de Datos (Data Leakage)',
        description: 'Riesgos de introducir contratos comerciales, datos bancarios o documentos escolares en chatbots comerciales.',
        duration: '10 min',
        keyTakeaway: 'Los servidores públicos retienen conversaciones a menos que se configure explícitamente el modo de privacidad.'
      },
      {
        id: 'l2',
        title: '2. Checklist Práctico de Anonimización Zero-Data',
        description: 'Técnicas de sustitución de variables genéricas ($Cliente_A, $Monto_X) antes de solicitar asistencia de IA.',
        duration: '10 min',
        keyTakeaway: 'Reemplaza siempre nombres, números de identificación, direcciones y montos reales.'
      },
      {
        id: 'l3',
        title: '3. La "Palabra Secreta" Familiar',
        description: 'Protocolo analógico de seguridad privada para neutralizar estafas de suplantación y secuestros virtuales.',
        duration: '10 min',
        keyTakeaway: 'Acuerda con tus padres e hijos una clave basada en un recuerdo íntimo que ninguna IA pueda inferir.'
      }
    ]
  },
  {
    id: 'curso-etica-algoritmica-aula',
    title: 'Ética Digital, Convivencia Escolar & Unidad DPCC',
    subtitle: 'Guía práctica para docentes, líderes estudiantiles y facilitadores comunitarios.',
    tag: 'Docentes & Escuelas',
    level: 'Docentes / Jóvenes Líderes',
    duration: '45 min',
    modulesCount: 3,
    color: '#2058CC',
    icon: 'GraduationCap',
    badge: 'Comunitario',
    summary: 'Orientaciones pedagógicas para integrar KUZKA LAB como una unidad de aprendizaje de 3 semanas en el curso de Desarrollo Personal, Ciudadanía y Cívica (DPCC) y combatir el ciberacoso íntimo en secundarias.',
    lessons: [
      {
        id: 'l1',
        title: '1. Prevención del Ciberacoso por Deepfakes Escolares',
        description: 'Protocolos de no-revictimización, contención comunitaria y reporte ético ante manipulaciones sintéticas.',
        duration: '15 min',
        keyTakeaway: 'Nunca redifundir la imagen dañina, aplicar el desmentido fáctico y activar el apoyo psicológico escolar.'
      },
      {
        id: 'l2',
        title: '2. Implementación de las 3 Semanas en DPCC',
        description: 'Estructura curricular de sesiones: Semana 1 (Diagnóstico Check), Semana 2 (Taller de Decks), Semana 3 (Kuzk! Pet y debate).',
        duration: '15 min',
        keyTakeaway: 'Evaluación formativa a través de la Cripto-Retícula y debate socrático entre pares.'
      },
      {
        id: 'l3',
        title: '3. Dinámica Intergeneracional en Casas del Adulto Mayor',
        description: 'Metodología de facilitación con adultos mayores usando materiales análogos y teatro de calle breve.',
        duration: '15 min',
        keyTakeaway: 'Fomentar la empatía y la paciencia activa sin utilizar tecnicismos intimidantes.'
      }
    ]
  }
]
