"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface BackgroundLinesProps {
  children: React.ReactNode
  className?: string
  lineColor?: string
  lineOpacity?: number
  lineCount?: number
}

export function BackgroundLines({ 
  children, 
  className,
  lineColor = "rgba(216, 222, 233, 0.3)",
  lineOpacity = 0.5,
  lineCount = 12
}: BackgroundLinesProps) {
  return (
    <div className={cn("relative min-h-screen", className)}>
      {/* Background Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: lineCount }).map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px opacity-30"
            style={{
              background: `linear-gradient(90deg, transparent, ${lineColor}, transparent)`,
              top: `${(i + 1) * (100 / (lineCount + 1))}%`,
              animationDelay: `${i * 0.5}s`,
              animation: `lineGlow 3s ease-in-out infinite alternate`,
              opacity: 0.4
            }}
          />
        ))}
        
        {/* Vertical Lines */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={`vertical-${i}`}
            className="absolute h-full w-px opacity-10"
            style={{
              background: `linear-gradient(180deg, transparent, ${lineColor}, transparent)`,
              left: `${(i + 1) * (100 / 4)}%`,
              animationDelay: `${i * 0.8}s`,
              animation: `lineGlow 4s ease-in-out infinite alternate`,
              opacity: 0.3
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
