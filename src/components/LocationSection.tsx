import Link from 'next/link'
import Image from 'next/image'
import { ImageIcon, MapPin } from 'lucide-react'

interface LocationSectionProps {
  imageSide: 'left' | 'right'
  title: string
  description: string
  slug: string
  /** Optional image src (e.g. /hero.jpg for Južni bulevar). When omitted, shows placeholder. */
  imageSrc?: string
  imageAlt?: string
  prednosti?: string[]
  locationId?: string
  lat?: number
  lng?: number
  onShowOnMap?: (id: string, lat: number, lng: number) => void
}

export function LocationSection({
  imageSide,
  title,
  description,
  slug,
  imageSrc,
  imageAlt,
  prednosti,
  locationId,
  lat,
  lng,
  onShowOnMap,
}: LocationSectionProps) {
  const imageOrder = imageSide === 'left' ? 'md:order-1' : 'md:order-2'
  const textOrder = imageSide === 'left' ? 'md:order-2' : 'md:order-1'
  const canShowOnMap = locationId != null && lat != null && lng != null && onShowOnMap

  return (
    <Link href={`/lokacije/${slug}`} className="block">
      <article className="bg-white rounded-lg border border-gray-200 overflow-hidden group hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6 md:items-start p-4 sm:p-6">
          <div className={`min-w-0 ${imageOrder}`}>
            {imageSrc ? (
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={imageSrc}
                  alt={imageAlt ?? title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ) : (
              <div
                className="w-full aspect-[4/3] rounded-lg bg-gray-100 flex flex-col items-center justify-center text-gray-400 overflow-hidden"
                aria-hidden
              >
                <ImageIcon className="w-10 h-10 mb-1.5" strokeWidth={1.5} />
                <span className="text-xs sm:text-sm">Slika lokacije (placeholder)</span>
              </div>
            )}
          </div>
          <div className={`min-w-0 ${textOrder} pt-4 md:pt-0 flex flex-col`}>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 mt-0 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {description}
            </p>
            {prednosti && prednosti.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                  Prednosti
                </h4>
                <ul className="space-y-1.5">
                  {prednosti.map((item, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <span className="text-green-600 mr-2 shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {canShowOnMap && (
              <div className="mt-4">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    onShowOnMap(locationId, lat, lng)
                  }}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline focus:outline-none focus-visible:underline"
                >
                  <MapPin className="w-4 h-4" aria-hidden />
                  Prikaži na mapi
                </button>
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  )
}
