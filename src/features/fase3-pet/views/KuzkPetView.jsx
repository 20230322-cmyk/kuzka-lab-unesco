import React, { useState } from 'react'
import { MainLayout } from '../../../shared/components/MainLayout'
import { 
  Bot, 
  Sparkles, 
  Sliders, 
  Activity, 
  ShieldCheck, 
  AlertTriangle, 
  Heart, 
  Zap, 
  Clock, 
  RefreshCw,
  Award
} from 'lucide-react'

export function KuzkPetView() {
  // Sliders for Algorithmic Diet (0 to 100)
  const [sensacionalismo, setSensacionalismo] = useState(30)
  const [lecturaLateral, setLecturaLateral] = useState(75)
  const [filtrosBurbuja, setFiltrosBurbuja] = useState(25)
  const [indignacion, setIndignacion] = useState(20)

  // Booster Shot Simulation State
  const [boosterActive, setBoosterActive] = useState(false)
  const [boosterCompleted, setBoosterCompleted] = useState(false)

  // Calculated Health Metrics
  const criticalThinking = Math.min(100, Math.max(10, Math.round(lecturaLateral * 0.7 + (100 - sensacionalismo) * 0.3)))
  const cognitiveStress = Math.min(100, Math.max(5, Math.round(sensacionalismo * 0.4 + indignacion * 0.4 + filtrosBurbuja * 0.2)))
  const creativeIntegrity = Math.min(100, Math.max(10, Math.round((100 - filtrosBurbuja) * 0.5 + lecturaLateral * 0.5)))

  const isInfoxicated = cognitiveStress > 60

  const handleApplyBooster = () => {
    setSensacionalismo(15)
    setLecturaLateral(90)
    setFiltrosBurbuja(15)
    setIndignacion(10)
    setBoosterCompleted(true)
    setTimeout(() => {
      setBoosterActive(false)
    }, 1500)
  }

  return (
    <MainLayout>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[var(--text-main)]/10">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-azul-tech)]/10 text-[var(--color-azul-tech)] text-xs font-mono font-bold uppercase tracking-wider">
              <Bot className="w-3.5 h-3.5" />
              <span>Fase 3 • El Simulador Algorítmico</span>
            </div>
            <h1 className="font-logo text-4xl sm:text-6xl font-bold tracking-tight text-[var(--text-main)] uppercase leading-none">
              KUZK! PET & DASHBOARD
            </h1>
            <p className="text-sm sm:text-base text-[var(--text-main)]/70 font-sans leading-relaxed">
              Mascota digital interactiva que refleja tu salud cognitiva. Modula tu dieta informativa diaria y activa Booster Shots quincenales para vencer la curva de olvido.
            </p>
          </div>

          {/* QUICK BOOSTER CTA */}
          <button
            onClick={() => setBoosterActive(true)}
            className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--color-amarillo-radar)] text-[var(--text-main)] text-xs font-mono font-bold uppercase tracking-wider rounded-2xl hover:bg-[var(--color-amarillo-radar)]/80 active:scale-95 transition-all shadow-sm shrink-0"
          >
            <Zap className="w-4 h-4 text-[var(--color-naranja-kuska)]" />
            <span>Activar Booster Shot (30s)</span>
          </button>
        </div>

        {/* MAIN DASHBOARD GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          
          {/* AVATAR & HEALTH STATUS CARD (COL 5) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[var(--text-main)]/10 shadow-sm flex flex-col justify-between space-y-6 relative overflow-hidden">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full animate-ping inline-block" style={{ backgroundColor: isInfoxicated ? '#CA3606' : '#DE711E' }} />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-main)]">
                  {isInfoxicated ? 'Estado: Infoxicado' : 'Estado: Inmune & Saludable'}
                </span>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-[var(--bg-crema)] border border-[var(--text-main)]/10">
                Nivel 4 • Guardián
              </span>
            </div>

            {/* INTERACTIVE AVATAR GRAPHIC */}
            <div className={`py-12 flex flex-col items-center justify-center rounded-2xl border transition-all ${
              isInfoxicated 
                ? 'bg-red-50/50 border-red-200 shadow-inner animate-pulse' 
                : 'bg-[var(--bg-crema)] border-[var(--text-main)]/5'
            }`}>
              {/* ABSTRACT GEOMETRIC AVATAR */}
              <div className="relative">
                <div className={`w-32 h-32 rounded-3xl flex items-center justify-center transition-all duration-500 shadow-lg ${
                  isInfoxicated 
                    ? 'bg-[var(--color-rojo-alerta)] rotate-12 scale-95 skew-x-3' 
                    : 'bg-[var(--color-naranja-kuska)] hover:rotate-2 hover:scale-105'
                }`}>
                  <div className="text-white text-center font-logo font-bold">
                    <div className="text-4xl tracking-tighter">
                      {isInfoxicated ? 'X _ X' : '( ◡ ‿ ◡ )'}
                    </div>
                    <div className="text-[10px] font-mono tracking-widest uppercase mt-1 opacity-80">
                      {isInfoxicated ? 'GLITCH' : 'KUZK! PET'}
                    </div>
                  </div>
                </div>

                {/* SATELLITE NODES */}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--color-amarillo-radar)] border-2 border-white flex items-center justify-center text-[9px] font-bold">
                  ★
                </div>
              </div>

              <div className="mt-6 text-center">
                <h4 className="font-logo text-2xl font-bold uppercase text-[var(--text-main)]">
                  {isInfoxicated ? 'Sobrecarga de Desinformación' : 'Inmunidad Equilibrada'}
                </h4>
                <p className="text-xs text-[var(--text-main)]/60 font-sans max-w-xs mt-1">
                  {isInfoxicated 
                    ? 'Tu mascota sufre por exceso de sensacionalismo e indignación. Aplica pausas cognitivas.' 
                    : 'Pensamiento crítico activo y bajo estrés informativo. ¡Sigue así!'}
                </p>
              </div>
            </div>

            {/* METRICS BARS */}
            <div className="space-y-4 pt-2">
              <div>
                <div className="flex justify-between text-xs font-mono font-bold mb-1">
                  <span className="text-[var(--color-naranja-kuska)]">Pensamiento Crítico</span>
                  <span>{criticalThinking}%</span>
                </div>
                <div className="w-full h-2.5 bg-[var(--bg-crema)] rounded-full overflow-hidden border border-[var(--text-main)]/5">
                  <div 
                    className="h-full bg-[var(--color-naranja-kuska)] transition-all duration-300 rounded-full"
                    style={{ width: `${criticalThinking}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-bold mb-1">
                  <span className="text-[var(--color-rojo-alerta)]">Estrés Cognitivo (Infoxicación)</span>
                  <span>{cognitiveStress}%</span>
                </div>
                <div className="w-full h-2.5 bg-[var(--bg-crema)] rounded-full overflow-hidden border border-[var(--text-main)]/5">
                  <div 
                    className="h-full bg-[var(--color-rojo-alerta)] transition-all duration-300 rounded-full"
                    style={{ width: `${cognitiveStress}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-bold mb-1">
                  <span className="text-[var(--color-azul-tech)]">Integridad de Creación (Zero-Data)</span>
                  <span>{creativeIntegrity}%</span>
                </div>
                <div className="w-full h-2.5 bg-[var(--bg-crema)] rounded-full overflow-hidden border border-[var(--text-main)]/5">
                  <div 
                    className="h-full bg-[var(--color-azul-tech)] transition-all duration-300 rounded-full"
                    style={{ width: `${creativeIntegrity}%` }}
                  />
                </div>
              </div>
            </div>

          </div>

          {/* SANDBOX CONTROLS: FEED SLIDERS (COL 7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[var(--text-main)]/10 shadow-sm space-y-6 flex flex-col justify-between">
            
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-[var(--color-naranja-kuska)] mb-2">
                <Sliders className="w-4 h-4" />
                <span>Simulador de Dieta Informativa (Algorithmic Diet)</span>
              </div>
              <h3 className="font-logo text-3xl font-bold uppercase text-[var(--text-main)]">
                Perillas de Control de Feed
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-main)]/70 font-sans leading-relaxed mt-1">
                Ajusta las variables de consumo de tu algoritmo simulado para observar en tiempo real cómo impacta en el estado morfológico de tu Kuzk! Pet.
              </p>
            </div>

            {/* SLIDERS LIST */}
            <div className="space-y-6 py-2">
              
              {/* SLIDER 1: SENSACIONALISMO */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-[var(--text-main)] font-sans">Sensacionalismo & Clickbait</span>
                  <span className="font-mono font-bold text-[var(--color-rojo-alerta)]">{sensacionalismo}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sensacionalismo}
                  onChange={(e) => setSensacionalismo(Number(e.target.value))}
                  className="w-full accent-[var(--color-rojo-alerta)] cursor-pointer"
                />
                <p className="text-[11px] text-[var(--text-main)]/50 font-sans">
                  Titulares exagerados y noticias de impacto sin verificación previa.
                </p>
              </div>

              {/* SLIDER 2: LECTURA LATERAL */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-[var(--text-main)] font-sans">Lectura Lateral & Verificación C2PA</span>
                  <span className="font-mono font-bold text-[var(--color-naranja-kuska)]">{lecturaLateral}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={lecturaLateral}
                  onChange={(e) => setLecturaLateral(Number(e.target.value))}
                  className="w-full accent-[var(--color-naranja-kuska)] cursor-pointer"
                />
                <p className="text-[11px] text-[var(--text-main)]/50 font-sans">
                  Hábito de abrir pestañas independientes para contrastar autores y fuentes primarias.
                </p>
              </div>

              {/* SLIDER 3: FILTROS BURBUJA */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-[var(--text-main)] font-sans">Filtros Burbuja & Sesgo de Confirmación</span>
                  <span className="font-mono font-bold text-[var(--color-azul-oscuro)]">{filtrosBurbuja}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={filtrosBurbuja}
                  onChange={(e) => setFiltrosBurbuja(Number(e.target.value))}
                  className="w-full accent-[var(--color-azul-oscuro)] cursor-pointer"
                />
                <p className="text-[11px] text-[var(--text-main)]/50 font-sans">
                  Consumir exclusivamente contenidos afines que refuerzan prejuicios previos.
                </p>
              </div>

              {/* SLIDER 4: INDIGNACIÓN */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-[var(--text-main)] font-sans">Indignación Algorítmica</span>
                  <span className="font-mono font-bold text-[var(--color-rojo-alerta)]">{indignacion}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={indignacion}
                  onChange={(e) => setIndignacion(Number(e.target.value))}
                  className="w-full accent-[var(--color-rojo-alerta)] cursor-pointer"
                />
                <p className="text-[11px] text-[var(--text-main)]/50 font-sans">
                  Reacción visceral y compartición compulsiva en redes sin pausa cognitiva.
                </p>
              </div>

            </div>

            {/* RESET BUTTONS */}
            <div className="pt-4 border-t border-[var(--text-main)]/10 flex items-center justify-between">
              <span className="text-xs font-mono text-[var(--text-main)]/50">
                Simulador reactivo sin recarga de página
              </span>
              <button
                onClick={() => {
                  setSensacionalismo(20)
                  setLecturaLateral(80)
                  setFiltrosBurbuja(20)
                  setIndignacion(15)
                }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-crema)] border border-[var(--text-main)]/10 text-[var(--text-main)] text-xs font-mono font-bold uppercase rounded-xl hover:bg-[var(--text-main)]/5 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Restablecer Dieta Óptima</span>
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* BOOSTER SHOT MODAL (OXFORD / NATURE COMMUNICATIONS RETENTION) */}
      {boosterActive && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-[#FBF9F5] rounded-3xl w-full max-w-lg shadow-2xl p-6 sm:p-8 border border-[var(--text-main)]/20 space-y-6">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-amarillo-radar)] text-[var(--text-main)] text-xs font-mono font-bold uppercase">
                <Zap className="w-3.5 h-3.5 text-[var(--color-naranja-kuska)]" />
                <span>Vacuna de Refuerzo de Memoria</span>
              </div>
              <span className="text-xs font-mono text-[var(--text-main)]/50">30 Segundos</span>
            </div>

            <div className="space-y-3">
              <h3 className="font-logo text-3xl font-bold uppercase text-[var(--text-main)] leading-tight">
                Micro-Desafío Quincenal
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-main)]/80 font-sans leading-relaxed">
                Recibes un mensaje de texto SMS: <em>"URGENTE: Tu cuenta bancaria ha sido bloqueada por intento de fraude. Entra a www.banc0-peru-seguro.com/login para desbloquearla en 5 min."</em>
              </p>
            </div>

            <div className="space-y-2">
              <button
                onClick={handleApplyBooster}
                className="w-full text-left p-4 rounded-xl border border-[var(--text-main)]/10 bg-white hover:border-[var(--color-naranja-kuska)] hover:bg-amber-50 transition-all font-sans text-xs font-bold text-[var(--text-main)]"
              >
                ✓ Aplicar Pausa Cognitiva: No hacer clic, abrir la app oficial del banco y verificar alertas.
              </button>
              <button
                onClick={() => alert("Incorrecto: Entrar al enlace acortado expone tus contraseñas al phishing.")}
                className="w-full text-left p-4 rounded-xl border border-[var(--text-main)]/10 bg-white hover:border-red-400 hover:bg-red-50 transition-all font-sans text-xs text-[var(--text-main)]/70"
              >
                ✗ Hacer clic rápido para verificar qué ocurrió.
              </button>
            </div>

            <div className="pt-2 text-center text-[10px] font-mono text-[var(--text-main)]/50">
              Basado en el modelo de refuerzo de memoria de Rakoen Maertens (Oxford, Nature Comms).
            </div>
          </div>
        </div>
      )}

    </MainLayout>
  )
}
