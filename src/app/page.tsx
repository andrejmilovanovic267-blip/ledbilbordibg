import Link from 'next/link'
import { Hero } from '@/components/Hero'
import { Section } from '@/components/Section'
import { SharedLeadFormSection } from '@/components/SharedLeadFormSection'
import { FaqAccordion } from '@/components/FaqAccordion'
import { DesignIncludedSection } from '@/components/DesignIncludedSection'
import { LedAdvantagesSection } from '@/components/LedAdvantagesSection'
import { ProcessStepsAnimated } from '@/components/ProcessStepsAnimated'
import PartnerMarquee from '@/components/PartnerMarquee'
import { faqLandingItems } from '@/content/faq'

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

export default function Home() {
  return (
    <>
      <Hero />

      <PartnerMarquee />

      <LedAdvantagesSection />

      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Šta nas izdvaja
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nudimo najbolje lokacije i tehnologiju za vašu reklamu
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="card rounded-2xl p-8 min-h-[180px] flex flex-col items-center text-center">
            <div className="mb-4 mx-auto">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 text-lg font-semibold">
                📍
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
              Strateške lokacije u Beogradu
            </h3>
            <p className="text-gray-600 text-center">
              Pozicije sa konstantnim urbanim protokom i stabilnom vidljivošću.
              Lokacije biramo tako da vaša reklama bude primećena u najfrekventnijim zonama grada.
            </p>
          </div>
          <div className="card rounded-2xl p-8 min-h-[180px] flex flex-col items-center text-center">
            <div className="mb-4 mx-auto">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 text-lg font-semibold">
                🎨
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
              Dizajn optimizovan za LED ekran
            </h3>
            <p className="text-gray-600 text-center">
              Kreativa prilagođena formatu, svetlini i dinamici prikaza.
              Naš tim izrađuje profesionalan dizajn koji je optimizovan za LED ekran i maksimalan vizuelni efekat.
            </p>
          </div>
          <div className="card rounded-2xl p-8 min-h-[180px] flex flex-col items-center text-center">
            <div className="mb-4 mx-auto">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 text-lg font-semibold">
                🛠
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
              24/7 podrška
            </h3>
            <p className="text-gray-600 text-center">
              Tu smo za vas uvek, za izmene, prilagođavanja i podršku tokom cele kampanje.
              Svaki dogovor je moguć, kao i korekcije sadržaja u skladu sa vašim potrebama.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
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

      <DesignIncludedSection />

      <Section id="faq" className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Česta pitanja
          </h2>
        </div>
        <FaqAccordion items={faqLandingItems} />
      </Section>

      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Spremni da vaša reklama bude primećena?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Pošaljite upit i predložićemo idealnu lokaciju i paket za vašu kampanju.
          </p>
          <Link
            href="#contact-form"
            className="btn-primary inline-flex items-center justify-center focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
          >
            Pošaljite upit
          </Link>
        </div>
      </section>

      <SharedLeadFormSection />
    </>
  )
}
