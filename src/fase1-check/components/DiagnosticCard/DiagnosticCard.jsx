import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { ThermometerSun } from 'lucide-react'

export function DiagnosticCard({ score, onClaim }) {
  // Diagnóstico mockeado (Navegante Vulnerable = 0 a 2 aciertos)
  return (
    <motion.div
      className="absolute w-full bg-white border border-[var(--color-muted-border)] rounded-2xl shadow-minimal p-10 flex flex-col items-center text-center gap-8"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex flex-col gap-2 items-center">
        <h2 className="font-logo text-5xl uppercase tracking-tighter text-[var(--text-main)]">
          DIAGNÓSTICO
        </h2>
        <div className="w-12 h-[2px] bg-[var(--text-main)] mt-2" />
      </div>
      
      <div className="flex flex-col gap-4 w-full items-center">
        <div className="w-20 h-20 rounded-full bg-[#FDEBEC] border border-[#f5d0d2] text-[#9F2F2D] flex items-center justify-center mb-2 shadow-minimal">
          <ThermometerSun size={32} strokeWidth={1.5} />
        </div>
        <span className="text-[11px] tracking-[0.1em] uppercase font-bold text-[#9F2F2D]">
          Navegante Vulnerable
        </span>
        <p className="text-sm leading-relaxed text-[#787774] max-w-[240px] mx-auto">
          La PandemIA ha comprometido severamente tus defensas. Eres un blanco fácil para la manipulación.
        </p>
      </div>

      <div className="w-full mt-2">
        <Button onClick={onClaim}>
          RECETA DIGITAL
        </Button>
      </div>
    </motion.div>
  )
}
