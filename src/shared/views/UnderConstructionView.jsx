import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MainLayout } from '../components/MainLayout'
import { HardHat, ArrowLeft } from 'lucide-react'

export function UnderConstructionView() {
  const navigate = useNavigate()

  return (
    <MainLayout>
      <div className="w-full min-h-[85vh] flex items-center justify-center p-4 bg-[var(--bg-crema)] border-b border-[var(--text-main)]/10">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-24 h-24 mx-auto bg-[var(--color-naranja-kuska)]/10 text-[var(--color-naranja-kuska)] rounded-full flex items-center justify-center border border-[var(--color-naranja-kuska)]/20 animate-pulse">
            <HardHat className="w-12 h-12" />
          </div>
          
          <h1 className="font-logo text-5xl font-black uppercase tracking-tighter text-[var(--text-main)]">
            En Construcción
          </h1>
          
          <p className="text-[var(--text-main)]/70 font-sans leading-relaxed text-sm">
            Nuestros ingenieros y especialistas figitales están forjando los contenidos de esta sección. Muy pronto estará disponible.
          </p>
          
          <div className="pt-6 flex justify-center">
            <button 
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[var(--text-main)]/10 hover:border-[var(--color-naranja-kuska)] hover:text-[var(--color-naranja-kuska)] text-[var(--text-main)] text-xs font-mono font-bold uppercase tracking-widest rounded-xl transition-all shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver Atrás</span>
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
