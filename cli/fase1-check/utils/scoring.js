export const ARCHETYPES = {
  vulnerable: {
    id: 'vulnerable',
    max: 5,
    title: 'Vulnerable Contagioso',
    subtitle: 'Nivel Crítico de Infección Desinformativa',
    desc: 'Tus reflejos están comprometidos. Eres propenso a caer en phishing y dependes de la IA sin verificación. Necesitas el KUSKA KIT de emergencia.',
    color: 'var(--color-rojo-alerta)',
    colorHex: '#CA3606',
    bg: '#FDEBEC',
    totem: 'TERMÓMETRO ROJO'
  },
  autopilot: {
    id: 'autopilot',
    max: 10,
    title: 'Usuario en Autopiloto',
    subtitle: 'Vulnerabilidad por Inercia y Rapidez',
    desc: 'Conoces la teoría, pero bajo presión tus impulsos (Sistema 1) te dominan. Aún puedes ser engañado por deepfakes o sesgos sutiles.',
    color: 'var(--color-naranja-kuska)',
    colorHex: '#DE711E',
    bg: '#FCEADE',
    totem: 'LUPA NARANJA'
  },
  auditor: {
    id: 'auditor',
    max: 15,
    title: 'Auditor Cognitivo',
    subtitle: 'Inmunidad Cognitiva y Pensamiento Crítico Activo',
    desc: '¡Inmunidad alta! Haces la pausa socrática necesaria, auditas fuentes y aplicas la IA con rigor ético. Listo para liderar la alfabetización.',
    color: 'var(--color-azul-tech)',
    colorHex: '#1D6CFF',
    bg: '#EBF2FF',
    totem: 'ESCUDO AZUL'
  }
}

export function getArchetype(score) {
  if (score <= 5) return ARCHETYPES.vulnerable
  if (score <= 10) return ARCHETYPES.autopilot
  return ARCHETYPES.auditor
}

export function calculatePsychometricResult(userAnswers, questions) {
  let totalScore = 0
  const dimensionScores = {
    reflexes: 0, // Level 1: Dimensión A (Ítems 1-5)
    forensic: 0, // Level 2: Dimensión B (Ítems 6-10)
    ethics: 0    // Level 3: Dimensión C (Ítems 11-15)
  }

  userAnswers.forEach((ans) => {
    if (ans.isCorrect) {
      totalScore += 1
      const q = questions.find(item => item.id === ans.questionId)
      if (q) {
        if (q.level === 1) dimensionScores.reflexes += 1
        else if (q.level === 2) dimensionScores.forensic += 1
        else if (q.level === 3) dimensionScores.ethics += 1
      }
    }
  })

  const archetype = getArchetype(totalScore)

  return {
    totalScore,
    dimensionScores,
    archetype
  }
}
