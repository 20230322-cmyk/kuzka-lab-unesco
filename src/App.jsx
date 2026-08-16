import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HomeHubView } from './features/hub/views/HomeHubView'
import { KuzkaHubView } from './features/hub/views/KuzkaHubView'
import { UnderConstructionView } from './shared/views/UnderConstructionView'
import { KuskaCheckView } from './features/fase1-check/views/KuskaCheckView'
import { KuskaKitView } from './features/fase2-kit/views/KuskaKitView'
import { KuskiPetView } from './features/fase3-pet/views/KuskiPetView'
import { CoursesView } from './features/courses/views/CoursesView'
import { BlogView } from './features/blog/views/BlogView'
import { ForumView } from './features/forum/views/ForumView'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ESTACIÓN CENTRAL / HOME HUB */}
        <Route path="/" element={<HomeHubView />} />

        {/* HUB DE CONOCIMIENTO (NUEVO) */}
        <Route path="/hub" element={<KuzkaHubView />} />
        <Route path="/hub/documentacion" element={<UnderConstructionView />} />
        <Route path="/hub/cursos" element={<UnderConstructionView />} />
        <Route path="/hub/asesoria" element={<UnderConstructionView />} />

        {/* FASE 1: KUSKA CHECK (TEST DE INSTINTO) */}
        <Route path="/check" element={<KuskaCheckView />} />
        <Route path="/test" element={<KuskaCheckView />} />

        {/* FASE 2: KUSKA KIT (EL BOTIQUÍN FIGITAL & CRYPTO-GRID) */}
        <Route path="/kit" element={<KuskaKitView />} />

        {/* FASE 3: KUZK! PET (EL SIMULADOR ALGORÍTMICO & DASHBOARD) */}
        <Route path="/pet" element={<KuskiPetView />} />

        {/* MÓDULO DE CURSOS / ACADEMIA STEAM (Legacy route) */}
        <Route path="/cursos" element={<CoursesView />} />

        {/* MÓDULO DE BLOG / BITÁCORA & GUÍAS */}
        <Route path="/blog" element={<BlogView />} />

        {/* MÓDULO DE FORO COMUNITARIO / SABIDURÍA COLECTIVA */}
        <Route path="/foro" element={<ForumView />} />

        {/* FALLBACK REDIRECT */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
