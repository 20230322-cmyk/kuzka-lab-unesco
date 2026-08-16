import React from 'react'

// Componente base ultra-minimalista. Listo para ser reemplazado por tu propia librería.
export function Button({ children, onClick, variant = 'primary', className = '' }) {
  const baseStyles = "w-full py-3 rounded-md transition-transform hover:scale-[0.98] text-sm font-bold tracking-wide flex items-center justify-center cursor-pointer"
  
  const variants = {
    primary: "bg-[var(--text-main)] text-[var(--bg-crema)]",
    outline: "bg-transparent border border-[var(--color-muted-border)] text-[var(--text-main)]",
  }

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
