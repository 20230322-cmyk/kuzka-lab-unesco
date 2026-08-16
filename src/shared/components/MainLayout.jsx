import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function MainLayout({ children, hideFooter = false }) {
  return (
    <div className="min-h-screen w-full bg-[var(--bg-crema)] bg-noise flex flex-col text-[var(--text-main)] font-sans antialiased selection:bg-[var(--color-naranja-kuska)] selection:text-white">
      {/* GLOBAL PERSISTENT NAVBAR */}
      <Navbar />

      {/* MAIN VIEW CONTENT CONTAINER */}
      <main className="flex-1 w-full pt-16 lg:pt-20 flex flex-col">
        {children}
      </main>

      {/* FOOTER */}
      {!hideFooter && <Footer />}
    </div>
  )
}
