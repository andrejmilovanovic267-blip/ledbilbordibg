/**
 * Single source of truth for locations (cards, map, detail pages).
 * Demo placeholder data; replace with real content later.
 */
export interface LocationItem {
  id: string
  slug: string
  name: string
  city: string
  shortDescription: string
  description: string
  longDescription: string[]
  lat: number
  lng: number
  prednosti: string[]
  highlights: string[]
  benefits: string[]
  addressArea: string
  audience: string
  tipLokacije?: string
  vidljivost?: string
  recommendedFor: string[]
  intervalSec: number
  images: string[]
}

export const locationsData: LocationItem[] = [
  {
    id: 'beograd-lokacija-1',
    slug: 'beograd-lokacija-1',
    name: 'Beograd Južni bulevar',
    city: 'Beograd',
    shortDescription: 'Lokacija u srcu grada sa izuzetnom vidljivošću sa glavnih saobraćajnica.',
    description:
      'Lokacija u srcu grada sa izuzetnom vidljivošću sa glavnih saobraćajnica. Ciljna publika obuhvata vozače i pešake u tržišnom i poslovnom delu. Idealno za brendiranje i kampanje širokog dosega.',
    longDescription: [
      'LED bilbord na Južnom bulevaru predstavlja jednu od najatraktivnijih oglasnih lokacija u Beogradu. Smešten u neposrednoj blizini Autokomande, ova pozicija obezbeđuje izuzetno visok dnevni promet vozila i pešaka.',
      'Južni bulevar je poznat po konstantnom saobraćajnom opterećenju, naročito tokom jutarnjih i popodnevnih špiceva, što omogućava maksimalnu frekvenciju prikaza reklame. Lokacija je okružena stambenim i poslovnim objektima, kao i brojnim ugostiteljskim i maloprodajnim sadržajima.',
      'Dodatnu vrednost pruža veliki broj autobuskih linija i intenzivan pešački saobraćaj, zahvaljujući razvijenim pešačkim stazama i povezanim urbanim zonama. Ova lokacija je idealna za brendiranje, lansiranje proizvoda i kampanje koje zahtevaju snažnu vidljivost u srcu grada.',
    ],
    lat: 44.793167,
    lng: 20.475722,
    prednosti: [
      'Prikaz 24/7',
      'Visoka frekvencija prikaza',
      'Odlična vidljivost sa glavnih pravaca',
      'Mogućnost brzih izmena kreativa',
      'Fleksibilni termini zakupa',
      'Izveštaji i podrška (po dogovoru)',
    ],
    highlights: [
      'Centar grada',
      'Visok dnevni promet',
      '24/7 prikaz',
      'Visoka rezolucija',
      'Izrada kreativa uključena',
    ],
    benefits: [
      'Prikaz 24/7',
      'Visoka frekvencija prikaza',
      'Odlična vidljivost sa glavnih pravaca',
      'Mogućnost brzih izmena kreativa',
      'Fleksibilni termini zakupa',
      'Izveštaji i podrška (po dogovoru)',
      'Izrada kreativa uključena',
      'Stabilan prikaz tokom cele godine',
    ],
    addressArea: 'Autokomanda / Južni bulevar',
    audience: 'Vozači, pešaci, putnici javnog prevoza',
    tipLokacije: 'Gradska saobraćajnica visokog protoka',
    vidljivost: 'Odlična iz više pravaca',
    recommendedFor: ['Brendiranje', 'Lansiranje proizvoda', 'Retail', 'Usluge'],
    intervalSec: 20,
    images: ['/hero.jpg', 'galerija-1', 'galerija-2'],
  },
  {
    id: 'beograd-lokacija-2',
    slug: 'beograd-lokacija-2',
    name: 'Beograd Zemun',
    city: 'Beograd',
    shortDescription: 'Pozicioniran u blizini velikih tržnih centara sa konstantnim prometom kupaca.',
    description:
      'Pozicioniran u blizini velikih tržnih centara, sa konstantnim prometom kupaca i posetilaca. Pogodan za retail i sezonske kampanje. Visoka dnevna izloženost i dobra demografska pokrivenost.',
    longDescription: [
      'Beograd Lokacija 2 je postavljena u blizini velikih tržnih centara, sa konstantnim prometom kupaca i posetilaca tokom celog dana. Ovaj segment je posebno pogodan za retail oglašavanje, akcije i sezonske kampanje.',
      'Visoka dnevna izloženost i dobra demografska pokrivenost čine ovu lokaciju idealnom za brendove koji ciljaju kupce u tranzitu. Reklame se smenjuju na svakih 20 sekundi. Dostupna je izrada dizajna i tehnička podrška.',
    ],
    lat: 44.849972,
    lng: 20.381306,
    prednosti: [
      'Prikaz 24/7',
      'Visoka frekvencija prikaza',
      'Ciljna zona – kupci i posetioci',
      'Mogućnost brzih izmena kreativa',
      'Fleksibilni termini zakupa',
      'Izveštaji i podrška (po dogovoru)',
    ],
    highlights: [
      'Blizina tržnih centara',
      'Kupci i posetioci',
      '24/7 prikaz',
      'Visoka rezolucija',
      'Izrada dizajna uključena',
    ],
    benefits: [
      'Prikaz 24/7',
      'Visoka frekvencija prikaza',
      'Ciljna zona – kupci i posetioci',
      'Mogućnost brzih izmena kreativa',
      'Fleksibilni termini zakupa',
      'Izveštaji i podrška (po dogovoru)',
      'Izrada dizajna uključena',
      'Odličan za retail kampanje',
    ],
    addressArea: 'Autokomanda, poslovna i trgovinska zona',
    audience: 'Kupci, posetioci tržnih centara, pešaci',
    recommendedFor: ['Retail', 'Akcije', 'Sezonske kampanje', 'Brendiranje'],
    intervalSec: 20,
    images: ['hero', 'galerija-1', 'galerija-2'],
  },
  {
    id: 'beograd-lokacija-3',
    slug: 'beograd-lokacija-3',
    name: 'Vrnjačka Banja Ulaz',
    city: 'Beograd',
    shortDescription: 'Strategijska tačka na glavnom pravcu sa izvanrednom vidljivošću.',
    description:
      'Strategijska tačka na glavnom pravcu, sa izvanrednom vidljivošću tokom celog dana. Pogodna za korporativno brendiranje i oglase usmerene na širu javnost. Profesionalna instalacija i redovno održavanje.',
    longDescription: [
      'Beograd Lokacija 3 je strategijska tačka na glavnom saobraćajnom pravcu, sa izvanrednom vidljivošću tokom celog dana. LED bilbord je profesionalno instaliran i redovno se održava. Pogodan je za korporativno brendiranje i oglase usmerene na širu javnost.',
      'Visoka izloženost i kvalitetan prikaz čine ovu lokaciju izborom za brendove koji žele snažan vizuelni utisak. Reklame se smenjuju na svakih 20 sekundi. Dostupna je izrada dizajna i podrška tokom zakupa.',
    ],
    lat: 44.804,
    lng: 20.4782,
    prednosti: [
      'Prikaz 24/7',
      'Odlična vidljivost sa glavnih pravaca',
      'Mogućnost brzih izmena kreativa',
      'Fleksibilni termini zakupa',
      'Redovno održavanje',
      'Izveštaji i podrška (po dogovoru)',
    ],
    highlights: [
      'Glavni saobraćajni pravac',
      'Visoka vidljivost',
      '24/7 prikaz',
      'Visoka rezolucija',
      'Izrada dizajna uključena',
    ],
    benefits: [
      'Prikaz 24/7',
      'Odlična vidljivost sa glavnih pravaca',
      'Mogućnost brzih izmena kreativa',
      'Fleksibilni termini zakupa',
      'Redovno održavanje',
      'Izveštaji i podrška (po dogovoru)',
      'Izrada dizajna uključena',
      'Profesionalna instalacija',
    ],
    addressArea: 'Tašmajdan, centralna saobraćajnica',
    audience: 'Vozači, pešaci, korisnici javnog prevoza',
    recommendedFor: ['Brendiranje', 'Korporativne kampanje', 'Događaji'],
    intervalSec: 20,
    images: ['hero', 'galerija-1', 'galerija-2'],
  },
  {
    id: 'beograd-lokacija-4',
    slug: 'beograd-lokacija-4',
    name: 'Zlatibor Centar',
    city: 'Beograd',
    shortDescription: 'Važna saobraćajna pozicija sa konstantnom izloženošću.',
    description:
      'Važna saobraćajna pozicija sa konstantnom izloženošću tokom radnog i vikend prometa. Odličan izbor za dugoročne kampanje i lansiranje proizvoda. Pružamo fleksibilne pakete i podršku tokom celog perioda zakupa.',
    longDescription: [
      'Beograd Lokacija 4 nalazi se na važnoj saobraćajnoj poziciji sa konstantnom izloženošću tokom radnog i vikend prometa. Idealna je za dugoročne kampanje, lansiranje proizvoda i izgradnju prepoznatljivosti brenda.',
      'Pružamo fleksibilne pakete i podršku tokom celog perioda zakupa. Reklame se prikazuju 24/7 i smenjuju na svakih 20 sekundi. Uključena je izrada dizajna i mogućnost izmena kreativa tokom kampanje.',
    ],
    lat: 44.8248,
    lng: 20.4011,
    prednosti: [
      'Prikaz 24/7',
      'Visoka frekvencija prikaza',
      'Konstantna izloženost (radni dan + vikend)',
      'Mogućnost brzih izmena kreativa',
      'Fleksibilni termini zakupa',
      'Izveštaji i podrška (po dogovoru)',
    ],
    highlights: [
      'Novi Beograd, saobraćajnica',
      'Konstantan promet',
      '24/7 prikaz',
      'Visoka rezolucija',
      'Izrada dizajna uključena',
    ],
    benefits: [
      'Prikaz 24/7',
      'Visoka frekvencija prikaza',
      'Konstantna izloženost (radni dan + vikend)',
      'Mogućnost brzih izmena kreativa',
      'Fleksibilni termini zakupa',
      'Izveštaji i podrška (po dogovoru)',
      'Izrada dizajna uključena',
      'Dugoročne kampanje',
    ],
    addressArea: 'Novi Beograd, šira saobraćajna zona',
    audience: 'Vozači, putnici, dnevni dolaznici',
    recommendedFor: ['Brendiranje', 'Lansiranje proizvoda', 'Dugoročne kampanje'],
    intervalSec: 20,
    images: ['hero', 'galerija-1', 'galerija-2'],
  },
]

export function getLocationBySlug(slug: string): LocationItem | undefined {
  return locationsData.find((loc) => loc.slug === slug)
}
