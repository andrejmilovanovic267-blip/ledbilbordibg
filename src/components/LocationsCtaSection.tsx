import Link from 'next/link'
import { Section } from './Section'

interface LocationsCtaSectionProps {
  id?: string
}

export function LocationsCtaSection({ id }: LocationsCtaSectionProps) {
  return (
    <Section id={id} className="bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Pogledajte naše lokacije
        </h2>
        <p className="text-gray-600 mb-6">
          Strateški postavljeni LED bilbordi na atraktivnim tačkama u Beogradu. Pregledajte lokacije, vidljivost i tehničke specifikacije.
        </p>
        <Link
          href="/lokacije"
          className="btn-primary inline-flex items-center justify-center focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
        >
          Otvori lokacije
        </Link>
      </div>
    </Section>
  )
}
