import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ShieldAlert, ShieldCheck, Image as ImageIcon } from 'lucide-react'

export function SwipeCard({ data, onComplete }) {
  const x = useMotionValue(0)
  
  const rotate = useTransform(x, [-200, 200], [-8, 8])
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 1, 1, 1, 0.5])
  const scale = useTransform(x, [-200, 0, 200], [0.95, 1, 0.95])
  
  const leftIndicatorOpacity = useTransform(x, [0, -40, -120], [0, 0.8, 1])
  const rightIndicatorOpacity = useTransform(x, [0, 40, 120], [0, 0.8, 1])

  const handleDecision = (claimedReal) => {
    // Si el usuario dice que es real (claimedReal === true), es correcto si data.isSafe es true.
    // Si el usuario dice que es falso/IA (claimedReal === false), es correcto si data.isSafe es false.
    const isCorrect = claimedReal === data.isSafe
    onComplete(isCorrect)
  }

  return (
    <div className="absolute inset-0 w-full h-full flex flex-col lg:flex-row items-center justify-center lg:justify-evenly p-6 lg:p-12 gap-8 overflow-y-auto">
      
      {/* Texto descriptivo del caso */}
      <div className="w-full max-w-[320px] lg:max-w-[450px] text-center lg:text-left mb-2 lg:mb-0 flex flex-col items-center lg:items-start gap-4 lg:gap-6">
        <div className="inline-flex w-fit bg-[var(--color-rojo-alerta)]/10 px-3.5 py-1.5 rounded-full items-center gap-2 border-minimal">
          <ShieldAlert size={16} className="text-[var(--color-rojo-alerta)]" />
          <span className="text-[10px] lg:text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-rojo-alerta)] font-mono">
            {data.type || "Triaje Rápido"}
          </span>
        </div>
        <p className="text-base md:text-xl lg:text-2xl leading-relaxed text-[var(--text-main)] font-medium font-mono">
          {data.content}
        </p>
        <p className="text-xs text-[#787774] hidden lg:block">
          💡 Desliza la tarjeta o usa los botones para clasificar.
        </p>
      </div>

      {/* Área interactiva */}
      <div className="relative w-full lg:w-auto max-w-[300px] lg:max-w-[400px] flex flex-col items-center justify-center">
        <motion.div
          className="relative w-full aspect-[4/5] rounded-[24px] bg-white border-minimal shadow-minimal flex flex-col items-center justify-center overflow-hidden touch-none cursor-grab active:cursor-grabbing will-change-transform z-20"
          style={{ x, rotate, opacity, scale }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.7}
          onDragEnd={(e, { offset }) => {
            const swipe = offset.x
            if (swipe < -80) handleDecision(false) // Deslizó a la izquierda (Falso / IA)
            else if (swipe > 80) handleDecision(true) // Deslizó a la derecha (Es Real)
          }}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -40, transition: { duration: 0.2 } }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <motion.div style={{ opacity: leftIndicatorOpacity }} className="absolute inset-0 z-50 bg-[var(--color-rojo-alerta)]/95 flex flex-col items-center justify-center gap-4">
            <ShieldAlert size={64} className="text-white drop-shadow-sm" />
            <span className="text-white font-mono font-bold tracking-widest uppercase text-base lg:text-xl">Falso / IA</span>
          </motion.div>
          <motion.div style={{ opacity: rightIndicatorOpacity }} className="absolute inset-0 z-50 bg-[var(--color-azul-tech)]/95 flex flex-col items-center justify-center gap-4">
            <ShieldCheck size={64} className="text-white drop-shadow-sm" />
            <span className="text-white font-mono font-bold tracking-widest uppercase text-base lg:text-xl">Es Real</span>
          </motion.div>

          {data.image ? (
            <img src={data.image} alt="Caso" className="w-full h-full object-cover" />
          ) : (
            <ImageIcon size={48} className="text-[var(--text-main)]/30" strokeWidth={1.5} />
          )}
        </motion.div>

        {/* Botones de acción complementarios para accesibilidad y desktop */}
        <div className="w-full flex gap-3 mt-5">
          <button 
            onClick={() => handleDecision(false)}
            className="flex-1 py-3.5 px-3 rounded-2xl font-bold text-xs lg:text-sm uppercase tracking-wider bg-[var(--color-rojo-alerta)] text-white hover:opacity-95 active:scale-[0.98] transition-all shadow-sm font-mono flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShieldAlert size={16} />
            <span>Falso / IA</span>
          </button>
          <button 
            onClick={() => handleDecision(true)}
            className="flex-1 py-3.5 px-3 rounded-2xl font-bold text-xs lg:text-sm uppercase tracking-wider bg-white border-minimal text-[var(--text-main)] hover:bg-[var(--bg-crema)] active:scale-[0.98] transition-all font-mono flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShieldCheck size={16} className="text-[var(--color-azul-tech)]" />
            <span>Es Real</span>
          </button>
        </div>
      </div>

    </div>
  )
}
