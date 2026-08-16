import React, { useState } from 'react';

export const GlobalOverlays = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleTranslate = () => {
    // Usamos la URL de producción de Vercel porque Google Translate no puede traducir localhost
    const prodUrl = `https://kuzka-lab-unesco.vercel.app${window.location.pathname}`;
    window.open(`https://translate.google.com/translate?sl=es&tl=en&u=${encodeURIComponent(prodUrl)}`, '_blank');
  };

  return (
    <>
      {/* Top Marquee, slightly below the header */}
      <div className="fixed top-[68px] lg:top-[76px] left-0 w-full bg-[var(--color-naranja-kuska)] text-[#FBF9F5] font-playful text-[15px] tracking-wide overflow-hidden z-40 border-b border-[rgba(0,0,0,0.1)] py-1 shadow-md">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 15 }).map((_, i) => (
            <span key={i} className="mx-4">★ Esta página fue hecha para la Hackathon UNESCO ★</span>
          ))}
        </div>
      </div>

      {/* Translator Popup */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 bg-[#FBF9F5] text-[#111111] p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-minimal z-50 flex items-start gap-3 max-w-xs animate-slide-up group hover:-translate-y-1 transition-transform duration-300">
          <div className="bg-[var(--color-azul-tech)] text-white p-2 rounded-full mt-1 shrink-0 relative overflow-hidden">
            {/* Subtle pulse background animation */}
            <div className="absolute inset-0 bg-white/20 animate-ping rounded-full opacity-50" style={{ animationDuration: '3s' }}></div>
            {/* The translate icon with a slow subtle rock/spin */}
            <svg className="w-4 h-4 relative z-10 transition-transform duration-700 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-sm mb-1 leading-tight text-[var(--color-azul-oscuro)]">Translation Available</h4>
            <p className="text-xs opacity-75 leading-relaxed mb-3">This page can also be automatically translated to English from your browser.</p>
            <button 
              onClick={handleTranslate}
              className="bg-[var(--color-azul-oscuro)] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full hover:scale-105 active:scale-95 transition-all shadow-sm"
            >
              Translate Now
            </button>
          </div>
          <button 
            onClick={() => setShowPopup(false)}
            className="text-[#111111] opacity-40 hover:opacity-100 hover:rotate-90 hover:bg-black/5 p-1 rounded-md transition-all shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};
