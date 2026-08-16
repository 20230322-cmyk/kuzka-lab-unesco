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
        
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24 border-b border-[var(--text-main)]/10">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* HERO COPY (COL 7) */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-naranja-kuska)]/10 text-[var(--color-naranja-kuska)] text-xs font-mono font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>UNESCO Youth Hackathon 2026</span>
                </div>

                <h1 className="font-logo text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--text-main)] uppercase leading-[0.95]">
                  INMUNIDAD COGNITIVA<br />
                  <span className="text-[var(--color-naranja-kuska)]">CONTRA LA PANDEMIA</span>
                </h1>

                <p className="text-base sm:text-lg text-[var(--text-main)]/80 font-sans leading-relaxed max-w-2xl">
                  Ecosistema figital de <strong>inoculación psicológica preventiva (Prebunking)</strong> y alfabetización socrática con Inteligencia Artificial. Transformamos a estudiantes, emprendedores y familias en creadores digitales reflexivos, éticos y resilientes.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    to="/check"
                    className="inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--color-naranja-kuska)] text-white text-xs sm:text-sm font-mono font-bold uppercase tracking-widest rounded-full hover:bg-[var(--color-naranja-kuska)]/90 active:scale-95 transition-all shadow-lg hover:shadow-xl"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Iniciar Test de Instinto (Fase 1)</span>
                  </Link>

                  <Link
                    to="/kit"
                    className="inline-flex items-center gap-2 px-6 py-4 bg-white border-2 border-[var(--text-main)] text-[var(--text-main)] text-xs sm:text-sm font-mono font-bold uppercase tracking-wider rounded-full hover:bg-[var(--text-main)] hover:text-white transition-all shadow-sm"
                  >
                    <Layers className="w-4 h-4" />
                    <span>Explorar Kuska Kit</span>
                  </Link>
                </div>

                {/* TRUST BADGES */}
                <div className="pt-6 flex flex-wrap items-center gap-6 text-xs font-mono text-[var(--text-main)]/60">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-naranja-kuska)]" />
                    <span>Zero-Data Privacy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-naranja-kuska)]" />
                    <span>Código Abierto Print-and-Play</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-naranja-kuska)]" />
                    <span>Enfoque Intergeneracional</span>
                  </div>
                </div>

              </div>

              {/* INTERACTIVE PERSONA MATRICIAL (COL 5) */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[var(--text-main)]/10 shadow-lg space-y-6">
                
                <div className="flex items-center justify-between pb-4 border-b border-[var(--text-main)]/10">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-[var(--color-naranja-kuska)]">
                      Impacto en la Coyuntura Peruana
                    </span>
                    <h3 className="font-logo text-2xl font-bold uppercase text-[var(--text-main)]">
                      Rutas de Resiliencia
                    </h3>
                  </div>
                  <Users className="w-5 h-5 text-[var(--text-main)]/40" />
                </div>

                {/* PERSONA TABS */}
                <div className="grid grid-cols-3 gap-2 p-1 bg-[var(--bg-crema)] rounded-xl border border-[var(--text-main)]/5">
                  <button
                    onClick={() => setSelectedPersona('estudiante')}
                    className={`py-2 text-[11px] font-mono font-bold rounded-lg transition-all ${
                      selectedPersona === 'estudiante' 
                        ? 'bg-[var(--text-main)] text-white shadow-xs' 
                        : 'text-[var(--text-main)]/70 hover:text-[var(--text-main)]'
                    }`}
                  >
                    Estudiante
                  </button>
                  <button
                    onClick={() => setSelectedPersona('emprendedor')}
                    className={`py-2 text-[11px] font-mono font-bold rounded-lg transition-all ${
                      selectedPersona === 'emprendedor' 
                        ? 'bg-[var(--text-main)] text-white shadow-xs' 
                        : 'text-[var(--text-main)]/70 hover:text-[var(--text-main)]'
                    }`}
                  >
                    Emprendedor
                  </button>
                  <button
                    onClick={() => setSelectedPersona('adulto_mayor')}
                    className={`py-2 text-[11px] font-mono font-bold rounded-lg transition-all ${
                      selectedPersona === 'adulto_mayor' 
                        ? 'bg-[var(--text-main)] text-white shadow-xs' 
                        : 'text-[var(--text-main)]/70 hover:text-[var(--text-main)]'
                    }`}
                  >
                    Adulto Mayor
                  </button>
                </div>

                {/* ACTIVE PERSONA CARD */}
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-base text-[var(--text-main)] font-sans">
                        {activePersonaData.name}
                      </h4>
                      <span 
                        className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full text-white"
                        style={{ backgroundColor: activePersonaData.badgeColor }}
                      >
                        {activePersonaData.role}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[var(--bg-crema)] border border-[var(--text-main)]/5 space-y-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase text-[var(--color-rojo-alerta)]">
                      Vulnerabilidad Inicial:
                    </span>
                    <p className="text-xs font-sans text-[var(--text-main)]/80 leading-relaxed">
                      {activePersonaData.pain}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 space-y-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase text-[var(--color-naranja-kuska)]">
                      Transformación con KUZKA:
                    </span>
                    <p className="text-xs font-sans text-[var(--text-main)]/90 leading-relaxed">
                      {activePersonaData.pathway}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-mono text-[var(--text-main)]/60">
                    <span>Arquetipo:</span>
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
