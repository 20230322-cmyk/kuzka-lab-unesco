import React, { useState } from 'react';
import { MainLayout } from '../../../shared/components/MainLayout';
import { RefreshCw, Activity, Apple, MessageSquareHeart } from 'lucide-react';

import { useKuskiPet } from '../hooks/useKuskiPet';
import PetAvatar from '../components/PetAvatar';
import StatBars from '../components/StatBars';
import DietSimulator from '../components/DietSimulator';
import SocraticChat from '../components/SocraticChat';

export function KuskiPetView() {
  const {
    stats,
    petState,
    dietValues,
    updateDiet,
    chatHistory,
    handleSocraticChoice,
    resetPet
  } = useKuskiPet();

  // Local UI state for modals
  const [showStats, setShowStats] = useState(false);
  const [showDiet, setShowDiet] = useState(false);
  const [showChat, setShowChat] = useState(false);

  // Close all overlays
  const closeOverlays = () => {
    setShowStats(false);
    setShowDiet(false);
    setShowChat(false);
  };

  return (
    <MainLayout>
      <div className="flex-grow flex items-center justify-center p-4 sm:p-8 bg-[#111111]/5 overflow-hidden">
        
        {/* Mobile Device Container Simulation */}
        <div className="w-full max-w-[400px] h-[800px] max-h-[90vh] bg-white rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] border-[8px] border-[#111111] overflow-hidden flex flex-col relative">
          
          {/* THE PET AVATAR LIVES HERE (FULL SCREEN BG) */}
          <PetAvatar petState={petState} stressLevel={stats.cognitiveStress} />

          {/* TOP HUD (Heads Up Display) */}
          <div className="absolute top-0 inset-x-0 p-6 z-20 flex justify-between items-start pointer-events-none">
            <div className="pointer-events-auto">
               <button 
                onClick={() => setShowStats(!showStats)}
                className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#111111]/10 shadow-sm flex items-center gap-2 active:scale-95 transition-transform"
               >
                 <Activity className="w-4 h-4 text-[#111111]" />
                 <span className="font-mono text-[10px] font-bold text-[#111111]">STATS</span>
               </button>
            </div>

            <div className="pointer-events-auto">
              <button 
                onClick={resetPet}
                className="p-2.5 rounded-full bg-white/80 backdrop-blur-md border border-[#111111]/10 hover:bg-white active:scale-95 transition-all text-[#111111]/60 shadow-sm"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* OVERLAYS */}
          
          {/* 1. Stats Dropdown */}
          {showStats && (
            <div className="absolute top-20 inset-x-4 z-30 pointer-events-auto animate-in fade-in slide-in-from-top-4 duration-200">
               <StatBars stats={stats} />
            </div>
          )}

          {/* 2. Diet Bottom Sheet */}
          {showDiet && (
            <DietSimulator 
              dietValues={dietValues} 
              updateDiet={updateDiet} 
              onClose={() => setShowDiet(false)} 
            />
          )}

          {/* 3. Socratic Chat Overlay */}
          {showChat && (
            <SocraticChat 
              chatHistory={chatHistory} 
              handleSocraticChoice={handleSocraticChoice}
              onClose={() => setShowChat(false)}
            />
          )}


          {/* INTERACTIVE BUBBLES (Floating around the pet) */}
          {(!showDiet && !showChat) && (
             <div className="absolute bottom-10 inset-x-0 flex justify-around px-8 z-20 pointer-events-none">
                
                {/* Diet Bubble */}
                <button 
                  onClick={() => setShowDiet(true)}
                  className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md border border-white shadow-[0_8px_16px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center gap-1 active:scale-[0.85] transition-transform pointer-events-auto hover:bg-white group"
                >
                  <Apple className="w-6 h-6 text-[#CA3606] group-hover:scale-110 transition-transform" />
                  <span className="text-[8px] font-mono font-bold tracking-widest text-[#111111]/50">DIETA</span>
                </button>

                {/* Chat/Train Bubble */}
                <button 
                  onClick={() => setShowChat(true)}
                  className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md border border-white shadow-[0_8px_16px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center gap-1 active:scale-[0.85] transition-transform pointer-events-auto hover:bg-white group"
                >
                  <MessageSquareHeart className="w-6 h-6 text-[#E7CE7B] group-hover:scale-110 transition-transform" />
                  <span className="text-[8px] font-mono font-bold tracking-widest text-[#111111]/50">CHARLA</span>
                </button>

             </div>
          )}

        </div>
      </div>
    </MainLayout>
  );
}
