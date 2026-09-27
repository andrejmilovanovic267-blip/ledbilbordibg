const logos = [
  '/logo_exports/dori-berry.png',
  '/oohdigital.png',
  '/grandslot.png',
  '/savanova.png',
  '/trium.png',
]

export default function PartnerMarquee() {
  const base = Array.from({ length: 4 }, () => logos).flat()
  const duplicated = [...base, ...base]

  return (
    <section className="py-10 bg-white">
      <p className="text-center text-gray-500 mb-6">Sarađivali smo sa</p>

      <div className="overflow-hidden">
        <div className="flex w-max items-center gap-8 animate-partner-scroll">
          {duplicated.map((src, i) => (
            <div
              key={i}
              className="shrink-0 rounded-xl border border-gray-200 bg-white px-10 py-5 overflow-hidden"
            >
              {/* Render a fully custom Savanova card instead of the default image */}
              {src.toLowerCase().includes("savanova.png") ? (
                // Use same card wrapper and make the logo behave like other logos
                <img
                  src={src}
                  alt="Savanova"
                  className="h-10 w-auto object-contain transition-transform"
                />
              ) : (
                /* Default rendering for other logos (unchanged) */
                <img
                  src={src}
                  alt="partner"
                  className={`h-10 w-auto object-contain transition-transform ${
                    src.toLowerCase().includes("trium.png") ? "scale-[1.39]" : ""
                  } ${
                    src.toLowerCase().includes("oohdigital.png") ? "scale-[1.2]" : ""
                  } ${
                    src.toLowerCase().includes("grandslot.png") ? "scale-[1.2]" : ""
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
