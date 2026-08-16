import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import { Button } from '../ui/Button'
import { Bug, Smartphone, Tv, MessageCircle, ShieldAlert, ShieldCheck, Search, Grid } from 'lucide-react'

// --- Sub-componentes para pasos interactivos ---

const StepHook = ({ onNext }) => (
  <div className="flex-1 flex flex-col items-center justify-center text-center gap-8 w-full h-full">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: [1, 1.06, 1],
        rotate: [0, -3, 3, -1, 0],
        y: [0, -4, 0],
        opacity: 1
      }}
      transition={{ 
        scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        opacity: { duration: 0.4 }
      }}
      className="text-[var(--color-rojo-alerta)] mb-4"
    >
      <Bug size={68} strokeWidth={1.5} />
    </motion.div>
    <div className="flex flex-col gap-5 items-center mt-2">
      <h2 className="font-logo text-6xl lg:text-7xl tracking-tight text-[var(--text-main)] leading-[0.95]">
        Pandem<span className="text-[var(--color-rojo-alerta)]">IA</span>
      </h2>
      <p className="text-base font-main font-medium leading-relaxed text-[var(--text-main)]/80 max-w-[300px]">
        <strong className="text-[var(--color-rojo-alerta)] font-mono tracking-wider font-bold">¿SOBREVIVIRÁS?</strong><br />
        Tus defensas cognitivas están a prueba.
      </p>
    </div>
    <div className="w-full mt-auto pt-8 flex justify-center">
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        animate={{
          scale: [1, 1.025, 1],
          boxShadow: [
            "0 4px 14px rgba(222, 113, 30, 0.25)",
            "0 6px 22px rgba(222, 113, 30, 0.5)",
            "0 4px 14px rgba(222, 113, 30, 0.25)"
          ]
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        onClick={onNext}
        className="w-full max-w-[320px] py-4 px-8 bg-[var(--color-naranja-kuska)] text-white font-mono font-bold text-sm tracking-wider uppercase rounded-xl cursor-pointer hover:bg-[var(--color-naranja-kuska)]/95 transition-all"
      >
        EVALUAR MIS DEFENSAS
      </motion.button>
    </div>
  </div>
)

const StepHabits = ({ onSelect }) => {
  const options = [
    { id: 'social', label: 'Redes Sociales', desc: 'TikTok, X, Instagram', icon: <Smartphone size={20} className="text-[var(--color-azul-tech)]"/>, bg: 'bg-[#EBF2FF]' },
    { id: 'messaging', label: 'Mensajería', desc: 'WhatsApp, Telegram', icon: <MessageCircle size={20} className="text-[var(--color-naranja-kuska)]"/>, bg: 'bg-[#FCEADE]' },
    { id: 'traditional', label: 'Tradicional', desc: 'TV, Web, Periódicos', icon: <Tv size={20} className="text-[var(--color-rojo-alerta)]"/>, bg: 'bg-[#FAE1D9]' }
  ]

  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center gap-8 w-full h-full">
      <h3 className="font-logo text-4xl tracking-tight text-[var(--text-main)] leading-[1.1]">
        ¿Dónde consumes<br/><span className="text-[var(--color-azul-tech)]">más noticias?</span>
      </h3>
      <div className="flex flex-col gap-3 w-full mt-4">
        {options.map((opt) => (
          <button 
            key={opt.id}
            onClick={() => onSelect('source', opt.id)}
            className="w-full bg-white border-minimal outline-fondo p-4 rounded-xl flex items-center gap-4 hover:bg-[#FDF6E3] hover:border-[var(--color-amarillo-radar)] transition-colors text-left"
          >
            <div className={`p-3 rounded-lg ${opt.bg}`}>
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
        ¿Qué tan bueno eres<br/><span className="text-[var(--color-naranja-kuska)]">detectando estafas?</span>
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
  return (
    <div className="flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-evenly gap-8 lg:gap-16 w-full h-full overflow-y-auto pb-8 lg:pb-0">
      
      {/* Columna Izquierda: Header */}
      <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
        <h3 className="font-logo text-5xl lg:text-7xl tracking-tight text-[var(--text-main)] leading-[0.95]">
          ENTRENA TU<br/><span className="text-[var(--color-naranja-kuska)]">INSTINTO</span>
        </h3>
        <p className="font-mono text-sm lg:text-base text-[var(--text-main)] max-w-[320px] lg:max-w-none leading-relaxed">
          El virus usa tres tácticas principales. Conoce tus herramientas de defensa antes de entrar a la zona de cuarentena.
        </p>
        <div className="hidden lg:block mt-8 w-full max-w-[300px]">
          <button onClick={onNext} className="w-full py-4 bg-[var(--text-main)] text-[var(--bg-crema)] font-mono uppercase tracking-widest text-sm font-bold rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
            INICIAR AUDITORÍA
          </button>
        </div>
      </div>

      {/* Columna Derecha: Bento Grid */}
      <div className="w-full lg:w-[50%] flex flex-col gap-4 max-w-[400px] lg:max-w-none">
        
        {/* Radar */}
        <div className="bg-white border-minimal shadow-minimal rounded-[20px] p-5 lg:p-6 flex items-start gap-4 lg:gap-5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-amarillo-radar)]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <div className="shrink-0 w-12 h-12 rounded-full bg-[var(--color-rojo-alerta)]/10 flex items-center justify-center border-minimal">
             <ShieldAlert size={20} className="text-[var(--color-rojo-alerta)]" />
          </div>
          <div className="flex flex-col relative z-10 pt-1">
            <span className="font-bold text-[var(--text-main)] font-mono uppercase tracking-widest text-[11px] lg:text-xs">Radar (Swipe)</span>
            <span className="text-xs lg:text-sm text-[var(--text-main)]/70 mt-1 leading-relaxed">Arrastra la evidencia para clasificarla como Peligro (Izquierda) o Segura (Derecha).</span>
          </div>
        </div>

        {/* Laboratorio */}
        <div className="bg-white border-minimal shadow-minimal rounded-[20px] p-5 lg:p-6 flex items-start gap-4 lg:gap-5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-azul-tech)]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <div className="shrink-0 w-12 h-12 rounded-full bg-[var(--color-azul-tech)]/10 flex items-center justify-center border-minimal">
             <Search size={20} className="text-[var(--color-azul-tech)]" />
          </div>
          <div className="flex flex-col relative z-10 pt-1">
            <span className="font-bold text-[var(--text-main)] font-mono uppercase tracking-widest text-[11px] lg:text-xs">Lab. Forense (Lupa)</span>
            <span className="text-xs lg:text-sm text-[var(--text-main)]/70 mt-1 leading-relaxed">Mantén presionado sobre la imagen para auditar sus metadatos y revelar pistas ocultas.</span>
          </div>
        </div>

        {/* Matrix */}
        <div className="bg-white border-minimal shadow-minimal rounded-[20px] p-5 lg:p-6 flex items-start gap-4 lg:gap-5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#956400]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <div className="shrink-0 w-12 h-12 rounded-full bg-[var(--color-amarillo-radar)]/20 flex items-center justify-center border-minimal">
             <Grid size={20} className="text-[#956400]" />
          </div>
          <div className="flex flex-col relative z-10 pt-1">
            <span className="font-bold text-[var(--text-main)] font-mono uppercase tracking-widest text-[11px] lg:text-xs">Cuarentena Ética</span>
            <span className="text-xs lg:text-sm text-[var(--text-main)]/70 mt-1 leading-relaxed">Analiza la situación descrita y clasifícala estrictamente como buena o mala práctica digital.</span>
          </div>
        </div>

      </div>

      <div className="w-full mt-6 flex justify-center lg:hidden max-w-[320px]">
        <button onClick={onNext} className="w-full py-4 bg-[var(--text-main)] text-[var(--bg-crema)] font-mono uppercase tracking-widest text-xs font-bold rounded-xl shadow-lg active:scale-[0.98] transition-all">
          INICIAR AUDITORÍA
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
      className="absolute inset-0 w-full h-full bg-[var(--bg-crema)] flex flex-col p-6 lg:p-12 z-20 overflow-hidden"
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
