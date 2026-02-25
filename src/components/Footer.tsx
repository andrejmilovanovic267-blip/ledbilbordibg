import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/siteConfig'

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/LEDBilbordiBG.svg"
                alt="LED Bilbordi logo"
                width={28}
                height={28}
                className="h-7 w-auto"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                {siteConfig.name}
              </h3>
            </div>
            <p className="text-sm text-gray-600">
              Profesionalni LED bilbordi za vaš biznis
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Navigacija
            </h4>
            <ul className="space-y-2">
              {siteConfig.navLinks.flatMap((link) =>
                link.href === '/cenovnik'
                  ? [link, { href: '/blog', label: 'Blog' }]
                  : [link]
              ).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Kontakt
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 text-center">Brzi linkovi</h4>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-1">
            <Link href="/blog/cena-led-bilborda-beograd" className="text-sm text-gray-600 hover:text-gray-900">
              Cena LED bilborda u Beogradu
            </Link>
            <Link href="/blog/iznajmljivanje-led-bilborda-beograd" className="text-sm text-gray-600 hover:text-gray-900">
              Iznajmljivanje LED bilborda u Beogradu
            </Link>
            <Link href="/blog/iznajmljivanje-bilborda-novi-beograd" className="text-sm text-gray-600 hover:text-gray-900">
              Iznajmljivanje LED bilborda Novi Beograd
            </Link>
            <Link href="/blog/iznajmljivanje-bilborda-zemun" className="text-sm text-gray-600 hover:text-gray-900">
              Iznajmljivanje LED bilborda Zemun
            </Link>
            <Link href="/blog/iznajmljivanje-bilborda-autokomanda" className="text-sm text-gray-600 hover:text-gray-900">
              Iznajmljivanje LED bilborda Autokomanda
            </Link>
          </nav>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  )
}
