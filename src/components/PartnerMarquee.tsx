const logos = [
  '/logo_exports/dori-berry.png',
  '/oohdigital.png',
  '/logo_exports/grand-slot.png',
  '/logo_exports/savanova.png',
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
              className="shrink-0 rounded-xl border border-gray-200 bg-white px-10 py-5"
            >
              <img
                src={src}
                alt="partner"
                className={`h-10 w-auto object-contain transition-transform ${
                  src.toLowerCase().includes("savanova.png") ? "scale-[0.82] translate-y-[1px]" : ""
                } ${
                  src.toLowerCase().includes("trium.png") ? "scale-[1.39]" : ""
                } ${
                  src.toLowerCase().includes("oohdigital.png") ? "scale-[1.2]" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
