import { Section } from '@/components/Section'
import { ImageIcon } from 'lucide-react'

const designItems = [
  'Dizajn po meri vašeg brenda (boje, font, poruka)',
  'Prilagođeno LED formatu da izgleda čitko i upadljivo',
  'Brze korekcije i finalna priprema za emitovanje',
]

export function DesignIncludedSection() {
  return (
    <Section id="dizajn" className="bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full aspect-video rounded-2xl bg-gray-100 shadow-sm overflow-hidden flex flex-col items-center justify-center text-gray-400">
            <ImageIcon className="w-12 h-12 md:w-14 md:h-14 mb-2" strokeWidth={1.5} />
            <span className="text-sm">Primer dizajna (placeholder)</span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Profesionalni dizajn je uključen u cenu
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Ako nemate spreman kreativan materijal, naš dizajnerski tim priprema reklamu koja izgleda profesionalno i jasno prenosi poruku.
            </p>
            <ul className="space-y-3 mb-6">
              {designItems.map((text, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-600 shrink-0 mt-0.5" aria-hidden>✓</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mb-6">
              Već imate gotov dizajn? Super, samo pošaljite fajl, a mi ćemo proveriti format i optimizovati ako je potrebno.
            </p>
            <a
              href="#contact-form"
              className="btn-primary inline-flex items-center justify-center focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
            >
              Zatražite dizajn
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
