import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Shield, Search, Grid } from 'lucide-react'

const TRANSITIONS = {
  1: {
    icon: Shield,
    title: "NIVEL 1: TRIAJE RÁPIDO",
    subtitle: "Reflejos de Inmunología",
    desc: "Desliza a la IZQUIERDA las estafas o contenido generado por IA. Desliza a la DERECHA el contenido seguro.",
    color: "var(--color-rojo-alerta)"
  },
  2: {
    icon: Search,
    title: "NIVEL 2: LABORATORIO FORENSE",
    subtitle: "Agudeza Perceptiva",
    desc: "Mantén presionado (o pasa el cursor) sobre la imagen para utilizar tu Lupa Forense. Descubre el error y clasifica.",
    color: "var(--color-azul-tech)"
  },
  3: {
    icon: Grid,
    title: "NIVEL 3: CUARENTENA ÉTICA",
    subtitle: "Juicio y Sesgos",
    desc: "Lee el estudio de caso y clasifica tu decisión ética. ¿Es una Buena o Mala Práctica?",
    color: "var(--color-naranja-kuska)"
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
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="absolute inset-0 w-full h-full bg-white rounded-xl flex flex-col items-center justify-center p-8 border-minimal outline-fondo shadow-minimal text-center z-50"
    >
      <Icon size={48} color={data.color} strokeWidth={1.5} className="mb-6" />
      <h2 className="text-[var(--text-main)] font-bold text-xl uppercase tracking-widest font-mono mb-2">
        {data.title}
      </h2>
      <h3 className="text-[#787774] font-medium text-sm mb-8 uppercase tracking-widest">
        {data.subtitle}
      </h3>
      
      <div className="bg-[var(--bg-crema)] p-6 rounded-lg border border-[var(--color-muted-border)] w-full">
        <p className="text-sm font-medium text-[var(--text-main)] leading-relaxed">
          {data.desc}
        </p>
      </div>

      <div className="mt-8">
        <div className="w-6 h-6 border-2 border-[var(--text-main)] border-t-transparent rounded-full animate-spin mx-auto opacity-50"></div>
        <p className="text-[10px] text-[#787774] font-bold uppercase tracking-widest mt-4">Comenzando...</p>
      </div>
    </motion.div>
  )
}
