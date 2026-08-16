export const MOCK_QUESTIONS = [
  // NIVEL 1: TRIAJE RÁPIDO (Mecánica Swipe: Izquierda Inseguro, Derecha Seguro)
  { 
    id: 1, 
    level: 1,
    mechanic: 'SWIPE',
    type: "PHISHING", 
    content: "Tu cuenta Yape ha sido bloqueada. Reactiva aquí: yape-seguro.xyz",
    isSafe: false,
    explanation: "Dominio falso (.xyz) simulando urgencia."
  },
  { 
    id: 2, 
    level: 1,
    mechanic: 'SWIPE',
    type: "DEEPVOICE", 
    content: "Audio de WhatsApp: '¡Hijo, me robaron el celular y necesito plata urgente, transfiéreme a este número!' (Voz metálica y sin pausas).",
    isSafe: false,
    explanation: "Clonación de voz por IA (Ingeniería social)."
  },
  { 
    id: 3, 
    level: 1,
    mechanic: 'SWIPE',
    type: "LEGIT_NEWS", 
    content: "Enlace web: 'elcomercio.pe/economia/noticia-oficial'",
    isSafe: true,
    explanation: "El dominio pertenece a un medio de comunicación verificado."
  },
  { 
    id: 4, 
    level: 1,
    mechanic: 'SWIPE',
    type: "PANIC_CHAIN", 
    content: "¡URGENTE! El Estado regala S/ 500. Comparte a 10 contactos en WhatsApp para cobrar el Bono Patrio.",
    isSafe: false,
    explanation: "Cadena de desinformación clásica para robo de datos."
  },
  { 
    id: 5, 
    level: 1,
    mechanic: 'SWIPE',
    type: "SCAM_ADS", 
    content: "Anuncio Instagram: Zapatillas Nike edición limitada a S/ 20. Foto con iluminación hiperrealista perfecta pero suela borrosa.",
    isSafe: false,
    explanation: "Publicidad fraudulenta con imágenes generadas por IA."
  },

  // NIVEL 2: LABORATORIO FORENSE (Mecánica Lupa/Hover)
  { 
    id: 6, 
    level: 2,
    mechanic: 'LUPA',
    type: "AI_IMAGE", 
    content: "Fotografía fotorrealista de un arresto.",
    clue: "Los policías tienen 6 dedos y letras irreconocibles en los chalecos.",
    isSafe: false
  },
  { 
    id: 7, 
    level: 2,
    mechanic: 'LUPA',
    type: "C2PA_VERIFIED", 
    content: "Fotografía de prensa internacional de un conflicto.",
    clue: "Sello CR (Content Credentials) criptográfico presente en los metadatos.",
    isSafe: true
  },
  { 
    id: 8, 
    level: 2,
    mechanic: 'LUPA',
    type: "ZERO_DATA", 
    content: "Prompt en ChatGPT: 'Redacta un CV para Carlos López, DNI 12345678, celular 999...'",
    clue: "Filtración de datos personales reales en plataforma de IA abierta.",
    isSafe: false
  },
  { 
    id: 9, 
    level: 2,
    mechanic: 'LUPA',
    type: "LIP_SYNC", 
    content: "Video de influencer recomendando comprar Bitcoin en una app nueva.",
    clue: "Desfase notorio entre el movimiento de los labios y las vocales del audio.",
    isSafe: false
  },
  { 
    id: 10, 
    level: 2,
    mechanic: 'LUPA',
    type: "FRAUD_RECEIPT", 
    content: "Comprobante de Plin por S/ 250 enviado por un cliente.",
    clue: "El tipo de letra del monto no coincide con la tipografía oficial del banco y tiene sombra cortada.",
    isSafe: false
  },

  // NIVEL 3: SALA DE CUARENTENA (Mecánica Slider / Matrix)
  { 
    id: 11, 
    level: 3,
    mechanic: 'MATRIX',
    type: "CONFIRMATION_BIAS", 
    content: "Noticia falsa y escandalosa sobre un político que detestas. ¿La compartes sin leerla entera?",
    expectedQuadrant: "Mala Práctica"
  },
  { 
    id: 12, 
    level: 3,
    mechanic: 'MATRIX',
    type: "AUTOPILOT", 
    content: "Pides a ChatGPT que te escriba tu tesis de grado y la entregas sin leer.",
    expectedQuadrant: "Mala Práctica"
  },
  { 
    id: 13, 
    level: 3,
    mechanic: 'MATRIX',
    type: "LATERAL_CHECK", 
    content: "Tu mamá te pide plata urgente por un número raro. Decides llamarla a su número normal primero.",
    expectedQuadrant: "Buena Práctica"
  },
  { 
    id: 14, 
    level: 3,
    mechanic: 'MATRIX',
    type: "FILTER_BUBBLE", 
    content: "El algoritmo te muestra 50 videos seguidos de teorías de conspiración. Decides buscar otras fuentes.",
    expectedQuadrant: "Buena Práctica"
  },
  { 
    id: 15, 
    level: 3,
    mechanic: 'MATRIX',
    type: "AI_ETHICS", 
    content: "Creas un afiche con Midjourney para un evento y le pones 'Ilustración generada con IA' abajo.",
    expectedQuadrant: "Buena Práctica"
  }
]
