import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { KuskaCheckLayout } from '../layouts/KuskaCheckLayout'
import { RadarTimer } from '../components/RadarTimer/RadarTimer'
import { SwipeCard } from '../components/SwipeCard/SwipeCard'
import { DiagnosticCard } from '../components/DiagnosticCard/DiagnosticCard'
import { OnboardingFlow } from '../components/Onboarding/OnboardingFlow'
import { SectionTransition } from '../components/SectionTransition'
import { TutorialCard } from '../components/TutorialCard'
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
  const [showTransition, setShowTransition] = useState(true)
  const [showLevelTutorial, setShowLevelTutorial] = useState(false)

  const updateProfile = (key, value) => {
    setUserProfile(prev => ({ ...prev, [key]: value }))
  }

  const handleComplete = (isCorrect) => {
    if (isCorrect) setScore(prev => prev + 1)
    
    if (currentIndex < MOCK_QUESTIONS.length - 1) {
      const nextIndex = currentIndex + 1
      const nextLevel = MOCK_QUESTIONS[nextIndex].level
      
      // Si el nivel cambia, mostramos la pantalla de transición y el tutorial de nivel
      if (nextLevel > currentLevel) {
        setShowTransition(true)
        setShowLevelTutorial(true)
      }
      
      setCurrentIndex(nextIndex)
    } else {
      setCompleted(true)
    }
  }

  const handleOnboardingComplete = () => {
    setShowOnboarding(false)
    setShowTransition(true)
    setShowLevelTutorial(true)
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
              className="h-10 lg:h-12 object-contain"
            />
          </motion.div>
        </div>
      }
      footer={
        !completed && !showOnboarding && !showTransition && !showLevelTutorial && <RadarTimer />
      }
    >
      <div className="relative w-full h-full flex flex-col items-center justify-start">
        
        {/* Progress Bar Global con Fases */}
        {!completed && !showOnboarding && !showTransition && !showLevelTutorial && (
          <div className="absolute top-0 left-0 w-full flex flex-col items-center justify-center pt-6 px-6 lg:px-12 z-40">
            <div className="w-full lg:max-w-5xl relative flex flex-col gap-2">
              <div className="flex justify-between w-full px-1">
                <span className="font-mono text-[9px] tracking-[0.2em] font-bold text-[var(--text-main)] uppercase">Kuzka Check</span>
                <span className="font-mono text-[9px] tracking-[0.2em] font-bold text-[#787774] uppercase">{currentIndex + 1} / {MOCK_QUESTIONS.length}</span>
              </div>
              <div className="w-full h-[6px] bg-[#EAEAEA] rounded-full overflow-hidden relative border border-[var(--text-main)]/10">
                {/* Marcas de Fase */}
                <div className="absolute top-0 bottom-0 left-[33.33%] w-[2px] bg-white z-20" />
                <div className="absolute top-0 bottom-0 left-[66.66%] w-[2px] bg-white z-20" />
                
                {/* Fill principal animado con Spring Physics */}
                <motion.div 
                  className="h-full bg-[var(--text-main)] absolute top-0 bottom-0 left-0 z-10 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentIndex / MOCK_QUESTIONS.length) * 100}%` }}
                  transition={{ type: "spring", stiffness: 60, damping: 15 }}
                />
              </div>
              <div className="flex w-full relative h-4">
                <span className="absolute left-[16.6%] -translate-x-1/2 top-1 font-mono text-[8px] tracking-[0.2em] font-bold text-[var(--color-naranja-kuska)] uppercase">Swipe</span>
                <span className="absolute left-[50%] -translate-x-1/2 top-1 font-mono text-[8px] tracking-[0.2em] font-bold text-[var(--color-azul-tech)] uppercase">Lupa</span>
                <span className="absolute left-[83.3%] -translate-x-1/2 top-1 font-mono text-[8px] tracking-[0.2em] font-bold text-[#DE711E] uppercase">Matrix</span>
              </div>
            </div>
          </div>
        )}

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
          ) : showLevelTutorial ? (
            <TutorialCard 
              key={`tut-${currentLevel}`}
              level={currentLevel}
              onComplete={() => setShowLevelTutorial(false)}
              progress={(currentIndex / MOCK_QUESTIONS.length) * 100}
            />
          ) : !completed ? (
            <motion.div 
              key={MOCK_QUESTIONS[currentIndex].id}
              initial={{ opacity: 0, filter: 'blur(8px)', scale: 0.98 }}
              animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
              exit={{ opacity: 0, filter: 'blur(8px)', scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
              {MOCK_QUESTIONS[currentIndex].mechanic === 'SWIPE' && (
                <SwipeCard 
                  data={MOCK_QUESTIONS[currentIndex]}
                  onComplete={handleComplete}
                  progress={(currentIndex / MOCK_QUESTIONS.length) * 100}
                />
              )}
              {MOCK_QUESTIONS[currentIndex].mechanic === 'LUPA' && (
                <LupaCard 
                  data={MOCK_QUESTIONS[currentIndex]}
                  onComplete={handleComplete}
                  progress={(currentIndex / MOCK_QUESTIONS.length) * 100}
                />
              )}
              {MOCK_QUESTIONS[currentIndex].mechanic === 'MATRIX' && (
                <MatrixCard 
                  data={MOCK_QUESTIONS[currentIndex]}
                  onComplete={handleComplete}
                  progress={(currentIndex / MOCK_QUESTIONS.length) * 100}
                />
              )}
            </motion.div>
          ) : (
            <DiagnosticCard key="diagnostic" score={score} onClaim={handleClaimRecipe} />
          )}
        </AnimatePresence>
      </div>
    </KuskaCheckLayout>
  )
}
