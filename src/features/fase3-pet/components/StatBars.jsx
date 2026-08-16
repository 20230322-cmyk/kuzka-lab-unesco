import React from 'react';

const StatBar = ({ label, value, colorHex, warningHex, isWarning }) => {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center">
        <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#111111]/70">
          {label}
        </span>
        <span className="font-mono text-[9px] font-bold text-[#111111]/90">
          {Math.round(value)}%
        </span>
      </div>
      <div className="h-1.5 w-full bg-[#111111]/5 rounded-full overflow-hidden">
        <div 
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{ 
            width: `${value}%`,
            backgroundColor: isWarning ? warningHex : colorHex 
          }}
        />
      </div>
    </div>
  );
};

const StatBars = ({ stats }) => {
  return (
    <div className="w-full px-6 py-5 bg-white border-y border-[#111111]/5 flex flex-col gap-4">
      <StatBar 
        label="Pensamiento Crítico" 
        value={stats.criticalThinking} 
        colorHex="#E7CE7B" // Miel
      />
      <StatBar 
        label="Ansiedad Cognitiva" 
        value={stats.cognitiveStress} 
        colorHex="#111111" // Black (Normal)
        warningHex="#CA3606" // Cereza (High Stress)
        isWarning={stats.cognitiveStress > 60}
      />
      <StatBar 
        label="Integridad de Creación" 
        value={stats.creativeEthics} 
        colorHex="#8B5A2B" // Chocolate (aprox)
      />
    </div>
  );
};

export default StatBars;
