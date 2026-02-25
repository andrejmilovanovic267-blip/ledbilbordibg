import Link from 'next/link'
import { Section } from '@/components/Section'
import { SharedLeadFormSection } from '@/components/SharedLeadFormSection'
import { CTAReadySection } from '@/components/CTAReadySection'
import { siteConfig } from '@/lib/siteConfig'
import { DesignIncludedSection } from '@/components/DesignIncludedSection'
import { ProcessStepsAnimated } from '@/components/ProcessStepsAnimated'
import { LocationsCtaSection } from '@/components/LocationsCtaSection'
import { FaqAccordion } from '@/components/FaqAccordion'
import { faqPricingItems } from '@/content/faq'

const howItWorksSteps = [
  {
    title: 'Izaberite lokaciju',
    detail: 'Pošaljite nam željeni grad, zonu ili cilj kampanje. Predlažemo LED bilbord lokacije sa najboljom vidljivošću.',
  },
  {
    title: 'Dogovaramo termin i trajanje',
    detail: 'Definišemo period oglašavanja i paket prema vašem budžetu. Transparentni uslovi, bez skrivenih troškova.',
  },
  {
    title: 'Emitujemo vašu reklamu',
    detail: 'Vaša LED reklama se prikazuje 24/7 u dogovorenom terminu. Stabilan, jasan i visoko-rezolutni prikaz.',
  },
  {
    title: 'Po potrebi vršimo izmene',
    detail: 'Tokom trajanja kampanje moguće su korekcije kreativa. Fleksibilnost koju tradicionalni bilbordi nemaju.',
  },
]

export default function CenovnikPage() {
  return (
    <>
      <Section className="bg-white">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cenovnik
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-2">
            Izaberite paket koji odgovara vašim ciljevima, budžetu i obimu kampanje.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Svi paketi uključuju tehničku podršku, stabilan prikaz i mogućnost izmena. Izaberite idealnu <Link href="/lokacije" className="link-inline">lokaciju za oglašavanje</Link> i pošaljite upit putem <Link href="#upit-forma" className="link-inline">kontakt forme</Link>.
          </p>
        </div>

        <div id="paketi" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 items-stretch scroll-mt-20">
          {siteConfig.pricing.map((packageItem, index) => (
            <div
              key={index}
              className={`card p-8 flex flex-col h-full ${index === 1 ? 'ring-2 ring-blue-500' : ''}`}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {packageItem.name}
              </h3>
              {packageItem.badge && (
                <p className="text-sm font-medium text-blue-600 mb-2">{packageItem.badge}</p>
              )}
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {packageItem.price}
                </span>
                <span className="text-gray-600 ml-2">/{packageItem.period}</span>
              </div>
              <div className="flex-1 min-h-0">
                <ul className="space-y-3">
                  {packageItem.features.map((feature, featureIndex) => {
                    const item = typeof feature === 'string' ? { text: feature, negative: false, emphasize: false } : feature
                    const baseClass = item.negative ? 'text-gray-500 text-sm' : 'text-gray-700'
                    const textClass = item.emphasize ? `${baseClass} font-semibold` : baseClass
                    return (
                      <li key={featureIndex} className="flex items-start">
                        <span className={item.negative ? 'text-red-500 mr-2 shrink-0' : 'text-green-600 mr-2 shrink-0'}>
                          {item.negative ? '✗' : '✓'}
                        </span>
                        <span className={textClass}>
                          {item.text}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="mt-6">
                <Link
                  href="#upit-forma"
                  className="btn-primary w-full inline-block text-center"
                >
                  Izaberite paket
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <DesignIncludedSection />

      <Section id="proces" className="bg-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Kako funkcioniše saradnja
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-2">
            Pokretanje LED bilbord kampanje je brzo, jednostavno i bez komplikacija. Od prve poruke do emitovanja reklame, vodimo vas kroz ceo proces.
          </p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Odgovaramo brzo, predlažemo optimalnu lokaciju i paket, a kampanja može krenuti u kratkom roku.
          </p>
        </div>
        <ProcessStepsAnimated steps={howItWorksSteps} />
        <p className="text-[13px] sm:text-sm text-gray-500 text-center mt-6 max-w-2xl mx-auto">
          Bez obaveze • Brz odgovor • Jasni uslovi saradnje
        </p>
      </Section>

      <LocationsCtaSection id="lokacije" />

      <Section id="faq" className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Česta pitanja o cenovniku
          </h2>
        </div>
        <FaqAccordion items={faqPricingItems} />
      </Section>

      <CTAReadySection targetId="upit-forma" />

      <SharedLeadFormSection id="upit-forma" />
    </>
  )
}
