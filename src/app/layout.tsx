import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { siteConfig } from '@/lib/siteConfig'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: 'LED bilbordi Beograd | Iznajmljivanje bilborda',
    template: '%s | LED Bilbordi Beograd',
  },
  description:
    'Iznajmljivanje LED bilborda i oglasnog prostora na lokacijama u Beogradu i Srbiji.',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/LEDBilbordiBG3.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sr">
      <head>
        <link
          rel="preload"
          href="/fonts/Inter-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
