import { useState, useEffect } from 'react';

export function useKuskiPet() {
  const [stats, setStats] = useState({
    criticalThinking: 50,  // Miel (0-100)
    cognitiveStress: 10,   // Cereza (0-100)
    creativeEthics: 50,    // Chocolate (0-100)
  });

  const [petState, setPetState] = useState('healthy'); // 'healthy' | 'stressed'
  const [activeMode, setActiveMode] = useState('dashboard'); // 'dashboard' | 'consumo' | 'creador'

  const [dietValues, setDietValues] = useState({
    sensacionalismo: 20,
    filtroBurbuja: 30,
    indignacion: 10,
    lecturaLateral: 60,
  });

  const [chatHistory, setChatHistory] = useState([
    { id: 1, role: 'pet', content: 'MISIÓN: Tu KuskiPet necesita redactar un correo formal para solicitar una cotización textil de su negocio a un proveedor de Gamarra.', isMission: true }
  ]);

  // Update pet state based on stress
  useEffect(() => {
    if (stats.cognitiveStress > 60) {
      setPetState('stressed');
    } else {
      setPetState('healthy');
    }
  }, [stats.cognitiveStress]);

  const updateDiet = (key, value) => {
    setDietValues(prev => {
      const newDiet = { ...prev, [key]: value };
      
      // Calculate new stress based on diet
      let stressImpact = 0;
      stressImpact += (newDiet.sensacionalismo - 20) * 0.3;
      stressImpact += (newDiet.indignacion - 10) * 0.5;
      stressImpact -= (newDiet.lecturaLateral - 60) * 0.4;
      
      setStats(prevStats => ({
        ...prevStats,
        cognitiveStress: Math.min(100, Math.max(0, 10 + stressImpact))
      }));

      return newDiet;
    });
  };

  const handleSocraticChoice = (choiceType) => {
    if (choiceType === 'muleta') {
      // Option A: Bad choice
      setChatHistory(prev => [
        ...prev,
        { id: Date.now(), role: 'user', content: '[A] He pedido a la IA que redacte todo copiando y pegando los datos de mis clientes y mi dinero.', choiceType },
        { id: Date.now()+1, role: 'pet', content: '¡Ay! Has cedido tus datos confidenciales al modelo y usado la IA como muleta. He perdido integridad de creación y mi estrés ha subido.', isFeedback: true, isNegative: true }
      ]);
      setStats(prev => ({
        ...prev,
        creativeEthics: Math.max(0, prev.creativeEthics - 20),
        cognitiveStress: Math.min(100, prev.cognitiveStress + 30)
      }));
    } else {
      // Option B: Good choice (Socratic)
      setChatHistory(prev => [
        ...prev,
        { id: Date.now(), role: 'user', content: '[B] He anonimizado los datos y aplicado una arquitectura de prompt socrático para que me ayude a redactar.', choiceType },
        { id: Date.now()+1, role: 'pet', content: '¡Excelente! Usaste la IA como un tutor protegiendo tus datos ("Zero-Data"). Mi pensamiento crítico y mi integridad han subido.', isFeedback: true, isNegative: false }
      ]);
      setStats(prev => ({
        ...prev,
        creativeEthics: Math.min(100, prev.creativeEthics + 30),
        criticalThinking: Math.min(100, prev.criticalThinking + 20),
        cognitiveStress: Math.max(0, prev.cognitiveStress - 40)
      }));
    }
  };

  const resetPet = () => {
    setStats({ criticalThinking: 50, cognitiveStress: 10, creativeEthics: 50 });
    setDietValues({ sensacionalismo: 20, filtroBurbuja: 30, indignacion: 10, lecturaLateral: 60 });
    setChatHistory([{ id: Date.now(), role: 'pet', content: '¡He revivido! Listo para seguir entrenando.', isMission: true }]);
  };

  return {
    stats,
    petState,
    activeMode,
    setActiveMode,
    dietValues,
    updateDiet,
    chatHistory,
    handleSocraticChoice,
    resetPet
  };
}
