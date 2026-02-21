import { Section } from '@/components/Section'
import { LeadForm } from '@/components/LeadForm'
import { siteConfig } from '@/lib/siteConfig'

export default function CenovnikPage() {
  return (
    <>
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cenovnik
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-2">
            Izaberite paket koji odgovara vašim ciljevima, budžetu i obimu kampanje.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Svi paketi uključuju tehničku podršku, stabilan prikaz i mogućnost izmena.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
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
                <button className="btn-primary w-full">
                  Izaberite paket
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Kako da izaberete paket
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              BASIC
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Idealno rešenje za manje kampanje, lokalno oglašavanje i testiranje LED bilbord oglašavanja. Namenjen firmama koje žele jednostavan i efikasan start uz kontrolisan budžet.
            </p>
          </div>
          <div className="card p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              STANDARD
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Najbolji izbor za brendove koji žele jače prisustvo, bolju vidljivost i veću frekvenciju prikaza. Predstavlja optimalan balans između cene, dometa i efekta kampanje.
            </p>
          </div>
          <div className="card p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              PREMIUM
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Za maksimalnu vidljivost, dominantno prisustvo i oglašavanje na više lokacija. Savršen za brendove koji žele snažan utisak, najveći domet i pun potencijal LED oglašavanja.
            </p>
          </div>
        </div>
      </Section>
      <Section className="bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <LeadForm
            title="Želite ponudu po meri?"
            description="Kontaktirajte nas i pripremićemo ponudu prema vašim zahtevima."
          />
        </div>
      </Section>
    </>
  )
}
