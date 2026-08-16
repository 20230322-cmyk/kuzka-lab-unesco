import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ShieldAlert, ShieldCheck, Image as ImageIcon } from 'lucide-react'

export function SwipeCard({ data, onComplete }) {
  // Motion values para controlar el arrastre
  const x = useMotionValue(0)
  
  // Transformaciones calculadas a partir del arrastre en X
  const rotate = useTransform(x, [-200, 200], [-8, 8]) // Rotación sutil
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 1, 1, 1, 0.5]) // Desaparece al irse
  const scale = useTransform(x, [-200, 0, 200], [0.95, 1, 0.95]) // Se encoge sutilmente al tirar

  // Feedback visual de color (Rojo izquierda, Azul derecha)
  const borderColor = useTransform(
    x,
    [-150, 0, 150],
    ['var(--color-rojo-alerta)', 'var(--color-muted-border)', 'var(--color-azul-tech)']
  )

  const leftIndicatorOpacity = useTransform(x, [0, -50, -150], [0, 0.5, 1])
  const rightIndicatorOpacity = useTransform(x, [0, 50, 150], [0, 0.5, 1])

  return (
    <motion.div
      className="absolute inset-0 w-full h-full bg-white rounded-3xl flex flex-col items-center justify-center p-6 border border-minimal shadow-[0_8px_30px_rgb(0,0,0,0.04)] touch-none cursor-grab active:cursor-grabbing will-change-transform"
      style={{ x, rotate, opacity, scale, borderColor }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      onDragEnd={(e, { offset }) => {
        const swipe = offset.x
        if (swipe < -100) {
          onComplete(!data.isSafe)
        } else if (swipe > 100) {
          onComplete(data.isSafe)
        }
      }}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -40, transition: { duration: 0.2 } }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Indicadores superpuestos de Swipe */}
      <motion.div style={{ opacity: leftIndicatorOpacity }} className="absolute top-8 right-8 p-3 rounded-full bg-[var(--color-rojo-alerta)] text-white rotate-12 shadow-lg">
        <ShieldAlert size={32} />
      </motion.div>
      <motion.div style={{ opacity: rightIndicatorOpacity }} className="absolute top-8 left-8 p-3 rounded-full bg-[var(--color-azul-tech)] text-white -rotate-12 shadow-lg">
        <ShieldCheck size={32} />
      </motion.div>

      <div className="flex-1 flex flex-col items-center justify-center text-center gap-8 w-full px-2">
        <div className="w-32 h-32 rounded-3xl bg-[var(--bg-crema)] border-2 border-[var(--color-muted-border)] flex items-center justify-center text-[#787774] overflow-hidden">
          <ImageIcon size={48} strokeWidth={1.5} />
        </div>
        <p className="text-xl leading-relaxed text-[var(--text-main)] font-bold">
          {data.content}
        </p>
      </div>

      <div className="w-full flex justify-between text-[11px] tracking-[0.2em] uppercase font-bold text-[#787774] mt-8 bg-[var(--bg-crema)] py-3 px-6 rounded-full border border-[var(--color-muted-border)]">
        <span className="text-[var(--color-rojo-alerta)]">← FALSO / IA</span>
        <span className="text-[var(--color-azul-tech)]">SEGURO →</span>
      </div>
    </motion.div>
  )
}
