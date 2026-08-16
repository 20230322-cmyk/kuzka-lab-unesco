import React from 'react';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';

const Slider = ({ label, value, onChange, min = 0, max = 100, colorClass = "bg-[#111111]" }) => {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center">
        <span className="font-['Montserrat'] text-[10px] font-bold text-[#111111]/80">{label}</span>
        <span className="font-mono text-[9px] text-[#111111]/50">{value}%</span>
      </div>
      <input 
        type="range" 
        min={min} 
        max={max} 
        value={value} 
        onChange={(e) => onChange(parseInt(e.target.value))}
        className={`w-full h-1.5 bg-[#111111]/5 rounded-lg appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full ${colorClass}`}
      />
    </div>
  );
};

const DietSimulator = ({ dietValues, updateDiet, onClose }) => {
  return (
    <div className="absolute inset-x-0 bottom-0 z-40 bg-white/95 backdrop-blur-2xl rounded-t-[2.5rem] border-t border-[#111111]/10 shadow-[0_-20px_40px_rgba(0,0,0,0.1)] p-6 pb-8 animate-in slide-in-from-bottom-12 duration-300">
      
      {/* Handle */}
      <div className="flex justify-center mb-6">
        <button 
          onClick={onClose}
          className="w-12 h-1.5 bg-[#111111]/10 rounded-full hover:bg-[#111111]/20 active:scale-95 transition-all"
        />
      </div>

      <div className="flex items-center gap-2 mb-5">
        <div className="p-1.5 bg-[#CA3606]/10 rounded-full text-[#CA3606]">
          <SlidersHorizontal className="w-4 h-4" />
        </div>
        <h3 className="font-['Gill_Sans_MT_Ext_Condensed_Bold'] text-xl tracking-widest uppercase text-[#111111]">
          Algoritmo Alimenticio
        </h3>
      </div>

      <div className="flex flex-col gap-5">
        <Slider 
          label="Sensacionalismo (IA)" 
          value={dietValues.sensacionalismo} 
          onChange={(val) => updateDiet('sensacionalismo', val)}
          colorClass="[&::-webkit-slider-thumb]:bg-[#CA3606]"
        />

        <Slider 
          label="Filtro Burbuja" 
          value={dietValues.filtroBurbuja} 
          onChange={(val) => updateDiet('filtroBurbuja', val)}
          colorClass="[&::-webkit-slider-thumb]:bg-[#111111]"
        />

        <Slider 
          label="Lectura Lateral" 
          value={dietValues.lecturaLateral} 
          onChange={(val) => updateDiet('lecturaLateral', val)}
          colorClass="[&::-webkit-slider-thumb]:bg-[#E7CE7B]"
        />
      </div>
      
    </div>
  );
};

export default DietSimulator;
