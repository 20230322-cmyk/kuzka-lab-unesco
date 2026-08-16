import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import { Button } from '../ui/Button'
import { Bug, Smartphone, Tv, MessageCircle, ShieldAlert, ShieldCheck, Search, Grid } from 'lucide-react'

// --- Sub-componentes para pasos interactivos ---

const StepHook = ({ onNext }) => (
  <div className="flex-1 flex flex-col items-center justify-center text-center gap-8 w-full h-full">
    <motion.div
      initial={{ scale: 0.8, opacity: 0, rotate: 0 }}
      animate={{ 
        rotate: [0, 0, -360, -360],
        scale: [1, 1.03, 1],
        opacity: 1
      }}
      transition={{ 
        rotate: { duration: 12, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.6, 1] },
        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        opacity: { duration: 0.4 }
      }}
      className="flex items-center justify-center w-32 h-32 mb-2"
    >
      <div style={{ transform: 'translateY(30px)' }}>
        <motion.div 
          animate={{ rotate: [0, 0, 90, 90, 45, 15, 75, 15, 75, 45, 0, 0] }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            times: [0, 0.1, 0.2, 0.6, 0.65, 0.68, 0.71, 0.74, 0.77, 0.8, 0.9, 1] 
          }}
          className="text-[var(--color-rojo-alerta)] drop-shadow-md origin-center"
        >
          <Bug size={84} strokeWidth={1.5} />
        </motion.div>
      </div>
    </motion.div>
    <div className="flex flex-col gap-5 items-center mt-2">
      <h2 className="font-logo font-bold text-6xl lg:text-7xl tracking-tight text-[var(--text-main)] leading-[0.95]">
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
    { id: 'social', label: 'Redes Sociales', desc: 'TikTok, X, Instagram', icon: <Smartphone size={24} className="text-[var(--color-azul-tech)]"/>, bg: 'bg-[#EBF2FF]' },
    { id: 'messaging', label: 'Mensajería', desc: 'WhatsApp, Telegram', icon: <MessageCircle size={24} className="text-[var(--color-naranja-kuska)]"/>, bg: 'bg-[#FCEADE]' },
    { id: 'traditional', label: 'Tradicional', desc: 'TV, Web, Periódicos', icon: <Tv size={24} className="text-[var(--color-rojo-alerta)]"/>, bg: 'bg-[#FAE1D9]' }
  ]

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col pb-6">
      <div className="my-auto flex flex-col items-center text-center gap-8 w-full pt-4">
        <h3 className="font-main font-semibold text-2xl lg:text-3xl tracking-tight text-[var(--text-main)] leading-snug px-4">
          ¿Dónde consumes<br/><span className="text-[var(--color-azul-tech)]">más noticias?</span>
        </h3>
        <div className="flex flex-col lg:flex-row justify-center gap-4 w-full max-w-[320px] lg:max-w-4xl mt-2 px-4 lg:px-0">
          {options.map((opt) => (
            <button 
              key={opt.id}
              onClick={() => onSelect('source', opt.id)}
              className="flex-1 w-full bg-white border-minimal outline-fondo p-5 lg:p-6 rounded-xl flex flex-col items-center justify-center gap-3 lg:gap-4 hover:bg-[#FDF6E3] hover:border-[var(--color-amarillo-radar)] transition-all hover:-translate-y-1 text-center"
            >
              <div className={`p-4 rounded-full ${opt.bg}`}>
                {opt.icon}
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-base text-[var(--text-main)]">{opt.label}</span>
                <span className="text-xs text-[#787774] mt-1">{opt.desc}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

const StepConfidence = ({ onSelect }) => {
  const options = [
    { id: 'vulnerable', label: 'Un poco', desc: 'Me cuesta distinguir la verdad', color: 'bg-[var(--color-rojo-alerta)]' },
    { id: 'average', label: 'Más o menos', desc: 'A veces dudo de lo que veo', color: 'bg-[var(--text-main)]' },
    { id: 'expert', label: 'Muy bueno', desc: 'Casi nunca me engañan', color: 'bg-[var(--color-azul-tech)]' }
  ]

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col pb-6">
      <div className="my-auto flex flex-col items-center text-center gap-8 w-full pt-4">
        <h3 className="font-main font-semibold text-2xl lg:text-3xl tracking-tight text-[var(--text-main)] leading-snug px-4">
          ¿Qué tan bueno eres detectando<br/><span className="text-[var(--color-naranja-kuska)]">I.A. en tu día a día?</span>
        </h3>
        <div className="flex flex-col lg:flex-row justify-center gap-4 w-full max-w-[320px] lg:max-w-4xl mt-2 px-4 lg:px-0">
          {options.map((opt) => (
            <button 
              key={opt.id}
              onClick={() => onSelect('confidence', opt.id)}
              className="flex-1 w-full bg-white border-minimal outline-fondo p-5 lg:p-6 rounded-xl flex flex-col items-center justify-center gap-3 lg:gap-4 hover:bg-[#FDF6E3] hover:border-[var(--color-amarillo-radar)] transition-all hover:-translate-y-1 text-center group"
            >
              <div className={`w-4 h-4 rounded-full mb-1 ${opt.color} group-hover:scale-125 transition-transform duration-300`} />
              <div className="flex flex-col items-center">
                <span className="font-bold text-base text-[var(--text-main)]">{opt.label}</span>
                <span className="text-xs text-[#787774] mt-1">{opt.desc}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

const StepCalibrating = ({ onNext }) => {
  useEffect(() => {
    const timer = setTimeout(onNext, 3000)
    return () => clearTimeout(timer)
  }, [onNext])

  return (
    <div className="w-full h-full flex flex-col items-center justify-center pb-6">
      <div className="my-auto flex flex-col items-center justify-center w-full max-w-[320px] lg:max-w-md">
        
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="bg-white w-full border-minimal outline-fondo p-8 lg:p-10 rounded-[2.5rem] flex flex-col items-center justify-center gap-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden"
        >
          {/* Shimmer Effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FBF9F5]/60 to-transparent w-[200%]"
            animate={{ x: ['-100%', '50%'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />

          {/* Premium Radar */}
          <div className="relative w-32 h-32 flex items-center justify-center z-10">
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-[var(--text-main)]/20"
            />
            
            <div className="absolute inset-3 rounded-full overflow-hidden border border-[var(--text-main)]/10 bg-[var(--bg-crema)]">
              <motion.div 
                className="absolute top-0 right-1/2 bottom-0 left-0 bg-gradient-to-r from-transparent to-[var(--color-amarillo-radar)] opacity-60 origin-right"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="absolute w-4 h-4 rounded-full bg-[var(--color-amarillo-radar)] shadow-[0_0_15px_rgba(231,206,123,0.8)]" />
            
            {/* Concentric Rings */}
            <div className="absolute inset-8 rounded-full border border-[var(--text-main)]/5" />
            <div className="absolute inset-14 rounded-full border border-[var(--text-main)]/5" />
          </div>

          {/* Texts and Hardware-Accelerated Progress Bar */}
          <div className="flex flex-col items-center gap-4 z-10 w-full">
            <h3 className="font-main font-semibold text-xl text-[var(--text-main)]">
              Calibrando Radar
            </h3>
            
            <div className="flex flex-col items-center w-full gap-3">
              <span className="font-mono text-[10px] tracking-[0.2em] font-bold text-[var(--color-naranja-kuska)] uppercase flex gap-2">
                <motion.span 
                  animate={{ opacity: [1, 0.4, 1] }} 
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Analizando Perfil
                </motion.span>
              </span>
              
              <div className="w-full max-w-[200px] h-1.5 bg-[#E5E5E5] rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[var(--text-main)] rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  )
}

const StepTutorial = ({ onNext }) => {
  return (
    <div className="flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-10 w-full h-full pb-2 lg:pb-0">
      
      {/* Columna Izquierda: Header */}
      <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left gap-3 lg:gap-5 max-w-[340px] lg:max-w-[440px]">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-logo font-bold text-5xl lg:text-[5.5rem] tracking-tighter text-[var(--text-main)] leading-[0.85] pb-1"
        >
          ENTRENA TU<br/><span className="text-[var(--color-naranja-kuska)]">INSTINTO</span>
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-mono text-xs lg:text-sm text-[var(--text-main)]/80 leading-relaxed"
        >
          El virus usa tres tácticas principales. Conoce tus herramientas de defensa antes de entrar a la zona de cuarentena.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="hidden lg:flex w-full max-w-[240px] mt-4"
        >
          <button onClick={onNext} className="w-full h-12 flex items-center justify-center bg-[var(--text-main)] text-[var(--bg-crema)] font-mono uppercase tracking-widest text-[11px] font-bold rounded-xl shadow-[0_8px_20px_-8px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_25px_-8px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300">
            INICIAR AUDITORÍA
          </button>
        </motion.div>
      </div>

      {/* Columna Derecha: Bento Grid con Micro-Animaciones */}
      <div className="w-full lg:w-[45%] flex flex-col gap-3 lg:gap-4 max-w-[340px] lg:max-w-none">
        
        {/* Radar (Swipe) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white border-minimal shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.06)] transition-all rounded-2xl p-3.5 lg:p-6 flex items-center gap-3 lg:gap-5 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-[var(--color-amarillo-radar)]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl" />
          <div className="shrink-0 w-10 h-10 lg:w-14 lg:h-14 rounded-lg lg:rounded-[14px] bg-[#FBF9F5] flex items-center justify-center border-minimal relative overflow-hidden">
            <motion.div 
               className="absolute w-5 h-6 lg:w-7 lg:h-9 bg-white border border-dashed border-[var(--text-main)]/30 rounded-sm shadow-sm flex items-center justify-center"
               animate={{ x: [-8, 8, -8], rotate: [-6, 6, -6] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
               <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[var(--color-amarillo-radar)]/60" />
            </motion.div>
          </div>
          <div className="flex flex-col relative z-10 flex-1">
            <span className="font-bold text-[var(--text-main)] font-mono uppercase tracking-widest text-[10px] lg:text-xs">Radar (Swipe)</span>
            <span className="text-[11px] lg:text-[13px] text-[var(--text-main)]/70 mt-0.5 leading-snug">Arrastra la evidencia para clasificarla como Peligro o Segura.</span>
          </div>
        </motion.div>

        {/* Laboratorio */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white border-minimal shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.06)] transition-all rounded-2xl p-3.5 lg:p-6 flex items-center gap-3 lg:gap-5 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-[var(--color-azul-tech)]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl" />
          <div className="shrink-0 w-10 h-10 lg:w-14 lg:h-14 rounded-lg lg:rounded-[14px] bg-[#FBF9F5] flex items-center justify-center border-minimal relative overflow-hidden">
             <div className="absolute w-5 h-5 lg:w-7 lg:h-7 rounded-sm border border-[var(--color-azul-tech)]/20 bg-white" />
             <motion.div 
               className="absolute w-full h-[1.5px] bg-[var(--color-azul-tech)] shadow-[0_0_6px_rgba(29,108,255,0.8)]"
               animate={{ y: [-10, 10, -10] }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
             />
          </div>
          <div className="flex flex-col relative z-10 flex-1">
            <span className="font-bold text-[var(--text-main)] font-mono uppercase tracking-widest text-[10px] lg:text-xs">Lab. Forense</span>
            <span className="text-[11px] lg:text-[13px] text-[var(--text-main)]/70 mt-0.5 leading-snug">Mantén presionado para auditar metadatos y revelar pistas.</span>
          </div>
        </motion.div>

        {/* Matrix */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white border-minimal shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.06)] transition-all rounded-2xl p-3.5 lg:p-6 flex items-center gap-3 lg:gap-5 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-[#956400]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl" />
          <div className="shrink-0 w-10 h-10 lg:w-14 lg:h-14 rounded-lg lg:rounded-[14px] bg-[#111111] flex items-center justify-center border-minimal relative overflow-hidden">
            <motion.div 
              className="w-1.5 h-2.5 lg:w-2.5 lg:h-3.5 bg-[var(--color-amarillo-radar)]"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "steps(2)" }}
            />
          </div>
          <div className="flex flex-col relative z-10 flex-1">
            <span className="font-bold text-[var(--text-main)] font-mono uppercase tracking-widest text-[10px] lg:text-xs">Cuarentena Ética</span>
            <span className="text-[11px] lg:text-[13px] text-[var(--text-main)]/70 mt-0.5 leading-snug">Clasifica el caso estrictamente como buena o mala práctica.</span>
          </div>
        </motion.div>

      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full mt-4 flex justify-center lg:hidden max-w-[340px]"
      >
        <button onClick={onNext} className="w-full h-12 flex items-center justify-center bg-[var(--text-main)] text-[var(--bg-crema)] font-mono uppercase tracking-widest text-[10px] font-bold rounded-xl shadow-[0_8px_20px_-8px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300">
          INICIAR AUDITORÍA
        </button>
      </motion.div>

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

  // Barra de progreso visible desde el paso 1 en adelante
  const showProgress = currentStep > 0

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
            className="flex flex-col items-center justify-center w-full mb-4 absolute top-6 lg:top-8 left-0 px-8 z-30 gap-2"
          >
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((stepIdx) => (
                <div 
                  key={stepIdx} 
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    currentStep >= stepIdx 
                      ? 'w-8 bg-[var(--color-naranja-kuska)]' 
                      : 'w-8 bg-[var(--text-main)]/10'
                  }`}
                />
              ))}
            </div>
            <span className="font-mono text-[10px] tracking-[0.2em] font-bold text-[#787774] uppercase">
              Evaluación de Perfil
            </span>
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
          className={`flex-1 flex flex-col w-full h-full ${showProgress ? 'pt-20 lg:pt-16' : 'pt-2'}`}
        >
          {steps[currentStep]}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
