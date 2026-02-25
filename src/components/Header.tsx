'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/siteConfig'
import { TopBar } from '@/components/TopBar'

const MOBILE_MENU_ID = 'mobile-nav'
const TOPBAR_HEADER_HEIGHT = 'calc(2.25rem + 4rem)' // TopBar (h-9) + Header (h-16)

export function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen, closeMenu])

  useEffect(() => {
    closeMenu()
  }, [pathname, closeMenu])

  return (
    <>
      <div className="sticky top-0 z-50">
        <TopBar />
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900">
              <Image src="/LEDBilbordiBG.svg" alt="LED Bilbordi" width={120} height={32} className="h-8 w-auto shrink-0 block max-h-full transition-transform duration-300 ease-out hover:scale-105" />
              {siteConfig.name}
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors',
                    pathname === link.href
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <Link
                href="/kontakt"
                className="btn-primary text-sm hidden md:inline-flex"
              >
                Kontaktirajte nas
              </Link>
              <button
                type="button"
                className="md:hidden p-2 -mr-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                onClick={() => setMenuOpen((o) => !o)}
                aria-expanded={menuOpen}
                aria-controls={MOBILE_MENU_ID}
                aria-label={menuOpen ? 'Zatvori meni' : 'Otvori meni'}
              >
                {menuOpen ? (
                  <X className="w-6 h-6" aria-hidden />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden />
                )}
              </button>
            </div>
          </div>
        </div>
        </header>
      </div>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/10 md:hidden transition-opacity"
            style={{ top: TOPBAR_HEADER_HEIGHT }}
            aria-hidden
            onClick={closeMenu}
          />
          <div
            id={MOBILE_MENU_ID}
            role="dialog"
            aria-modal="true"
            aria-label="Navigacija"
            className="fixed left-0 right-0 z-50 md:hidden bg-white border-b border-gray-200"
            style={{ top: TOPBAR_HEADER_HEIGHT, paddingBottom: 'env(safe-area-inset-bottom, 0)' }}
          >
            <nav className="max-w-7xl mx-auto px-6 sm:px-6 py-4 pb-6">
              <ul className="space-y-1">
                {siteConfig.navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={cn(
                        'block py-3 px-3 rounded-md text-sm font-medium transition-colors',
                        pathname === link.href
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-3 mt-3 border-t border-gray-200">
                  <Link
                    href="/kontakt"
                    onClick={closeMenu}
                    className="btn-primary w-full justify-center inline-flex text-sm py-3"
                  >
                    Kontaktirajte nas
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  )
}
