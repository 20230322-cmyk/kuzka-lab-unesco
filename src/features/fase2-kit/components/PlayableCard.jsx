import React from 'react';

const PlayableCard = ({ card, isSelected, onClick, className = '' }) => {
  if (!card) return null;

  // Design Tokens based on rules: Neutrals + Brand Colors
  const bgColors = {
    symptom: 'bg-[#CA3606] text-[#FBF9F5] border-[#CA3606]', // Cereza Oscuro
    tool: 'bg-[#E7CE7B] text-[#111111] border-[#E7CE7B]', // Color Miel
    action: 'bg-[#FBF9F5] text-[#111111] border-[#111111]/20', // Blanco Hueso
  };

  const headerColors = {
    symptom: 'border-[#FBF9F5]/30',
    tool: 'border-[#111111]/20',
    action: 'border-[#111111]/10',
  };

  return (
    <div
      onClick={onClick}
      className={`
        relative w-48 h-72 rounded-2xl flex flex-col p-5 cursor-pointer 
        transition-all duration-300 ease-out will-change-transform
        border ${bgColors[card.type]}
        shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] 
        active:scale-[0.98]
        ${isSelected ? '-translate-y-4 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] z-10' : 'hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.04)]'}
        ${className}
      `}
    >
      {/* Liquid Glass Edge Highlight */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none"></div>

      <div className={`pb-3 border-b ${headerColors[card.type]} font-['Gill_Sans_MT_Ext_Condensed_Bold']`}>
        <div className="flex justify-between items-start mb-1">
          <span className="text-2xl font-bold tracking-widest">{card.id}</span>
          <span className="text-[10px] uppercase tracking-widest opacity-70 bg-black/5 px-2 py-0.5 rounded-full">{card.type}</span>
        </div>
        <h3 className="text-xl leading-none tracking-tight">{card.title}</h3>
      </div>

      <div className="mt-4 flex-grow font-['Montserrat'] text-xs leading-relaxed">
        <p className="font-bold mb-2 opacity-90 tracking-wide text-[10px] uppercase">{card.category || card.technique || card.actionType}</p>
        <p className="opacity-90">{card.description}</p>
      </div>

      {card.type === 'action' && (
        <div className="mt-auto self-end text-[9px] font-mono font-bold tracking-widest bg-[#111111] text-[#FBF9F5] px-2.5 py-1 rounded-full">
          QR LINK
        </div>
      )}
    </div>
  );
};

export default PlayableCard;
