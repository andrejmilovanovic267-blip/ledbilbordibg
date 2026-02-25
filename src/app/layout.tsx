import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'leaflet/dist/leaflet.css'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { siteConfig } from '@/lib/siteConfig'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: siteConfig.name,
  description: 'Iznajmljivanje LED bilborda',
  icons: {
    icon: '/LEDBilbordiBG.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sr">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
