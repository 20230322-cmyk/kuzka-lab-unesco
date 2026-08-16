import React, { useState } from 'react'
import { MainLayout } from '../../../shared/components/MainLayout'
import { 
  Layers, 
  Sparkles, 
  Download, 
  ShieldCheck, 
  AlertTriangle, 
  Wrench, 
  CheckCircle2, 
  RotateCcw,
  ExternalLink,
  QrCode,
  LayoutGrid
} from 'lucide-react'

export function KuskaKitView() {
  const [activeTab, setActiveTab] = useState('simulador') // 'simulador' | 'blueprint' | 'print'
  
  // Crypto-Grid Simulator State
  const [selectedSintoma, setSelectedSintoma] = useState(null)
  const [selectedHerramienta, setSelectedHerramienta] = useState(null)
  const [selectedAccion, setSelectedAccion] = useState(null)

  const sintomas = [
    {
      id: 's1',
      code: 'S-01',
      title: 'Plin / Yape Falso de Gamarra',
      description: 'Cliente apurado muestra captura con tipografía desfasada para retirar mercadería.',
      icon: AlertTriangle,
      color: '#CA3606',
      correctTool: 'h1',
      correctAction: 'a1'
    },
    {
      id: 's2',
      code: 'S-02',
      title: 'Clonación de Voz por Urgencia',
      description: 'Llamada imitando la voz de un familiar pidiendo S/. 500 para un supuesto abogado.',
      icon: AlertTriangle,
      color: '#CA3606',
      correctTool: 'h2',
      correctAction: 'a2'
    },
    {
      id: 's3',
      code: 'S-03',
      title: 'Prompt con Fuga de Datos (Zero-Data)',
      description: 'Introducir DNI, contraseñas y contratos privados en un chatbot generativo público.',
      icon: AlertTriangle,
      color: '#CA3606',
      correctTool: 'h3',
      correctAction: 'a3'
    }
  ]

  const herramientas = [
    {
      id: 'h1',
      code: 'H-01',
      title: 'Inspección Forense de Saldo',
      description: 'Verificar directamente en la app bancaria sin confiar en capturas de terceros.',
      color: '#DE711E'
    },
    {
      id: 'h2',
      code: 'H-02',
      title: 'Pausa de Confirmación Directa',
      description: 'Colgar la llamada de pánico y marcar de inmediato al número habitual del familiar.',
      color: '#DE711E'
    },
    {
      id: 'h3',
      code: 'H-03',
      title: 'Tutoría Socrática de IA',
      description: 'Anonimizar los datos con variables ($Cliente_X) y usar el modelo como entrenador.',
      color: '#DE711E'
    }
  ]

  const acciones = [
    {
      id: 'a1',
      code: 'A-01',
      title: 'Protocolo de Entrega Segura',
      description: 'Establecer en el negocio la regla de saldo en cuenta antes del despacho.',
      color: '#111111'
    },
    {
      id: 'a2',
      code: 'A-02',
      title: 'Palabra Secreta Familiar',
      description: 'Acordar una clave analógica basada en un recuerdo que ninguna IA pueda inferir.',
      color: '#111111'
    },
    {
      id: 'a3',
      code: 'A-03',
      title: 'Configuración Zero-Data',
      description: 'Limpiar nombres y DNI antes de enviar el prompt y proteger la privacidad comunitaria.',
      color: '#111111'
    }
  ]

  // Check if Triad forms the Kuska Loop
  const isMatch = selectedSintoma && selectedHerramienta && selectedAccion &&
    selectedSintoma.correctTool === selectedHerramienta.id &&
    selectedSintoma.correctAction === selectedAccion.id

  const isComplete = selectedSintoma && selectedHerramienta && selectedAccion

  const resetTriad = () => {
    setSelectedSintoma(null)
    setSelectedHerramienta(null)
    setSelectedAccion(null)
  }

  return (
    <MainLayout>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[var(--text-main)]/10">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-naranja-kuska)]/10 text-[var(--color-naranja-kuska)] text-xs font-mono font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Fase 2 • El Botiquín Figital</span>
            </div>
            <h1 className="font-logo text-4xl sm:text-6xl font-bold tracking-tight text-[var(--text-main)] uppercase leading-none">
              KUZKA KIT & CRYPTO-GRID
            </h1>
            <p className="text-sm sm:text-base text-[var(--text-main)]/70 font-sans leading-relaxed">
              Juego de cartas cooperativo y blueprint táctico que valida físicamente la solución mediante la Cripto-Retícula de Encaje (Síntoma ➔ Herramienta ➔ Acción).
            </p>
          </div>

          {/* TABS */}
          <div className="flex items-center gap-2 p-1.5 bg-white rounded-2xl border border-[var(--text-main)]/10 shadow-sm shrink-0">
            <button
              onClick={() => setActiveTab('simulador')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all ${
                activeTab === 'simulador'
                  ? 'bg-[var(--text-main)] text-white shadow-sm'
                  : 'text-[var(--text-main)]/70 hover:text-[var(--text-main)]'
              }`}
            >
              Simulador Crypto-Grid
            </button>
            <button
              onClick={() => setActiveTab('blueprint')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all ${
                activeTab === 'blueprint'
                  ? 'bg-[var(--text-main)] text-white shadow-sm'
                  : 'text-[var(--text-main)]/70 hover:text-[var(--text-main)]'
              }`}
            >
              Blueprint 4 Labs
            </button>
          </div>
        </div>

        {/* TAB 1: CRYPTO-GRID SIMULATOR */}
        {activeTab === 'simulador' && (
          <div className="pt-8 space-y-8">
            
            {/* INSTRUCTIONS BANNER */}
            <div className="p-6 rounded-3xl bg-white border border-[var(--text-main)]/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-amarillo-radar)]/30 border border-[var(--color-amarillo-radar)] flex items-center justify-center text-[var(--text-main)]">
                  <LayoutGrid className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-logo text-xl sm:text-2xl font-bold uppercase text-[var(--text-main)]">
                    Mecánica de Encaje del "Kuska Loop"
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-main)]/70 font-sans">
                    Selecciona una carta de cada mazo. Si la combinación socrática es la idónea, la Cripto-Retícula cerrará el circuito con luz continua.
                  </p>
                </div>
              </div>

              <button
                onClick={resetTriad}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-crema)] border border-[var(--text-main)]/10 text-xs font-mono font-bold uppercase text-[var(--text-main)] hover:bg-[var(--text-main)]/5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar Mesa</span>
              </button>
            </div>

            {/* THE 3 DECKS SELECTION */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* DECK 1: SÍNTOMAS */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-rojo-alerta)] flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-rojo-alerta)] inline-block" />
                    1. Mazo Síntomas (Amenazas)
                  </h4>
                  <span className="text-[10px] font-mono text-[var(--text-main)]/50">Cereza Oscuro</span>
                </div>

                <div className="space-y-3">
                  {sintomas.map(s => (
                    <div
                      key={s.id}
                      onClick={() => setSelectedSintoma(s)}
                      className={`p-5 rounded-2xl border-2 transition-all cursor-pointer ${
                        selectedSintoma?.id === s.id
                          ? 'bg-red-50 border-[var(--color-rojo-alerta)] shadow-md scale-[1.02]'
                          : 'bg-white border-[var(--text-main)]/10 hover:border-[var(--color-rojo-alerta)]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-mono font-bold text-[var(--color-rojo-alerta)] mb-1">
                        <span>{s.code}</span>
                        <span>Amenaza</span>
                      </div>
                      <h5 className="font-bold text-sm text-[var(--text-main)] font-sans mb-1">{s.title}</h5>
                      <p className="text-xs text-[var(--text-main)]/70 font-sans">{s.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* DECK 2: HERRAMIENTAS */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-naranja-kuska)] flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-naranja-kuska)] inline-block" />
                    2. Mazo Herramientas (Pausas)
                  </h4>
                  <span className="text-[10px] font-mono text-[var(--text-main)]/50">Naranja Socrático</span>
                </div>

                <div className="space-y-3">
                  {herramientas.map(h => (
                    <div
                      key={h.id}
                      onClick={() => setSelectedHerramienta(h)}
                      className={`p-5 rounded-2xl border-2 transition-all cursor-pointer ${
                        selectedHerramienta?.id === h.id
                          ? 'bg-amber-50 border-[var(--color-naranja-kuska)] shadow-md scale-[1.02]'
                          : 'bg-white border-[var(--text-main)]/10 hover:border-[var(--color-naranja-kuska)]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-mono font-bold text-[var(--color-naranja-kuska)] mb-1">
                        <span>{h.code}</span>
                        <span>Herramienta</span>
                      </div>
                      <h5 className="font-bold text-sm text-[var(--text-main)] font-sans mb-1">{h.title}</h5>
                      <p className="text-xs text-[var(--text-main)]/70 font-sans">{h.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* DECK 3: ACCIONES */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-main)] flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--text-main)] inline-block" />
                    3. Mazo Acciones (Ética)
                  </h4>
                  <span className="text-[10px] font-mono text-[var(--text-main)]/50">Blanco Hueso</span>
                </div>

                <div className="space-y-3">
                  {acciones.map(a => (
                    <div
                      key={a.id}
                      onClick={() => setSelectedAccion(a)}
                      className={`p-5 rounded-2xl border-2 transition-all cursor-pointer ${
                        selectedAccion?.id === a.id
                          ? 'bg-neutral-50 border-[var(--text-main)] shadow-md scale-[1.02]'
                          : 'bg-white border-[var(--text-main)]/10 hover:border-[var(--text-main)]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-mono font-bold text-[var(--text-main)] mb-1">
                        <span>{a.code}</span>
                        <span>Acción Cívica</span>
                      </div>
                      <h5 className="font-bold text-sm text-[var(--text-main)] font-sans mb-1">{a.title}</h5>
                      <p className="text-xs text-[var(--text-main)]/70 font-sans">{a.description}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* THE CIRCUIT BOARD (CRYPTO-GRID VISUAL VALIDATION) */}
            <div className="p-8 rounded-3xl bg-white border border-[var(--text-main)]/10 shadow-lg space-y-6">
              <h4 className="font-logo text-2xl font-bold uppercase text-[var(--text-main)] text-center">
                Mesa de Acoplamiento Cripto-Reticular
              </h4>

              <div className="flex flex-col lg:flex-row items-center justify-center gap-4 py-6">
                
                {/* SLOT SINTOMA */}
                <div className={`w-full max-w-xs p-6 rounded-2xl border-2 text-center transition-all ${
                  selectedSintoma 
                    ? 'bg-red-50 border-[var(--color-rojo-alerta)]' 
                    : 'border-dashed border-[var(--text-main)]/20 text-[var(--text-main)]/40'
                }`}>
                  <div className="font-mono text-xs font-bold uppercase text-[var(--color-rojo-alerta)] mb-1">
                    {selectedSintoma ? selectedSintoma.code : 'Ranura Síntoma'}
                  </div>
                  <div className="font-bold text-sm text-[var(--text-main)] font-sans">
                    {selectedSintoma ? selectedSintoma.title : 'Selecciona una amenaza'}
                  </div>
                </div>

                {/* CONNECTOR 1 */}
                <div className={`w-12 h-1.5 rounded-full transition-all ${
                  isMatch ? 'bg-[var(--color-naranja-kuska)] shadow-[0_0_12px_#DE711E]' : 'bg-[var(--text-main)]/20'
                }`} />

                {/* SLOT HERRAMIENTA */}
                <div className={`w-full max-w-xs p-6 rounded-2xl border-2 text-center transition-all ${
                  selectedHerramienta 
                    ? 'bg-amber-50 border-[var(--color-naranja-kuska)]' 
                    : 'border-dashed border-[var(--text-main)]/20 text-[var(--text-main)]/40'
                }`}>
                  <div className="font-mono text-xs font-bold uppercase text-[var(--color-naranja-kuska)] mb-1">
                    {selectedHerramienta ? selectedHerramienta.code : 'Ranura Herramienta'}
                  </div>
                  <div className="font-bold text-sm text-[var(--text-main)] font-sans">
                    {selectedHerramienta ? selectedHerramienta.title : 'Selecciona una herramienta'}
                  </div>
                </div>

                {/* CONNECTOR 2 */}
                <div className={`w-12 h-1.5 rounded-full transition-all ${
                  isMatch ? 'bg-[var(--color-naranja-kuska)] shadow-[0_0_12px_#DE711E]' : 'bg-[var(--text-main)]/20'
                }`} />

                {/* SLOT ACCION */}
                <div className={`w-full max-w-xs p-6 rounded-2xl border-2 text-center transition-all ${
                  selectedAccion 
                    ? 'bg-neutral-50 border-[var(--text-main)]' 
                    : 'border-dashed border-[var(--text-main)]/20 text-[var(--text-main)]/40'
                }`}>
                  <div className="font-mono text-xs font-bold uppercase text-[var(--text-main)] mb-1">
                    {selectedAccion ? selectedAccion.code : 'Ranura Acción'}
                  </div>
                  <div className="font-bold text-sm text-[var(--text-main)] font-sans">
                    {selectedAccion ? selectedAccion.title : 'Selecciona una acción'}
                  </div>
                </div>

              </div>

              {/* FEEDBACK BANNER */}
              {isComplete && (
                <div className={`p-6 rounded-2xl border text-center animate-in zoom-in-95 duration-200 ${
                  isMatch 
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-900' 
                    : 'bg-red-50 border-red-300 text-red-900'
                }`}>
                  {isMatch ? (
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>¡KUSKA LOOP CERRADO! • RETÍCULA ACOPLADA</span>
                      </div>
                      <h4 className="font-logo text-2xl font-bold uppercase">Secuencia Pedagógica Óptima</h4>
                      <p className="text-xs font-sans max-w-md mx-auto">
                        Has neutralizado el brote de desinformación. Tu Kuzk! Pet recibe <strong>+150 puntos de salud cognitiva</strong>.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-red-700 bg-red-100 px-3 py-1 rounded-full">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        <span>CORTOCIRCUITO VISUAL • PATRÓN DESALINEADO</span>
                      </div>
                      <h4 className="font-logo text-2xl font-bold uppercase">Combinación Incompatible</h4>
                      <p className="text-xs font-sans max-w-md mx-auto">
                        Las líneas vectoriales chocan en los márgenes. Debate con tu equipo para identificar la herramienta y acción idónea para este síntoma.
                      </p>
                    </div>
                  )}
                </div>
              )}

            </div>

          </div>
        )}

        {/* TAB 2: BLUEPRINT 4 LABS */}
        {activeTab === 'blueprint' && (
          <div className="pt-8 space-y-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-[var(--color-azul-oscuro)] text-white shadow-xl relative overflow-hidden">
              
              {/* BLUEPRINT GRID BACKGROUND */}
              <div 
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                  backgroundSize: '32px 32px'
                }}
              />

              <div className="relative z-10 space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/20">
                  <div>
                    <span className="text-xs font-mono font-bold tracking-widest text-[var(--color-amarillo-radar)] uppercase">
                      PLANO TÉCNICO • MANUAL DE OPERACIONES IA
                    </span>
                    <h2 className="font-logo text-3xl sm:text-5xl font-bold uppercase tracking-tight mt-1">
                      BLUEPRINT DE LOS 4 LABORATORIOS
                    </h2>
                  </div>
                  <button
                    onClick={() => alert("Generando archivo vectorial PDF en alta resolución para impresión en papel Kraft...")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[var(--color-azul-oscuro)] text-xs font-mono font-bold uppercase rounded-xl hover:bg-[var(--color-amarillo-radar)] transition-colors shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Descargar PDF Kraft</span>
                  </button>
                </div>

                {/* THE 4 QUADRANTS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* QUADRANT 1 */}
                  <div className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[var(--color-amarillo-radar)]">CUADRANTE I</span>
                      <span className="text-[10px] font-mono uppercase bg-white/15 px-2 py-0.5 rounded">Saber Usar</span>
                    </div>
                    <h3 className="font-logo text-2xl font-bold uppercase">PROMPT LAB</h3>
                    <p className="text-xs text-white/80 font-sans leading-relaxed">
                      Arquitectura estructurada: Rol + Contexto + Tarea + Restricciones. Obliga a los modelos generativos a formular preguntas socráticas en lugar de generar respuestas automáticas.
                    </p>
                  </div>

                  {/* QUADRANT 2 */}
                  <div className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[var(--color-amarillo-radar)]">CUADRANTE II</span>
                      <span className="text-[10px] font-mono uppercase bg-white/15 px-2 py-0.5 rounded">Saber Dudar</span>
                    </div>
                    <h3 className="font-logo text-2xl font-bold uppercase">FORENSE LAB</h3>
                    <p className="text-xs text-white/80 font-sans leading-relaxed">
                      Catálogo de anomalías físicas (StyleGAN, Diffusion) en manos, orejas y reflejos. Guía de lectura del estándar criptográfico Content Credentials (C2PA) en periodismo verídico.
                    </p>
                  </div>

                  {/* QUADRANT 3 */}
                  <div className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[var(--color-amarillo-radar)]">CUADRANTE III</span>
                      <span className="text-[10px] font-mono uppercase bg-white/15 px-2 py-0.5 rounded">Saber Protegerse</span>
                    </div>
                    <h3 className="font-logo text-2xl font-bold uppercase">PRIVACIDAD LAB</h3>
                    <p className="text-xs text-white/80 font-sans leading-relaxed">
                      Checklist interactivo "Zero-Data": Anonimización de DNI, números de cuenta, nombres y domicilios antes de interactuar con servidores públicos de inteligencia artificial.
                    </p>
                  </div>

                  {/* QUADRANT 4 */}
                  <div className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[var(--color-amarillo-radar)]">CUADRANTE IV</span>
                      <span className="text-[10px] font-mono uppercase bg-white/15 px-2 py-0.5 rounded">Saber Convivir</span>
                    </div>
                    <h3 className="font-logo text-2xl font-bold uppercase">CREATOR LAB</h3>
                    <p className="text-xs text-white/80 font-sans leading-relaxed">
                      Directrices de ética de creación digital y convivencia escolar: Protocolo de no-revictimización ante deepfakes y aplicación de la etiqueta fáctica de desmentido ciudadano.
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </MainLayout>
  )
}
