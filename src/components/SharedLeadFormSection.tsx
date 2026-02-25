import { Section } from './Section'
import { LeadForm } from './LeadForm'

const DEFAULT_TITLE = 'Zatražite ponudu bez obaveze'
const DEFAULT_DESCRIPTION =
  'Odgovaramo u roku od 24h. Transparentni uslovi, profesionalni dizajn i mogućnost izmena tokom kampanje. Fleksibilni paketi za svaki budžet.'

interface SharedLeadFormSectionProps {
  /** Section id for anchor links (default: contact-form; use upit-forma on Cenovnik for package buttons) */
  id?: string
  /** Form title (default = Početna) */
  title?: string
  /** Form description (default = Početna) */
  description?: string
  /** Preselect location in the form (e.g. on lokacije/[slug] pages) */
  defaultLocationId?: string
  /** Preselect package in the form (e.g. BASIC, STANDARD, PREMIUM) */
  defaultPackageId?: string
  /** variant="blog" adds extra padding-top inside section (above form card) for blog pages */
  variant?: 'default' | 'blog'
}

/**
 * Reusable form section – identical to the one on Početna.
 * Structure: Section (bg-gray-50 pt-4) > max-w-2xl wrapper > LeadForm (card p-6 sm:p-8).
 */
export function SharedLeadFormSection({
  id = 'contact-form',
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  defaultLocationId,
  defaultPackageId,
  variant = 'default',
}: SharedLeadFormSectionProps) {
  const innerPaddingClass = variant === 'blog' ? 'pt-12 sm:pt-16' : ''
  return (
    <Section id={id} className="bg-gray-50 pt-4">
      <div className={`max-w-2xl mx-auto ${innerPaddingClass}`}>
        <LeadForm
          title={title}
          description={description}
          defaultLocationId={defaultLocationId}
          defaultPackageId={defaultPackageId}
        />
      </div>
    </Section>
  )
}
