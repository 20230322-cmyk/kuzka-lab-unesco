import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Hand, ArrowLeft, ArrowRight } from 'lucide-react'

export function TutorialCard({ level, onComplete }) {
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-150, 150], [-10, 10])
  const colorRight = useTransform(x, [0, 100], ['rgba(29, 108, 255, 0)', 'rgba(29, 108, 255, 0.15)'])
  const colorLeft = useTransform(x, [-100, 0], ['rgba(202, 54, 6, 0.15)', 'rgba(202, 54, 6, 0)'])

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 100 || info.offset.x < -100) {
      onComplete()
    }
  }

  // Si no es el nivel 1 (Swipe), lo saltamos por ahora simulando que los demás también tendrán
  if (level !== 1) {
    onComplete()
    return null
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-6 bg-[var(--bg-crema)] z-40"
    >
      <div className="text-center mb-8">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-logo text-5xl lg:text-7xl text-[var(--text-main)] uppercase tracking-tighter"
        >
          ENTRENAMIENTO
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-[10px] lg:text-xs text-[#787774] tracking-widest uppercase mt-2 font-bold"
        >
          Demuestra que entiendes los controles
        </motion.p>
      </div>

      <div className="relative w-full max-w-[320px] aspect-[4/5] flex items-center justify-center">
        
        {/* Background Indicators */}
        <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
           <motion.div 
             initial={{ opacity: 0, x: 20 }} animate={{ opacity: 0.6, x: 0 }} transition={{ delay: 0.5 }}
             className="flex flex-col items-center gap-2"
           >
             <div className="w-12 h-12 rounded-full bg-[var(--color-rojo-alerta)]/10 flex items-center justify-center">
               <ArrowLeft size={24} color="var(--color-rojo-alerta)" />
             </div>
             <span className="font-mono text-[10px] font-bold text-[var(--color-rojo-alerta)] uppercase tracking-widest">Peligro</span>
           </motion.div>
           <motion.div 
             initial={{ opacity: 0, x: -20 }} animate={{ opacity: 0.6, x: 0 }} transition={{ delay: 0.5 }}
             className="flex flex-col items-center gap-2"
           >
             <div className="w-12 h-12 rounded-full bg-[var(--color-azul-tech)]/10 flex items-center justify-center">
               <ArrowRight size={24} color="var(--color-azul-tech)" />
             </div>
             <span className="font-mono text-[10px] font-bold text-[var(--color-azul-tech)] uppercase tracking-widest">Seguro</span>
           </motion.div>
        </div>

        {/* Draggable Card */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          style={{ x, rotate }}
          whileTap={{ scale: 0.98, cursor: "grabbing" }}
          className="relative w-full h-full bg-white rounded-3xl border-minimal shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center cursor-grab z-10 overflow-hidden"
        >
          <motion.div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: colorRight }} />
          <motion.div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: colorLeft }} />

          {/* Grid pattern background */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(var(--text-main) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

          <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 rounded-2xl bg-[#FBF9F5] flex items-center justify-center mb-6 shadow-inner border border-[var(--text-main)]/5">
              <Hand size={32} className="text-[var(--text-main)]/50" />
            </div>
            <h3 className="font-main font-bold text-xl text-[var(--text-main)] mb-3">Prueba de Swipe</h3>
            <p className="font-main text-sm text-[var(--text-main)]/70 leading-relaxed max-w-[200px]">
              Arrastra esta tarjeta hacia cualquier lado para iniciar la auditoría.
            </p>
          </div>

          {/* Animated Hand Guiding */}
          <motion.div 
            className="absolute bottom-8 z-20 pointer-events-none"
            animate={{ x: [-40, 40, -40] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-12 h-12 rounded-full bg-[var(--text-main)]/5 flex items-center justify-center backdrop-blur-sm shadow-sm border border-[var(--text-main)]/10">
              <Hand size={20} className="text-[var(--text-main)]" />
            </div>
          </motion.div>
        </motion.div>
      </div>

    </motion.div>
  )
}
