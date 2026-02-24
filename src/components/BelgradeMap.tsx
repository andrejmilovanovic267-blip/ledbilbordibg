'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import type { LocationItem } from '@/lib/locationsData'

const BELGRADE_CENTER: [number, number] = [44.8176, 20.4633]

function fixLeafletIcon() {
  if (typeof window === 'undefined') return
  delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl
  L.Icon.Default.mergeOptions({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: '',
  })
}

function MapController({
  selectedCoords,
  selectedLocationId,
  markerRefs,
}: {
  selectedCoords: { lat: number; lng: number } | null
  selectedLocationId: string | null
  markerRefs: React.MutableRefObject<Record<string, L.Marker | null>>
}) {
  const map = useMap()
  const prevIdRef = useRef<string | null>(null)

  useEffect(() => {
    if (!selectedCoords || !selectedLocationId) return
    map.setView([selectedCoords.lat, selectedCoords.lng], 14, { animate: true })
    if (prevIdRef.current !== selectedLocationId) {
      prevIdRef.current = selectedLocationId
      const marker = markerRefs.current[selectedLocationId]
      if (marker) {
        marker.openPopup()
      }
    }
  }, [selectedCoords, selectedLocationId, map, markerRefs])

  return null
}

interface BelgradeMapProps {
  locations: LocationItem[]
  selectedCoords: { lat: number; lng: number } | null
  selectedLocationId: string | null
}

export function BelgradeMap({ locations, selectedCoords, selectedLocationId }: BelgradeMapProps) {
  const markerRefs = useRef<Record<string, L.Marker | null>>({})

  useEffect(() => {
    fixLeafletIcon()
  }, [])

  return (
    <MapContainer
      center={BELGRADE_CENTER}
      zoom={12}
      scrollWheelZoom={false}
      className="h-full w-full min-h-[280px]"
      style={{ minHeight: 280 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapController
        selectedCoords={selectedCoords}
        selectedLocationId={selectedLocationId}
        markerRefs={markerRefs}
      />
      {locations.map((loc) => (
        <Marker
          key={loc.id}
          position={[loc.lat, loc.lng]}
          ref={(m) => {
            markerRefs.current[loc.id] = m ?? null
          }}
        >
          <Popup>
            <div className="text-sm">
              <p className="font-semibold text-gray-900">{loc.name}</p>
              <p className="text-gray-600 mt-1">Demo lokacija (placeholder)</p>
              <p className="text-gray-500 mt-1 text-xs">
                Kliknite na karticu da centrirate mapu.
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
