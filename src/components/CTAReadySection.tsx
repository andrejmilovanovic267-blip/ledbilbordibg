import Link from 'next/link'
import { cn } from '@/lib/utils'

interface CTAReadySectionProps {
  /** ID elementa za scroll (npr. contact-form, upit-forma) */
  targetId?: string
  className?: string
}

export function CTAReadySection({
  targetId = 'contact-form',
  className,
}: CTAReadySectionProps) {
  return (
    <section className={cn('bg-gray-50 py-14', className)}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Spremni da vaša reklama bude primećena?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Pošaljite upit i predložićemo idealnu lokaciju i paket za vašu kampanju.
        </p>
        <Link
          href={`#${targetId}`}
          className="btn-primary inline-flex items-center justify-center focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
        >
          Pošaljite upit
        </Link>
      </div>
    </section>
  )
}
