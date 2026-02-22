import Link from 'next/link'
import { Hero } from '@/components/Hero'
import { Section } from '@/components/Section'
import { LeadForm } from '@/components/LeadForm'
import { FaqAccordion } from '@/components/FaqAccordion'
import { DesignIncludedSection } from '@/components/DesignIncludedSection'
import { LedAdvantagesSection } from '@/components/LedAdvantagesSection'
import { ProcessStepsAnimated } from '@/components/ProcessStepsAnimated'
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

const brandLogos = [
  { name: 'NOVA', mark: 'circle' as const },
  { name: 'LUMEN', mark: 'circle' as const },
  { name: 'URBAN', mark: 'square' as const },
  { name: 'ATLAS', mark: 'circle' as const },
  { name: 'VISTA', mark: 'diamond' as const },
  { name: 'PRIME', mark: 'circle' as const },
  { name: 'NEXA', mark: 'square' as const },
  { name: 'ORBIT', mark: 'diamond' as const },
]

export default function Home() {
  return (
    <>
      <Hero />

      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm text-gray-500 text-center mb-6">
            Sarađivali smo sa
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" aria-hidden />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" aria-hidden />
            <div className="flex gap-8 animate-logo-loop w-max">
              {[...brandLogos, ...brandLogos].map((brand, i) => (
                <div
                  key={`logo-${i}`}
                  className="h-16 min-w-[140px] px-8 flex items-center justify-center shrink-0 rounded-xl border border-gray-200/70 bg-white opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                >
                  <div className="flex items-center gap-2">
                    {brand.mark === 'circle' && (
                      <div className="w-6 h-6 rounded-full bg-gray-100 border border-gray-200 shrink-0" />
                    )}
                    {brand.mark === 'square' && (
                      <div className="w-5 h-5 rounded-sm bg-gray-100 border border-gray-200 shrink-0" />
                    )}
                    {brand.mark === 'diamond' && (
                      <div className="w-5 h-5 rounded-sm bg-gray-100 border border-gray-200 shrink-0 rotate-45" />
                    )}
                    <span className="text-sm font-semibold tracking-wide text-gray-500 whitespace-nowrap">
                      {brand.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Česta pitanja
          </h2>
        </div>
        <FaqAccordion items={faqLandingItems} />
      </Section>

      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-4 text-center">
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

      <Section id="contact-form" className="bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-start">
              <div className="max-w-[460px] text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight leading-tight">
                  Zatražite ponudu bez obaveze
                </h2>
                <p className="text-base text-gray-600 leading-relaxed mt-3 mb-6">
                  Pošaljite nam nekoliko osnovnih informacija o vašoj planiranoj kampanji, a naš tim će vam u najkraćem roku pripremiti jasan i konkretan predlog. Dobijate preporuku optimalne LED lokacije, predlog trajanja zakupa i transparentan pregled cene, bez skrivenih uslova i nejasnih stavki.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 shrink-0 mt-[2px]">✓</span>
                    <span className="text-sm md:text-[15px] text-gray-700 leading-relaxed">Odgovor u roku od 24h</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 shrink-0 mt-[2px]">✓</span>
                    <span className="text-sm md:text-[15px] text-gray-700 leading-relaxed">Predlog optimalne LED lokacije u skladu sa vašim ciljem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 shrink-0 mt-[2px]">✓</span>
                    <span className="text-sm md:text-[15px] text-gray-700 leading-relaxed">Jasni uslovi saradnje i transparentna cena</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 shrink-0 mt-[2px]">✓</span>
                    <span className="text-sm md:text-[15px] text-gray-700 leading-relaxed">Profesionalni dizajn kreativa uključen u paket</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 shrink-0 mt-[2px]">✓</span>
                    <span className="text-sm md:text-[15px] text-gray-700 leading-relaxed">Mogućnost izmena tokom trajanja kampanje</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Bez skrivenih troškova. Bez nepotrebne komplikacije. Samo brz, profesionalan i realan predlog za vašu reklamu na LED bilbordima.
                </p>
              </div>
              <div className="min-w-0">
                <LeadForm embedded />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
