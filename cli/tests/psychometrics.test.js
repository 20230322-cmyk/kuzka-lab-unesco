import { describe, it, expect } from 'vitest'
import { MOCK_QUESTIONS } from '../src/fase1-check/data/mock_questions.js'
import { calculatePsychometricResult, getArchetype } from '../src/fase1-check/utils/scoring.js'

describe('K-CIT Psychometric Questions Integrity', () => {
  it('should have exactly 15 questions in total', () => {
    expect(MOCK_QUESTIONS).toHaveLength(15)
  })

  it('should have 5 questions per level/mechanic', () => {
    const level1 = MOCK_QUESTIONS.filter(q => q.level === 1 && q.mechanic === 'SWIPE')
    const level2 = MOCK_QUESTIONS.filter(q => q.level === 2 && q.mechanic === 'LUPA')
    const level3 = MOCK_QUESTIONS.filter(q => q.level === 3 && q.mechanic === 'MATRIX')

    expect(level1).toHaveLength(5)
    expect(level2).toHaveLength(5)
    expect(level3).toHaveLength(5)
  })

  it('should have required fields for each question', () => {
    MOCK_QUESTIONS.forEach(q => {
      expect(q).toHaveProperty('id')
      expect(q).toHaveProperty('level')
      expect(q).toHaveProperty('mechanic')
      expect(q).toHaveProperty('content')
      expect(typeof q.content).toBe('string')
    })
  })
})

describe('K-CIT Scoring & Archetype Calculation', () => {
  it('should classify score 0-5 as "Vulnerable Contagioso"', () => {
    const archetype = getArchetype(4)
    expect(archetype.id).toBe('vulnerable')
    expect(archetype.title).toBe('Vulnerable Contagioso')
  })

  it('should classify score 6-10 as "Usuario en Autopiloto"', () => {
    const archetype = getArchetype(8)
    expect(archetype.id).toBe('autopilot')
    expect(archetype.title).toBe('Usuario en Autopiloto')
  })

  it('should classify score 11-15 as "Auditor Cognitivo"', () => {
    const archetype = getArchetype(14)
    expect(archetype.id).toBe('auditor')
    expect(archetype.title).toBe('Auditor Cognitivo')
  })

  it('should correctly calculate total and dimensional scores', () => {
    const userAnswers = [
      { questionId: 1, isCorrect: true },
      { questionId: 2, isCorrect: true },
      { questionId: 3, isCorrect: true },
      { questionId: 4, isCorrect: true },
      { questionId: 5, isCorrect: true },
      { questionId: 6, isCorrect: true },
      { questionId: 7, isCorrect: true },
      { questionId: 8, isCorrect: true },
      { questionId: 9, isCorrect: false },
      { questionId: 10, isCorrect: false },
      { questionId: 11, isCorrect: true },
      { questionId: 12, isCorrect: true },
      { questionId: 13, isCorrect: false },
      { questionId: 14, isCorrect: false },
      { questionId: 15, isCorrect: false },
    ]

    const result = calculatePsychometricResult(userAnswers, MOCK_QUESTIONS)
    expect(result.totalScore).toBe(10)
    expect(result.dimensionScores.reflexes).toBe(5)
    expect(result.dimensionScores.forensic).toBe(3)
    expect(result.dimensionScores.ethics).toBe(2)
    expect(result.archetype.id).toBe('autopilot')
  })
})
