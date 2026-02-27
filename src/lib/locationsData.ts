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
    images: ['/hero.webp', 'galerija-1', 'galerija-2'],
  },
  {
    id: 'beograd-lokacija-2',
    slug: 'beograd-lokacija-2',
    name: 'Zemun Ugrinovačka',
    city: 'Beograd - Zemun',
    shortDescription: 'Glavna saobraćajnica koja povezuje Zemun sa Novim Beogradom i Batajnicom. Intenzivan protok vozila i snažna lokalna vidljivost.',
    description:
      'Glavna saobraćajnica koja povezuje Zemun sa Novim Beogradom i Batajnicom. Intenzivan protok vozila tokom celog dana. Idealno za brendove koji žele kontinuiranu prisutnost u Zemunu.',
    longDescription: [
      'Zemun Ugrinovačka - lokacija se nalazi na jednoj od glavnih saobraćajnica koja povezuje Zemun sa Novim Beogradom i Batajnicom. Karakteriše je intenzivan protok vozila tokom celog dana, uz kombinaciju stambenog i poslovnog okruženja.',
      'Pozicija omogućava snažnu lokalnu vidljivost i čest kontakt sa istom publikom, što je idealno za brendove koji žele kontinuiranu prisutnost u Zemunu.',
      'Reklame se smenjuju na svakih 8 sekundi. Dostupna je izrada dizajna i tehnička podrška.',
    ],
    lat: 44.849972,
    lng: 20.381306,
    prednosti: [
      'Veliki dnevni protok vozila',
      'Kontinuirana lokalna izloženost',
      'Odlična vidljivost iz oba smera',
      'Prikaz 24/7',
    ],
    highlights: [
      'Ugrinovačka, glavna saobraćajnica',
      'Vozači, lokalno stanovništvo',
      '24/7 prikaz',
      'Visoka rezolucija',
      'Izrada dizajna uključena',
    ],
    benefits: [
      'Veliki dnevni protok vozila',
      'Kontinuirana lokalna izloženost',
      'Odlična vidljivost iz oba smera',
      'Prikaz 24/7',
    ],
    addressArea: 'Ugrinovačka, glavna saobraćajnica',
    audience: 'Vozači, lokalno stanovništvo, poslovni subjekti',
    recommendedFor: ['Retail', 'Brendiranje', 'Lokalni biznisi'],
    intervalSec: 20,
    images: ['hero', 'galerija-1', 'galerija-2'],
  },
  {
    id: 'beograd-lokacija-3',
    slug: 'beograd-lokacija-3',
    name: 'Vrnjačka Banja Ulaz',
    city: 'Vrnjačka Banja',
    shortDescription: 'Strateška tačka na glavnom pravcu sa izvanrednom vidljivošću.',
    description:
      'Strateška tačka na glavnom pravcu, sa izvanrednom vidljivošću tokom celog dana. Pogodna za korporativno brendiranje i oglase usmerene na širu javnost. Profesionalna instalacija i redovno održavanje.',
    longDescription: [
      'Vrnjačka Banja Ulaz predstavlja frekventnu lokaciju na kružnom toku, na glavnom skretanju sa puta Trstenik – Kraljevo ka Vrnjačkoj Banji. Ovaj LED bilbord nalazi se na strateškoj tački kroz koju prolazi svako ko dolazi u Vrnjačku Banju.',
      'Jasno vidljiv sa samog kružnog toka, bilbord privlači pažnju vozača i putnika i nemoguće ga je zaobići prilikom ulaska u grad, što ga čini idealnim za brendove koji žele snažnu i neizbežnu vidljivost.',
      'Zahvaljujući konstantnom protoku vozila tokom cele godine, naročito u turističkoj sezoni, lokacija obezbeđuje kontinuiranu izloženost i snažan vizuelni utisak.',
    ],
    lat: 43.6399167,
    lng: 20.9203889,
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
    addressArea: 'Kružni tok – ulaz u Vrnjačku Banju (pravac Trstenik – Kraljevo)',
    audience: 'Vozači i putnici koji dolaze u Vrnjačku Banju',
    recommendedFor: ['Brendiranje', 'Korporativne kampanje', 'Događaji'],
    intervalSec: 20,
    images: ['hero', 'galerija-1', 'galerija-2'],
  },
  {
    id: 'beograd-lokacija-4',
    slug: 'beograd-lokacija-4',
    name: 'Zlatibor Centar',
    city: 'Zlatibor',
    shortDescription: 'Važna saobraćajna pozicija sa konstantnom izloženošću.',
    description:
      'Važna saobraćajna pozicija sa konstantnom izloženošću tokom radnog i vikend prometa. Odličan izbor za dugoročne kampanje i lansiranje proizvoda. Pružamo fleksibilne pakete i podršku tokom celog perioda zakupa.',
    longDescription: [
      'Zlatibor Centar nalazi se u samom srcu Zlatibora, u zoni Kraljevog trga – glavne promenade i centralne tačke kretanja turista. Ova lokacija je jedna od najfrekventnijih u mestu, sa konstantnim protokom pešaka tokom celog dana.',
      'Bilbord je postavljen tako da ostvaruje maksimalnu vidljivost u centru, gde se prirodno zadržava najveći broj posetilaca. Idealna je za brendove koji žele prisustvo u najatraktivnijoj zoni Zlatibora i snažan vizuelni utisak.',
      'Zahvaljujući visokoj posećenosti tokom cele godine, a posebno u sezoni, lokacija obezbeđuje kontinuiranu izloženost i stabilan domet ka turistima i lokalnim posetiocima.',
    ],
    lat: 43.72636,
    lng: 19.69951,
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
    addressArea: 'Centar Zlatibora – Kraljev trg (promenada / trg)',
    audience: 'Turisti, pešaci i vozači u centru Zlatibora',
    recommendedFor: ['Brendiranje', 'Lansiranje proizvoda', 'Dugoročne kampanje'],
    intervalSec: 64,
    images: ['hero', 'galerija-1', 'galerija-2'],
  },
]

export function getLocationBySlug(slug: string): LocationItem | undefined {
  return locationsData.find((loc) => loc.slug === slug)
}
