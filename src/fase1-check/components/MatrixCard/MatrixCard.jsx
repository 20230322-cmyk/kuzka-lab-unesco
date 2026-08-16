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
      className="absolute inset-0 w-full h-full bg-white rounded-3xl flex flex-col p-6 border border-minimal shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
    >
      <div className="flex justify-center items-center mb-6">
        <div className="bg-[var(--color-naranja-kuska)]/10 px-4 py-2 rounded-full flex items-center gap-2">
          <Grid size={16} className="text-[var(--color-naranja-kuska)]" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-naranja-kuska)]">
            Cuarentena Ética
          </span>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center text-center px-2">
        <p className="text-lg leading-relaxed font-bold text-[var(--text-main)] mb-2">
          {data.content}
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-6">
        <button 
          onClick={() => handleDecision('Buena Práctica')}
          className="w-full py-4 rounded-2xl font-bold text-sm bg-[var(--color-naranja-kuska)] text-white hover:opacity-90 active:scale-[0.98] transition-all"
        >
          BUENA PRÁCTICA
        </button>
        <button 
          onClick={() => handleDecision('Mala Práctica')}
          className="w-full py-4 rounded-2xl font-bold text-sm bg-white border-2 border-[var(--text-main)] text-[var(--text-main)] hover:bg-[var(--bg-crema)] active:scale-[0.98] transition-all"
        >
          MALA PRÁCTICA
        </button>
      </div>
    </motion.div>
  )
}
