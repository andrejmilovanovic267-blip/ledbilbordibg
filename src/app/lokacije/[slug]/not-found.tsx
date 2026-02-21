import Link from 'next/link'
import { Section } from '@/components/Section'

export default function LocationNotFound() {
  return (
    <Section className="bg-white">
      <div className="max-w-xl mx-auto text-center py-16">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Lokacija nije pronađena
        </h1>
        <p className="text-gray-600 mb-6">
          Tražena lokacija ne postoji ili je uklonjena. Proverite putanju ili se vratite na listu lokacija.
        </p>
        <Link href="/lokacije" className="btn-primary inline-block">
          Nazad na lokacije
        </Link>
      </div>
    </Section>
  )
}
