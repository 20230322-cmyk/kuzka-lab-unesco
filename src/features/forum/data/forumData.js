export const initialForumPosts = [
  {
    id: 'post-1',
    author: 'Doña Rosa (Chorrillos)',
    role: 'Líder Vecinal',
    badgeColor: '#DE711E',
    category: 'Alerta Ciudadana',
    title: 'Cuidado con audios de WhatsApp supuestamente de Sedapal pidiendo "confirmar suministro"',
    content: 'Vecinos de Chorrillos y Surco: nos ha llegado un audio con voz muy institucional pidiendo entrar a un enlace bit.ly para no perder el servicio de agua este fin de semana. Verificamos con el municipio y es falso. ¡No abran el enlace!',
    votes: 42,
    repliesCount: 8,
    date: 'Hace 2 horas',
    tags: ['Suplantación', 'WhatsApp', 'Chorrillos'],
    replies: [
      {
        id: 'r1',
        author: 'Mateo Quispe',
        role: 'Facilitador Universitario',
        date: 'Hace 1 hora',
        text: '¡Excelente reporte Doña Rosa! Ese es un caso clásico de phishing de urgencia para capturar credenciales telefónicas. Gracias por aplicar la pausa de confirmación.'
      },
      {
        id: 'r2',
        author: 'Prof. Carlos Huamán',
        role: 'Docente DPCC',
        date: 'Hace 35 min',
        text: 'Lo compartiremos en el aula con los chicos de 4to para que alerten a sus abuelos hoy mismo.'
      }
    ]
  },
  {
    id: 'post-2',
    author: 'Sofía Romero',
    role: 'Estudiante Secundaria (15)',
    badgeColor: '#1D6CFF',
    category: 'Dilemas Éticos',
    title: '¿Qué hacer si un compañero usa IA para crear memes pesados con las fotos de las chicas del salón?',
    content: 'En mi colegio pasó que un chico usó una app de IA para cambiar rostros y hacer pasar una foto como si fuera de otra compañera. Algunos se reían pero ella se sintió muy mal. ¿Cuál es el protocolo ético correcto según KUZKA?',
    votes: 56,
    repliesCount: 12,
    date: 'Hace 5 horas',
    tags: ['Deepfakes', 'Convivencia', 'Escuela'],
    replies: [
      {
        id: 'r3',
        author: 'Equipo Kuzka Lab',
        role: 'Moderación Cívica',
        date: 'Hace 3 horas',
        text: 'Hola Sofía. El principio del Laboratorio CREATOR establece: 1) Cero revictimización (no compartir el archivo ni en privado), 2) Aplicar el desmentido y apoyo afectivo inmediato, 3) Reportar a la dirección y tutoría bajo la directiva de ciberacoso escolar.'
      }
    ]
  },
  {
    id: 'post-3',
    author: 'Renzo Morales',
    role: 'Emprendedor Gamarra',
    badgeColor: '#CA3606',
    category: 'Casos de Negocio',
    title: 'Casi caigo con un Plin de S/. 450: El número de operación tenía una fuente Arial borrosa',
    content: 'Hoy un comprador insistía en llevarse 3 docenas de poleras con una captura de pantalla. Al hacer zoom con el truco que aprendí en el FORENSE LAB de Kuzka Kit, vi que el texto del monto no tenía el mismo grosor de píxeles. Le pedí esperar a que abra mi app y se fue corriendo.',
    votes: 89,
    repliesCount: 15,
    date: 'Ayer',
    tags: ['Gamarra', 'Plin Falso', 'Forense'],
    replies: [
      {
        id: 'r4',
        author: 'Valeria S.',
        role: 'Comerciante Textil',
        date: 'Ayer',
        text: 'A mí me pasó la semana pasada con un Yape falso de S/. 280. Desde que imprimí el checklist de Zero-Data y verificación en mi mostrador no vuelvo a entregar nada sin saldo confirmado.'
      }
    ]
  },
  {
    id: 'post-4',
    author: 'Prof. Ana María C.',
    role: 'Docente Secundaria (Comas)',
    badgeColor: '#2058CC',
    category: 'Aula & DPCC',
    title: 'Resultados de la primera semana con el test Kuska Check en el colegio',
    content: 'Aplicamos el test de Swipe a 90 estudiantes de 3ero y 4to de secundaria. El 74% cayó en la pregunta de clonación de voz por exceso de confianza. Les encantó la dinámica de radar y ahora están ansiosos por probar el mazo de cartas de la Fase 2.',
    votes: 64,
    repliesCount: 6,
    date: 'Hace 2 días',
    tags: ['Colegios', 'DPCC', 'Inmunidad'],
    replies: []
  }
]
