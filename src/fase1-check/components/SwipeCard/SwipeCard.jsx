import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ShieldAlert, ShieldCheck, Image as ImageIcon } from 'lucide-react'

export function SwipeCard({ data, onSwipe }) {
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
      className="absolute inset-0 w-full h-full bg-white rounded-xl flex flex-col items-center justify-center p-6 border-minimal outline-fondo touch-none cursor-grab active:cursor-grabbing will-change-transform shadow-minimal"
      style={{ x, rotate, opacity, scale, borderColor }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      onDragEnd={(e, { offset }) => {
        const swipe = offset.x
        if (swipe < -100) onSwipe(-1)
        else if (swipe > 100) onSwipe(1)
      }}
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -40, transition: { duration: 0.2 } }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Indicadores superpuestos de Swipe */}
      <motion.div style={{ opacity: leftIndicatorOpacity }} className="absolute top-6 right-6 p-2 rounded-full border border-[var(--color-rojo-alerta)] text-[var(--color-rojo-alerta)] rotate-12">
        <ShieldAlert size={24} />
      </motion.div>
      <motion.div style={{ opacity: rightIndicatorOpacity }} className="absolute top-6 left-6 p-2 rounded-full border border-[var(--color-azul-tech)] text-[var(--color-azul-tech)] -rotate-12">
        <ShieldCheck size={24} />
      </motion.div>

      <div className="flex-1 flex flex-col items-center justify-center text-center gap-8">
        <div className="w-24 h-24 rounded-2xl bg-[var(--bg-crema)] border border-minimal shadow-minimal flex items-center justify-center text-[var(--color-muted-border)] overflow-hidden">
          <ImageIcon size={32} strokeWidth={1} />
        </div>
        <p className="text-xl leading-relaxed text-[var(--text-main)] font-medium max-w-[280px]">
          {data.content}
        </p>
      </div>

      <div className="w-full flex justify-between text-[10px] tracking-[0.15em] uppercase font-bold text-[#787774] mt-8">
        <span>← Peligro</span>
        <span>Seguro →</span>
      </div>
    </motion.div>
  )
}
