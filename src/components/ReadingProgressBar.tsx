'use client'

import { useState, useEffect, useCallback } from 'react'

export function ReadingProgressBar() {
  const [progress, setProgress] = useState(0)

  const updateProgress = useCallback(() => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight

    if (docHeight <= 0) {
      setProgress(0)
      return
    }

    const value = (scrollTop / docHeight) * 100
    setProgress(Math.min(100, Math.max(0, value)))
  }, [])

  useEffect(() => {
    let rafId: number

    const onScroll = () => {
      rafId = requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [updateProgress])

  return (
    <div
      className="w-full h-[3px] bg-gray-200/50"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Napredak čitanja stranice"
    >
      <div
        className="h-full bg-blue-600 transition-[width] duration-75 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
