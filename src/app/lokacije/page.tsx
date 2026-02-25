'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Section } from '@/components/Section'
import { SharedLeadFormSection } from '@/components/SharedLeadFormSection'
import { CTAReadySection } from '@/components/CTAReadySection'
import { LocationSection } from '@/components/LocationSection'
import { MapSection } from '@/components/MapSection'
import { locationsData } from '@/lib/locationsData'

export default function LokacijePage() {
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null)
  const [selectedCoords, setSelectedCoords] = useState<{ lat: number; lng: number } | null>(null)

  const handleShowOnMap = (id: string, lat: number, lng: number) => {
    setSelectedLocationId(id)
    setSelectedCoords({ lat, lng })
    document.getElementById('mapa-lokacija')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Naše lokacije
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Izaberite među našim strateški postavljenim LED bilbordima
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 space-y-10 mb-16">
          {locationsData.map((loc, index) => (
            <LocationSection
              key={loc.id}
              imageSide={index % 2 === 0 ? 'right' : 'left'}
              title={loc.name}
              description={loc.description}
              slug={loc.slug}
              imageSrc={loc.id === 'beograd-lokacija-1' ? '/hero.jpg' : undefined}
              imageAlt={loc.id === 'beograd-lokacija-1' ? 'LED bilbord Južni bulevar Beograd' : undefined}
              prednosti={loc.prednosti}
              locationId={loc.id}
              lat={loc.lat}
              lng={loc.lng}
              onShowOnMap={handleShowOnMap}
            />
          ))}
        </div>
      </Section>

      <Section id="mapa-lokacija" className="bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mapa lokacija
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pregled lokacija u Beogradu (uskoro sa oznakama).
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600">
              Beograd
            </span>
            <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600">
              Planirane oznake
            </span>
            <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600">
              Interaktivni prikaz
            </span>
          </div>
          <MapSection
            locations={locationsData.filter(
              (loc) => loc.name !== 'Vrnjačka Banja Ulaz' && loc.name !== 'Zlatibor Centar'
            )}
            selectedCoords={selectedCoords}
            selectedLocationId={selectedLocationId}
          />
          <p className="text-xs text-gray-500 text-center mt-3">
            Uskoro: precizne oznake, ulice i filteri po lokaciji.
          </p>
        </div>
      </Section>

      <CTAReadySection targetId="contact-form" />

      <SharedLeadFormSection id="contact-form" />
    </>
  )
}
