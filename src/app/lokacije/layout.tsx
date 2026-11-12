import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Lokacije bilborda u Beogradu i Srbiji',
  description:
    'Pregled dostupnih LED i klasičnih bilborda za oglašavanje na lokacijama u Beogradu i Srbiji.',
  path: '/lokacije',
  image: '/Heornova.png',
})

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
