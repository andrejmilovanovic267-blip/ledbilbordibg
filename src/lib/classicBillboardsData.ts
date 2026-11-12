export interface ClassicBillboardLocation {
  slug: string
  name: string
  title: string
  metaDescription: string
  introduction: string
  description: string
  cardDescription: string
  cardBenefits: string[]
  lat: number
  lng: number
  dimensions: string
  advertisingSurfaceArea: string
  surfaceType: string
  sides: 'single' | 'double'
  illuminated: boolean
  position: string
  idealFor: string[]
}

const TRAFFIC_CONTEXT =
  'U zoni Velike Plane može se uzeti u obzir približno 29.000 vozila dnevno na okolnim deonicama autoputa E-75. Ovaj podatak predstavlja približan dnevni promet okolnih deonica, a ne zbir susednih deonica.'

export const classicBillboards: ClassicBillboardLocation[] = [
  {
    slug: 'autoput-e75-velika-plana-1',
    name: 'Autoput E-75 Velika Plana 1',
    title: 'Osvetljeni dvostrani bilbord 8 × 5 m na E-75 – Velika Plana 1',
    metaDescription:
      'Zakup osvetljenog dvostranog bilborda 8 × 5 m uz autoput E-75 kod Velike Plane. Bilbord Velika Plana 1 za vidljivu kampanju.',
    introduction:
      'Osvetljeni dvostrani statični bilbord Velika Plana 1 nalazi se uz autoput E-75, na desnoj strani kada se putuje u smeru Niša. Format 8 × 5 m pruža 40 m² reklamne površine po jednoj strani i omogućava da se kampanja planira za važan drumski pravac kroz Srbiju.',
    description:
      `Autoput E-75 je jedan od najvažnijih drumskih pravaca u Srbiji i deo međunarodnog tranzitnog koridora u ovom delu Evrope. Ova pozicija odgovara oglašivačima koji žele statični bilbord sa dve reklamne strane i osvetljenjem, posebno kada je važna čitljivost poruke u različitim uslovima. ${TRAFFIC_CONTEXT}`,
    cardDescription:
      'Statični bilbord na jednom od najprometnijih drumskih pravaca u Srbiji. Pozicioniran sa desne strane autoputa u smeru ka Nišu, pruža mogućnost oglašavanja velikog formata na važnom međunarodnom tranzitnom koridoru.',
    cardBenefits: [
      'Dvostrana reklamna površina',
      'Format 8 × 5 m',
      'Osvetljena reklamna površina',
      'Desna strana autoputa u smeru ka Nišu',
      'Pogodno za dugoročne reklamne kampanje',
    ],
    lat: 44.3940556,
    lng: 21.0625,
    dimensions: '8 × 5 m',
    advertisingSurfaceArea: '40 m² po jednoj strani',
    surfaceType: 'Statični bilbord velikog formata',
    sides: 'double',
    illuminated: true,
    position: 'Desna strana pri putovanju u smeru Niša',
    idealFor: ['Brendovi', 'Maloprodaja', 'Automobilska industrija', 'Lokalni biznisi'],
  },
  {
    slug: 'autoput-e75-velika-plana-2',
    name: 'Autoput E-75 Velika Plana 2',
    title: 'Osvetljeni dvostrani bilbord 8 × 5 m uz E-75 – Velika Plana 2',
    metaDescription:
      'Iznajmljivanje osvetljenog dvostranog bilborda 8 × 5 m na autoputu E-75 kod Velike Plane. Pogledajte uslove za Veliku Planu 2.',
    introduction:
      'Bilbord Velika Plana 2 je osvetljena statična reklamna površina dimenzija 8 × 5 m, sa dve strane za oglašavanje. Postavljen je na levoj strani kada se putuje autoputem E-75 u smeru Niša, a svaka reklamna strana ima površinu od 40 m².',
    description:
      `Pozicija na autoputu E-75 povezuje kampanju sa jednim od ključnih pravaca za domaći i međunarodni drumski tranzit. Dvostrana konstrukcija omogućava korišćenje obe reklamne strane, dok osvetljenje podržava jasno predstavljanje statične poruke. ${TRAFFIC_CONTEXT}`,
    cardDescription:
      'Statični bilbord na autoputu E-75, postavljen sa leve strane u smeru ka Nišu. Dvostrana reklamna površina omogućava prisustvo brenda u oba smera kretanja i pruža odličnu priliku za vidljivo oglašavanje na važnom tranzitnom pravcu.',
    cardBenefits: [
      'Dvostrana reklamna površina',
      'Format 8 × 5 m',
      'Osvetljena reklamna površina',
      'Leva strana autoputa u smeru ka Nišu',
      'Pogodno za dugoročne reklamne kampanje',
    ],
    lat: 44.3701667,
    lng: 21.0695833,
    dimensions: '8 × 5 m',
    advertisingSurfaceArea: '40 m² po jednoj strani',
    surfaceType: 'Statični bilbord velikog formata',
    sides: 'double',
    illuminated: true,
    position: 'Leva strana pri putovanju u smeru Niša',
    idealFor: ['Brendiranje', 'Maloprodaja', 'Ugostiteljstvo', 'Usluge'],
  },
  {
    slug: 'autoput-e75-velika-plana-3',
    name: 'Autoput E-75 Velika Plana 3 – Megaboard',
    title: 'Statični megaboard 13,1 × 4,5 m na E-75 – Velika Plana 3',
    metaDescription:
      'Zakup statičnog dvostranog megaboarda 13,1 × 4,5 m uz E-75 kod Velike Plane. Megaboard Velika Plana 3 ima oko 59 m² po strani.',
    introduction:
      'Velika Plana 3 je dvostrani statični megaboard uz autoput E-75, dimenzija 13,1 × 4,5 m. Sa približno 59 m² reklamne površine po jednoj strani, ova pozicija je namenjena kampanjama kojima je potreban veći format za jednostavnu i čitljivu poruku.',
    description:
      'Megaboard se nalazi na desnoj strani kada se putuje u smeru Niša. Nije osvetljen, pa kreativno rešenje treba planirati tako da ostane jasno u prirodnom dnevnom svetlu. E-75 predstavlja važan domaći i međunarodni tranzitni pravac, a približan promet na okolnim deonicama u zoni Velike Plane iznosi oko 29.000 vozila dnevno.',
    cardDescription:
      'Megaboard velikog formata na autoputu E-75 kod Velike Plane. Sa dimenzijama većim od standardnog bilborda i dvostranom reklamnom površinom, predstavlja upečatljiv format za brendove koji žele snažno vizuelno prisustvo na važnom međunarodnom tranzitnom pravcu.',
    cardBenefits: [
      'Dvostrana reklamna površina',
      'Megaboard formata 13,1 × 4,5 m',
      'Površina od 58,95 m² po strani',
      'Neosvetljena reklamna površina',
      'Desna strana autoputa u smeru ka Nišu',
    ],
    lat: 44.3700278,
    lng: 21.0687222,
    dimensions: '13,1 × 4,5 m',
    advertisingSurfaceArea: 'Približno 59 m² po jednoj strani',
    surfaceType: 'Statični megaboard velikog formata',
    sides: 'double',
    illuminated: false,
    position: 'Desna strana pri putovanju u smeru Niša',
    idealFor: ['Veliki brendovi', 'Automobilska industrija', 'Maloprodajni lanci', 'Nacionalne kampanje'],
  },
  {
    slug: 'autoput-e75-velika-plana-4',
    name: 'Autoput E-75 Velika Plana 4',
    title: 'Osvetljeni jednostrani bilbord 6 × 4 m uz E-75 – Velika Plana 4',
    metaDescription:
      'Iznajmljivanje osvetljenog jednostranog bilborda 6 × 4 m kod Velike Plane, uz autoput E-75. Reklamna površina iznosi 24 m².',
    introduction:
      'Osvetljeni jednostrani bilbord Velika Plana 4 ima format 6 × 4 m i reklamnu površinu od 24 m². Nalazi se na desnoj strani kada se putuje autoputem E-75 u smeru Niša i odgovara kampanjama koje žele jednu jasno usmerenu reklamnu poruku.',
    description:
      `Ova statična reklamna površina koristi jednu osvetljenu stranu, što omogućava fokusiran prikaz brenda, proizvoda ili usluge. Kao deo zone uz autoput E-75, bilbord je pozicioniran na važnom drumskom pravcu Srbije i međunarodnom tranzitnom koridoru. ${TRAFFIC_CONTEXT}`,
    cardDescription:
      'Statični bilbord na autoputu E-75 kod Velike Plane, pozicioniran sa desne strane u smeru ka Nišu. Kompaktniji format sa osvetljenom reklamnom površinom omogućava jasno i kontinuirano predstavljanje brenda učesnicima u saobraćaju.',
    cardBenefits: [
      'Jednostrana reklamna površina',
      'Format 6 × 4 m',
      'Osvetljena reklamna površina',
      'Površina od 24 m²',
      'Desna strana autoputa u smeru ka Nišu',
    ],
    lat: 44.43175,
    lng: 21.0528889,
    dimensions: '6 × 4 m',
    advertisingSurfaceArea: '24 m²',
    surfaceType: 'Osvetljeni statični bilbord',
    sides: 'single',
    illuminated: true,
    position: 'Desna strana pri putovanju u smeru Niša',
    idealFor: ['Lokalni biznisi', 'Ugostiteljstvo', 'Usluge', 'Promocije i akcije'],
  },
]

export function getClassicBillboardBySlug(
  slug: string
): ClassicBillboardLocation | undefined {
  return classicBillboards.find((billboard) => billboard.slug === slug)
}
