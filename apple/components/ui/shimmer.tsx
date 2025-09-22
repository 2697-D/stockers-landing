"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface ShimmerProps {
  children: React.ReactNode
  className?: string
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  background?: string
  shimmerAxis?: "x" | "y" | "xy"
}

export function Shimmer({
  children,
  className,
  shimmerColor = "#ffffff",
  shimmerSize = "200px",
  borderRadius = "8px",
  shimmerDuration = "2s",
  background = "transparent",
  shimmerAxis = "x",
}: ShimmerProps) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        background,
        borderRadius,
      }}
    >
      <div
        className="absolute inset-0 -translate-x-full animate-shimmer"
        style={{
          background: `linear-gradient(${
            shimmerAxis === "x"
              ? "90deg"
              : shimmerAxis === "y"
              ? "0deg"
              : "45deg"
          }, transparent, ${shimmerColor}, transparent)`,
          width: shimmerAxis === "y" ? "100%" : shimmerSize,
          height: shimmerAxis === "x" ? "100%" : shimmerSize,
          animationDuration: shimmerDuration,
        }}
      />
      {children}
    </div>
  )
}
