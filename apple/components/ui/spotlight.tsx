"use client"

import React from "react"

interface SpotlightProps {
  className?: string
  fill?: string
}

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 1000 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient
          id="spotlight-gradient"
          cx="50%"
          cy="50%"
          r="50%"
        >
          <stop offset="0%" stopColor={fill || "white"} stopOpacity="0.1" />
          <stop offset="50%" stopColor={fill || "white"} stopOpacity="0.1" />
          <stop offset="100%" stopColor={fill || "white"} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="url(#spotlight-gradient)"
      />
    </svg>
  )
}

interface SpotlightContainerProps {
  children: React.ReactNode
  className?: string
}

export const SpotlightContainer = ({ children, className }: SpotlightContainerProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-slate-950">
        <Spotlight className="absolute top-0 left-0 w-full h-full" fill="white" />
        <Spotlight className="absolute top-0 right-0 w-full h-full" fill="blue" />
        <Spotlight className="absolute bottom-0 left-0 w-full h-full" fill="purple" />
        <Spotlight className="absolute bottom-0 right-0 w-full h-full" fill="pink" />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
