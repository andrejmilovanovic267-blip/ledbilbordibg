import Link from 'next/link'
import type { FaqItem } from '@/components/FaqAccordion'

export type { FaqItem }

export const faqLandingItems: FaqItem[] = [
  {
    q: 'Koliko košta zakup LED bilborda?',
    a: (
      <>
        Cene variraju prema paketu, lokaciji i trajanju kampanje. Okvirne cene i pregled paketa
        pogledajte u našem <Link href="/cenovnik" className="link-inline">cenovniku</Link>. Za detaljniji
        pregled cena za Beograd pogledajte{' '}
        <Link href="/blog/cena-led-bilborda-beograd" className="link-inline">
          članak o cenama LED bilborda
        </Link>
        .
      </>
    ),
  },
  {
    q: 'Koliko traje minimalni zakup?',
    a: 'Minimalni zakup LED bilborda traje 30 dana. Ovaj period omogućava stabilnu vidljivost i kontinuitet reklamne kampanje.',
  },
  {
    q: 'Kako funkcioniše emitovanje reklame?',
    a: 'Reklama se prikazuje na LED ekranu 24/7 u rotaciji sa ostalim oglasiima. Nakon uplate i pripreme materijala, emisija kreće u najkraćem mogućem roku. Proces je brz i jednostavan.',
  },
  {
    q: 'Da li mogu da ubacim i video i fotografiju?',
    a: 'Da, moguće je emitovanje statičnih reklama i video materijala. Sadržaj se prilagođava tehničkim specifikacijama LED ekrana.',
  },
  {
    q: 'Da li dobijam potvrdu emitovanja?',
    a: 'Da, po aktivaciji kampanje dobijate potvrdu o emitovanju. Na zahtev mogu se dostaviti i dodatni izveštaji.',
  },
  {
    q: 'Da li je moguće menjati reklamu tokom kampanje?',
    a: 'Da, izmene reklame su moguće neograničen broj puta tokom trajanja kampanje. Svakog meseca obezbeđen je jedan dizajn bez dodatne naplate.',
  },
  {
    q: 'Da li nudite pomoć oko dizajna?',
    a: 'Da, nudimo kompletnu uslugu izrade dizajna. Jednom mesečno izrađujemo profesionalnu statičnu reklamu prilagođenu LED formatu.',
  },
  {
    q: 'Koje lokacije su dostupne?',
    a: (
      <>
        LED bilbordi su dostupni na atraktivnim lokacijama poput Zemuna i Autokomande. Pregled svih{' '}
        <Link href="/lokacije" className="link-inline">
          dostupnih lokacija
        </Link>{' '}
        možete naći na našem sajtu.
      </>
    ),
  },
  {
    q: 'Sa koliko firmi se deli bilbord?',
    a: 'Bilbord se deli sa najviše 8 firmi. Svaka reklama se prikazuje u intervalu od 64 sekunde.',
  },
  {
    q: 'Kako mogu da zatražim ponudu?',
    a: (
      <>
        Ponudu možete zatražiti putem{' '}
        <Link href="/kontakt" className="link-inline">
          kontakt forme
        </Link>{' '}
        na sajtu. Dostupni smo i putem telefona i email-a.
      </>
    ),
  },
]

export const faqPricingItems: FaqItem[] = [
  {
    q: 'Koliko košta zakup LED bilborda?',
    a: (
      <>
        Cene zavise od paketa, lokacije i trajanja. Pregled paketa i okvirne cene nalaze se u{' '}
        <Link href="/cenovnik" className="link-inline">cenovniku</Link>. Za detalje o cenama u
        Beogradu pogledajte{' '}
        <Link href="/blog/koliko-kosta-led-bilbord-beograd" className="link-inline">
          okvirne cene LED bilborda
        </Link>
        .
      </>
    ),
  },
  {
    q: 'Koliko traje minimalni zakup?',
    a: 'Minimalni zakup LED bilborda traje 30 dana. Ovaj period omogućava stabilnu vidljivost i kontinuitet reklamne kampanje.',
  },
  {
    q: 'Sa koliko firmi se deli bilbord?',
    a: 'Bilbord se deli sa najviše 8 firmi. Svaka reklama se prikazuje u intervalu od 64 sekunde.',
  },
  {
    q: 'Da li je moguće menjati reklamu?',
    a: 'Da, izmene reklame su moguće neograničen broj puta tokom trajanja kampanje. Svakog meseca obezbeđen je jedan dizajn bez dodatne naplate.',
  },
  {
    q: 'Da li nudite pomoć oko dizajna?',
    a: 'Da, nudimo kompletnu uslugu izrade dizajna. Jednom mesečno izrađujemo profesionalnu statičnu reklamu prilagođenu LED formatu. Video produkcija nije uključena, ali statični kreativi se izrađuju profesionalno.',
  },
  {
    q: 'Da li mogu da ubacim i video i fotografiju?',
    a: 'Da, moguće je emitovanje statičnih reklama i video materijala. Sadržaj se prilagođava tehničkim specifikacijama LED ekrana. Dizajn kreativa sa vaše strane može biti statičan (slika), a mi pripremamo za emitovanje.',
  },
  {
    q: 'Koliko sekundi traje prikaz reklame?',
    a: 'Slot prikaza je 8 sekundi. Reklame se rotiraju u okviru definisanog intervala prema izabranom paketu.',
  },
  {
    q: 'Kada kampanja kreće?',
    a: 'Nakon evidentirane uplate i pripreme dizajna, reklama se emituje u najkraćem mogućem roku. Proces aktivacije kampanje je brz i jednostavan.',
  },
  {
    q: 'Kako izabrati lokaciju?',
    a: (
      <>
        Pogledajte naš{' '}
        <Link href="/lokacije" className="link-inline">
          pregled lokacija
        </Link>{' '}
        sa opisa, slikama i karakteristikama. Nudimo lokacije u Zemunu, na Autokomandi, Južnom bulevaru i
        druge atraktivne tačke u Beogradu.
      </>
    ),
  },
  {
    q: 'Kako mogu da zatražim ponudu?',
    a: (
      <>
        Ponudu možete zatražiti putem{' '}
        <Link href="/kontakt" className="link-inline">
          kontakt forme
        </Link>
        . Dostupni smo i putem telefona i email-a.
      </>
    ),
  },
]
