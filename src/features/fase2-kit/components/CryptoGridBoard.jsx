import React from 'react';
import PlayableCard from './PlayableCard';

const Slot = ({ type, card, onPlace, onRemove }) => {
  const isSymptom = type === 'symptom';
  const isTool = type === 'tool';

  return (
    <div className="relative flex flex-col items-center gap-2">
      <div 
        onClick={onPlace}
        className={`w-48 h-72 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 ease-out active:scale-[0.98]
          ${card ? 'bg-transparent border-0' : 'bg-[#111111]/[0.02] hover:bg-[#111111]/[0.04] border border-[#111111]/10 border-dashed shadow-inner'}
        `}
      >
        {card ? (
          <div className="relative group w-full h-full" onClick={(e) => { e.stopPropagation(); onRemove(); }}>
            <PlayableCard card={card} className="shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] !hover:-translate-y-1" />
            <div className="absolute -top-3 -right-3 bg-[#CA3606] text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-lg cursor-pointer shadow-md opacity-0 group-hover:opacity-100 transition-opacity transform hover:scale-110 z-20">
              ×
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 px-4 text-center opacity-40">
            <div className={`w-8 h-8 rounded-full border border-current flex items-center justify-center ${isSymptom ? 'text-[#CA3606]' : isTool ? 'text-[#E7CE7B]' : 'text-[#111111]'}`}>
              <span className="text-xl leading-none">+</span>
            </div>
            <span className="font-['Montserrat'] font-bold text-[10px] uppercase tracking-widest text-current">
              {isSymptom ? 'Síntoma' : isTool ? 'Herramienta' : 'Acción'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

const LabQuadrant = ({ name, data, status, placeCard, removeCard, className = "" }) => {
  return (
    <div className={`bg-white border border-[#111111]/10 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] ${className}`}>
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
        <div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#111111]/40 uppercase mb-1 block">Quadrant</span>
          <h3 className="font-['Gill_Sans_MT_Ext_Condensed_Bold'] text-3xl tracking-widest text-[#111111] uppercase leading-none">{name}</h3>
        </div>
        
        {/* Status Indicator */}
        <div className={`px-4 py-1.5 rounded-full text-[10px] font-bold font-mono tracking-widest uppercase transition-colors flex items-center gap-2
          ${status === 'perfect' ? 'bg-[#E7CE7B]/10 text-[#CA3606] ring-1 ring-[#CA3606]/20' : 
            status === 'partial' ? 'bg-[#111111]/5 text-[#111111]/60' : 
            status === 'invalid' ? 'bg-[#CA3606]/10 text-[#CA3606] ring-1 ring-[#CA3606]/20' : 'bg-transparent text-transparent'}
        `}>
          {status === 'perfect' && <div className="w-1.5 h-1.5 rounded-full bg-[#CA3606] animate-pulse"></div>}
          {status === 'perfect' ? 'Perfect Match' : status === 'invalid' ? 'Anomalía' : 'En Progreso'}
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 items-center justify-center relative w-full overflow-x-auto pb-4 snap-x">
        {/* Connection Lines (Visible on large screens) */}
        <div className="hidden xl:block absolute top-1/2 left-1/4 right-1/4 h-[1px] bg-[#111111]/10 -translate-y-1/2 z-0"></div>
        {status === 'perfect' && (
          <div className="hidden xl:block absolute top-1/2 left-[15%] right-[15%] h-[2px] bg-[#DE711E] -translate-y-1/2 z-0 animate-pulse shadow-[0_0_10px_#DE711E]"></div>
        )}

        <div className="z-10 snap-center"><Slot type="symptom" card={data.symptom} onPlace={() => placeCard(name, 'symptom')} onRemove={() => removeCard(name, 'symptom')} /></div>
        <div className="z-10 snap-center"><Slot type="tool" card={data.tool} onPlace={() => placeCard(name, 'tool')} onRemove={() => removeCard(name, 'tool')} /></div>
        <div className="z-10 snap-center"><Slot type="action" card={data.action} onPlace={() => placeCard(name, 'action')} onRemove={() => removeCard(name, 'action')} /></div>
      </div>
    </div>
  );
};

const CryptoGridBoard = ({ board, placeCard, removeCard, checkMatch }) => {
  const labs = Object.keys(board);

  return (
    <div className="w-full space-y-8">
      {/* Asymmetric Bento Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Main Lab (Prompt Lab) spanning more columns */}
        <div className="lg:col-span-12">
          <LabQuadrant 
            name={labs[0]}
            data={board[labs[0]]}
            status={checkMatch(labs[0])}
            placeCard={placeCard}
            removeCard={removeCard}
            className="bg-[#FBF9F5]" // Subtle background emphasis
          />
        </div>

        {/* Other Labs */}
        {labs.slice(1).map((labName, index) => (
          <div key={labName} className="lg:col-span-12">
            <LabQuadrant 
              name={labName}
              data={board[labName]}
              status={checkMatch(labName)}
              placeCard={placeCard}
              removeCard={removeCard}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoGridBoard;
