import Image from 'next/image'

const partnerLogos = [
  { src: '/logo_exports/dori-berry.png', alt: 'Dori Berry' },
  { src: '/logo_exports/grand-slot.png', alt: 'Grand Slot' },
  { src: '/logo_exports/savanova.png', alt: 'Savanova' },
]

const duplicated = [...partnerLogos, ...partnerLogos]

export function PartnerLogosMarquee() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" aria-hidden />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" aria-hidden />
      <div className="flex w-max animate-partner-scroll gap-6 items-center">
        {duplicated.map((logo, i) => (
          <div
            key={`${logo.alt}-${i}`}
            className="h-20 min-w-[170px] px-6 flex items-center justify-center rounded-xl border border-gray-200/70 bg-white shrink-0"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={180}
              height={80}
              className="max-h-12 w-auto object-contain opacity-80 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

