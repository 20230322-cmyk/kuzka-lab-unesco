export const MOCK_QUESTIONS = [
  {
    id: 1,
    level: 1,
    mechanic: 'SWIPE',
    type: "PHISHING", 
    image: '/assets/test-resources/q1-sms.svg',
    content: '"Tu cuenta Yape ha sido bloqueada. Reactiva aquí: yape-seguro.xyz"',
    isSafe: false,
    explanation: "Dominio falso (.xyz) simulando urgencia."
  },
  {
    id: 2,
    level: 1,
    mechanic: 'SWIPE',
    type: "DEEPVOICE", 
    image: '/assets/test-resources/q2-audio.svg',
    content: 'Audio de WhatsApp: "Hola, me robaron el celular, deposítame plata a este número, es urgente."',
    isSafe: false,
    explanation: "Clonación de voz por IA (Ingeniería social)."
  },
  {
    id: 3,
    level: 1,
    mechanic: 'SWIPE',
    type: "LEGIT_NEWS", 
    image: '/assets/test-resources/q3-news.svg',
    content: 'Titular en elcomercio.pe (URL correcta): "El impacto de la inteligencia artificial en la economía local."',
    isSafe: true,
    explanation: "El dominio pertenece a un medio de comunicación verificado."
  },
  {
    id: 4,
    level: 1,
    mechanic: 'SWIPE',
    type: "PANIC_CHAIN", 
    image: '/assets/test-resources/q4-whatsapp.svg',
    content: 'Cadena reenviada muchas veces: "🚨🚨 ¡Bono Yanapay 2026! El gobierno regala 500 soles. Ingresa aquí..."',
    isSafe: false,
    explanation: "Cadena de desinformación clásica para robo de datos."
  },
  {
    id: 5,
    level: 1,
    mechanic: 'SWIPE',
    type: "SCAM_ADS", 
    image: '/assets/test-resources/q5_sneakers_1786856264973.png',
    content: 'Publicidad patrocinada en Instagram: Zapatillas Nike edición limitada flotando a S/ 20. (El logo dice "Nlke")',
    isSafe: false,
    explanation: "Publicidad fraudulenta con imágenes generadas por IA."
  },
  {
    id: 6,
    level: 2,
    mechanic: 'LUPA',
    type: "AI_IMAGE", 
    image: '/assets/test-resources/q6_arrest_1786856274389.png',
    content: 'Un periodista de Twitter comparte una imagen dramática de un arresto político de noche. Tiene miles de Retweets.',
    clue: "Los policías tienen 6 dedos y letras irreconocibles en los chalecos.",
    isSafe: false
  },
  {
    id: 7,
    level: 2,
    mechanic: 'LUPA',
    type: "C2PA_VERIFIED", 
    image: '/assets/test-resources/q7_press_1786856282403.png',
    content: 'El diario local publica una fotografía periodística sobre una protesta en el centro de Lima.',
    clue: "Sello CR (Content Credentials) criptográfico presente en los metadatos.",
    isSafe: true
  },
  {
    id: 8,
    level: 2,
    mechanic: 'LUPA',
    type: "ZERO_DATA", 
    image: '/assets/test-resources/q8-chatgpt.svg',
    content: 'Un colega usa ChatGPT para resumir un contrato de su empresa. Pega el texto completo en el prompt.',
    clue: "Filtración de datos personales reales en plataforma de IA abierta.",
    isSafe: false
  },
  {
    id: 9,
    level: 2,
    mechanic: 'LUPA',
    type: "LIP_SYNC", 
    image: '/assets/test-resources/q9_influencer_1786856334684.png',
    content: 'TikTok Shorts: Un influencer de finanzas muy famoso recomendando invertir en una criptomoneda nueva (Lip-sync deepfake).',
    clue: "Desfase notorio entre el movimiento de los labios y las vocales del audio.",
    isSafe: false
  },
  {
    id: 10,
    level: 2,
    mechanic: 'LUPA',
    type: "FRAUD_RECEIPT", 
    image: '/assets/test-resources/q10-plin.svg',
    content: 'Un cliente en tu tienda te muestra el pantallazo de que ya te "yapeó/plineó" S/ 250.00.',
    clue: "El tipo de letra del monto no coincide con la tipografía oficial del banco y tiene sombra cortada.",
    isSafe: false
  },
  {
    id: 11,
    level: 3,
    mechanic: 'MATRIX',
    type: "CONFIRMATION_BIAS", 
    image: '/assets/test-resources/q11_bias_1786856342988.png',
    content: 'Un familiar comparte una noticia que confirma exactamente lo que él siempre ha pensado sobre un político, sin leer el artículo completo.',
    expectedQuadrant: "Mala Práctica"
  },
  {
    id: 12,
    level: 3,
    mechanic: 'MATRIX',
    type: "AUTOPILOT", 
    image: '/assets/test-resources/q12_autopilot_1786856670923.png',
    content: 'Un estudiante universitario genera todo el ensayo de su tesis con Claude 3, sin editar ni verificar las citas, y lo entrega como suyo.',
    expectedQuadrant: "Mala Práctica"
  },
  {
    id: 13,
    level: 3,
    mechanic: 'MATRIX',
    type: "LATERAL_CHECK", 
    image: '/assets/test-resources/q13_crossroad_1786856682455.png',
    content: 'Recibes un mensaje de tu mamá diciendo que necesita plata urgente porque está en el hospital. La llamas por teléfono antes de transferir.',
    expectedQuadrant: "Buena Práctica"
  },
  {
    id: 14,
    level: 3,
    mechanic: 'MATRIX',
    type: "FILTER_BUBBLE", 
    image: '/assets/test-resources/q14_echo_1786856718729.png',
    content: 'Te das cuenta de que TikTok solo te muestra videos de crímenes y desgracias. Decides buscar proactivamente contenido diferente o silenciar ciertas palabras.',
    expectedQuadrant: "Buena Práctica"
  },
  {
    id: 15,
    level: 3,
    mechanic: 'MATRIX',
    type: "AI_ETHICS", 
    image: '/assets/test-resources/q15_ethics_1786856725995.png',
    content: 'Un artista gráfico usa Midjourney para hacer el póster de un evento. Al publicarlo, aclara explícitamente en el pie de foto: "Ilustración base generada con IA".',
    expectedQuadrant: "Buena Práctica"
  }
]
