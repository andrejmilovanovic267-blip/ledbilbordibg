'use client'

import { useState } from 'react'
import { Section } from '@/components/Section'
import { SharedLeadFormSection } from '@/components/SharedLeadFormSection'
import { CTAReadySection } from '@/components/CTAReadySection'
import { LocationSection } from '@/components/LocationSection'
import { MapSection } from '@/components/MapSection'
import { locationsData, type LocationItem } from '@/lib/locationsData'
import { classicBillboards } from '@/lib/classicBillboardsData'

const priorityLocationSlugs = [
  'led-bilbord-bulevar-nikole-tesle',
  'mega-led-bilbordi-tosin-bunar-zemunska',
  'led-bilbord-autoput-beograd-konjarnik',
  'beograd-lokacija-1',
  'led-bilbord-ledine-surcinska',
  'led-bilbord-ledine-skretanje-za-aerodrom',
  'led-bilbord-lestane-kruzni-put',
]

export default function LokacijePage() {
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null)
  const [selectedCoords, setSelectedCoords] = useState<{ lat: number; lng: number } | null>(null)

  const handleShowOnMap = (id: string, lat: number, lng: number) => {
    setSelectedLocationId(id)
    setSelectedCoords({ lat, lng })
    document.getElementById('mapa-lokacija')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const locationCards: (
    | LocationItem
    | (typeof classicBillboards)[number]
  )[] = locationsData
    .flatMap((loc) =>
      loc.slug === 'beograd-lokacija-3'
        ? [loc, ...classicBillboards]
        : [loc]
    )
    .map((loc, index) => ({ loc, index }))
    .sort((a, b) => {
      const aPriority = priorityLocationSlugs.indexOf(a.loc.slug)
      const bPriority = priorityLocationSlugs.indexOf(b.loc.slug)
      const aOrder = aPriority === -1 ? priorityLocationSlugs.length : aPriority
      const bOrder = bPriority === -1 ? priorityLocationSlugs.length : bPriority

      return aOrder - bOrder || a.index - b.index
    })
    .map(({ loc }) => loc)

  return (
    <>
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Naše lokacije
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Izaberite medju našim strateški postavljenim LED bilbordima
          </p>
        </div>

        <div className="w-full lg:w-[80%] lg:mx-auto space-y-10 mb-16">

          {locationCards.map((loc, index) => {
              if ('metaDescription' in loc) {
                return (
                  <LocationSection
                    key={loc.slug}
                    imageSide={index % 2 === 0 ? 'left' : 'right'}
                    title={loc.name}
                    slug={loc.slug}
                    description={loc.cardDescription}
                    prednosti={loc.cardBenefits}
                    showMapLabel
                    mapLabelText="Prikaži na mapi"
                    locationId={loc.slug}
                    lat={loc.lat}
                    lng={loc.lng}
                    onShowOnMap={handleShowOnMap}
                  />
                )
              }

              const firstImg = loc.images?.[0]
              const imageSrc = firstImg?.startsWith('/') ? firstImg : firstImg === 'hero' ? '/hero.webp' : undefined
              const isOccupiedReal = loc.slug === 'vrnjacka-banja-ulaz'

              return (
                <LocationSection
                  key={loc.id}
                  imageSide={index % 2 === 0 ? 'left' : 'right'}
                  title={loc.name}
                  description={loc.description}
                  slug={loc.slug}
                  imageSrc={imageSrc}
                  imageAlt={loc.id === 'beograd-lokacija-1' ? 'LED bilbord Juzni bulevar Beograd' : undefined}
                  imagePriority={loc.id === 'beograd-lokacija-1'}
                  prednosti={loc.prednosti}
                  locationId={loc.id}
                  lat={loc.lat}
                  lng={loc.lng}
                  onShowOnMap={handleShowOnMap}
                  occupied={isOccupiedReal}
                />
              )
            })}

        </div>
      </Section>

      <Section id="mapa-lokacija" className="bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mapa lokacija
            </h2>
          </div>

          <MapSection
            locations={[
              ...locationsData.map((location) => ({
                ...location,
                ...(location.googleMapsUrl ? { googleMapsUrl: location.googleMapsUrl } : {}),
              })),
              ...classicBillboards.map(({ slug, name, description, lat, lng }) => ({
                id: slug,
                name,
                description,
                lat,
                lng,
                slug,
                googleMapsUrl: `https://www.google.com/maps?q=${lat},${lng}`,
              })),
            ]}
            selectedCoords={selectedCoords}
            selectedLocationId={selectedLocationId}
          />
        </div>
      </Section>

      <CTAReadySection targetId="contact-form" />
      <SharedLeadFormSection id="contact-form" />
    </>
  )
}
