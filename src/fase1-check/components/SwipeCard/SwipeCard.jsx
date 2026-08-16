import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ShieldAlert, ShieldCheck, Image as ImageIcon } from 'lucide-react'

export function SwipeCard({ data, onComplete, progress }) {
  const x = useMotionValue(0)
  
  const rotate = useTransform(x, [-200, 200], [-8, 8])
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 1, 1, 1, 0.5])
  const scale = useTransform(x, [-200, 0, 200], [0.95, 1, 0.95])
  
  const leftIndicatorOpacity = useTransform(x, [0, -50, -150], [0, 0.8, 1])
  const rightIndicatorOpacity = useTransform(x, [0, 50, 150], [0, 0.8, 1])

  return (
    <div className="absolute inset-0 w-full h-full flex flex-col z-10 overflow-y-auto no-scrollbar">


      <div className="flex-1 w-full lg:max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center px-6 lg:px-0 pt-24 lg:pt-16 pb-4 gap-8 lg:gap-10 my-auto">
      
      {/* Texto fijo */}
      <div className="w-full max-w-[320px] lg:max-w-[400px] text-center lg:text-left mb-4 lg:mb-0 flex flex-col items-center lg:items-start gap-5 shrink-0">
        <p className="font-main text-xl lg:text-3xl font-medium leading-[1.4] text-[var(--text-main)] tracking-tight">
          "{data.content}"
        </p>
        <div className="hidden lg:block mt-2">
          <h3 className="text-[11px] tracking-[0.2em] font-mono uppercase text-[#DE711E] font-bold bg-[#DE711E]/10 inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-[#DE711E]/20">
            {data.type || "Evidencia Detectada"}
          </h3>
        </div>
      </div>

      {/* Área interactiva */}
      <div className="relative w-full lg:w-[280px] max-w-[260px] lg:max-w-[280px] flex flex-col items-center justify-center shrink-0">
        <motion.div
          className="relative w-full aspect-[4/5] rounded-[24px] bg-white border-minimal shadow-minimal flex flex-col items-center justify-center overflow-hidden touch-none cursor-grab active:cursor-grabbing will-change-transform z-20"
          style={{ x, rotate, opacity, scale }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.7}
          onDragEnd={(e, { offset }) => {
            const swipe = offset.x
            if (swipe < -100) onComplete(!data.isSafe)
            else if (swipe > 100) onComplete(data.isSafe)
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

        {/* Nombre del caso fijo debajo solo en móvil */}
        <div className="w-full text-center mt-8 lg:hidden">
          <h3 className="text-[10px] tracking-[0.2em] font-mono uppercase text-[#DE711E] font-bold bg-[#DE711E]/10 inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-[#DE711E]/20">
            {data.type || "Evidencia Detectada"}
          </h3>
        </div>
      </div>

      </div>
    </div>
  )
}
