import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Hand, ArrowLeft, ArrowRight, ShieldAlert, ShieldCheck } from 'lucide-react'

export function TutorialCard({ level, onComplete, progress }) {
  const x = useMotionValue(0)
  
  const rotate = useTransform(x, [-200, 200], [-8, 8])
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 1, 1, 1, 0.5])
  const scale = useTransform(x, [-200, 0, 200], [0.95, 1, 0.95])
  
  const leftIndicatorOpacity = useTransform(x, [0, -50, -150], [0, 0.8, 1])
  const rightIndicatorOpacity = useTransform(x, [0, 50, 150], [0, 0.8, 1])

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 100 || info.offset.x < -100) {
      onComplete()
    }
  }

  if (level !== 1) {
    onComplete()
    return null
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="absolute inset-0 w-full h-full bg-[var(--bg-crema)] z-40 overflow-y-auto no-scrollbar flex flex-col"
    >
      {/* Barra de Progreso Lineal (Estilo Layout) */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full flex flex-col items-center justify-center shrink-0 pt-6 pb-2 px-6"
      >
        <div className="w-full lg:max-w-5xl mx-auto h-[4px] bg-[#EAEAEA] rounded-full overflow-hidden border border-[var(--text-main)]/10">
          <motion.div 
            className="h-full bg-[var(--text-main)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Contenedor principal estilo SwipeCard */}
      <div className="flex-1 w-full lg:max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center px-6 lg:px-0 pt-24 lg:pt-16 pb-4 gap-8 lg:gap-10 my-auto">
        
        {/* Texto explicativo (Izquierda en Desktop) */}
        <div className="w-full max-w-[320px] lg:max-w-[400px] text-center lg:text-left mb-4 lg:mb-0 flex flex-col items-center lg:items-start gap-4 lg:gap-5 shrink-0">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-[10px] lg:text-xs font-bold tracking-[0.2em] text-[#787774] uppercase bg-black/5 px-4 py-2 rounded-full hidden lg:inline-flex"
          >
            Modo Entrenamiento
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-logo text-4xl lg:text-5xl font-bold tracking-tighter text-[var(--text-main)] leading-[0.9]"
          >
            Desliza para<br/>responder.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-main text-sm lg:text-lg font-medium text-[var(--text-main)]/70 leading-relaxed max-w-[280px] lg:max-w-[380px]"
          >
            Arrastra la tarjeta hacia la <strong className="text-[var(--color-rojo-alerta)]">izquierda</strong> o <strong className="text-[var(--color-azul-tech)]">derecha</strong> para probar los controles biométricos.
          </motion.p>
        </div>

        {/* Área interactiva (Derecha en Desktop) */}
        <div className="relative w-full lg:w-[280px] max-w-[260px] lg:max-w-[280px] flex flex-col items-center justify-center shrink-0">
          
          {/* Indicadores Laterales Fantasmas */}
          <div className="absolute inset-0 flex items-center justify-between px-[-20px] lg:px-[-30px] pointer-events-none z-0">
             <motion.div 
               initial={{ opacity: 0, x: 20 }} animate={{ opacity: 0.5, x: -40 }} transition={{ delay: 0.5 }}
               className="flex flex-col items-center gap-2"
             >
               <ArrowLeft size={24} color="var(--color-rojo-alerta)" className="hidden lg:block" />
               <ArrowLeft size={18} color="var(--color-rojo-alerta)" className="lg:hidden" />
               <span className="font-mono text-[9px] font-bold text-[var(--color-rojo-alerta)] uppercase tracking-widest hidden sm:block">Peligro</span>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, x: -20 }} animate={{ opacity: 0.5, x: 40 }} transition={{ delay: 0.5 }}
               className="flex flex-col items-center gap-2"
             >
               <ArrowRight size={24} color="var(--color-azul-tech)" className="hidden lg:block" />
               <ArrowRight size={18} color="var(--color-azul-tech)" className="lg:hidden" />
               <span className="font-mono text-[9px] font-bold text-[var(--color-azul-tech)] uppercase tracking-widest hidden sm:block">Seguro</span>
             </motion.div>
          </div>

          <motion.div
            className="relative w-full aspect-[4/5] rounded-[24px] bg-white border-minimal shadow-minimal flex flex-col items-center justify-center overflow-hidden touch-none cursor-grab active:cursor-grabbing will-change-transform z-20"
            style={{ x, rotate, opacity, scale }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Overlays Dinámicos */}
            <motion.div style={{ opacity: leftIndicatorOpacity }} className="absolute inset-0 z-30 bg-[var(--color-rojo-alerta)]/95 flex flex-col items-center justify-center gap-3">
              <ShieldAlert size={56} className="text-white drop-shadow-sm" />
              <span className="text-white font-mono font-bold tracking-widest uppercase text-sm lg:text-lg">Falso / IA</span>
            </motion.div>
            <motion.div style={{ opacity: rightIndicatorOpacity }} className="absolute inset-0 z-30 bg-[var(--color-azul-tech)]/95 flex flex-col items-center justify-center gap-3">
              <ShieldCheck size={56} className="text-white drop-shadow-sm" />
              <span className="text-white font-mono font-bold tracking-widest uppercase text-sm lg:text-lg">Es Real</span>
            </motion.div>

            {/* Grid pattern background */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(var(--text-main) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

            <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#FBF9F5] flex items-center justify-center mb-4 shadow-inner border border-[var(--text-main)]/5">
                <Hand size={28} className="text-[var(--text-main)]/50" />
              </div>
              <h3 className="font-main font-bold text-base lg:text-lg text-[var(--text-main)] mb-2">Tu Turno</h3>
            </div>

            {/* Animated Hand Guiding */}
            <motion.div 
              className="absolute bottom-6 lg:bottom-8 z-20 pointer-events-none"
              animate={{ x: [-30, 30, -30] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-10 h-10 rounded-full bg-[var(--text-main)]/5 flex items-center justify-center backdrop-blur-sm shadow-sm border border-[var(--text-main)]/10">
                <Hand size={16} className="text-[var(--text-main)]" />
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </motion.div>
  )
}
