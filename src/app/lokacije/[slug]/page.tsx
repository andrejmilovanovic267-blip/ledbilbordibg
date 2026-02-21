import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getLocationBySlug, locationsData } from '@/lib/locationsData'
import { Section } from '@/components/Section'
import { LeadForm } from '@/components/LeadForm'
import { MapSection } from '@/components/MapSection'
import { LocationGallery } from '@/components/LocationGallery'
import { ScrollToFormButton } from '@/components/ScrollToFormButton'
import { Check } from 'lucide-react'

const EMPHASIS_KEYWORDS: Record<string, string[]> = {
  'beograd-lokacija-1': [
    'LED bilbord',
    'Južnom bulevaru',
    'Južni bulevar',
    'Autokomande',
  ],
}

function emphasizeKeywords(text: string, keywords: string[]) {
  if (keywords.length === 0) return text
  const escaped = keywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const regex = new RegExp(`(${escaped.join('|')})`, 'g')
  const parts = text.split(regex)
  return parts.map((part, i) =>
    keywords.includes(part) ? (
      <span key={i} className="font-medium text-gray-900">
        {part}
      </span>
    ) : (
      part
    )
  )
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return locationsData.map((loc) => ({ slug: loc.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  if (!location) return { title: 'Lokacija nije pronađena' }
  const title = `${location.name} | LED bilbordi – Lokacije`
  const description =
    location.shortDescription.length > 160
      ? location.shortDescription.slice(0, 157) + '...'
      : location.shortDescription
  return { title, description }
}

export default async function LocationDetailPage({ params }: PageProps) {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  if (!location) notFound()

  return (
    <>
      <Section className="md:pb-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-8 md:mb-0">
                <h1 className="text-4xl font-bold text-gray-900">{location.name}</h1>
                <p className="text-lg text-gray-600">
                  {location.shortDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <ScrollToFormButton />
                  <Link
                    href="/lokacije"
                    className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Nazad na lokacije
                  </Link>
                </div>
              </div>
            </div>
      </Section>

      <Section className="bg-gray-50 md:pt-2">
        <LocationGallery
          images={location.images}
          mainImageAlt={location.slug === 'beograd-lokacija-1' ? 'LED bilbord Južni bulevar Beograd' : undefined}
        />
      </Section>

          <Section className="bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-center">
                <div className="space-y-4">
                  {location.longDescription.map((para, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed">
                      {emphasizeKeywords(para, EMPHASIS_KEYWORDS[location.slug] ?? [])}
                    </p>
                  ))}
                </div>
                <div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
                      Ključne informacije
                    </h3>
                    <dl className="space-y-3 text-sm">
                      <div>
                        <dt className="text-gray-500">Grad</dt>
                        <dd className="font-medium text-gray-900">{location.city}</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500">Zona</dt>
                        <dd className="font-medium text-gray-900">{location.addressArea}</dd>
                      </div>
                      {location.tipLokacije && (
                        <div>
                          <dt className="text-gray-500">Tip lokacije</dt>
                          <dd className="font-medium text-gray-900">{location.tipLokacije}</dd>
                        </div>
                      )}
                      <div>
                        <dt className="text-gray-500">Ciljna publika</dt>
                        <dd className="font-medium text-gray-900">{location.audience}</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500">Prikaz</dt>
                        <dd className="font-medium text-gray-900">24/7</dd>
                      </div>
                      {location.vidljivost && (
                        <div>
                          <dt className="text-gray-500">Vidljivost</dt>
                          <dd className="font-medium text-gray-900">{location.vidljivost}</dd>
                        </div>
                      )}
                      <div>
                        <dt className="text-gray-500">Visoka rezolucija</dt>
                        <dd className="font-medium text-gray-900">Da</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-10">
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                <div className="flex items-center gap-2 text-gray-700 text-sm">
                  <Check className="w-4 h-4 text-green-600 shrink-0" />
                  <span>Veliki dnevni protok vozila</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 text-sm">
                  <Check className="w-4 h-4 text-green-600 shrink-0" />
                  <span>Intenzivan pešački saobraćaj</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 text-sm">
                  <Check className="w-4 h-4 text-green-600 shrink-0" />
                  <span>Odlična vidljivost iz više pravaca</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 text-sm">
                  <Check className="w-4 h-4 text-green-600 shrink-0" />
                  <span>Prikaz 24/7</span>
                </div>
              </div>
            </div>
      </Section>

          <section className="w-full bg-gray-50 border-y border-gray-200/60 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="max-w-5xl mx-auto flex flex-col">
                <div className="flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
                    Tehničke specifikacije
                  </h2>
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <dt className="text-sm font-medium text-gray-500 mb-1">Dimenzije ekrana</dt>
                    <dd className="text-gray-900">Standardni gradski LED format</dd>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <dt className="text-sm font-medium text-gray-500 mb-1">Rezolucija</dt>
                    <dd className="text-gray-900">Visoka rezolucija (HD / 4K u zavisnosti od paketa)</dd>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <dt className="text-sm font-medium text-gray-500 mb-1">Format materijala</dt>
                    <dd className="text-gray-900">JPG, PNG ili MP4</dd>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <dt className="text-sm font-medium text-gray-500 mb-1">Trajanje prikaza</dt>
                    <dd className="text-gray-900">U skladu sa izabranim paketom</dd>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 md:col-span-2">
                    <dt className="text-sm font-medium text-gray-500 mb-1">Vidljivost</dt>
                    <dd className="text-gray-900">Optimizovana za dnevne i noćne uslove</dd>
                  </div>
                </div>
              </div>
              <div className="max-w-5xl mx-auto text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                 Idealno za:
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Brendiranje', 'Lansiranje proizvoda', 'Retail', 'Usluge', 'Saloni', 'Lokalni biznisi', 'Sportski centri', 'Restorani'].map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

      <Section className="bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Lokacija na mapi</h2>
                <p className="text-gray-600 text-sm">
                  Tačna pozicija LED bilborda. Kliknite na marker.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden h-[320px] md:h-[420px]">
                <MapSection
                  locations={[location]}
                  selectedCoords={{ lat: location.lat, lng: location.lng }}
                  selectedLocationId={location.id}
                />
              </div>
            </div>
      </Section>

      <Section id="upit-forma" className="bg-gray-50">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <LeadForm
                title="Pošaljite upit za ovu lokaciju"
                description="Popunite formu i javićemo vam se sa detaljnim informacijama."
                defaultLocationId={location.id}
              />
            </div>
          </Section>
    </>
  )
}
