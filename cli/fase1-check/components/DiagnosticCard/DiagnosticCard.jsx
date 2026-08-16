import React from 'react'
import { motion } from 'framer-motion'
import { ShieldAlert, Shield, ShieldCheck, ArrowRight, Zap, Search, Grid } from 'lucide-react'
import { getArchetype } from '../../utils/scoring'

const ICONS = {
  vulnerable: ShieldAlert,
  autopilot: Shield,
  auditor: ShieldCheck
}

export function DiagnosticCard({ score, dimensionScores = { reflexes: 0, forensic: 0, ethics: 0 }, onClaim }) {
  const archetype = getArchetype(score)
  const Icon = ICONS[archetype.id] || Shield

  return (
    <motion.div
      className="absolute inset-0 w-full h-full bg-white rounded-3xl shadow-minimal p-6 lg:p-10 flex flex-col items-center justify-between text-center border-minimal overflow-y-auto z-30"
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Header & Titular */}
      <div className="flex flex-col gap-1 items-center w-full">
        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#787774] font-mono">
          DIAGNÓSTICO K-CIT
        </span>
        <h2 className="font-logo text-4xl lg:text-5xl uppercase tracking-tight text-[var(--text-main)] mt-1">
          RESULTADO OFICIAL
        </h2>
        <div className="w-12 h-[2px] bg-[var(--text-main)] mt-1" />
      </div>
      
      {/* Tarjeta de Arquetipo */}
      <div className="flex flex-col items-center w-full max-w-[420px] my-4 gap-3">
        <div 
          className="w-20 h-20 rounded-full flex items-center justify-center shadow-sm"
          style={{ backgroundColor: archetype.bg, color: archetype.color }}
        >
          <Icon size={40} strokeWidth={1.5} />
        </div>

        <div className="flex flex-col gap-1">
          <span 
            className="text-lg lg:text-xl font-bold tracking-wider uppercase font-mono"
            style={{ color: archetype.color }}
          >
            {archetype.title}
          </span>
          <span className="text-xs font-mono font-medium text-[#787774]">
            Puntaje Global: <strong className="text-[var(--text-main)] font-bold">{score}/15</strong>
          </span>
        </div>

        <p className="text-xs lg:text-sm leading-relaxed text-[var(--text-main)]/90 font-medium px-4">
          {archetype.desc}
        </p>

        {/* Desglose por Dimensiones Psicométricas */}
        <div className="w-full bg-[var(--bg-crema)] p-4 rounded-2xl border-minimal flex flex-col gap-3 mt-2 text-left">
          <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-[#787774]">
            Desglose por Dimensión
          </span>

          {/* Dimensión A */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-xs font-mono font-medium">
              <span className="flex items-center gap-1.5 text-[var(--text-main)]">
                <Zap size={13} className="text-[var(--color-rojo-alerta)]" />
                Reflejos e Inmunología
              </span>
              <span className="font-bold">{dimensionScores.reflexes}/5</span>
            </div>
            <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[var(--color-rojo-alerta)] rounded-full transition-all duration-500"
                style={{ width: `${(dimensionScores.reflexes / 5) * 100}%` }}
              />
            </div>
          </div>

          {/* Dimensión B */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-xs font-mono font-medium">
              <span className="flex items-center gap-1.5 text-[var(--text-main)]">
                <Search size={13} className="text-[var(--color-azul-tech)]" />
                Agudeza Forense
              </span>
              <span className="font-bold">{dimensionScores.forensic}/5</span>
            </div>
            <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[var(--color-azul-tech)] rounded-full transition-all duration-500"
                style={{ width: `${(dimensionScores.forensic / 5) * 100}%` }}
              />
            </div>
          </div>

          {/* Dimensión C */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-xs font-mono font-medium">
              <span className="flex items-center gap-1.5 text-[var(--text-main)]">
                <Grid size={13} className="text-[var(--color-naranja-kuska)]" />
                Discernimiento Ético
              </span>
              <span className="font-bold">{dimensionScores.ethics}/5</span>
            </div>
            <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[var(--color-naranja-kuska)] rounded-full transition-all duration-500"
                style={{ width: `${(dimensionScores.ethics / 5) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Botón CTA hacia Fase 2 */}
      <div className="w-full max-w-[420px] pt-2">
        <button 
          onClick={onClaim}
          className="w-full py-4 px-6 rounded-2xl font-bold font-mono text-xs lg:text-sm tracking-wider uppercase bg-[var(--text-main)] text-[var(--bg-crema)] hover:bg-black active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
        >
          <span>RECLAMAR MI RECETA (KUZKA KIT)</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </motion.div>
  )
}
