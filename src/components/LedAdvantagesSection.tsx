import { Section } from '@/components/Section'

const advantages = [
  'Visoka vidljivost u saobraćaju i pešačkim zonama',
  'Prikaz 24/7 (dan i noć)',
  'Brza izmena kreativa i fleksibilne kampanje',
  'Odličan odnos cene i dosega za lokalne i nacionalne brendove',
  'Više formata materijala (slika ili video) u zavisnosti od lokacije',
  'Jasan, čitak prikaz prilagođen LED formatu',
]

export function LedAdvantagesSection() {
  return (
    <Section id="prednosti-led" className="bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Prednosti LED oglašavanja
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              LED bilbordi donose veliku vidljivost u najprometnijim zonama i omogućavaju da poruka bude primećena u pravom trenutku.
            </p>
            <a
              href="#contact-form"
              className="btn-primary inline-flex items-center justify-center focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
            >
              Zatražite ponudu
            </a>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {advantages.map((text, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <span className="text-green-600 shrink-0 mt-0.5" aria-hidden>✓</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
