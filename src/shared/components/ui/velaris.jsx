import React from "react";
import { motion } from "framer-motion";

export default function Velaris({ children, height = "100%", className = "" }) {
  return (
    <div
      className={`relative overflow-hidden w-full ${className}`}
      style={{ height }}
    >
      {/* Animated Gradients Background */}
      <div className="absolute inset-0 bg-[var(--bg-crema)] z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full opacity-60 mix-blend-multiply blur-[80px]"
          style={{ backgroundColor: "var(--color-amarillo-radar)" }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full opacity-40 mix-blend-multiply blur-[80px]"
          style={{ backgroundColor: "var(--color-azul-tech)" }}
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 30, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-[20%] left-[20%] w-[70%] h-[70%] rounded-full opacity-40 mix-blend-multiply blur-[100px]"
          style={{ backgroundColor: "var(--color-naranja-kuska)" }}
        />
      </div>

      {/* Film Grain / Noise Overlay */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Vignette Glow */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[var(--bg-crema)]/90" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,var(--bg-crema)_100%)] opacity-30" />

      {/* Content */}
      <div className="relative z-20 h-full w-full">
        {children}
      </div>
    </div>
  );
}
