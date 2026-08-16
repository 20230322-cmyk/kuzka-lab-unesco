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

export function KuskaCheckView() {
  const [showOnboarding, setShowOnboarding] = useState(true)
  const [userProfile, setUserProfile] = useState({ source: null, confidence: null })
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [score, setScore] = useState(0)
  
  // Nivel actual derivado del índice, e inicio de transición
  const currentLevel = MOCK_QUESTIONS[currentIndex]?.level || 1
  const [showTransition, setShowTransition] = useState(true) // Al salir del onboarding, muestra transición del Nivel 1

  const updateProfile = (key, value) => {
    setUserProfile(prev => ({ ...prev, [key]: value }))
  }

  const handleComplete = (isCorrect) => {
    if (isCorrect) setScore(prev => prev + 1)
    
    if (currentIndex < MOCK_QUESTIONS.length - 1) {
      const nextIndex = currentIndex + 1
      const nextLevel = MOCK_QUESTIONS[nextIndex].level
      
      // Si el nivel cambia, mostramos la pantalla de transición
      if (nextLevel > currentLevel) {
        setShowTransition(true)
      }
      
      setCurrentIndex(nextIndex)
    } else {
      setCompleted(true)
    }
  }

  const handleOnboardingComplete = () => {
    setShowOnboarding(false)
    setShowTransition(true) // Lanza la primera transición (Nivel 1)
  }

  const handleClaimRecipe = () => {
    console.log("Transición a Fase 2 (Crypto-Grid)")
  }

  return (
    <KuskaCheckLayout 
      header={
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="flex w-full justify-between items-center"
        >
          <img 
            src="/LOGOTIPO KUZKA CHECK.png" 
            alt="Kuzka Check Logo" 
            className="h-10 object-contain"
          />
          {!completed && !showOnboarding && !showTransition && (
            <div className="flex gap-1 text-[11px] font-mono font-bold tracking-[0.2em] text-[#787774] items-center">
              <span className="text-[var(--text-main)]">{currentIndex + 1}</span> / <span>15</span>
            </div>
          )}
        </motion.div>
      }
      footer={
        !completed && !showOnboarding && !showTransition && <RadarTimer />
      }
    >
      <div className="relative w-full max-w-sm aspect-[3/4] flex items-center justify-center">
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
            <React.Fragment key={MOCK_QUESTIONS[currentIndex].id}>
              {MOCK_QUESTIONS[currentIndex].mechanic === 'SWIPE' && (
                <SwipeCard 
                  data={MOCK_QUESTIONS[currentIndex]}
                  onComplete={handleComplete}
                />
              )}
              {MOCK_QUESTIONS[currentIndex].mechanic === 'LUPA' && (
                <LupaCard 
                  data={MOCK_QUESTIONS[currentIndex]}
                  onComplete={handleComplete}
                />
              )}
              {MOCK_QUESTIONS[currentIndex].mechanic === 'MATRIX' && (
                <MatrixCard 
                  data={MOCK_QUESTIONS[currentIndex]}
                  onComplete={handleComplete}
                />
              )}
            </React.Fragment>
          ) : (
            <DiagnosticCard key="diagnostic" score={score} onClaim={handleClaimRecipe} />
          )}
        </AnimatePresence>
      </div>
    </KuskaCheckLayout>
  )
}
