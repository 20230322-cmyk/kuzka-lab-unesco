import React from 'react'

export function KuskaCheckLayout({ children, header, footer }) {
  return (
    <main className="relative flex flex-col h-[100dvh] w-full overflow-hidden text-[var(--text-main)]">
      {header && (
        <header className="absolute top-0 left-0 w-full z-10 px-6 py-6 flex items-center justify-between">
          {header}
        </header>
      )}
      
      <section className="flex-1 flex flex-col items-center justify-center p-6 mt-16 relative">
        {children}
      </section>

      {footer && (
        <footer className="absolute bottom-0 left-0 w-full z-10 px-6 py-6 pb-10 flex flex-col items-center justify-center">
          {footer}
        </footer>
      )}
    </main>
  )
}
