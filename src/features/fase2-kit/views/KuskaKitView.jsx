import React, { useState } from 'react';
import { MainLayout } from '../../../shared/components/MainLayout';
import { Layers, LayoutGrid, RotateCcw, Download } from 'lucide-react';

import { useKuskaGame } from '../hooks/useKuskaGame';
import CryptoGridBoard from '../components/CryptoGridBoard';
import CardDeck from '../components/CardDeck';

export function KuskaKitView() {
  const [activeTab, setActiveTab] = useState('simulador'); // 'simulador' | 'blueprint'
  
  const {
    hand,
    board,
    selectedCardId,
    selectCard,
    placeCard,
    removeCard,
    checkMatch
  } = useKuskaGame();

  const resetBoard = () => {
    window.location.reload(); 
  };

  return (
    <MainLayout>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col min-h-screen">
        
        {/* HEADER SECTION - Editorial Style */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111]/5 text-[#111111]/70 text-[10px] font-mono font-bold uppercase tracking-widest border border-[#111111]/10">
              <Layers className="w-3.5 h-3.5" />
              <span>Fase 2 • El Botiquín Figital</span>
            </div>
            <h1 className="font-['Gill_Sans_MT_Ext_Condensed_Bold'] text-5xl sm:text-7xl tracking-widest text-[#111111] uppercase leading-none">
              KUSKA KIT & CRYPTO-GRID
            </h1>
            <p className="text-sm sm:text-base text-[#111111]/60 font-['Montserrat'] leading-relaxed max-w-2xl">
              Simulador interactivo del juego de cartas cooperativo. Valida físicamente la solución mediante la Cripto-Retícula de Encaje (Síntoma ➔ Herramienta ➔ Acción).
            </p>
          </div>

          {/* TABS */}
          <div className="flex items-center gap-1 p-1 bg-[#111111]/5 rounded-2xl border border-[#111111]/10 shrink-0 self-start lg:self-auto">
            <button
              onClick={() => setActiveTab('simulador')}
              className={`px-6 py-2.5 rounded-[14px] text-[10px] font-mono font-bold uppercase tracking-widest transition-all ${
                activeTab === 'simulador'
                  ? 'bg-white text-[#111111] shadow-sm ring-1 ring-black/5'
                  : 'text-[#111111]/50 hover:text-[#111111]'
              }`}
            >
              Simulador Interactivo
            </button>
            <button
              onClick={() => setActiveTab('blueprint')}
              className={`px-6 py-2.5 rounded-[14px] text-[10px] font-mono font-bold uppercase tracking-widest transition-all ${
                activeTab === 'blueprint'
                  ? 'bg-white text-[#111111] shadow-sm ring-1 ring-black/5'
                  : 'text-[#111111]/50 hover:text-[#111111]'
              }`}
            >
              Blueprint 4 Labs
            </button>
          </div>
        </div>

        {/* TAB 1: CRYPTO-GRID SIMULATOR */}
        {activeTab === 'simulador' && (
          <div className="flex-grow flex flex-col pb-32"> {/* Extra padding bottom for dock */}
            
            {/* INSTRUCTIONS BANNER */}
            <div className="px-6 py-5 rounded-3xl bg-white border border-[#111111]/10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 shrink-0">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-[#111111]/5 border border-[#111111]/10 flex items-center justify-center text-[#111111]/60">
                  <LayoutGrid className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-['Gill_Sans_MT_Ext_Condensed_Bold'] text-2xl tracking-widest uppercase text-[#111111]">
                    Crypto-Grid Blueprint
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#111111]/50 font-['Montserrat'] tracking-wide">
                    Selecciona una carta del botiquín y colócala en los laboratorios para cerrar el circuito.
                  </p>
                </div>
              </div>

              <button
                onClick={resetBoard}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-[#111111]/10 text-[10px] font-mono font-bold uppercase tracking-widest text-[#111111] hover:bg-[#111111]/5 active:scale-95 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar</span>
              </button>
            </div>

            {/* BOARD */}
            <div className="flex-grow w-full">
              <CryptoGridBoard 
                board={board} 
                placeCard={placeCard} 
                removeCard={removeCard} 
                checkMatch={checkMatch} 
              />
            </div>
          </div>
        )}

        {/* TAB 2: BLUEPRINT 4 LABS */}
        {activeTab === 'blueprint' && (
          <div className="flex-grow pb-12">
            <div className="p-8 sm:p-12 rounded-[2.5rem] bg-[#2058CC] text-white shadow-xl relative overflow-hidden">
              
              {/* BLUEPRINT GRID BACKGROUND */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }}
              />

              <div className="relative z-10 space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/20">
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#E7CE7B] uppercase mb-2 block">
                      PLANO TÉCNICO • MANUAL DE OPERACIONES IA
                    </span>
                    <h2 className="font-['Gill_Sans_MT_Ext_Condensed_Bold'] text-5xl sm:text-7xl tracking-widest leading-none">
                      BLUEPRINT DE LOS 4 LABS
                    </h2>
                  </div>
                  <button
                    onClick={() => alert("Generando archivo vectorial PDF en alta resolución...")}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#2058CC] text-[10px] font-mono font-bold uppercase tracking-widest rounded-2xl hover:bg-[#E7CE7B] transition-colors shadow-sm active:scale-95"
                  >
                    <Download className="w-4 h-4" />
                    <span>Descargar PDF</span>
                  </button>
                </div>

                {/* THE 4 QUADRANTS GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* QUADRANT 1 */}
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] tracking-widest font-bold text-[#E7CE7B]">CUADRANTE I</span>
                      <span className="text-[9px] font-mono tracking-widest uppercase bg-white/10 px-2.5 py-1 rounded-full">Saber Usar</span>
                    </div>
                    <h3 className="font-['Gill_Sans_MT_Ext_Condensed_Bold'] text-4xl tracking-widest uppercase mb-4">PROMPT LAB</h3>
                    <p className="text-xs text-white/70 font-['Montserrat'] leading-relaxed">
                      Arquitectura estructurada: Rol + Contexto + Tarea + Restricciones. Obliga a los modelos generativos a formular preguntas socráticas en lugar de generar respuestas automáticas.
                    </p>
                  </div>

                  {/* QUADRANT 2 */}
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] tracking-widest font-bold text-[#E7CE7B]">CUADRANTE II</span>
                      <span className="text-[9px] font-mono tracking-widest uppercase bg-white/10 px-2.5 py-1 rounded-full">Saber Dudar</span>
                    </div>
                    <h3 className="font-['Gill_Sans_MT_Ext_Condensed_Bold'] text-4xl tracking-widest uppercase mb-4">FORENSE LAB</h3>
                    <p className="text-xs text-white/70 font-['Montserrat'] leading-relaxed">
                      Catálogo de anomalías físicas (StyleGAN, Diffusion) en manos, orejas y reflejos. Guía de lectura del estándar criptográfico Content Credentials (C2PA) en periodismo verídico.
                    </p>
                  </div>

                  {/* QUADRANT 3 */}
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] tracking-widest font-bold text-[#E7CE7B]">CUADRANTE III</span>
                      <span className="text-[9px] font-mono tracking-widest uppercase bg-white/10 px-2.5 py-1 rounded-full">Saber Protegerse</span>
                    </div>
                    <h3 className="font-['Gill_Sans_MT_Ext_Condensed_Bold'] text-4xl tracking-widest uppercase mb-4">PRIVACIDAD LAB</h3>
                    <p className="text-xs text-white/70 font-['Montserrat'] leading-relaxed">
                      Checklist interactivo "Zero-Data": Anonimización de DNI, números de cuenta, nombres y domicilios antes de interactuar con servidores públicos de inteligencia artificial.
                    </p>
                  </div>

                  {/* QUADRANT 4 */}
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] tracking-widest font-bold text-[#E7CE7B]">CUADRANTE IV</span>
                      <span className="text-[9px] font-mono tracking-widest uppercase bg-white/10 px-2.5 py-1 rounded-full">Saber Convivir</span>
                    </div>
                    <h3 className="font-['Gill_Sans_MT_Ext_Condensed_Bold'] text-4xl tracking-widest uppercase mb-4">CREATOR LAB</h3>
                    <p className="text-xs text-white/70 font-['Montserrat'] leading-relaxed">
                      Directrices de ética de creación digital y convivencia escolar: Protocolo de no-revictimización ante deepfakes y aplicación de la etiqueta fáctica de desmentido ciudadano.
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* FIXED CARD DECK AT BOTTOM - ONLY SHOW IN SIMULADOR */}
      {activeTab === 'simulador' && (
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <CardDeck 
            hand={hand} 
            selectedCardId={selectedCardId} 
            selectCard={selectCard} 
          />
        </div>
      )}
    </MainLayout>
  );
}
