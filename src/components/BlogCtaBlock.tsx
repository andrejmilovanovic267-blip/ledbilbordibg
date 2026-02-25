import Link from 'next/link'

interface BlogCtaBlockProps {
  title: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel: string
  secondaryHref: string
}

export function BlogCtaBlock({
  title,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: BlogCtaBlockProps) {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200 text-center max-w-3xl mx-auto">
      <p className="text-lg font-medium text-gray-900 mb-4">{title}</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href={primaryHref}
          className="btn-primary inline-flex items-center justify-center focus:outline-none focus:ring-0"
        >
          {primaryLabel}
        </Link>
        <Link
          href={secondaryHref}
          className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 inline-flex items-center justify-center text-center"
        >
          {secondaryLabel}
        </Link>
      </div>
    </div>
  )
}
