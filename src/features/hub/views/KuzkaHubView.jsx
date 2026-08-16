import React from 'react'
import { Link } from 'react-router-dom'
import { MainLayout } from '../../../shared/components/MainLayout'
import { BookOpen, FileText, Briefcase, ArrowRight } from 'lucide-react'

export function KuzkaHubView() {
  return (
    <MainLayout>
      <div className="w-full min-h-[90vh] bg-[var(--bg-crema)] pt-24 pb-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-naranja-kuska)]/20 bg-[var(--color-naranja-kuska)]/5 text-[var(--color-naranja-kuska)] text-xs font-mono font-bold uppercase tracking-widest">
              HUB DE CONOCIMIENTO
            </span>
            <h1 className="font-logo text-5xl sm:text-7xl font-black uppercase text-[var(--text-main)] tracking-tighter leading-none">
              KUZKA HUB
            </h1>
            <p className="text-sm sm:text-base text-[var(--text-main)]/70 font-sans leading-relaxed">
              Explora nuestra librería completa de investigación, recursos educativos y solicita asesorías personalizadas para tu institución.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* DOCUMENTACIÓN */}
            <Link 
              to="/hub/documentacion" 
              className="group relative bg-white rounded-[2rem] p-8 border border-[var(--text-main)]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden min-h-[350px]"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-[var(--color-azul-tech)]" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[var(--color-azul-tech)]/5 rounded-full blur-3xl group-hover:bg-[var(--color-azul-tech)]/10 transition-colors" />
              
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-azul-tech)]/10 text-[var(--color-azul-tech)] flex items-center justify-center">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="font-logo text-4xl sm:text-5xl font-bold uppercase text-[var(--text-main)] leading-none group-hover:text-[var(--color-azul-tech)] transition-colors">
                    Documentación
                  </h2>
                  <p className="mt-4 text-sm text-[var(--text-main)]/70 font-sans leading-relaxed">
                    Lee nuestros papers, rúbricas, bases del hackathon, el CIP y toda la arquitectura del ecosistema KUZKA LAB.
                  </p>
                </div>
              </div>
              
              <div className="relative z-10 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-azul-tech)] mt-8">
                <span>Leer Documentos</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* CURSOS */}
            <Link 
              to="/hub/cursos" 
              className="group relative bg-white rounded-[2rem] p-8 border border-[var(--text-main)]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden min-h-[350px]"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-[var(--color-naranja-kuska)]" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[var(--color-naranja-kuska)]/5 rounded-full blur-3xl group-hover:bg-[var(--color-naranja-kuska)]/10 transition-colors" />
              
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-naranja-kuska)]/10 text-[var(--color-naranja-kuska)] flex items-center justify-center">
                  <BookOpen className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="font-logo text-4xl sm:text-5xl font-bold uppercase text-[var(--text-main)] leading-none group-hover:text-[var(--color-naranja-kuska)] transition-colors">
                    Cursos
                  </h2>
                  <p className="mt-4 text-sm text-[var(--text-main)]/70 font-sans leading-relaxed">
                    Academia STEAM. Micro-lecciones sobre Prompting Socrático, Forense C2PA, Zero-Data y Ciberseguridad.
                  </p>
                </div>
              </div>
              
              <div className="relative z-10 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-naranja-kuska)] mt-8">
                <span>Empezar a Aprender</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* ASESORÍA */}
            <Link 
              to="/hub/asesoria" 
              className="group relative bg-white rounded-[2rem] p-8 border border-[var(--text-main)]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden min-h-[350px]"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-[var(--color-amarillo-radar)]" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[var(--color-amarillo-radar)]/10 rounded-full blur-3xl group-hover:bg-[var(--color-amarillo-radar)]/20 transition-colors" />
              
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-amarillo-radar)]/20 text-[var(--text-main)] flex items-center justify-center">
                  <Briefcase className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="font-logo text-4xl sm:text-5xl font-bold uppercase text-[var(--text-main)] leading-none">
                    Asesoría
                  </h2>
                  <p className="mt-4 text-sm text-[var(--text-main)]/70 font-sans leading-relaxed">
                    Solicita implementación de los módulos KUZKA en tu escuela, universidad u organización comunitaria.
                  </p>
                </div>
              </div>
              
              <div className="relative z-10 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-main)] mt-8">
                <span>Contactar Expertos</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

          </div>
        </div>
      </div>
    </MainLayout>
  )
}
