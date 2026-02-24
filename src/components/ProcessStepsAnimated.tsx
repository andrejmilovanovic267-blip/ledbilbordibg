'use client'

import { useEffect, useRef, useState } from 'react'

interface Step {
  title: string
  detail: string
}

const DELAYS = [0, 150, 300, 500]

export function ProcessStepsAnimated({ steps }: { steps: Step[] }) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={sectionRef}
      className={`group relative max-w-5xl mx-auto ${isInView ? 'in-view' : ''}`}
    >
      <div className="hidden lg:block absolute top-5 left-[calc(12.5%-16px)] right-[calc(12.5%-16px)] h-px bg-gray-200 overflow-hidden" aria-hidden>
        <div className="absolute inset-y-0 left-0 w-0 bg-blue-600 transition-all duration-1500 ease-out group-[.in-view]:w-full" />
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center"
          >
            <div className="flex justify-center mb-4 group/step">
              <div
                className="w-12 h-12 sm:w-9 sm:h-9 rounded-full border border-gray-300 text-gray-400 bg-white flex items-center justify-center text-base sm:text-sm font-semibold shrink-0 transition-all duration-1000 ease-out group-[.in-view]:border-blue-600 group-[.in-view]:text-blue-600 group-[.in-view]:scale-105 group-hover/step:border-blue-500 group-hover/step:-translate-y-0.5"
                style={{ transitionDelay: `${DELAYS[index]}ms` }}
              >
                {index + 1}
              </div>
            </div>
            <p className="text-lg sm:text-base font-semibold sm:font-medium text-gray-900 mb-1.5 transition-colors group-hover:text-gray-800">
              {step.title}
            </p>
            <p className="text-base sm:text-sm text-gray-600 max-w-[280px] sm:max-w-[240px]">
              {step.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
