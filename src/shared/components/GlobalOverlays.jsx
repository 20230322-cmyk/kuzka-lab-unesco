import React, { useState } from 'react';

export const GlobalOverlays = () => {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <>
      {/* Top Marquee */}
      <div className="fixed top-0 left-0 w-full bg-[var(--color-naranja-kuska)] text-[#FBF9F5] font-logo text-sm tracking-widest uppercase overflow-hidden z-50 border-b border-[rgba(0,0,0,0.1)] py-1">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 15 }).map((_, i) => (
            <span key={i} className="mx-4">★ ESTA PÁGINA FUE HECHA PARA LA HACKATHON UNESCO ★</span>
          ))}
        </div>
      </div>

      {/* Translator Popup */}
      {showPopup && (
        <div className="fixed bottom-4 right-4 bg-[#FBF9F5] text-[#111111] p-4 rounded-xl shadow-minimal border-minimal z-50 flex items-start gap-3 max-w-xs animate-slide-up">
          <div className="bg-[var(--color-azul-tech)] text-white p-2 rounded-full mt-1 shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-sm mb-1 leading-tight">Traductor disponible</h4>
            <p className="text-xs opacity-70 leading-relaxed">Esta página también se puede traducir al inglés automáticamente desde tu navegador.</p>
          </div>
          <button 
            onClick={() => setShowPopup(false)}
            className="text-[#111111] opacity-50 hover:opacity-100 transition-opacity shrink-0"
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
