import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

export function LupaCard({ data, onComplete }) {
  const [isRevealed, setIsRevealed] = useState(false)

  const handleReveal = () => setIsRevealed(true)
  const handleDecision = (decision) => {
    const correct = (decision === 'SAFE' && data.isSafe) || (decision === 'FAKE' && !data.isSafe)
    onComplete(correct)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -20, filter: 'blur(10px)' }}
      className="absolute inset-0 w-full h-full flex flex-col lg:flex-row items-center justify-center lg:justify-evenly p-6 lg:p-12 gap-8 overflow-y-auto"
    >
      <div className="w-full max-w-[320px] lg:max-w-[450px] text-center lg:text-left mb-2 lg:mb-0 flex flex-col items-center lg:items-start gap-4 lg:gap-8">
        <div className="inline-flex w-fit bg-[var(--color-azul-tech)]/10 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full items-center gap-2 border-minimal">
          <Search size={16} className="text-[var(--color-azul-tech)]" />
          <span className="text-[10px] lg:text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-azul-tech)]">
            Laboratorio Forense
          </span>
        </div>
        <p className="text-sm md:text-xl lg:text-2xl leading-relaxed text-[var(--text-main)] font-medium font-mono">
          {data.content}
        </p>
      </div>

      <div className="w-full lg:w-auto max-w-[300px] lg:max-w-[420px] flex flex-col items-center justify-center">
        <div 
          className="w-full aspect-[4/5] rounded-[24px] shadow-minimal border-minimal bg-white flex flex-col items-center justify-center p-0 cursor-crosshair relative overflow-hidden group transition-all"
          onMouseEnter={handleReveal}
          onTouchStart={handleReveal}
        >
          {data.image && (
            <img src={data.image} alt="Evidencia" className="absolute inset-0 w-full h-full object-cover z-0" />
          )}
          
          <div className="absolute inset-0 bg-[var(--text-main)]/30 z-10 transition-opacity group-hover:opacity-70" />

          {!isRevealed ? (
            <div className="flex flex-col items-center gap-2 text-center z-20">
              <Search size={32} className="text-white opacity-90 group-hover:scale-110 transition-transform drop-shadow-md" />
              <span className="text-[10px] lg:text-xs text-white font-bold tracking-widest drop-shadow-md font-mono uppercase">Lupa</span>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3 z-20 p-4 w-full"
            >
              <div className="w-12 lg:w-16 h-12 lg:h-16 rounded-full bg-[var(--color-rojo-alerta)] flex items-center justify-center shadow-lg">
                <Search size={24} className="text-white lg:scale-125" />
              </div>
              <div className="bg-white/95 backdrop-blur-sm p-4 w-11/12 rounded-xl shadow-lg border-minimal">
                <p className="text-[11px] lg:text-sm text-[var(--text-main)] font-bold text-center leading-relaxed font-mono">
                  Pista: {data.clue}
                </p>
              </div>
            </motion.div>
          )}
        </div>

        <div className="w-full flex gap-3 mt-6 lg:mt-8">
          <button 
            onClick={() => handleDecision('FAKE')}
            className="flex-1 py-4 lg:py-5 rounded-2xl font-bold text-[11px] lg:text-sm uppercase tracking-wider bg-[var(--color-rojo-alerta)] text-white hover:opacity-90 active:scale-[0.98] transition-all shadow-sm font-mono"
          >
            Falso / IA
          </button>
          <button 
            onClick={() => handleDecision('SAFE')}
            className="flex-1 py-4 lg:py-5 rounded-2xl font-bold text-[11px] lg:text-sm uppercase tracking-wider bg-white border-minimal text-[var(--text-main)] hover:bg-[var(--bg-crema)] active:scale-[0.98] transition-all font-mono"
          >
            Es Real
          </button>
        </div>
      </div>
    </motion.div>
  )
}
