'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface FaqItem {
  q: string
  a: string
}

interface FaqAccordionProps {
  items: FaqItem[]
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<number | null>(null)

  const handleClick = (index: number) => {
    setOpenId((prev) => (prev === index ? null : index))
  }

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => {
        const isOpen = openId === index
        const answerId = `faq-answer-${index}`
        const questionId = `faq-question-${index}`
        return (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden"
          >
            <button
              type="button"
              id={questionId}
              className="w-full flex items-center justify-between gap-4 py-4 px-5 text-left cursor-pointer"
              onClick={() => handleClick(index)}
              aria-expanded={isOpen}
              aria-controls={answerId}
            >
              <span className="text-base font-semibold text-gray-900 pr-2">
                {item.q}
              </span>
              <ChevronDown
                className={cn(
                  'w-5 h-5 shrink-0 text-gray-500 transition-transform duration-300 ease-in-out',
                  isOpen ? 'rotate-180' : 'rotate-0'
                )}
                aria-hidden
              />
            </button>
            <div
              id={answerId}
              role="region"
              aria-labelledby={questionId}
              className={cn(
                'overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out',
                isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              )}
            >
              <div className="border-t border-gray-100">
                <p className="text-sm text-gray-600 leading-relaxed px-5 pt-4 pb-4">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
