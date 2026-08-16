import React, { useState } from 'react';
import PlayableCard from './PlayableCard';
import { ChevronUp, ChevronDown } from 'lucide-react';

const CardDeck = ({ hand, selectedCardId, selectCard }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  // Group cards by type to make it easier for the user
  const symptoms = hand.filter(c => c.type === 'symptom');
  const tools = hand.filter(c => c.type === 'tool');
  const actions = hand.filter(c => c.type === 'action');

  return (
    <div className={`w-full flex justify-center pb-6 pointer-events-none transition-transform duration-500 ease-in-out ${isExpanded ? 'translate-y-0' : 'translate-y-[calc(100%-4rem)]'}`}>
      <div className="max-w-[1400px] w-full px-4 sm:px-6 lg:px-8 pointer-events-auto relative">
        
        {/* Toggle Button */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#111111] border border-white/10 text-white rounded-full p-2 shadow-lg hover:bg-[#222222] transition-colors z-10 flex items-center gap-2 px-4"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">
            {isExpanded ? 'Ocultar Botiquín' : 'Mostrar Botiquín'}
          </span>
          {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </button>

        <div className="bg-[#111111]/95 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-between mb-6 px-2">
            <h2 className="text-[#FBF9F5] font-['Gill_Sans_MT_Ext_Condensed_Bold'] text-3xl tracking-widest uppercase">
              Tu Botiquín Figital
            </h2>
            <span className="text-xs font-mono text-white/50 tracking-widest uppercase bg-white/5 px-3 py-1.5 rounded-full">
              Kuzka Loop
            </span>
          </div>
          
          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent snap-x pt-4">
              
              {/* SÍNTOMAS */}
              <div className="flex flex-col gap-3 shrink-0 snap-start">
                <div className="flex items-center gap-2 px-2">
                  <div className="w-2 h-2 rounded-full bg-[#CA3606]"></div>
                  <h3 className="text-white/80 font-['Montserrat'] font-bold text-xs tracking-widest uppercase">SÍNTOMAS</h3>
                </div>
                <div className="flex gap-4">
                  {symptoms.map(card => (
                    <PlayableCard 
                      key={card.id} 
                      card={card} 
                      isSelected={selectedCardId === card.id}
                      onClick={() => selectCard(card.id)}
                    />
                  ))}
                </div>
              </div>

              <div className="w-[1px] bg-white/10 shrink-0 self-stretch my-8"></div>

              {/* HERRAMIENTAS */}
              <div className="flex flex-col gap-3 shrink-0 snap-start">
                <div className="flex items-center gap-2 px-2">
                  <div className="w-2 h-2 rounded-full bg-[#E7CE7B]"></div>
                  <h3 className="text-white/80 font-['Montserrat'] font-bold text-xs tracking-widest uppercase">HERRAMIENTAS</h3>
                </div>
                <div className="flex gap-4">
                  {tools.map(card => (
                    <PlayableCard 
                      key={card.id} 
                      card={card} 
                      isSelected={selectedCardId === card.id}
                      onClick={() => selectCard(card.id)}
                    />
                  ))}
                </div>
              </div>

              <div className="w-[1px] bg-white/10 shrink-0 self-stretch my-8"></div>

              {/* ACCIONES */}
              <div className="flex flex-col gap-3 shrink-0 snap-start">
                <div className="flex items-center gap-2 px-2">
                  <div className="w-2 h-2 rounded-full bg-[#FBF9F5]"></div>
                  <h3 className="text-white/80 font-['Montserrat'] font-bold text-xs tracking-widest uppercase">ACCIONES</h3>
                </div>
                <div className="flex gap-4">
                  {actions.map(card => (
                    <PlayableCard 
                      key={card.id} 
                      card={card} 
                      isSelected={selectedCardId === card.id}
                      onClick={() => selectCard(card.id)}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDeck;
