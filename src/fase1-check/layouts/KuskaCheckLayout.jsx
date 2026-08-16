import React from 'react'

export function KuskaCheckLayout({ children, header, footer }) {
  return (
    <div className="min-h-[100dvh] w-full bg-[var(--bg-crema)] flex justify-center items-center">
      <main className="flex flex-col h-[100dvh] w-full overflow-hidden text-[var(--text-main)] font-sans bg-[var(--bg-crema)] relative">
        {header && (
          <header className="h-[12%] min-h-[72px] w-full bg-[var(--bg-crema)] text-[var(--text-main)] flex items-center px-6 border-b-2 border-[var(--text-main)] z-20 shrink-0">
            {header}
          </header>
        )}
        
        <section className="flex-1 w-full bg-noise flex flex-col items-center justify-start p-6 relative overflow-hidden z-10">
          {children}
        </section>

        {footer && (
          <footer className="h-[15%] min-h-[96px] w-full bg-[var(--bg-crema)] text-[var(--text-main)] flex flex-col items-center justify-center px-6 border-t-2 border-[var(--text-main)] z-20 shrink-0">
            {footer}
          </footer>
        )}
      </main>
    </div>
  )
}
