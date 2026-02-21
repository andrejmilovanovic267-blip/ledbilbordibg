import Link from 'next/link'
import { Hero } from '@/components/Hero'
import { Section } from '@/components/Section'
import { LeadForm } from '@/components/LeadForm'
import { FaqAccordion } from '@/components/FaqAccordion'
import { DesignIncludedSection } from '@/components/DesignIncludedSection'
import { LedAdvantagesSection } from '@/components/LedAdvantagesSection'
import { ProcessStepsAnimated } from '@/components/ProcessStepsAnimated'

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

const faqItems = [
  {
    q: 'Koliko traje minimalni zakup?',
    a: 'Minimalni zakup LED bilborda traje 30 dana. Ovaj period omogućava stabilnu vidljivost i kontinuitet reklamne kampanje.',
  },
  {
    q: 'Koliko brzo možemo da krenemo sa kampanjom?',
    a: 'Nakon evidentirane uplate i pripreme dizajna, reklama se emituje u najkraćem mogućem roku. Proces aktivacije kampanje je brz i jednostavan.',
  },
  {
    q: 'Da li mogu da ubacim i video i fotografiju?',
    a: 'Da, moguće je emitovanje statičnih reklama i video materijala. Sadržaj se prilagođava tehničkim specifikacijama LED ekrana.',
  },
  {
    q: 'Da li dobijam izveštaj / potvrdu emitovanja?',
    a: 'Odgovor dolazi uskoro.',
  },
  {
    q: 'Da li je moguće menjati reklamu?',
    a: 'Da, izmene reklame su moguće neograničen broj puta tokom trajanja kampanje. Svakog meseca obezbeđen je jedan dizajn bez dodatne naplate.',
  },
  {
    q: 'Da li nudite pomoć oko dizajna?',
    a: 'Da, nudimo kompletnu uslugu izrade dizajna. Jednom mesečno izrađujemo profesionalnu statičnu reklamu prilagođenu LED formatu.',
  },
  {
    q: 'Koje lokacije su dostupne?',
    a: 'LED bilbordi dostupni su na atraktivnim i prometnim lokacijama. Predlažemo pozicije u skladu sa ciljevima vaše kampanje.',
  },
  {
    q: 'Sa koliko firmi se deli bilbord?',
    a: 'Bilbord se deli sa najviše 6 firmi. Reklame se rotiraju u okviru definisanog intervala prikaza.',
  },
  {
    q: 'Kako mogu da zatražim ponudu?',
    a: 'Ponudu možete zatražiti putem kontakt forme na sajtu. Dostupni smo i putem telefona i email-a.',
  },
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
            Zašto da izaberete nas?
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
        <FaqAccordion items={faqItems} />
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
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="max-w-lg">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Pošaljite upit
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-4">
                  Kontaktiraćemo vas u najkraćem roku sa predlogom lokacije i paketa.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-sm leading-5 text-gray-700">
                    <span className="text-green-600 mr-2 shrink-0">✓</span>
                    <span>Odgovor u roku od 24h</span>
                  </li>
                  <li className="flex items-start text-sm leading-5 text-gray-700">
                    <span className="text-green-600 mr-2 shrink-0">✓</span>
                    <span>Predlog lokacije i termina</span>
                  </li>
                  <li className="flex items-start text-sm leading-5 text-gray-700">
                    <span className="text-green-600 mr-2 shrink-0">✓</span>
                    <span>Mogućnost izmena tokom kampanje</span>
                  </li>
                  <li className="flex items-start text-sm leading-5 text-gray-700">
                    <span className="text-green-600 mr-2 shrink-0">✓</span>
                    <span>Jasni uslovi i fleksibilni paketi</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500">
                  Bez obaveze, samo osnovne informacije.
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
