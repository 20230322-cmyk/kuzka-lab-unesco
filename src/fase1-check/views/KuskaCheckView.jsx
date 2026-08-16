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
        <div className="w-full flex flex-col gap-2">
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="flex w-full justify-center items-center"
          >
            <img 
              src="/LOGOTIPO KUZKA CHECK.png" 
              alt="Kuzka Check Logo" 
              className="h-8 object-contain"
            />
          </motion.div>
          {!completed && !showOnboarding && !showTransition && (
            <div className="w-full h-[4px] bg-[#EAEAEA] rounded-full overflow-hidden mt-1 border border-[var(--text-main)]/10">
              <motion.div 
                className="h-full bg-[var(--text-main)]"
                initial={{ width: 0 }}
                animate={{ width: `${(currentIndex / MOCK_QUESTIONS.length) * 100}%` }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </div>
          )}
        </div>
      }
      footer={
        !completed && !showOnboarding && !showTransition && <RadarTimer />
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
