import { Phone, Clock, CheckCircle, ListChecks } from 'lucide-react'
import { Section } from '@/components/Section'
import { SharedLeadFormSection } from '@/components/SharedLeadFormSection'
import { CTAReadySection } from '@/components/CTAReadySection'
import { siteConfig } from '@/lib/siteConfig'

export default function KontaktPage() {
  return (
    <>
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kontaktirajte nas
          </h1>
          <p className="text-lg text-gray-600">
            Imate pitanja? Rado ćemo vam odgovoriti
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex items-center gap-2 mb-4">
              <Phone className="w-4 h-4 text-gray-500 shrink-0" aria-hidden />
              <h2 className="text-xl font-bold text-gray-900">Kontakt</h2>
            </div>
            <div className="space-y-3 text-gray-600">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-0.5">Telefon</p>
                <a href={`tel:${siteConfig.phone}`} className="text-gray-900 hover:text-blue-600">
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-0.5">Email</p>
                <a href={`mailto:${siteConfig.email}`} className="text-gray-900 hover:text-blue-600">
                  {siteConfig.email}
                </a>
              </div>
              <p className="text-sm text-gray-500 pt-3 border-t border-gray-100">
                Preferiramo formu, ali dostupni smo i telefonom i emailom.
              </p>
            </div>
          </div>

          <div className="flex flex-col h-full rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-gray-500 shrink-0" aria-hidden />
              <h2 className="text-xl font-bold text-gray-900">Radno vreme</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Ponedeljak – Subota: 8:00 – 20:00<br />
              Nedelja: neradni dan
            </p>
            <p className="mt-auto text-sm text-gray-500 pt-2 border-t border-gray-100">
              Formu možete poslati uvek, i van radnog vremena.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-4 h-4 text-gray-500 shrink-0" aria-hidden />
              <h2 className="text-xl font-bold text-gray-900">Brzi kontakt</h2>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-green-600 shrink-0 mt-[2px]">✓</span>
                <span>Odgovor u roku od 24h</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 shrink-0 mt-[2px]">✓</span>
                <span>Predlog lokacije i paketa</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 shrink-0 mt-[2px]">✓</span>
                <span>Profesionalna priprema kreativa</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 shrink-0 mt-[2px]">✓</span>
                <span>Izmene tokom kampanje</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 shrink-0 mt-[2px]">✓</span>
                <span>Jasni uslovi bez skrivenih troškova</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col h-full rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex items-center gap-2 mb-4">
              <ListChecks className="w-4 h-4 text-gray-500 shrink-0" aria-hidden />
              <h2 className="text-xl font-bold text-gray-900">Šta da pošaljete</h2>
            </div>
            <ul className="space-y-2 text-gray-600 mb-3">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 shrink-0">•</span>
                <span>Cilj kampanje i tip biznisa</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 shrink-0">•</span>
                <span>Lokacija koja vas zanima (ako imate)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 shrink-0">•</span>
                <span>Period zakupa i okvirni budžet</span>
              </li>
            </ul>
            <p className="mt-auto text-sm text-gray-500 pt-2 border-t border-gray-100">
              Što više detalja pošaljete, brže dobijate preciznu ponudu.
            </p>
          </div>
        </div>
      </Section>

      <CTAReadySection targetId="contact-form" />
      <SharedLeadFormSection id="contact-form" />
    </>
  )
}
