import React from 'react';

const PetAvatar = ({ petState, stressLevel }) => {
  // Cuando el estrés es mayor a 60, entra en modo infoxicado (rojo glitchy)
  const isStressed = stressLevel > 60;
  
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center bg-white pointer-events-none">
      
      {/* Background Aura */}
      <div 
        className={`absolute w-[200%] h-[200%] rounded-full blur-[100px] transition-all duration-1000 ease-in-out ${
          isStressed 
            ? 'bg-[#CA3606]/30 animate-pulse scale-110' 
            : 'bg-[#E7CE7B]/20 scale-100'
        }`}
      />

      {/* Video Avatar */}
      <video
        src="/KUZKIPET/avatar_video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={`relative z-10 w-full h-full object-cover transition-all duration-700 ease-in-out ${
          isStressed 
            ? 'saturate-150 hue-rotate-[280deg] scale-110 contrast-125 mix-blend-multiply' 
            : 'scale-100 mix-blend-darken'
        }`}
        style={{
          // Fake a continuous smooth levitation effect
          animation: 'levitate 4s ease-in-out infinite'
        }}
      />

      {/* Glitch Overlay for High Stress */}
      {isStressed && (
        <div className="absolute inset-0 bg-[#CA3606]/5 pointer-events-none mix-blend-color-burn">
          <div className="absolute top-1/4 left-0 w-full h-[2px] bg-[#CA3606]/40 animate-[glitch-anim_2s_infinite]" />
          <div className="absolute bottom-1/3 right-0 w-full h-[1px] bg-[#CA3606]/40 animate-[glitch-anim_1.5s_infinite_reverse]" />
        </div>
      )}

      {/* CSS Anim definitions directly injected for convenience */}
      <style>{`
        @keyframes levitate {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glitch-anim {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default PetAvatar;
