import React from 'react'

// Componente base ultra-minimalista. Listo para ser reemplazado por tu propia librería.
export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  disabled
}) {
  const baseStyles = "inline-flex items-center justify-center font-main rounded-md transition-transform duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
  
  const variants = {
    primary: "bg-[var(--color-naranja-kuska)] text-white",
    secondary: "bg-white text-[var(--text-main)] border-minimal hover:bg-[var(--bg-crema)]",
    danger: "bg-[var(--color-rojo-alerta)] text-white"
  }

  const sizes = {
    sm: "px-4 py-2 text-xs font-bold",
    md: "px-6 py-3 text-sm font-bold",
    lg: "px-8 py-4 text-base font-bold w-full"
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
