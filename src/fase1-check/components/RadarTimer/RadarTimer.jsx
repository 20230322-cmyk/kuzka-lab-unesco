import React from 'react'
import { motion } from 'framer-motion'

export function RadarTimer() {
  return (
    <div className="relative w-14 h-14 rounded-full border-minimal flex items-center justify-center overflow-hidden bg-white shadow-minimal">
      {/* Animación del barrido del radar estilo analógico */}
      <motion.div 
        className="absolute w-[50%] h-full bg-[var(--color-amarillo-radar)] opacity-30 origin-right"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{ right: '50%' }}
      />
      
      {/* Centro estático */}
      <div className="absolute w-[42px] h-[42px] rounded-full bg-[var(--bg-crema)] z-10 flex items-center justify-center border border-[var(--color-muted-border)] shadow-sm">
        <span className="font-mono text-[10px] tracking-tighter text-[var(--text-main)]">10s</span>
      </div>
      
      {/* Retícula cruzada */}
      <div className="absolute w-[1px] h-full bg-[var(--color-muted-border)] opacity-30" />
      <div className="absolute h-[1px] w-full bg-[var(--color-muted-border)] opacity-30" />
    </div>
  )
}
