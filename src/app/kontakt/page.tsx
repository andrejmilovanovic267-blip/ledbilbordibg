import { Section } from '@/components/Section'
import { LeadForm } from '@/components/LeadForm'
import { siteConfig } from '@/lib/siteConfig'

export default function KontaktPage() {
  return (
    <Section className="bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kontaktirajte nas
          </h1>
          <p className="text-lg text-gray-600">
            Imate pitanja? Rado ćemo vam odgovoriti
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Kontakt informacije
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">
                  Telefon
                </h3>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-gray-900 hover:text-blue-600"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">
                  Email
                </h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-gray-900 hover:text-blue-600"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Radno vreme
              </h3>
              <p className="text-gray-600">
                Ponedeljak – Petak: 9:00 – 18:00<br />
                Subota: 10:00 – 14:00<br />
                Nedelja: neradni dan
              </p>
            </div>
          </div>
          <div>
            <LeadForm
              title="Pošaljite poruku"
              description="Popunite formu i javićemo vam se što pre."
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
