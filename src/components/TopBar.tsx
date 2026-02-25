'use client'

import { siteConfig } from '@/lib/siteConfig'

// Izmenite ovde ili koristite siteConfig
const PHONE = siteConfig.phone // placeholder: +381 60 123 4567
const EMAIL = siteConfig.email // placeholder: kontakt@odalis.rs

const linkClass =
  'text-white/90 hover:text-white hover:underline underline-offset-2 transition-colors focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none rounded px-0.5'

export function TopBar() {
  return (
    <div className="bg-blue-600 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-3 py-2 h-9">
          <div className="flex items-center gap-3 text-[13px] min-[412px]:text-[14px]">
            <a href={`tel:${PHONE.replace(/\s/g, '')}`} className={linkClass}>
              {PHONE}
            </a>
            <span className="text-white/70 hidden sm:inline" aria-hidden>
              •
            </span>
            <a href={`mailto:${EMAIL}`} className={linkClass}>
              {EMAIL}
            </a>
          </div>
          <div className="flex items-center gap-4 text-[13px] min-[412px]:text-[14px] text-white/90">
            <span className="text-white/90 whitespace-nowrap">Emitovanje 24/7</span>
            <span className="hidden md:inline text-white/60">•</span>
            <span className="hidden md:inline">Standard paket: Ograničen broj slotova za mart</span>
          </div>
        </div>
      </div>
    </div>
  )
}
