import React from 'react';
import { ShieldAlert, BookOpenCheck, ChevronDown } from 'lucide-react';

const SocraticChat = ({ chatHistory, handleSocraticChoice, onClose }) => {
  const lastMsg = chatHistory[chatHistory.length - 1];
  const isWaitingForInput = lastMsg.isMission;

  return (
    <div className="absolute inset-x-0 top-1/2 bottom-0 z-40 flex flex-col pointer-events-auto bg-gradient-to-t from-white via-white/90 to-transparent pt-12 animate-in slide-in-from-bottom-8 duration-300">
      
      {/* Header / Close Bar */}
      <div className="absolute top-4 inset-x-0 flex justify-center">
        <button 
          onClick={onClose}
          className="p-2 bg-white/80 backdrop-blur-md border border-[#111111]/10 rounded-full text-[#111111]/60 shadow-sm active:scale-90 transition-transform"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-6 flex flex-col gap-3 pb-4">
        {chatHistory.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex flex-col max-w-[85%] ${msg.role === 'user' ? 'self-end items-end' : 'self-start items-start'}`}
          >
            <div className={`px-4 py-3 rounded-[1.2rem] text-xs font-['Montserrat'] leading-relaxed shadow-sm backdrop-blur-md ${
              msg.role === 'user' 
                ? 'bg-[#111111] text-white rounded-br-sm' 
                : msg.isNegative 
                  ? 'bg-[#CA3606]/90 text-white border border-[#CA3606]/20 rounded-bl-sm'
                  : 'bg-white/90 text-[#111111]/90 border border-[#111111]/10 rounded-bl-sm'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input Choices Area */}
      {isWaitingForInput && (
        <div className="p-4 bg-white/95 backdrop-blur-xl border-t border-[#111111]/10 shrink-0 shadow-[0_-10px_20px_rgba(0,0,0,0.02)] pb-8">
          <div className="flex flex-col gap-2">
            
            <button 
              onClick={() => handleSocraticChoice('muleta')}
              className="flex items-center gap-3 p-3 rounded-2xl bg-[#CA3606]/5 border border-[#CA3606]/20 hover:bg-[#CA3606]/10 active:scale-[0.98] transition-all text-left group"
            >
              <div className="p-2 rounded-full bg-white text-[#CA3606] shadow-sm shrink-0">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-['Montserrat'] font-bold text-[11px] text-[#CA3606] mb-0.5">La Muleta Rápida</span>
                <span className="block text-[10px] text-[#CA3606]/70 leading-tight">Copiar, pegar datos reales y delegar todo.</span>
              </div>
            </button>

            <button 
              onClick={() => handleSocraticChoice('socratic')}
              className="flex items-center gap-3 p-3 rounded-2xl bg-[#111111] border border-transparent hover:bg-[#111111]/90 active:scale-[0.98] transition-all text-left group"
            >
              <div className="p-2 rounded-full bg-white/10 text-white shrink-0">
                <BookOpenCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-['Montserrat'] font-bold text-[11px] text-white mb-0.5">Tutor Socrático (Zero-Data)</span>
                <span className="block text-[10px] text-white/70 leading-tight">Crear variables anónimas y guiar a la IA.</span>
              </div>
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default SocraticChat;
