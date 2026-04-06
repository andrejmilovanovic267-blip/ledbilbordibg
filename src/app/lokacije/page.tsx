'use client'

import { useState } from 'react'
import Image from 'next/image'
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

  const unavailableLocations = [
    { name: 'Novi Beograd - Usce' },
    { name: 'Beograd - Vojvode Stepe' },
    { name: 'Beograd - Vukov spomenik' },
    { name: 'Beograd - Despota Stefana' },
  ]

  return (
    <>
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nase lokacije
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Izaberite medju nasim strateski postavljenim LED bilbordima
          </p>
        </div>

        <div className="w-full lg:w-[80%] lg:mx-auto space-y-10 mb-16">

          {/* AKTIVNE LOKACIJE (bez Zlatibora i Vrnjacke) */}
          {locationsData
            .filter(
              (loc) =>
                loc.city !== 'Zlatibor' &&
                loc.city !== 'Vrnjacka Banja'
            )
            .map((loc, index) => {
              const firstImg = loc.images?.[0]
              const imageSrc = firstImg?.startsWith('/') ? firstImg : firstImg === 'hero' ? '/hero.webp' : undefined
              const isOccupiedReal =
                loc.name === 'Zemun Ugrinovacka'

              return (
                <LocationSection
                  key={loc.id}
                  imageSide={index % 2 === 0 ? 'right' : 'left'}
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

          {/* ZAUZETE: VRNJACKA + ZLATIBOR (NA KRAJU) */}
          {[
            { name: 'Vrnjacka Banja ulaz' },
            { name: 'Zlatibor Centar' },
          ].map((loc, index) => (
            <article
              key={loc.name}
              className="bg-white/90 rounded-lg border border-gray-200 overflow-hidden group hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6 md:items-start p-4 sm:p-6">
                <div className={`min-w-0 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  
                  {/* 🔥 SLIKA DODATA */}
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src={loc.name === 'Vrnjacka Banja ulaz' ? '/vrnjackaimg.jpg' : '/zlatiborimg.webp'}
                      alt={loc.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/45">
                      <p className="px-5 text-center text-sm sm:text-base font-semibold text-white leading-relaxed">
                        Lokacija je trenutno popunjena
                        <br />
                        Kontaktirajte nas za sledeci slobodan termin
                      </p>
                    </div>
                  </div>

                </div>
                <div className={`min-w-0 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} pt-4 md:pt-0 flex flex-col`}>
                  <span className="inline-flex items-center self-start rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 mb-2">
                    Trenutno zauzeto
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 mt-0">
                    {loc.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-0">
                    Lokacija je trenutno zauzeta. Kontaktirajte nas za informacije o narednoj dostupnosti.
                  </p>
                </div>
              </div>
            </article>
          ))}

          {/* OSTALE PLANIRANE */}
          {unavailableLocations.map((loc, index) => (
            <article
              key={loc.name}
              className="bg-white/90 rounded-lg border border-gray-200 overflow-hidden group hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6 md:items-start p-4 sm:p-6">
                <div className={`min-w-0 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/45">
                      <p className="px-5 text-center text-sm sm:text-base font-semibold text-white leading-relaxed">
                        Lokacija je trenutno popunjena
                        <br />
                        Kontaktirajte nas za sledeci slobodan termin
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`min-w-0 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} pt-4 md:pt-0 flex flex-col`}>
                  <span className="inline-flex items-center self-start rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 mb-2">
                    Trenutno zauzeto
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 mt-0">
                    {loc.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-0">
                    Lokacija je trenutno zauzeta. Kontaktirajte nas za informacije o narednoj dostupnosti.
                  </p>
                </div>
              </div>
            </article>
          ))}

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
            locations={locationsData.filter(
              (loc) => loc.city !== 'Vrnjacka Banja' && loc.city !== 'Zlatibor'
            )}
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