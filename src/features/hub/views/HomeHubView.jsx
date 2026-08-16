import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MainLayout } from '../../../shared/components/MainLayout'
import { 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Bot, 
  BookOpen, 
  FileText, 
  MessageSquare, 
  ArrowRight, 
  Zap, 
  Users, 
  Award, 
  CheckCircle2, 
  Smartphone,
  ScanLine,
  Sliders,
  ChevronRight,
  TrendingUp,
  HeartHandshake
} from 'lucide-react'

export function HomeHubView() {
  const [selectedPersona, setSelectedPersona] = useState('estudiante') // 'estudiante' | 'emprendedor' | 'adulto_mayor'

  const personas = {
    estudiante: {
      name: 'Sofía (15 años)',
      role: 'Estudiante de Secundaria (Lima)',
      pain: 'Estrés por clickbait algorítmico y miedo a ciberacoso mediante deepfakes escolares.',
      pathway: 'Inocula su instinto con Kuska Check y aprende convivencia ética en el Creator Lab.',
      archetype: 'Navegante Intuitivo ➔ Guardiana Inmune',
      badgeColor: '#1D6CFF'
    },
    emprendedor: {
      name: 'Mateo (19 años)',
      role: 'Universitario & Micro-negocio en Gamarra',
      pain: 'Riesgo de fraude con comprobantes falsos de Yape/Plin y fuga de datos privados en ChatGPT.',
      pathway: 'Domina el prompting socrático y el protocolo Zero-Data con el Blueprint de Kraft.',
      archetype: 'Verificador Metódico',
      badgeColor: '#DE711E'
    },
    adulto_mayor: {
      name: 'Doña Rosa (65 años)',
      role: 'Coordinadora de Junta Vecinal',
      pain: 'Vulnerabilidad ante llamadas de WhatsApp con clonación de voz de familiares.',
      pathway: 'Aplica la regla de pausa de 3 segundos y participa en partidas físicas de cartas en su comunidad.',
      archetype: 'Guardián Comunitario',
      badgeColor: '#CA3606'
    }
  }

  const activePersonaData = personas[selectedPersona]

  return (
    <MainLayout>
      <div className="w-full">
        
        {/* HERO SECTION - TIPOGRAFÍA INFERIOR IZQUIERDA CON DEGRADADO */}
        <section className="relative w-full min-h-[75vh] sm:min-h-[85vh] flex flex-col justify-end border-b border-[var(--text-main)]/10 overflow-hidden">
          
          {/* BACKGROUND GRADIENT */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[var(--bg-crema)] via-[var(--bg-crema)] to-[var(--color-amarillo-radar)]/20" />
          
          {/* DECORATIVE GRAIN/NOISE */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

          {/* MAIN CONTENT (BOTTOM LEFT ALIGNED) */}
          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20 lg:pb-24">
            
            <div className="max-w-5xl space-y-6">
              <span className="inline-block rounded-full border border-[var(--text-main)]/20 bg-white/50 px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-naranja-kuska)] backdrop-blur-md">
                UNESCO Youth Hackathon 2026
              </span>
              
              <h1 className="font-logo text-[4.5rem] sm:text-[7rem] lg:text-[10rem] font-black tracking-tighter text-[var(--text-main)] uppercase leading-[0.80] drop-shadow-sm">
                IA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-main)] to-[var(--color-naranja-kuska)]">vs</span> IA
              </h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12 pt-4">
                <Link
                  to="/check"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-5 bg-[var(--text-main)] text-white text-xs sm:text-sm font-mono font-bold uppercase tracking-widest rounded-full hover:bg-[var(--color-naranja-kuska)] transition-colors shadow-xl hover:scale-105 active:scale-95 duration-200"
                >
                  <ShieldCheck className="w-5 h-5" />
                  <span>Iniciar Inoculación ↗</span>
                </Link>
                
                <p className="max-w-sm text-sm sm:text-base text-[var(--text-main)]/80 font-sans leading-relaxed border-l-2 border-[var(--color-naranja-kuska)]/30 pl-4">
                  Ecosistema figital de <strong>Prebunking</strong> y alfabetización socrática para construir resiliencia ética frente a la IA.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* INTERACTIVE PERSONA MATRICIAL (MOVED FROM HERO) */}
        <section className="py-16 bg-white border-b border-[var(--text-main)]/10">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#FBF9F5] rounded-3xl p-6 sm:p-10 border border-[var(--text-main)]/10 shadow-sm space-y-8">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[var(--text-main)]/10 gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-[var(--color-naranja-kuska)] tracking-widest">
                      Impacto en la Coyuntura Peruana
                    </span>
                    <h3 className="font-logo text-4xl font-bold uppercase text-[var(--text-main)] mt-2">
                      Rutas de Resiliencia
                    </h3>
                  </div>
                  <Users className="w-8 h-8 text-[var(--text-main)]/20" />
                </div>

                {/* PERSONA TABS */}
                <div className="grid grid-cols-3 gap-3 p-1.5 bg-white rounded-2xl border border-[var(--text-main)]/5 shadow-sm">
                  <button
                    onClick={() => setSelectedPersona('estudiante')}
                    className={`py-3 text-xs sm:text-sm font-mono font-bold rounded-xl transition-all ${
                      selectedPersona === 'estudiante' 
                        ? 'bg-[var(--text-main)] text-white shadow-md' 
                        : 'text-[var(--text-main)]/60 hover:text-[var(--text-main)] hover:bg-[var(--text-main)]/5'
                    }`}
                  >
                    Estudiante
                  </button>
                  <button
                    onClick={() => setSelectedPersona('emprendedor')}
                    className={`py-3 text-xs sm:text-sm font-mono font-bold rounded-xl transition-all ${
                      selectedPersona === 'emprendedor' 
                        ? 'bg-[var(--text-main)] text-white shadow-md' 
                        : 'text-[var(--text-main)]/60 hover:text-[var(--text-main)] hover:bg-[var(--text-main)]/5'
                    }`}
                  >
                    Emprendedor
                  </button>
                  <button
                    onClick={() => setSelectedPersona('adulto_mayor')}
                    className={`py-3 text-xs sm:text-sm font-mono font-bold rounded-xl transition-all ${
                      selectedPersona === 'adulto_mayor' 
                        ? 'bg-[var(--text-main)] text-white shadow-md' 
                        : 'text-[var(--text-main)]/60 hover:text-[var(--text-main)] hover:bg-[var(--text-main)]/5'
                    }`}
                  >
                    Adulto Mayor
                  </button>
                </div>

                {/* ACTIVE PERSONA CARD */}
                <div className="space-y-6 animate-in fade-in duration-300 pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h4 className="font-bold text-2xl text-[var(--text-main)] font-sans">
                      {activePersonaData.name}
                    </h4>
                    <span 
                      className="text-[11px] font-mono font-bold px-3 py-1 rounded-full text-white tracking-wider"
                      style={{ backgroundColor: activePersonaData.badgeColor }}
                    >
                      {activePersonaData.role}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-white border border-[var(--text-main)]/10 shadow-sm space-y-3">
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-rojo-alerta)] flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[var(--color-rojo-alerta)] animate-pulse" />
                        Vulnerabilidad:
                      </span>
                      <p className="text-sm font-sans text-[var(--text-main)]/80 leading-relaxed">
                        {activePersonaData.pain}
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-amber-50/50 border border-[var(--color-naranja-kuska)]/20 shadow-sm space-y-3">
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-naranja-kuska)] flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" />
                        Transformación:
                      </span>
                      <p className="text-sm font-sans text-[var(--text-main)]/90 leading-relaxed">
                        {activePersonaData.pathway}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between text-sm font-mono text-[var(--text-main)]/60 border-t border-[var(--text-main)]/10 mt-6">
                    <span className="tracking-widest uppercase">Arquetipo Asignado:</span>
                    <span className="font-bold text-[var(--text-main)]">{activePersonaData.archetype}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* BENTO GRID: THE 3 PHASES OF THE ECOSYSTEM */}
        <section className="py-16 lg:py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-3 max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--text-main)]/5 text-[var(--text-main)] text-xs font-mono font-bold uppercase tracking-wider">
              <span>Arquitectura Modular Tripartita</span>
            </div>
            <h2 className="font-logo text-4xl sm:text-6xl font-bold tracking-tight text-[var(--text-main)] uppercase leading-none">
              Las 3 Fases del Viaje de Inmunización
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-main)]/70 font-sans leading-relaxed">
              Del diagnóstico ágil en 60 segundos, a la resolución cooperativa en la mesa comunitaria, y la retención cognitiva permanente en el bolsillo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* FASE 1 CARD */}
            <div className="bg-white rounded-3xl p-8 border border-[var(--text-main)]/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[var(--color-amarillo-radar)]" />
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-amarillo-radar)] flex items-center justify-center text-[var(--text-main)] font-logo text-2xl font-bold">
                    01
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[var(--color-amarillo-radar)]/20 text-[var(--text-main)] text-[10px] font-mono font-bold uppercase">
                    Diagnóstico
                  </span>
                </div>

                <div>
                  <h3 className="font-logo text-3xl font-bold uppercase text-[var(--text-main)] leading-tight mb-2 group-hover:text-[var(--color-naranja-kuska)] transition-colors">
                    KUSKA CHECK
                  </h3>
                  <div className="text-xs font-mono text-[var(--color-naranja-kuska)] font-bold mb-3">
                    "¿Sobrevivirías la PandemIA?"
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-main)]/70 font-sans leading-relaxed">
                    Evaluación por <strong>Swipe táctil rápido</strong> (Radar, Lupa Forense y Matriz Ética) que calcula en 60 segundos tu arquetipo de instinto sin fricción de registro.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[var(--bg-crema)] border border-[var(--text-main)]/5 text-xs font-mono text-[var(--text-main)]/70 space-y-1">
                  <div>• Mecánica Swipe (Peligro/Seguro)</div>
                  <div>• 15 Reactivos psicométricos</div>
                  <div>• Generación de Pase Figital</div>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  to="/check"
                  className="w-full flex items-center justify-between px-5 py-3.5 bg-[var(--text-main)] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl hover:bg-[var(--color-naranja-kuska)] transition-all shadow-sm"
                >
                  <span>Realizar Test Check</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* FASE 2 CARD */}
            <div className="bg-white rounded-3xl p-8 border border-[var(--text-main)]/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[var(--color-naranja-kuska)]" />
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-naranja-kuska)] flex items-center justify-center text-white font-logo text-2xl font-bold">
                    02
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[var(--color-naranja-kuska)]/20 text-[var(--color-naranja-kuska)] text-[10px] font-mono font-bold uppercase">
                    Tratamiento
                  </span>
                </div>

                <div>
                  <h3 className="font-logo text-3xl font-bold uppercase text-[var(--text-main)] leading-tight mb-2 group-hover:text-[var(--color-naranja-kuska)] transition-colors">
                    KUSKA KIT
                  </h3>
                  <div className="text-xs font-mono text-[var(--color-naranja-kuska)] font-bold mb-3">
                    El Botiquín Figital & Decks
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-main)]/70 font-sans leading-relaxed">
                    Juego de cartas cooperativo con <strong>Cripto-Retícula de Encaje (Crypto-Grid)</strong> y planimetría desplegable de 4 Laboratorios de IA (Prompt, Forense, Privacidad, Creator).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[var(--bg-crema)] border border-[var(--text-main)]/5 text-xs font-mono text-[var(--text-main)]/70 space-y-1">
                  <div>• Encaje Síntoma ➔ Herramienta ➔ Acción</div>
                  <div>• Cero manuales aburridos de texto</div>
                  <div>• Integración curricular DPCC escolar</div>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  to="/kit"
                  className="w-full flex items-center justify-between px-5 py-3.5 bg-[var(--text-main)] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl hover:bg-[var(--color-naranja-kuska)] transition-all shadow-sm"
                >
                  <span>Abrir Botiquín Kit</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* FASE 3 CARD */}
            <div className="bg-white rounded-3xl p-8 border border-[var(--text-main)]/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[var(--color-azul-tech)]" />
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-azul-tech)] flex items-center justify-center text-white font-logo text-2xl font-bold">
                    03
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[var(--color-azul-tech)]/20 text-[var(--color-azul-tech)] text-[10px] font-mono font-bold uppercase">
                    Retención
                  </span>
                </div>

                <div>
                  <h3 className="font-logo text-3xl font-bold uppercase text-[var(--text-main)] leading-tight mb-2 group-hover:text-[var(--color-naranja-kuska)] transition-colors">
                    KUZK! PET
                  </h3>
                  <div className="text-xs font-mono text-[var(--color-azul-tech)] font-bold mb-3">
                    El Simulador Algorítmico
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-main)]/70 font-sans leading-relaxed">
                    Mascota abstracta 3D que vive en la web-app. Muestra tu salud cognitiva según tu dieta informativa y activa <strong>Booster Shots</strong> quincenales contra el olvido.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[var(--bg-crema)] border border-[var(--text-main)]/5 text-xs font-mono text-[var(--text-main)]/70 space-y-1">
                  <div>• Sandbox con perillas algorítmicas</div>
                  <div>• Estado dinámico: Inmune o Infoxicado</div>
                  <div>• Micro-retos de 30 segundos (Oxford)</div>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  to="/pet"
                  className="w-full flex items-center justify-between px-5 py-3.5 bg-[var(--text-main)] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl hover:bg-[var(--color-naranja-kuska)] transition-all shadow-sm"
                >
                  <span>Cuidar a Kuzk! Pet</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

        </section>

        {/* KNOWLEDGE & COMMUNITY HUB BANNER */}
        <section className="py-16 bg-white border-y border-[var(--text-main)]/10">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-naranja-kuska)]">
                  Ecosistema de Extensión
                </span>
                <h2 className="font-logo text-4xl sm:text-5xl font-bold uppercase text-[var(--text-main)] mt-1">
                  Aprende, Lee y Debate con la Comunidad
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* CURSOS HUB CARD */}
              <Link
                to="/cursos"
                className="p-6 rounded-3xl bg-[var(--bg-crema)] border border-[var(--text-main)]/10 hover:border-[var(--color-naranja-kuska)] transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-naranja-kuska)] text-white flex items-center justify-center">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="font-logo text-2xl font-bold uppercase text-[var(--text-main)] group-hover:text-[var(--color-naranja-kuska)] transition-colors">
                    Academia STEAM & Cursos
                  </h3>
                  <p className="text-xs text-[var(--text-main)]/70 font-sans leading-relaxed">
                    Micro-lecciones sobre Prompting Socrático, Forense de Deepfakes C2PA, Protocolo Zero-Data y Convivencia Escolar.
                  </p>
                </div>
                <div className="pt-6 flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-naranja-kuska)]">
                  <span>Explorar 4 Módulos</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* BLOG HUB CARD */}
              <Link
                to="/blog"
                className="p-6 rounded-3xl bg-[var(--bg-crema)] border border-[var(--text-main)]/10 hover:border-[var(--color-rojo-alerta)] transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-rojo-alerta)] text-white flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="font-logo text-2xl font-bold uppercase text-[var(--text-main)] group-hover:text-[var(--color-rojo-alerta)] transition-colors">
                    Bitácora & Investigaciones
                  </h3>
                  <p className="text-xs text-[var(--text-main)]/70 font-sans leading-relaxed">
                    Análisis de casos de extorsión con clones de voz en Lima, estafas en Gamarra con comprobantes falsos y estudios pedagógicos.
                  </p>
                </div>
                <div className="pt-6 flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-rojo-alerta)]">
                  <span>Leer Artículos</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* FORUM HUB CARD */}
              <Link
                to="/foro"
                className="p-6 rounded-3xl bg-[var(--bg-crema)] border border-[var(--text-main)]/10 hover:border-[var(--color-azul-tech)] transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-azul-tech)] text-white flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <h3 className="font-logo text-2xl font-bold uppercase text-[var(--text-main)] group-hover:text-[var(--color-azul-tech)] transition-colors">
                    Foro Comunitario
                  </h3>
                  <p className="text-xs text-[var(--text-main)]/70 font-sans leading-relaxed">
                    Alertas ciudadanas en tiempo real, experiencias de docentes en el aula y dudas sobre el cuidado de tu mascota algorítmica.
                  </p>
                </div>
                <div className="pt-6 flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-azul-tech)]">
                  <span>Entrar a la Conversación</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

            </div>

          </div>
        </section>

      </div>
    </MainLayout>
  )
}
