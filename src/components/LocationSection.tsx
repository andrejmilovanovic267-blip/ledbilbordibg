import Link from 'next/link'
import Image from 'next/image'
import { ImageIcon, MapPin } from 'lucide-react'

interface LocationSectionProps {
  imageSide?: 'left' | 'right'
  title: string
  description?: string
  slug?: string
  imageSrc?: string
  imageAlt?: string
  imagePriority?: boolean
  prednosti?: string[]
  showMapLabel?: boolean
  mapLabelText?: string
  locationId?: string
  lat?: number
  lng?: number
  onShowOnMap?: (id: string, lat: number, lng: number) => void
  occupied?: boolean
}

export function LocationSection({
  imageSide = 'right',
  title,
  description,
  slug,
  imageSrc,
  imageAlt,
  imagePriority,
  prednosti,
  showMapLabel = false,
  mapLabelText = 'Prikazi na mapi',
  locationId,
  lat,
  lng,
  onShowOnMap,
  occupied = false,
}: LocationSectionProps) {

  // 🔥 AUTOMATSKO MAPIRANJE SLIKA (takođe preko slug-a)
  const getImageBySlug = () => {
    if (slug === 'vrnjacka-banja-ulaz') return '/vrnjackaimg.jpg'

    return imageSrc
  }

  const finalImage = getImageBySlug()

  const imageOrder = imageSide === 'left' ? 'md:order-1' : 'md:order-2'
  const textOrder = imageSide === 'left' ? 'md:order-2' : 'md:order-1'
  const canShowOnMap = locationId != null && lat != null && lng != null && onShowOnMap

  const content = (
    <article className={`bg-white rounded-lg border border-gray-200 overflow-hidden group hover:-translate-y-1 transition-all duration-300 ease-out ${slug ? 'cursor-pointer' : ''}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6 md:items-start p-4 sm:p-6">
        
        <div className={`min-w-0 ${imageOrder}`}>
          {finalImage ? (
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={finalImage}
                alt={imageAlt ?? title}
                fill
                priority={imagePriority}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {occupied && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/45">
                  <p className="px-5 text-center text-sm sm:text-base font-semibold text-white leading-relaxed">
                    Lokacija je trenutno popunjena
                    <br />
                    Kontaktirajte nas za sledeci slobodan termin
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
              <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                <ImageIcon className="w-10 h-10 mb-1.5" strokeWidth={1.5} />
                <span className="text-xs sm:text-sm">Slika lokacije</span>
              </div>
            </div>
          )}
        </div>

        <div className={`min-w-0 ${textOrder} pt-4 md:pt-0 flex flex-col`}>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 mt-0 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>

          {description && (
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {description}
            </p>
          )}

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

          {showMapLabel && !canShowOnMap && (
            <div className="mt-4">
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                {mapLabelText}
              </span>
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
                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
              >
                <MapPin className="w-4 h-4" />
                {mapLabelText}
              </button>
            </div>
          )}
        </div>

      </div>
    </article>
  )

  if (!slug) return content

  // ✅ sve ostalo → ima link
  return (
    <Link href={`/lokacije/${slug}`} className="block">
      {content}
    </Link>
  )
}
