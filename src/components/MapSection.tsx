'use client'

import dynamic from 'next/dynamic'

export interface MapLocation {
  id: string
  name: string
  lat: number
  lng: number
  slug?: string
  description?: string
  googleMapsUrl?: string
}

const BelgradeMap = dynamic(
  () => import('@/components/BelgradeMap').then((m) => m.BelgradeMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-full min-h-[320px] flex flex-col items-center justify-center text-slate-500 bg-slate-50">
        <span className="text-sm">Učitavanje mape…</span>
      </div>
    ),
  }
)

interface MapSectionProps {
  locations: MapLocation[]
  selectedCoords: { lat: number; lng: number } | null
  selectedLocationId: string | null
  className?: string
}

export function MapSection({
  locations,
  selectedCoords,
  selectedLocationId,
  className = '',
}: MapSectionProps) {
  return (
    <div className={`relative z-0 isolate overflow-hidden rounded-xl border border-gray-200 h-[320px] md:h-[420px] ${className}`}>
      <BelgradeMap
        locations={locations}
        selectedCoords={selectedCoords}
        selectedLocationId={selectedLocationId}
      />
    </div>
  )
}
