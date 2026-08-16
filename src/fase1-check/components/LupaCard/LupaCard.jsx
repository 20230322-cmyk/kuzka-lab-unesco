import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

export function LupaCard({ data, onComplete }) {
  const [isRevealed, setIsRevealed] = useState(false)

  const handleReveal = () => {
    setIsRevealed(true)
  }

  const handleDecision = (decision) => {
    const correct = (decision === 'SAFE' && data.isSafe) || (decision === 'FAKE' && !data.isSafe)
    onComplete(correct)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -20, filter: 'blur(10px)' }}
      className="absolute inset-0 w-full h-full bg-white rounded-3xl flex flex-col p-6 border border-minimal shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
    >
      <div className="flex justify-center items-center mb-6">
        <div className="bg-[var(--bg-crema)] px-4 py-2 rounded-full flex items-center gap-2">
          <Search size={16} className="text-[var(--color-azul-tech)]" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-azul-tech)]">
            Laboratorio Forense
          </span>
        </div>
      </div>
      
      <p className="text-lg leading-relaxed font-bold text-[var(--text-main)] mb-6 text-center px-2">
        {data.content}
      </p>

      <div 
        className="flex-1 bg-[var(--bg-crema)] rounded-2xl flex flex-col items-center justify-center p-6 cursor-crosshair border-2 border-dashed border-[var(--color-azul-tech)] relative overflow-hidden group transition-all"
        onMouseEnter={handleReveal}
        onTouchStart={handleReveal}
      >
        {!isRevealed ? (
          <div className="flex flex-col items-center gap-3 text-center">
            <Search size={32} className="text-[var(--color-azul-tech)] opacity-50 group-hover:scale-110 transition-transform" />
            <span className="text-sm text-[var(--color-azul-tech)] font-bold">MANTÉN PRESIONADO<br/>PARA USAR LUPA</span>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-[var(--color-rojo-alerta)]/10 flex items-center justify-center">
              <Search size={24} className="text-[var(--color-rojo-alerta)]" />
            </div>
            <p className="text-sm text-[var(--color-rojo-alerta)] font-bold text-center leading-relaxed">
              Pista: {data.clue}
            </p>
          </motion.div>
        )}
      </div>

      <div className="flex flex-col gap-3 mt-6">
        <button 
          onClick={() => handleDecision('FAKE')}
          className="w-full py-4 rounded-2xl font-bold text-sm bg-[var(--color-rojo-alerta)] text-white hover:opacity-90 active:scale-[0.98] transition-all"
        >
          MARCAR COMO IA / FALSO
        </button>
        <button 
          onClick={() => handleDecision('SAFE')}
          className="w-full py-4 rounded-2xl font-bold text-sm bg-white border-2 border-[var(--text-main)] text-[var(--text-main)] hover:bg-[var(--bg-crema)] active:scale-[0.98] transition-all"
        >
          ES REAL
        </button>
      </div>
    </motion.div>
  )
}
