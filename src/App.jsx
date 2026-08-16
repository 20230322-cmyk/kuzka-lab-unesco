import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { KuskaCheckView } from './fase1-check/views/KuskaCheckView'

function LandingPlaceholder() {
  return (
    <div className="w-full min-h-[100dvh] flex flex-col items-center justify-center p-6 text-center">
      <img src="/LOGOTIPO KUZKA CHECK.png" alt="Kuzka Check Logo" className="h-12 lg:h-16 mb-8 object-contain" />
      <h1 className="font-logo text-5xl lg:text-7xl font-bold tracking-tighter text-[var(--text-main)] mb-4 leading-none">
        KUZKA LAB<br/>UNESCO 2026
      </h1>
      <p className="font-main text-sm lg:text-lg font-medium text-[var(--text-main)]/60 mb-10 max-w-lg">
        La plataforma oficial se encuentra en desarrollo. Puedes acceder al entorno de pruebas técnicas desde la ruta temporal.
      </p>
      <Link 
        to="/test" 
        className="px-8 py-4 bg-[var(--text-main)] text-white font-mono text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:bg-[var(--color-naranja-kuska)] active:scale-95 transition-all"
      >
        Ir al Área de Testing
      </Link>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-[100dvh] w-full max-w-[1400px] mx-auto bg-[var(--bg-crema)] bg-noise overflow-hidden relative">
        <Routes>
          <Route path="/" element={<LandingPlaceholder />} />
          <Route path="/test" element={<KuskaCheckView />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
