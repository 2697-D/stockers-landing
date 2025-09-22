"use client"

import { ReactNode } from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

interface ScrollAnimatedProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'left' | 'right' | 'scale'
}

export function ScrollAnimated({ children, className = '', direction = 'up' }: ScrollAnimatedProps) {
  const { ref, isVisible } = useScrollAnimation()
  
  const baseClasses = {
    up: 'scroll-animate',
    left: 'scroll-animate-left',
    right: 'scroll-animate-right',
    scale: 'scroll-animate-scale'
  }

  return (
    <div 
      ref={ref}
      className={`${baseClasses[direction]} ${isVisible ? 'animate' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
