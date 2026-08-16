import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../ui/Button'
import { ShieldAlert, ShieldCheck, Biohazard, ArrowRight } from 'lucide-react'

const ONBOARDING_STEPS = [
  {
    id: 'intro',
    title: "¿SOBREVIVIRÍAS A LA PANDEMIA?",
    subtitle: "El virus de la desinformación ha mutado impulsado por Inteligencia Artificial Generativa. Tus defensas cognitivas están a punto de ser puestas a prueba.",
    icon: <Biohazard size={48} className="text-[var(--text-main)]" strokeWidth={1.5} />,
    color: "bg-[var(--bg-crema)]"
  },
  {
    id: 'mechanic',
    title: "ENTRENA TU INSTINTO",
    subtitle: "Analiza la pieza de contenido. Desliza hacia la IZQUIERDA si detectas fraude o peligro. Desliza a la DERECHA si la información es legítima y segura.",
    icon: (
      <div className="flex gap-4 items-center">
        <div className="flex flex-col items-center gap-2 text-[var(--color-rojo-alerta)]">
          <ShieldAlert size={32} />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Peligro</span>
        </div>
        <div className="w-12 h-[1px] bg-[var(--color-muted-border)]" />
        <div className="flex flex-col items-center gap-2 text-[var(--color-azul-tech)]">
          <ShieldCheck size={32} />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Seguro</span>
        </div>
      </div>
    ),
    color: "bg-white"
  },
  {
    id: 'ready',
    title: "10 SEGUNDOS POR CASO",
    subtitle: "No pienses demasiado. En el mundo real, el phishing y el fraude apelan a la urgencia. Confía en tu instinto de supervivencia.",
    icon: (
      <div className="relative w-16 h-16 rounded-full border border-[var(--color-muted-border)] flex items-center justify-center">
         <motion.div 
            className="absolute w-[50%] h-full bg-[var(--color-amarillo-radar)] opacity-30 origin-right"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ right: '50%' }}
          />
          <span className="font-mono text-xs z-10 text-[var(--text-main)] font-bold">10s</span>
      </div>
    ),
    color: "bg-[var(--bg-crema)]"
  }
]

export function OnboardingFlow({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0)

  const handleNext = () => {
    if (currentStep < ONBOARDING_STEPS.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      onComplete()
    }
  }

  const stepData = ONBOARDING_STEPS[currentStep]

  return (
    <motion.div 
      className={`absolute inset-0 w-full h-full ${stepData.color} border border-[var(--color-muted-border)] rounded-2xl shadow-minimal flex flex-col p-8 z-20 overflow-hidden`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1, backgroundColor: stepData.color === 'bg-white' ? '#FFFFFF' : 'var(--bg-crema)' }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex justify-between items-center w-full mb-8">
        <span className="font-mono text-[10px] tracking-[0.2em] font-bold text-[#787774] uppercase">
          Kuska Lab
        </span>
        <div className="flex gap-1.5">
          {ONBOARDING_STEPS.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1 rounded-full transition-all duration-300 ${idx === currentStep ? 'w-6 bg-[var(--text-main)]' : 'w-2 bg-[var(--color-muted-border)]'}`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-1 flex flex-col items-center justify-center text-center gap-8"
        >
          <div className="h-24 flex items-center justify-center">
            {stepData.icon}
          </div>
          
          <div className="flex flex-col gap-4 items-center">
            <h2 className="font-logo text-4xl uppercase tracking-tighter text-[var(--text-main)] leading-none">
              {stepData.title}
            </h2>
            <p className="text-sm leading-relaxed text-[#787774] max-w-[280px]">
              {stepData.subtitle}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="w-full mt-auto pt-8 border-t border-[var(--color-muted-border)]">
        <Button onClick={handleNext} className="flex gap-2">
          {currentStep === ONBOARDING_STEPS.length - 1 ? 'INICIAR TEST' : 'SIGUIENTE'}
          <ArrowRight size={16} />
        </Button>
      </div>
    </motion.div>
  )
}
