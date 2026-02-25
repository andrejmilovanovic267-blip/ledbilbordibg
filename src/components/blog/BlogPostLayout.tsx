import Link from 'next/link'
import { SharedLeadFormSection } from '@/components/SharedLeadFormSection'
import { CTAReadySection } from '@/components/CTAReadySection'

export interface BlogSectionConfig {
  id?: string
  title: string
  paragraphs?: (string | React.ReactNode)[]
  /** Paragrafi nakon bullet liste */
  paragraphsAfter?: (string | React.ReactNode)[]
  bullets?: string[]
  /** Za sekcije tipa "Šta utiče" – podnaslov + sadržaj */
  subsections?: Array<{ title: string; content: string | React.ReactNode }>
  cta?: { label: string; href: string }
  variant?: 'white' | 'muted'
  /** Ključne informacije – kartica sa border-om */
  isCard?: boolean
}

export interface BlogPostLayoutProps {
  title: string
  /** Jedan uvodni paragraf ispod H1 (2–3 rečenice). */
  introText?: string
  sections: BlogSectionConfig[]
  showLeadForm?: boolean
  leadFormId?: string
  leadFormTitle?: string
  leadFormDescription?: string
}

const CONTAINER = 'max-w-5xl mx-auto px-6'
const TEXT_MAX = 'max-w-3xl mx-auto text-center'
const P_CLASS = 'text-gray-600 leading-relaxed mb-4 text-center'
const H2_CLASS = 'text-xl font-semibold text-gray-900 mt-10 mb-3 pb-3 border-b border-gray-200 text-center first:mt-0'
const BULLET_CLASS = 'space-y-2 text-gray-600 mb-4 text-center'
const BULLET_ITEM = 'flex items-center justify-center gap-2'
const BULLET_ICON = 'text-green-600 shrink-0'

export function BlogPostLayout({
  title,
  introText,
  sections,
  showLeadForm = true,
  leadFormId = 'contact-form',
  leadFormTitle,
  leadFormDescription,
}: BlogPostLayoutProps) {
  const sectionBg = (v: 'white' | 'muted' = 'white') =>
    v === 'muted' ? 'bg-gray-50 py-12 md:py-14' : 'bg-white py-12 md:py-14'

  return (
    <>
      {/* Hero – H1 + jedan uvodni paragraf */}
      <section className="bg-white py-8 md:py-10">
        <div className={CONTAINER}>
          <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center max-w-3xl mx-auto">
            {title}
          </h1>
          {introText && (
            <p className="mt-4 sm:mt-6 max-w-3xl mx-auto text-center text-gray-600 leading-relaxed">
              {introText}
            </p>
          )}
        </div>
      </section>

      {/* Sekcije – naizmenično: muted, white, muted, white... */}
      {sections.map((sec, i) => {
        const defaultVariant = i % 2 === 0 ? 'muted' : 'white'
        const variant = sec.variant ?? (sec.isCard ? 'muted' : defaultVariant)
        const isFirst = i === 0
        const firstSectionMargin = i === 0 ? ' mt-12 sm:mt-14' : ''

        return (
          <section
            key={i}
            id={sec.id}
            className={sectionBg(variant) + firstSectionMargin}
          >
            <div className={CONTAINER}>
              <div className={TEXT_MAX}>
                {sec.isCard ? (
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 max-w-2xl mx-auto">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                      {sec.title}
                    </h2>
                    {sec.bullets && (
                      <ul className="space-y-2 text-gray-700 text-center">
                        {sec.bullets.map((item, j) => (
                          <li key={j} className={BULLET_ITEM}>
                            <span className={BULLET_ICON}>✔</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <>
                    <h2 className={H2_CLASS + (isFirst ? ' first:mt-0' : '')}>
                      {sec.title}
                    </h2>
                    {sec.paragraphs?.map((p, j) => (
                      <p key={j} className={P_CLASS}>
                        {p}
                      </p>
                    ))}
                    {sec.subsections?.map((sub, j) => (
                      <div key={j} className="space-y-1 mb-4 last:mb-0">
                        <h3 className="text-sm font-semibold text-gray-800 mb-1 text-center">
                          {sub.title}
                        </h3>
                        <p className={P_CLASS}>{sub.content}</p>
                      </div>
                    ))}
                    {sec.bullets && (
                      <ul className={BULLET_CLASS}>
                        {sec.bullets.map((item, j) => (
                          <li key={j} className={BULLET_ITEM}>
                            <span className={BULLET_ICON}>✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {sec.paragraphsAfter?.map((p, j) => (
                      <p key={j} className={P_CLASS}>
                        {p}
                      </p>
                    ))}
                    {sec.cta && (
                      <div className="text-center">
                        <Link
                          href={sec.cta.href}
                          className="btn-primary inline-flex items-center justify-center focus:outline-none focus:ring-0"
                        >
                          {sec.cta.label}
                        </Link>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </section>
        )
      })}

      {showLeadForm && (
        <>
          <CTAReadySection targetId={leadFormId} />
          <SharedLeadFormSection
            id={leadFormId}
            title={leadFormTitle}
            description={leadFormDescription}
            variant="blog"
          />
        </>
      )}
    </>
  )
}
