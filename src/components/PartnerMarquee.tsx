const logos = [
  '/logo_exports/dori-berry.png',
  '/oohdigital.png',
  '/grandslot.png',
  '/savanova.png',
  '/trium.png',
  '/diplomat.png',
  '/bw.png',
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
              className="shrink-0 rounded-xl border border-gray-200 bg-white px-10 py-5 overflow-hidden min-w-[170px]"
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
                  style={
                    src.toLowerCase().includes("bw.png")
                      ? { width: 144, height: 48, margin: "-1.61px -10.24px -6.39px -13.76px" }
                      : undefined
                  }
                  alt={
                    src.toLowerCase().includes("diplomat.png")
                      ? "BG Diplomat"
                      : src.toLowerCase().includes("bw.png")
                        ? "BV Belgrade Waterfront"
                        : "partner"
                  }
                  className={`h-10 w-auto object-contain transition-transform ${
                    src.toLowerCase().includes("trium.png") ? "scale-[1.39]" : ""
                  } ${
                    src.toLowerCase().includes("oohdigital.png") ? "scale-[1.2]" : ""
                  } ${
                    src.toLowerCase().includes("grandslot.png") ? "scale-[1.2]" : ""
                  } ${
                    src.toLowerCase().includes("diplomat.png") ? "scale-[1.1]" : ""
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
