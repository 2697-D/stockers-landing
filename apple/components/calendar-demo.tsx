"use client"

import { useState, useEffect } from "react"
import { Calendar } from "@/components/ui/calendar"

export function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setDate(new Date())
  }, [])

  if (!mounted) {
    return (
      <div className="h-[300px] flex items-center justify-center bg-slate-700 rounded-md">
        <p className="text-slate-400">Loading calendar...</p>
      </div>
    )
  }

  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border border-slate-600 bg-slate-700"
      />
      {date && (
        <div className="mt-6 p-4 bg-slate-700/50 rounded-lg border border-slate-600">
          <p className="text-sm text-slate-300">
            Selected date: <span className="text-blue-400 font-medium">{date.toLocaleDateString()}</span>
          </p>
        </div>
      )}
    </>
  )
}
