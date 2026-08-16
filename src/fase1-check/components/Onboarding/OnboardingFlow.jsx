import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import { Button } from '../ui/Button'
import { Bug, Smartphone, Tv, MessageCircle, ShieldAlert, ShieldCheck } from 'lucide-react'

// --- Sub-componentes para pasos interactivos ---

const StepHook = ({ onNext }) => (
  <div className="flex-1 flex flex-col items-center justify-center text-center gap-8 w-full h-full">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', bounce: 0.5 }}
      className="text-[var(--color-rojo-alerta)] mb-4"
    >
      <Bug size={64} strokeWidth={1.5} />
    </motion.div>
    <div className="flex flex-col gap-6 items-center mt-4">
      <h2 className="font-logo text-6xl tracking-tight text-[var(--text-main)] leading-[0.95]">
        PandemIA
      </h2>
      <p className="text-base font-main font-medium leading-relaxed text-[var(--color-text-muted)] max-w-[280px]">
        El virus impulsado por IA está infectando la red. Tus defensas cognitivas están a prueba.
      </p>
    </div>
    <div className="w-full mt-auto pt-8">
      <Button onClick={onNext}>EVALUAR MIS DEFENSAS</Button>
    </div>
  </div>
)

const StepHabits = ({ onSelect }) => {
  const options = [
    { id: 'social', label: 'Redes Sociales', desc: 'TikTok, X, Instagram', icon: <Smartphone size={20}/> },
    { id: 'messaging', label: 'Mensajería', desc: 'WhatsApp, Telegram', icon: <MessageCircle size={20}/> },
    { id: 'traditional', label: 'Tradicional', desc: 'TV, Web, Periódicos', icon: <Tv size={20}/> }
  ]

  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center gap-8 w-full h-full">
      <h3 className="font-logo text-4xl tracking-tight text-[var(--text-main)] leading-[1.1]">
        ¿Dónde consumes<br/>más noticias?
      </h3>
      <div className="flex flex-col gap-3 w-full mt-4">
        {options.map((opt) => (
          <button 
            key={opt.id}
            onClick={() => onSelect('source', opt.id)}
            className="w-full bg-white border-minimal outline-fondo p-4 rounded-xl flex items-center gap-4 hover:bg-[#FDF6E3] hover:border-[var(--color-amarillo-radar)] transition-colors text-left"
          >
            <div className="p-3 bg-[var(--bg-crema)] rounded-lg text-[var(--text-main)]">
              {opt.icon}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-[var(--text-main)]">{opt.label}</span>
              <span className="text-xs text-[#787774]">{opt.desc}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

const StepConfidence = ({ onSelect }) => {
  const options = [
    { id: 'expert', label: 'Soy un Experto', desc: 'Nunca caigo en Fake News', color: 'bg-[var(--color-azul-tech)]' },
    { id: 'average', label: 'Promedio', desc: 'A veces dudo de lo que leo', color: 'bg-[var(--text-main)]' },
    { id: 'vulnerable', label: 'Vulnerable', desc: 'Me cuesta distinguir la verdad', color: 'bg-[var(--color-rojo-alerta)]' }
  ]

  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center gap-8 w-full h-full">
      <h3 className="font-logo text-4xl tracking-tight text-[var(--text-main)] leading-[1.1]">
        ¿Qué tan bueno eres<br/>detectando estafas?
      </h3>
      <div className="flex flex-col gap-3 w-full mt-4">
        {options.map((opt) => (
          <button 
            key={opt.id}
            onClick={() => onSelect('confidence', opt.id)}
            className="w-full bg-white border-minimal outline-fondo p-4 rounded-xl flex items-center justify-between hover:bg-[#FDF6E3] hover:border-[var(--color-amarillo-radar)] transition-colors"
          >
            <div className="flex flex-col text-left">
              <span className="font-bold text-sm text-[var(--text-main)]">{opt.label}</span>
              <span className="text-xs text-[#787774]">{opt.desc}</span>
            </div>
            <div className={`w-3 h-3 rounded-full ${opt.color}`} />
          </button>
        ))}
      </div>
    </div>
  )
}

const StepCalibrating = ({ onNext }) => {
  useEffect(() => {
    const timer = setTimeout(onNext, 2000)
    return () => clearTimeout(timer)
  }, [onNext])

  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center gap-8 w-full h-full">
       <div className="relative w-20 h-20 rounded-full outline-fondo flex items-center justify-center bg-white overflow-hidden">
        <motion.div 
          className="absolute w-[50%] h-full bg-[var(--color-amarillo-radar)] opacity-40 origin-right"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          style={{ right: '50%' }}
        />
        <div className="absolute w-[56px] h-[56px] rounded-full bg-[var(--bg-crema)] z-10 border-minimal" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-mono text-xs tracking-[0.2em] font-bold text-[var(--text-main)] uppercase">Calibrando</span>
        <span className="text-sm text-[#787774]">Ajustando radar a tu perfil...</span>
      </div>
    </div>
  )
}

const StepTutorial = ({ onNext }) => {
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-150, 150], [-10, 10])
  const opacity = useTransform(x, [-150, -100, 0, 100, 150], [0, 1, 1, 1, 0])
  
  const handleDragEnd = (e, { offset }) => {
    if (Math.abs(offset.x) > 50) {
      onNext()
    }
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center w-full h-full relative">
      <h3 className="font-logo text-4xl tracking-tight text-[var(--text-main)] leading-[1.1] mb-8">
        Entrena tu<br/>instinto
      </h3>
      
      <div className="relative w-full aspect-square max-w-[260px]">
        <motion.div
          className="absolute inset-0 bg-white border-minimal outline-fondo rounded-2xl flex flex-col items-center justify-center p-6 touch-none cursor-grab active:cursor-grabbing z-20"
          style={{ x, rotate, opacity }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.7}
          onDragEnd={handleDragEnd}
        >
          <div className="w-16 h-16 bg-[var(--bg-crema)] rounded-xl border-minimal mb-4 flex items-center justify-center">
            <span className="text-xl">🐱</span>
          </div>
          <p className="font-medium text-sm">Gatito en monopatín. No parece peligroso.</p>
        </motion.div>
        
        {/* Background Hint */}
        <div className="absolute inset-0 flex items-center justify-between px-4 z-10 text-[var(--color-muted-border)]">
           <div className="flex flex-col items-center gap-1 text-[var(--color-rojo-alerta)] opacity-50">
             <ShieldAlert size={24} />
             <span className="text-[9px] font-bold tracking-widest uppercase">Peligro</span>
           </div>
           <div className="flex flex-col items-center gap-1 text-[var(--color-azul-tech)] opacity-50">
             <ShieldCheck size={24} />
             <span className="text-[9px] font-bold tracking-widest uppercase">Seguro</span>
           </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-2">
        <p className="text-xs text-[#787774] tracking-wide font-medium">
          DESLIZA PARA EMPEZAR EL TEST
        </p>
        <button 
          onClick={onNext}
          className="text-[10px] font-bold text-[var(--color-naranja-kuska)] uppercase tracking-widest hover:underline"
        >
          O toca aquí para empezar
        </button>
      </div>
    </div>
  )
}


export function OnboardingFlow({ onComplete, updateProfile }) {
  const [currentStep, setCurrentStep] = useState(0)

  const handleNext = () => setCurrentStep(p => p + 1)
  
  const handleSelect = (key, value) => {
    updateProfile(key, value)
    handleNext()
  }

  // Mapeo de componentes por paso
  const steps = [
    <StepHook key="hook" onNext={handleNext} />,
    <StepHabits key="habits" onSelect={handleSelect} />,
    <StepConfidence key="confidence" onSelect={handleSelect} />,
    <StepCalibrating key="calibrating" onNext={handleNext} />,
    <StepTutorial key="tutorial" onNext={onComplete} />
  ]

  // Barra superior de progreso visible solo en pasos de recolección de datos
  const showProgress = currentStep === 1 || currentStep === 2

  return (
    <motion.div 
      className="absolute inset-0 w-full h-full bg-[var(--bg-crema)] rounded-2xl flex flex-col p-8 z-20 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <AnimatePresence>
        {showProgress && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex justify-between items-center w-full mb-4 absolute top-8 left-0 px-8 z-30"
          >
            <span className="font-mono text-[10px] tracking-[0.2em] font-bold text-[#787774] uppercase">
              Perfil
            </span>
            <div className="flex gap-1.5">
              {[1, 2].map((stepIdx) => (
                <div 
                  key={stepIdx} 
                  className={`h-1 rounded-full transition-all duration-300 ${stepIdx === currentStep ? 'w-6 bg-[var(--text-main)]' : 'w-2 bg-[var(--color-muted-border)]'}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex flex-col w-full h-full pt-6"
        >
          {steps[currentStep]}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
