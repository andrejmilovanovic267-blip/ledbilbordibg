import Link from 'next/link'
import { LocationGallery } from '@/components/LocationGallery'
import { MapSection } from '@/components/MapSection'
import { ScrollToFormButton } from '@/components/ScrollToFormButton'
import { Section } from '@/components/Section'
import { SharedLeadFormSection } from '@/components/SharedLeadFormSection'
import type { ClassicBillboardLocation } from '@/lib/classicBillboardsData'

interface ClassicBillboardDetailPageProps {
  billboard: ClassicBillboardLocation
}

function getSideDescription(sides: ClassicBillboardLocation['sides']) {
  if (sides === 'single') return 'Jednostrani'
  if (sides === 'double') return 'Dvostrani'
  return 'Potrebna potvrda za ovu poziciju'
}

function getLightingDescription(illuminated: boolean | null) {
  if (illuminated === true) return 'Osvetljen'
  if (illuminated === false) return 'Neosvetljen'
  return 'Potrebna potvrda za ovu poziciju'
}

export function ClassicBillboardDetailPage({
  billboard,
}: ClassicBillboardDetailPageProps) {
  const information = [
    ['Grad / zona', 'Velika Plana, autoput E-75'],
    ['Tip oglasne površine', billboard.surfaceType],
    ['Dimenzije', billboard.dimensions],
    ['Strane oglašavanja', getSideDescription(billboard.sides)],
    ['Osvetljenje', getLightingDescription(billboard.illuminated)],
    ['Pozicija', billboard.position],
  ]

  return (
    <>
      <Section className="md:pb-4">
        <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-2xl space-y-4 text-center md:mb-0">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {billboard.title}
            </h1>
            <p className="text-lg text-gray-600">{billboard.introduction}</p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
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
        <LocationGallery images={[]} />
      </Section>

      <Section className="bg-white">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 sm:px-6 md:grid-cols-2 md:items-start lg:px-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Opis lokacije i oglašavanja
            </h2>
            <p className="leading-relaxed text-gray-600">
              {billboard.description}
            </p>
            <p className="leading-relaxed text-gray-600">
              Za zakup bilborda Velika Plana pošaljite upit i zatražite aktuelne
              informacije o raspoloživosti i ceni.
            </p>
          </div>

          <aside className="rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
              Ključne informacije
            </h2>
            <dl className="space-y-3 text-sm">
              {information.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-gray-500">{label}</dt>
                  <dd className="font-medium text-gray-900">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <div className="mx-auto mt-10 max-w-5xl px-6 pt-6 sm:px-6 lg:px-8">
          <h2 className="mb-5 text-center text-2xl font-bold text-gray-900">
            Tehničke specifikacije
          </h2>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <dt className="text-sm font-medium text-gray-500">Dimenzije</dt>
              <dd className="mt-1 text-gray-900">{billboard.dimensions}</dd>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <dt className="text-sm font-medium text-gray-500">Površina jedne reklamne strane</dt>
              <dd className="mt-1 text-gray-900">{billboard.advertisingSurfaceArea}</dd>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <dt className="text-sm font-medium text-gray-500">Ukupan broj strana</dt>
              <dd className="mt-1 text-gray-900">{billboard.sides === 'double' ? '2' : '1'}</dd>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <dt className="text-sm font-medium text-gray-500">Tip reklamne površine</dt>
              <dd className="mt-1 text-gray-900">{billboard.surfaceType}</dd>
            </div>
          </dl>
        </div>

        <div className="mx-auto mt-10 max-w-5xl px-6 pt-6 sm:px-6 lg:px-8">
          <h2 className="mb-5 text-center text-2xl font-bold text-gray-900">
            Idealno za
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {billboard.idealFor.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-600"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">Lokacija na mapi</h2>
            <p className="text-sm text-gray-600">
              Tačna pozicija bilborda. Kliknite na marker za detalje lokacije.
            </p>
          </div>
          <MapSection
            locations={[{
              id: billboard.slug,
              name: billboard.name,
              description: billboard.cardDescription,
              lat: billboard.lat,
              lng: billboard.lng,
              slug: billboard.slug,
              googleMapsUrl: `https://www.google.com/maps?q=${billboard.lat},${billboard.lng}`,
            }]}
            selectedCoords={{ lat: billboard.lat, lng: billboard.lng }}
            selectedLocationId={billboard.slug}
          />
        </div>
      </Section>

      <SharedLeadFormSection
        id="upit-forma"
        title="Zatražite ponudu za bilbord"
        description="Pošaljite upit za raspoloživost i cenu zakupa bilborda na autoputu E-75."
        defaultLocationId="Autoput"
      />
    </>
  )
}
