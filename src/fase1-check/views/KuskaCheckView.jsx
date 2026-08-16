import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { KuskaCheckLayout } from '../layouts/KuskaCheckLayout'
import { RadarTimer } from '../components/RadarTimer/RadarTimer'
import { SwipeCard } from '../components/SwipeCard/SwipeCard'
import { DiagnosticCard } from '../components/DiagnosticCard/DiagnosticCard'
import { OnboardingFlow } from '../components/Onboarding/OnboardingFlow'

const MOCK_QUESTIONS = [
  { id: 1, type: "IA_PRIVACY", content: "Redacta un contrato de servicios formal para mi cliente Juan Pérez, DNI 09876543, residente en Av. Larco 123..." },
  { id: 2, type: "FRAUD", content: "Comprobante de transferencia bancaria por Yape por S/. 150 enviado por un cliente en Gamarra." },
  { id: 3, type: "PHISHING", content: "Urgente: Tu matrícula universitaria ha sido desactivada por inconsistencias. Ingresa aquí: bit.ly/Matricula2026" },
  { id: 4, type: "C2PA", content: "Fotografía de prensa legítima documentando asamblea vecinal. Incluye isotipo criptográfico (CR)." },
  { id: 5, type: "PANIC", content: "¡Vecinos de Lima! EsSalud confirma contaminación del río. Se cortará el agua 5 días. Compartan ya." }
]

export function KuskaCheckView() {
  const [showOnboarding, setShowOnboarding] = useState(true)
  const [userProfile, setUserProfile] = useState({ source: null, confidence: null })
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [score, setScore] = useState(0)

  const updateProfile = (key, value) => {
    setUserProfile(prev => ({ ...prev, [key]: value }))
  }

  const handleSwipe = (direction) => {
    if (currentIndex < MOCK_QUESTIONS.length - 1) {
      setCurrentIndex(prev => prev + 1)
    } else {
      setCompleted(true)
    }
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
          {!completed && !showOnboarding && (
            <div className="flex gap-1 text-[11px] font-mono font-bold tracking-[0.2em] text-[#787774] items-center">
              <span className="text-[var(--text-main)]">{currentIndex + 1}</span> / <span>5</span>
            </div>
          )}
        </motion.div>
      }
      footer={
        !completed && !showOnboarding && <RadarTimer />
      }
    >
      <div className="relative w-full max-w-sm aspect-[3/4] flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          {showOnboarding ? (
            <OnboardingFlow 
              key="onboarding" 
              onComplete={() => setShowOnboarding(false)} 
              updateProfile={updateProfile}
            />
          ) : !completed ? (
            <SwipeCard 
              key={MOCK_QUESTIONS[currentIndex].id} 
              data={MOCK_QUESTIONS[currentIndex]}
              onSwipe={handleSwipe}
            />
          ) : (
            <DiagnosticCard key="diagnostic" score={score} onClaim={handleClaimRecipe} />
          )}
        </AnimatePresence>
      </div>
    </KuskaCheckLayout>
  )
}
