import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ShieldAlert, Search, Grid } from 'lucide-react'

const TRANSITIONS = {
  1: {
    icon: ShieldAlert,
    levelNo: "01",
    title: "TRIAJE RÁPIDO",
    subtitle: "Reflejos de Inmunología",
    desc: "Desliza a la izquierda el contenido sospechoso, y a la derecha el seguro.",
    color: "var(--color-rojo-alerta)",
    colorBg: "rgba(202, 54, 6, 0.08)"
  },
  2: {
    icon: Search,
    levelNo: "02",
    title: "LAB. FORENSE",
    subtitle: "Agudeza Perceptiva",
    desc: "Mantén presionado sobre la evidencia para revelar anomalías ocultas.",
    color: "var(--color-azul-tech)",
    colorBg: "rgba(29, 108, 255, 0.08)"
  },
  3: {
    icon: Grid,
    levelNo: "03",
    title: "CUARENTENA ÉTICA",
    subtitle: "Juicio y Sesgos",
    desc: "Analiza el caso y clasifica si se trata de una buena o mala práctica.",
    color: "var(--color-naranja-kuska)",
    colorBg: "rgba(222, 113, 30, 0.08)"
  }
}

export function SectionTransition({ level, onStart }) {
  const data = TRANSITIONS[level]
  const Icon = data.icon

  useEffect(() => {
    const timer = setTimeout(() => {
      onStart()
    }, 4000)
    return () => clearTimeout(timer)
  }, [onStart])

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="absolute inset-0 w-full h-full bg-[var(--bg-crema)] z-50 flex flex-col items-center justify-center p-6 lg:p-12"
    >
      <div className="flex-1 flex flex-col items-center justify-center text-center w-full max-w-[340px] lg:max-w-md gap-8">
        
        {/* Animated Icon Ring */}
        <div className="relative flex items-center justify-center w-28 h-28 lg:w-32 lg:h-32">
          <motion.div 
            className="absolute inset-0 rounded-full border-[1.5px] border-dashed"
            style={{ borderColor: data.color }}
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          <div 
            className="absolute inset-2.5 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.03)]"
            style={{ backgroundColor: data.colorBg }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              <Icon size={42} color={data.color} strokeWidth={1.5} className="drop-shadow-sm" />
            </motion.div>
          </div>
        </div>

        {/* Text Headers */}
        <div className="flex flex-col items-center gap-3">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-mono text-xs font-bold tracking-[0.2em] text-[#787774] uppercase"
          >
            Nivel {data.levelNo} • {data.subtitle}
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-logo text-5xl lg:text-6xl font-bold tracking-tighter text-[var(--text-main)] leading-[0.9]"
          >
            {data.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-main text-sm lg:text-base font-medium text-[var(--text-main)]/70 leading-relaxed max-w-[280px]"
          >
            {data.desc}
          </motion.p>
        </div>

        {/* Hardware-Accelerated Progress Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full flex flex-col items-center gap-3 mt-4"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] font-bold uppercase flex gap-2" style={{ color: data.color }}>
            <motion.span 
              animate={{ opacity: [1, 0.4, 1] }} 
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Iniciando Secuencia
            </motion.span>
          </span>
          <div className="w-full h-1.5 bg-[#E5E5E5] rounded-full overflow-hidden">
            <motion.div 
              className="h-full rounded-full origin-left"
              style={{ backgroundColor: data.color }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 4, ease: "linear" }}
            />
          </div>
        </motion.div>

      </div>
    </motion.div>
  )
}
