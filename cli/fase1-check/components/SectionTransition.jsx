import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Shield, Search, Grid, ArrowRight } from 'lucide-react'

const TRANSITIONS = {
  1: {
    icon: Shield,
    title: "NIVEL 1: TRIAJE RÁPIDO",
    subtitle: "Dimensión A: Reactividad e Inmunología",
    desc: "Evalúa tus reflejos ante situaciones de urgencia digital y phishing. Clasifica como FALSO o ES REAL.",
    color: "var(--color-rojo-alerta)",
    bg: "rgba(202, 54, 6, 0.08)"
  },
  2: {
    icon: Search,
    title: "NIVEL 2: LABORATORIO FORENSE",
    subtitle: "Dimensión B: Agudeza Forense Sintética",
    desc: "Usa la Lupa Forense para inspeccionar anomalías, metadatos y sellos criptográficos C2PA en la evidencia.",
    color: "var(--color-azul-tech)",
    bg: "rgba(29, 108, 255, 0.08)"
  },
  3: {
    icon: Grid,
    title: "NIVEL 3: CUARENTENA ÉTICA",
    subtitle: "Dimensión C: Juicio Ético y Sesgos",
    desc: "Evalúa dilemas éticos sobre sesgos de confirmación, privacidad Zero-Data y uso responsable de IA Generativa.",
    color: "var(--color-naranja-kuska)",
    bg: "rgba(222, 113, 30, 0.08)"
  }
}

export function SectionTransition({ level, onStart }) {
  const data = TRANSITIONS[level] || TRANSITIONS[1]
  const Icon = data.icon

  useEffect(() => {
    const timer = setTimeout(() => {
      onStart()
    }, 4500)
    return () => clearTimeout(timer)
  }, [onStart])

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="absolute inset-0 w-full h-full bg-white rounded-3xl flex flex-col items-center justify-center p-6 lg:p-12 border-minimal shadow-minimal text-center z-50 overflow-y-auto"
    >
      <div 
        className="w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-sm"
        style={{ backgroundColor: data.bg }}
      >
        <Icon size={40} color={data.color} strokeWidth={1.5} />
      </div>

      <h2 className="text-[var(--text-main)] font-bold text-2xl lg:text-3xl uppercase tracking-wider font-mono mb-1">
        {data.title}
      </h2>
      <h3 className="text-[#787774] font-medium text-xs lg:text-sm mb-6 uppercase tracking-widest font-mono">
        {data.subtitle}
      </h3>
      
      <div className="bg-[var(--bg-crema)] p-5 lg:p-6 rounded-2xl border-minimal w-full max-w-[420px] mb-8">
        <p className="text-sm lg:text-base font-medium text-[var(--text-main)] leading-relaxed font-mono">
          {data.desc}
        </p>
      </div>

      <button 
        onClick={onStart}
        className="py-3.5 px-8 bg-[var(--text-main)] text-white hover:bg-[var(--text-main)]/90 active:scale-[0.98] rounded-xl font-mono text-xs lg:text-sm font-bold uppercase tracking-widest flex items-center gap-2 cursor-pointer transition-all shadow-md"
      >
        <span>COMENZAR NIVEL</span>
        <ArrowRight size={16} />
      </button>

      <p className="text-[11px] text-[#787774] font-mono mt-4">
        Iniciando automáticamente en unos segundos...
      </p>
    </motion.div>
  )
}
