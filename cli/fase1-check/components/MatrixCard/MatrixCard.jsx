import React from 'react'
import { motion } from 'framer-motion'
import { Grid, ThumbsDown, ThumbsUp } from 'lucide-react'

export function MatrixCard({ data, onComplete }) {
  const handleDecision = (decision) => {
    const correct = decision === data.expectedQuadrant
    onComplete(correct)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -20, filter: 'blur(10px)' }}
      className="absolute inset-0 w-full h-full flex flex-col lg:flex-row items-center justify-center lg:justify-evenly p-6 lg:p-12 gap-8 overflow-y-auto"
    >
      <div className="w-full max-w-[320px] lg:max-w-[450px] text-center lg:text-left mb-2 lg:mb-0 flex flex-col items-center lg:items-start gap-4 lg:gap-6">
        <div className="inline-flex w-fit bg-[var(--color-amarillo-radar)]/20 px-3.5 py-1.5 rounded-full items-center gap-2 border-minimal">
          <Grid size={16} className="text-[#956400]" />
          <span className="text-[10px] lg:text-xs font-bold tracking-[0.15em] uppercase text-[#956400] font-mono">
            Cuarentena Ética
          </span>
        </div>
        <p className="text-base md:text-xl lg:text-2xl leading-relaxed text-[var(--text-main)] font-medium font-mono">
          {data.content}
        </p>
        <p className="text-xs text-[#787774] hidden lg:block">
          ⚖️ Evalúa la conducta descrita y dictamina si es una Buena o Mala Práctica digital.
        </p>
      </div>
      
      <div className="w-full lg:w-auto max-w-[300px] lg:max-w-[400px] flex flex-col items-center justify-center">
        {data.image && (
          <div className="w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-minimal border-minimal bg-white flex items-center justify-center">
            <img src={data.image} alt="Caso" className="w-full h-full object-cover" />
          </div>
        )}

        <div className="w-full flex gap-3 mt-5">
          <button 
            onClick={() => handleDecision('Mala Práctica')}
            className="flex-1 py-3.5 px-3 rounded-2xl font-bold text-xs lg:text-sm uppercase tracking-wider bg-white border-minimal text-[var(--text-main)] hover:bg-[var(--bg-crema)] active:scale-[0.98] transition-all font-mono flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <ThumbsDown size={16} className="text-[var(--color-rojo-alerta)]" />
            <span>Mala Práctica</span>
          </button>
          <button 
            onClick={() => handleDecision('Buena Práctica')}
            className="flex-1 py-3.5 px-3 rounded-2xl font-bold text-xs lg:text-sm uppercase tracking-wider bg-[var(--color-naranja-kuska)] text-white hover:opacity-95 active:scale-[0.98] transition-all shadow-sm font-mono flex items-center justify-center gap-2 cursor-pointer"
          >
            <ThumbsUp size={16} />
            <span>Buena Práctica</span>
          </button>
        </div>
      </div>
    </motion.div>
  )
}
