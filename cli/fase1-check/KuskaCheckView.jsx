import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { KuskaCheckLayout } from '../layouts/KuskaCheckLayout'
import { RadarTimer } from '../components/RadarTimer/RadarTimer'
import { SwipeCard } from '../components/SwipeCard/SwipeCard'
import { DiagnosticCard } from '../components/DiagnosticCard/DiagnosticCard'
import { OnboardingFlow } from '../components/Onboarding/OnboardingFlow'
import { SectionTransition } from '../components/SectionTransition'
import { MOCK_QUESTIONS } from '../data/mock_questions'
import { LupaCard } from '../components/LupaCard/LupaCard'
import { MatrixCard } from '../components/MatrixCard/MatrixCard'
import { calculatePsychometricResult } from '../utils/scoring'

export function KuskaCheckView() {
  const [showOnboarding, setShowOnboarding] = useState(true)
  const [_userProfile, setUserProfile] = useState({ source: null, confidence: null })
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [completed, setCompleted] = useState(false)
  const [showTransition, setShowTransition] = useState(false)

  const currentQuestion = MOCK_QUESTIONS[currentIndex] || MOCK_QUESTIONS[0]
  const currentLevel = currentQuestion.level

  const updateProfile = (key, value) => {
    setUserProfile(prev => ({ ...prev, [key]: value }))
  }

  const handleOnboardingComplete = () => {
    setShowOnboarding(false)
    setShowTransition(true)
  }

  const handleComplete = (isCorrect) => {
    const updatedAnswers = [...userAnswers, { questionId: currentQuestion.id, isCorrect }]
    setUserAnswers(updatedAnswers)
    
    if (currentIndex < MOCK_QUESTIONS.length - 1) {
      const nextIndex = currentIndex + 1
      const nextLevel = MOCK_QUESTIONS[nextIndex].level
      
      if (nextLevel > currentLevel) {
        setShowTransition(true)
      }
      
      setCurrentIndex(nextIndex)
    } else {
      setCompleted(true)
    }
  }

  const psychometricResult = calculatePsychometricResult(userAnswers, MOCK_QUESTIONS)

  const handleClaimRecipe = () => {
    console.log("Navegando a Fase 2 (KUZKA KIT / Crypto-Grid Blueprint)")
  }

  const isPlaying = !showOnboarding && !showTransition && !completed

  return (
    <KuskaCheckLayout 
      header={
        <div className="w-full flex flex-col gap-2">
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex w-full justify-between items-center px-1"
          >
            <img 
              src="/LOGOTIPO KUZKA CHECK.png" 
              alt="Kuzka Check Logo" 
              className="h-9 lg:h-11 object-contain"
            />
            {isPlaying && (
              <span className="font-mono text-xs font-bold text-[var(--text-main)] uppercase tracking-wider bg-white/70 px-3 py-1 rounded-full border-minimal">
                Ítem {currentIndex + 1} / {MOCK_QUESTIONS.length}
              </span>
            )}
          </motion.div>
          {isPlaying && (
            <div className="w-full h-[4px] bg-black/10 rounded-full overflow-hidden mt-0.5">
              <motion.div 
                className="h-full bg-[var(--text-main)]"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / MOCK_QUESTIONS.length) * 100}%` }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </div>
          )}
        </div>
      }
      footer={
        isPlaying && <RadarTimer />
      }
    >
      <div className="relative w-full h-full flex flex-col items-center justify-start">
        <AnimatePresence mode="popLayout">
          {showOnboarding ? (
            <OnboardingFlow 
              key="onboarding" 
              onComplete={handleOnboardingComplete} 
              updateProfile={updateProfile}
            />
          ) : showTransition ? (
            <SectionTransition 
              key={`trans-${currentLevel}`} 
              level={currentLevel} 
              onStart={() => setShowTransition(false)} 
            />
          ) : !completed ? (
            <React.Fragment key={currentQuestion.id}>
              {currentQuestion.mechanic === 'SWIPE' && (
                <SwipeCard 
                  data={currentQuestion}
                  onComplete={handleComplete}
                />
              )}
              {currentQuestion.mechanic === 'LUPA' && (
                <LupaCard 
                  data={currentQuestion}
                  onComplete={handleComplete}
                />
              )}
              {currentQuestion.mechanic === 'MATRIX' && (
                <MatrixCard 
                  data={currentQuestion}
                  onComplete={handleComplete}
                />
              )}
            </React.Fragment>
          ) : (
            <DiagnosticCard 
              key="diagnostic" 
              score={psychometricResult.totalScore}
              dimensionScores={psychometricResult.dimensionScores}
              onClaim={handleClaimRecipe} 
            />
          )}
        </AnimatePresence>
      </div>
    </KuskaCheckLayout>
  )
}
