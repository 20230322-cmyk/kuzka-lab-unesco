import React from 'react'
import { motion } from 'framer-motion'
import { ShieldAlert, Shield, ShieldCheck } from 'lucide-react'

const PROFILES = [
  {
    max: 5,
    title: "Vulnerable Contagioso",
    desc: "Tus reflejos están comprometidos. Eres propenso a caer en phishing y dependes de la IA sin verificación. Necesitas el KUSKA KIT de emergencia.",
    color: "var(--color-rojo-alerta)",
    bg: "#FDEBEC",
    Icon: ShieldAlert
  },
  {
    max: 10,
    title: "Usuario en Autopiloto",
    desc: "Conoces la teoría, pero bajo presión tus impulsos (Sistema 1) te dominan. Aún puedes ser engañado por IA sofisticada.",
    color: "var(--color-naranja-kuska)",
    bg: "#FCEADE",
    Icon: Shield
  },
  {
    max: 15,
    title: "Auditor Cognitivo",
    desc: "¡Inmunidad alta! Haces la pausa necesaria, verificas fuentes y entiendes los riesgos éticos de la IA. Estás listo para guiar a otros.",
    color: "var(--color-azul-tech)",
    bg: "#EBF2FF",
    Icon: ShieldCheck
  }
]

export function DiagnosticCard({ score, onClaim }) {
  const profile = PROFILES.find(p => score <= p.max) || PROFILES[2]
  const { title, desc, color, bg, Icon } = profile

  return (
    <motion.div
      className="absolute inset-0 w-full h-full bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 flex flex-col items-center justify-center text-center gap-6 border border-minimal"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex flex-col gap-2 items-center">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#787774]">
          Tu Score: {score}/15
        </span>
        <h2 className="font-logo text-5xl uppercase tracking-tighter text-[var(--text-main)] mt-2">
          K-CIT RESULT
        </h2>
        <div className="w-12 h-[2px] bg-[var(--text-main)] mt-2" />
      </div>
      
      <div className="flex flex-col gap-4 w-full items-center my-4">
        <div 
          className="w-24 h-24 rounded-full flex items-center justify-center mb-2 shadow-minimal"
          style={{ backgroundColor: bg, color: color }}
        >
          <Icon size={40} strokeWidth={1.5} />
        </div>
        <span 
          className="text-[13px] tracking-[0.1em] uppercase font-bold"
          style={{ color: color }}
        >
          {title}
        </span>
        <p className="text-sm leading-relaxed text-[var(--text-main)] font-medium max-w-[260px] mx-auto">
          {desc}
        </p>
      </div>

      <div className="w-full mt-auto">
        <button 
          onClick={onClaim}
          className="w-full py-4 rounded-2xl font-bold text-sm bg-[var(--text-main)] text-white hover:bg-[#333] active:scale-[0.98] transition-all"
        >
          RECLAMAR MI RECETA
        </button>
      </div>
    </motion.div>
  )
}
