import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, Award, Heart, ExternalLink, Globe } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full bg-[var(--text-main)] text-[#FBF9F5] pt-16 pb-12 border-t border-[var(--text-main)]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* BRAND COL */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[var(--color-naranja-kuska)] flex items-center justify-center text-white font-logo text-xl font-bold">
                K
              </div>
              <span className="font-logo text-3xl font-bold tracking-tight text-white leading-none">
                KUZKA LAB
              </span>
            </div>
            <p className="text-xs text-white/70 max-w-sm leading-relaxed font-sans">
              Ecosistema Figital de Inmunización Cognitiva y Alfabetización Mediática e Informacional (MIL) contra la desinformación sintética y estafas de IA.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-[var(--color-amarillo-radar)]">
              <Award className="w-3.5 h-3.5" />
              <span>UNESCO Youth Hackathon 2026</span>
            </div>
          </div>

          {/* COL 1: ECOSISTEMA */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
              Ecosistema Figital
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/check" className="text-white/80 hover:text-[var(--color-naranja-kuska)] transition-colors">
                  Fase 1: Kuska Check
                </Link>
              </li>
              <li>
                <Link to="/kit" className="text-white/80 hover:text-[var(--color-naranja-kuska)] transition-colors">
                  Fase 2: Kuska Kit
                </Link>
              </li>
              <li>
                <Link to="/pet" className="text-white/80 hover:text-[var(--color-naranja-kuska)] transition-colors">
                  Fase 3: Kuzk! Pet
                </Link>
              </li>
              <li>
                <span className="text-white/40 font-mono text-[10px] block mt-1">
                  Arquitectura 3 Fases
                </span>
              </li>
            </ul>
          </div>

          {/* COL 2: APRENDIZAJE & COMUNIDAD */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
              Conocimiento
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/cursos" className="text-white/80 hover:text-[var(--color-naranja-kuska)] transition-colors">
                  Academia STEAM / Cursos
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-[var(--color-naranja-kuska)] transition-colors">
                  Blog e Investigaciones
                </Link>
              </li>
              <li>
                <Link to="/foro" className="text-white/80 hover:text-[var(--color-naranja-kuska)] transition-colors">
                  Foro Comunitario
                </Link>
              </li>
              <li>
                <a 
                  href="#print-and-play" 
                  onClick={(e) => { e.preventDefault(); alert("El paquete Print-and-Play PDF estará disponible con el lanzamiento oficial."); }}
                  className="text-white/80 hover:text-[var(--color-naranja-kuska)] transition-colors inline-flex items-center gap-1"
                >
                  <span>Kit Print-and-Play (PDF)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* COL 3: ENFOQUE CÍVICO */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
              Marco Cívico
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[var(--color-amarillo-radar)]" />
                <span>Zero-Data Privacy</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[var(--color-azul-tech)]" />
                <span>Lima Metropolitana & Perú</span>
              </li>
              <li>
                <span>Código Abierto para Escuelas</span>
              </li>
              <li>
                <span>Unidad DPCC de 3 Semanas</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-sans">
          <p>
            © 2026 KUZKA LAB. Desarrollado para el UNESCO Youth Hackathon 2026.
          </p>
          <div className="flex items-center gap-2 text-[11px] font-mono">
            <span>KUZKA = "JUNTOS" EN QUECHUA</span>
            <span>•</span>
            <span className="text-[var(--color-naranja-kuska)] font-bold">INMUNIDAD COGNITIVA ACTIVA</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
