import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="bg-white pt-16 pb-8 sm:pt-24 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              LED bilbordi za vaš biznis
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Profesionalni LED displeji na strateškim lokacijama. Povećajte vidljivost vaše reklame uz digitalne bilborde visokog kvaliteta.
            </p>
            <ul className="space-y-3 text-gray-700 mb-10">
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Strateške lokacije sa visokim prometom
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                LED displeji visokog kvaliteta
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Fleksibilni paketi i cene
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact-form"
                className="btn-primary inline-flex items-center justify-center focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
              >
                Zatražite ponudu
              </Link>
              <Link
                href="/lokacije"
                className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors inline-flex items-center justify-center text-center"
              >
                Pogledajte lokacije
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full overflow-hidden rounded-[32px] shadow-[0_25px_70px_-20px_rgba(0,0,0,0.35)] h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
              <Image
                src="/hero.jpg"
                alt="LED bilbordi Beograd"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
