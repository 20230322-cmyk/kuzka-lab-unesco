import React from 'react'
import { motion } from 'framer-motion'
import { Grid } from 'lucide-react'

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
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-between py-6"
    >
      <div className="w-full max-w-[320px] text-center mb-6 flex flex-col items-center gap-4">
        <div className="inline-flex w-fit bg-[var(--color-amarillo-radar)]/20 px-3 py-1.5 rounded-full items-center gap-2 border-minimal">
          <Grid size={14} className="text-[#956400]" />
          <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#956400]">
            Cuarentena Ética
          </span>
        </div>
        <p className="text-sm md:text-base leading-relaxed text-[var(--text-main)] font-medium font-mono">
          {data.content}
        </p>
      </div>
      
      <div className="flex-1 w-full max-w-[300px] flex flex-col items-center justify-center">
        {data.image && (
          <div className="w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-minimal border-minimal bg-white flex items-center justify-center">
            <img src={data.image} alt="Caso" className="w-full h-full object-cover" />
          </div>
        )}
      </div>

      <div className="w-full max-w-[300px] flex gap-3 mt-8">
        <button 
          onClick={() => handleDecision('Mala Práctica')}
          className="flex-1 py-4 rounded-2xl font-bold text-[11px] uppercase tracking-wider bg-white border-minimal text-[var(--text-main)] hover:bg-[var(--bg-crema)] active:scale-[0.98] transition-all font-mono"
        >
          Mala Práctica
        </button>
        <button 
          onClick={() => handleDecision('Buena Práctica')}
          className="flex-1 py-4 rounded-2xl font-bold text-[11px] uppercase tracking-wider bg-[var(--color-naranja-kuska)] text-white hover:opacity-90 active:scale-[0.98] transition-all shadow-sm font-mono"
        >
          Buena Práctica
        </button>
      </div>
    </motion.div>
  )
}
