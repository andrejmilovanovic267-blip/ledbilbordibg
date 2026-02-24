'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react'

interface LocationGalleryProps {
  images: string[]
  /** Optional alt for the main image (e.g. when using hero.jpg for Južni bulevar). */
  mainImageAlt?: string
}

function isImageUrl(src: string): boolean {
  return src.startsWith('http://') || src.startsWith('https://') || src.startsWith('/')
}

const ITEM_COUNT = 5

export function LocationGallery({ images, mainImageAlt }: LocationGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0) // 0 = Slika 1
  const [direction, setDirection] = useState(1)
  const hasSlidRef = useRef(false)
  const baseItems = images.length > 0 ? images : ['placeholder']
  const items = [...baseItems, ...Array(ITEM_COUNT).fill('placeholder')].slice(0, ITEM_COUNT)
  const thumbItems = items
  const activeItem = items[activeIndex] ?? items[0]
  const isPlaceholder = !isImageUrl(activeItem)

  const mainPlaceholderContent = (
    <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
      <ImageIcon className="w-10 h-10 md:w-12 md:h-12 mb-1.5" strokeWidth={1.5} />
      <span className="text-xs">Slika {activeIndex + 1}</span>
    </div>
  )

  const goPrev = () => {
    hasSlidRef.current = true
    setDirection(-1)
    setActiveIndex((i) => (i - 1 + ITEM_COUNT) % ITEM_COUNT)
  }
  const goNext = () => {
    hasSlidRef.current = true
    setDirection(1)
    setActiveIndex((i) => (i + 1) % ITEM_COUNT)
  }

  const handleThumbClick = (i: number) => {
    if (i !== activeIndex) {
      hasSlidRef.current = true
      setDirection(i > activeIndex ? 1 : -1)
    }
    setActiveIndex(i)
  }

  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mt-10 md:mt-2">
      <div className="relative aspect-[16/9] rounded-2xl border border-gray-200 bg-gray-100 overflow-hidden">
        <div
          key={activeIndex}
          className={`absolute inset-0 ${hasSlidRef.current ? (direction > 0 ? 'gallery-slide-next' : 'gallery-slide-prev') : ''}`}
        >
          {isPlaceholder ? (
            mainPlaceholderContent
          ) : (
            <Image
              src={activeItem}
              alt={activeIndex === 0 && mainImageAlt ? mainImageAlt : `Slika ${activeIndex + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          )}
        </div>
        <button
          type="button"
          onClick={goPrev}
          aria-label="Prethodna slika"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/80 hover:bg-white transition-opacity"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" strokeWidth={2} />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Sledeća slika"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/80 hover:bg-white transition-opacity"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" strokeWidth={2} />
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-3 overflow-x-auto snap-x snap-mandatory pb-2">
        {thumbItems.map((item, index) => {
          const isActive = index === activeIndex
          return (
            <button
              key={index}
              type="button"
              onClick={() => handleThumbClick(index)}
              aria-label={`Izaberi sliku ${index + 1}`}
              className={`
                relative shrink-0 h-20 aspect-[16/9] rounded-2xl border border-gray-200 bg-gray-100 overflow-hidden snap-start
                transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-inset focus-visible:ring-offset-0
                ${isActive ? 'ring-2 ring-blue-600 ring-inset' : 'hover:border-gray-300'}
              `}
            >
              {isActive && (
                <span
                  className="absolute inset-[2px] rounded-[14px] border-2 border-blue-600 pointer-events-none z-10"
                  aria-hidden
                />
              )}
              <span className="absolute inset-0 overflow-hidden rounded-2xl">
                {isImageUrl(item) ? (
                  <Image
                    src={item}
                    alt={`Slika ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="142px"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                    <ImageIcon className="w-6 h-6 mb-0.5" strokeWidth={1.5} />
                    <span className="text-xs">Slika {index + 1}</span>
                  </div>
                )}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
