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
  intervalSec?: number
  images: string[]
  h1?: string
  seoTitle?: string
  seoDescription?: string
  galleryAlt?: string
  googleMapsUrl?: string
  keyInformation?: Array<{ label: string; value: string }>
  technicalSpecifications?: Array<{
    label: string
    value: string
    details?: string[]
  }>
  idealFor?: string[]
}

export const locationsData: LocationItem[] = [
  {
    id: 'beograd-lokacija-1',
    slug: 'beograd-lokacija-1',
    name: 'Vračar Južni bulevar',
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
      'Preko 40.000 prikazivanja mesečno',
    ],
    addressArea: 'Vračar / Južni bulevar',
    audience: 'Vozači, pešaci, putnici javnog prevoza',
    tipLokacije: 'Bulevar visokog protoka',
    vidljivost: '8/10',
    recommendedFor: ['Brendiranje', 'Lansiranje proizvoda', 'Retail', 'Usluge'],
    intervalSec: 20,
    images: ['/juzni1.png', '/juzni2.jpg', '/juzni3.jpg', '/juzni4.jpg', '/juzni5.jpg'],
    h1: 'LED bilbord na Vračaru – Južni bulevar',
    seoTitle: 'LED bilbord Vračar – Južni bulevar | Beograd',
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
      'Preko 40.000 prikazivanja mesečno',
    ],
    addressArea: 'Kružni tok – ulaz u Vrnjačku Banju (pravac Trstenik – Kraljevo)',
    audience: 'Vozači i putnici koji dolaze u Vrnjačku Banju',
    recommendedFor: ['Brendiranje', 'Korporativne kampanje', 'Događaji'],
    intervalSec: 20,
    images: ['/vrnjci.png', 'galerija-1', 'galerija-2'],
  },
  {
    id: 'led-bilbord-autoput-beograd-konjarnik',
    slug: 'led-bilbord-autoput-beograd-konjarnik',
    name: 'Autoput kroz Beograd',
    city: 'Beograd',
    shortDescription:
      'LED bilbord nalazi se uz autoput kroz Beograd, u zoni Konjarnika, i vidljiv je vozačima koji se kreću u pravcu centra Beograda.',
    description:
      'Jednostrani LED bilbord u zoni Konjarnika, uz autoput kroz Beograd, vidljiv je vozačima koji se kreću u pravcu centra Beograda.',
    longDescription: [
      'LED bilbord nalazi se uz autoput kroz Beograd, u zoni Konjarnika, i vidljiv je vozačima koji se kreću u pravcu centra Beograda. Pozicioniran uz jedan od glavnih saobraćajnih pravaca kroz prestonicu, ovaj reklamni prostor omogućava brendovima da ostvare prisustvo pred učesnicima u svakodnevnom gradskom saobraćaju.',
      'Jednostrani LED ekran dimenzija 4,5 × 3 metra predstavlja prostor za dinamično digitalno oglašavanje, promociju proizvoda, usluga i brendova koji žele vidljivost na važnom autoputskom pravcu.',
    ],
    lat: 44.7817778,
    lng: 20.4919444,
    prednosti: [
      'Pozicija uz autoput kroz Beograd',
      'Vidljiv vozačima koji se kreću u pravcu centra Beograda',
      'Digitalni LED format',
      'Jednostrana reklamna površina',
      'Pogodna za kampanje brendova koji žele prisustvo na frekventnom gradskom pravcu',
    ],
    highlights: [
      'Konjarnik',
      'Autoput kroz Beograd',
      'Vidljivost u pravcu centra Beograda',
      'LED format',
    ],
    benefits: [
      'Pozicija uz autoput kroz Beograd',
      'Vidljiv vozačima koji se kreću u pravcu centra Beograda',
      'Digitalni LED format',
      'Jednostrana reklamna površina',
      'Pogodna za kampanje brendova koji žele prisustvo na frekventnom gradskom pravcu',
    ],
    addressArea: 'Konjarnik – autoput kroz Beograd (koridor E-75)',
    audience: 'Učesnici u svakodnevnom gradskom saobraćaju',
    tipLokacije: 'LED bilbord uz autoput',
    recommendedFor: [
      'Automobilska industrija',
      'Banke i finansijske institucije',
      'Telekomunikacione kompanije',
      'Trgovinski lanci',
      'Nacionalni i regionalni brendovi',
    ],
    images: [],
    h1: 'LED bilbord na Autoputu kroz Beograd',
    seoTitle: 'LED bilbord Autoput kroz Beograd | Konjarnik',
    seoDescription:
      'Zakup LED bilborda na autoputu kroz Beograd, u zoni Konjarnika, vidljivog vozačima u pravcu centra. Jednostrani LED ekran dimenzija 4,5 × 3 m.',
    galleryAlt: 'LED bilbord Autoput Beograd – Konjarnik',
    googleMapsUrl: 'https://www.google.com/maps?q=44.7817778,20.4919444',
    keyInformation: [
      ['Grad', 'Beograd'],
      ['Zona', 'Konjarnik'],
      ['Saobraćajni pravac', 'Autoput kroz Beograd, koridor E-75'],
      ['Tip lokacije', 'LED bilbord'],
      ['Reklamna površina', 'Jednostrana'],
      ['Vidljivost', 'Vozačima koji se kreću u pravcu centra Beograda'],
    ].map(([label, value]) => ({ label, value })),
    technicalSpecifications: [
      ['Fizičke dimenzije', '4,5 × 3 m'],
      ['Rezolucija', '800 × 600 px'],
      ['Tip reklamne površine', 'LED bilbord'],
      ['Reklamni slot / Loop', '8/64'],
    ].map(([label, value]) => ({
      label,
      value,
    })),
    idealFor: [
      'Automobilska industrija',
      'Banke i finansijske institucije',
      'Telekomunikacione kompanije',
      'Trgovinski lanci',
      'Nacionalni i regionalni brendovi',
      'Kompanije koje žele vidljivost u Beogradu',
    ],
  },
  {
    id: 'led-bilbord-ledine-surcinska',
    slug: 'led-bilbord-ledine-surcinska',
    name: 'Ledine – Surčinska',
    city: 'Beograd',
    shortDescription:
      'LED bilbord na Ledinama, u Surčinskoj ulici u Beogradu, u okruženju trgovinskih, poslovnih i ugostiteljskih sadržaja.',
    description:
      'Jednostrani LED bilbord na Ledinama, u Surčinskoj ulici, namenjen dinamičnom digitalnom oglašavanju u ovom delu Beograda.',
    longDescription: [
      'LED bilbord na Ledinama nalazi se u Surčinskoj ulici u Beogradu, u zoni sa razvijenim poslovnim, trgovinskim i ugostiteljskim sadržajima. U neposrednom okruženju nalaze se DIS supermarket, restoran „Kod Deda Stavre“, Hollywood Aqua Park, hoteli i brojne kompanije, što ovu lokaciju čini interesantnom za brendove koji žele da ostvare prisustvo u ovom delu grada.',
      'Jednostrani spoljni LED ekran P8, dimenzija 2,88 × 1,92 metra, omogućava prikazivanje dinamičnih reklamnih sadržaja u digitalnom formatu. Lokacija je pogodna za kompanije koje žele da promovišu svoje proizvode i usluge pred lokalnim stanovništvom, vozačima i publikom koja svakodnevno koristi ovaj deo Beograda.',
    ],
    lat: 44.8024167,
    lng: 20.3398611,
    prednosti: [
      'Pozicija u Surčinskoj ulici, na Ledinama',
      'Okruženje sa trgovinskim, poslovnim i ugostiteljskim sadržajima',
      'Blizina Novog Beograda i Surčina',
      'Spoljni LED ekran P8 tehnologije',
      'Mogućnost dinamičnog prikazivanja reklamnih kampanja',
    ],
    highlights: [
      'Ledine',
      'Surčinska ulica',
      'LED P8 format',
      'Blizina Novog Beograda i Surčina',
    ],
    benefits: [
      'Pozicija u Surčinskoj ulici, na Ledinama',
      'Okruženje sa trgovinskim, poslovnim i ugostiteljskim sadržajima',
      'Blizina Novog Beograda i Surčina',
      'Spoljni LED ekran P8 tehnologije',
      'Mogućnost dinamičnog prikazivanja reklamnih kampanja',
    ],
    addressArea: 'Ledine – Surčinska ulica',
    audience: 'Lokalno stanovništvo, vozači i publika koja svakodnevno koristi ovaj deo Beograda',
    tipLokacije: 'LED bilbord',
    recommendedFor: [
      'Trgovinski lanci i maloprodaja',
      'Hoteli i ugostiteljski objekti',
      'Kompanije iz oblasti nekretnina',
      'Automobilski brendovi',
      'Banke i finansijske institucije',
      'Telekomunikacione kompanije',
      'Lokalni i nacionalni brendovi',
    ],
    images: [],
    h1: 'LED bilbord na Ledinama – Surčinska ulica, Beograd',
    seoTitle: 'LED bilbord Ledine – Surčinska ulica, Beograd',
    seoDescription:
      'Zakup jednostranog P8 LED bilborda na Ledinama, u Surčinskoj ulici u Beogradu. Digitalni reklamni ekran dimenzija 2,88 × 1,92 m.',
    galleryAlt: 'LED bilbord Ledine – Surčinska ulica, Beograd',
    googleMapsUrl: 'https://www.google.com/maps?q=44.8024167,20.3398611',
    keyInformation: [
      ['Grad', 'Beograd'],
      ['Naselje', 'Ledine'],
      ['Ulica', 'Surčinska'],
      ['Tip lokacije', 'LED bilbord'],
      ['Reklamna površina', 'Jednostrana'],
      ['Pixel pitch', 'P8'],
    ].map(([label, value]) => ({ label, value })),
    technicalSpecifications: [
      ['Fizičke dimenzije', '3 × 2 m'],
      ['Rezolucija', '360 × 240 px'],
      ['Tip reklamne površine', 'LED bilbord'],
      ['Reklamni slot / Loop', '8/64'],
    ].map(([label, value]) => ({ label, value })),
    idealFor: [
      'Trgovinski lanci i maloprodaja',
      'Hoteli i ugostiteljski objekti',
      'Kompanije iz oblasti nekretnina',
      'Automobilski brendovi',
      'Banke i finansijske institucije',
      'Telekomunikacione kompanije',
      'Lokalni i nacionalni brendovi',
    ],
  },
  {
    id: 'led-bilbord-ledine-skretanje-za-aerodrom',
    slug: 'led-bilbord-ledine-skretanje-za-aerodrom',
    name: 'Ledine – Skretanje za aerodrom',
    city: 'Beograd',
    shortDescription:
      'Dvostrani LED bilbord na Ledinama, na pravcu ka Surčinu i Aerodromu Nikola Tesla.',
    description:
      'Dvostrani LED bilbord na Ledinama, na važnoj saobraćajnoj vezi sa Surčinom i u pravcu Aerodroma Nikola Tesla.',
    longDescription: [
      'Ova lokacija nalazi se na Ledinama, na važnom saobraćajnom pravcu koji povezuje ovaj deo Beograda sa Surčinom i predstavlja glavnu vezu ka Aerodromu Nikola Tesla. Položaj na skretanju za aerodrom čini je posebno interesantnom za oglašivače koji žele da ostvare vidljivost među vozačima i putnicima koji se kreću u pravcu aerodroma, kao i među stanovnicima i poslovnim korisnicima ovog dela grada.',
      'Dvostrani LED bilbord dimenzija 3 × 2 metra omogućava prikaz reklamnih sadržaja na obe strane digitalnog ekrana. Zahvaljujući poziciji na značajnom saobraćajnom pravcu, ova lokacija pruža brendovima priliku da budu prisutni u prostoru koji povezuje Ledine, Surčin i područje Aerodroma Nikola Tesla.',
    ],
    lat: 44.7986111,
    lng: 20.3211389,
    prednosti: [
      'Pozicija na skretanju za Aerodrom Nikola Tesla',
      'Glavna saobraćajna veza između Ledina i Surčina',
      'Dvostrana LED reklamna površina',
      'Digitalni prikaz dinamičnih reklamnih sadržaja',
      'Pogodna za brendove koji žele da dosegnu publiku koja putuje ka aerodromu i kroz područje Surčina',
    ],
    highlights: [
      'Ledine',
      'Skretanje za aerodrom',
      'Dvostrani LED format',
      'Pravac ka Surčinu i Aerodromu Nikola Tesla',
    ],
    benefits: [
      'Pozicija na skretanju za Aerodrom Nikola Tesla',
      'Glavna saobraćajna veza između Ledina i Surčina',
      'Dvostrana LED reklamna površina',
      'Digitalni prikaz dinamičnih reklamnih sadržaja',
      'Pogodna za brendove koji žele da dosegnu publiku koja putuje ka aerodromu i kroz područje Surčina',
    ],
    addressArea: 'Ledine – skretanje za aerodrom',
    audience: 'Vozači, putnici, stanovnici i poslovni korisnici Ledina, Surčina i područja aerodroma',
    tipLokacije: 'LED bilbord',
    recommendedFor: [
      'Avio-kompanije i turističke agencije',
      'Rent-a-car kompanije',
      'Hoteli i ugostiteljski objekti',
      'Automobilski brendovi',
      'Trgovinski lanci i maloprodaja',
      'Banke i finansijske institucije',
      'Telekomunikacione kompanije',
      'Nacionalni i međunarodni brendovi',
    ],
    images: [],
    h1: 'LED bilbord na Ledinama – Skretanje za aerodrom',
    seoTitle: 'LED bilbord Ledine – Skretanje za aerodrom Beograd',
    seoDescription:
      'Dvostrani LED bilbord na Ledinama, na pravcu ka Surčinu i Aerodromu Nikola Tesla. Digitalno oglašavanje na važnoj saobraćajnoj vezi Beograda.',
    galleryAlt: 'LED bilbord Ledine – Skretanje za aerodrom',
    googleMapsUrl: 'https://www.google.com/maps?q=44.7986111,20.3211389',
    keyInformation: [
      ['Grad', 'Beograd'],
      ['Naselje', 'Ledine'],
      ['Lokacija', 'Skretanje za aerodrom'],
      ['Tip lokacije', 'LED bilbord'],
      ['Konstrukcija', 'Dvostrana'],
    ].map(([label, value]) => ({ label, value })),
    technicalSpecifications: [
      ['Fizičke dimenzije', '3 × 2 m'],
      ['Rezolucija', '360 × 240 px'],
      ['Tip reklamne površine', 'LED bilbord'],
      ['Reklamni slot / Loop', '8/64'],
    ].map(([label, value]) => ({ label, value })),
    idealFor: [
      'Avio-kompanije i turističke agencije',
      'Rent-a-car kompanije',
      'Hoteli i ugostiteljski objekti',
      'Automobilski brendovi',
      'Trgovinski lanci i maloprodaja',
      'Banke i finansijske institucije',
      'Telekomunikacione kompanije',
      'Nacionalni i međunarodni brendovi',
    ],
  },
  {
    id: 'led-bilbord-lestane-kruzni-put',
    slug: 'led-bilbord-lestane-kruzni-put',
    name: 'Leštane – Kružni put',
    city: 'Beograd',
    shortDescription:
      'Dvostrani LED bilbord na Kružnom putu u Leštanima, na pravcima prema Vinči i Boleču.',
    description:
      'Dvostrani LED bilbord na Kružnom putu u Leštanima, namenjen digitalnom oglašavanju prema korisnicima pravaca ka Vinči i Boleču.',
    longDescription: [
      'LED bilbord nalazi se na Kružnom putu u Leštanima, na važnom saobraćajnom pravcu koji povezuje ovaj deo Beograda sa Vinčom i Bolečem. Ova pozicija predstavlja značajnu vezu između okolnih naselja i šire gradske putne mreže, zbog čega je posebno interesantna za brendove koji žele da ostvare prisustvo u istočnom delu Beograda.',
      'Dvostrani LED ekran dimenzija 4 × 3 metra omogućava prikaz reklamnih sadržaja sa obe strane, pružajući oglašivačima mogućnost da svoju kampanju predstave publici koja koristi ovaj saobraćajni koridor. Kružni put prolazi kroz područje sa stambenim, trgovinskim i poslovnim sadržajima, što lokaciju čini pogodnom za komunikaciju sa lokalnim stanovništvom, vozačima i korisnicima okolnih naselja.',
      'Zahvaljujući dvostranoj digitalnoj površini i poziciji na Kružnom putu, ovaj LED bilbord predstavlja izbor za kompanije koje žele da povećaju vidljivost svojih proizvoda i usluga u Leštanima, Vinči, Boleču i okolini.',
    ],
    lat: 44.7374722,
    lng: 20.5923889,
    prednosti: [
      'Pozicija na Kružnom putu u Leštanima',
      'Saobraćajna veza prema Vinči i Boleču',
      'Dvostrani LED ekran dimenzija 4 × 3 metra',
      'Vidljivost reklamnog sadržaja sa obe strane konstrukcije',
      'Pogodna lokacija za lokalne, regionalne i nacionalne reklamne kampanje',
    ],
    highlights: [
      'Leštane',
      'Kružni put',
      'Pravci prema Vinči i Boleču',
      'Dvostrani LED format',
    ],
    benefits: [
      'Pozicija na Kružnom putu u Leštanima',
      'Saobraćajna veza prema Vinči i Boleču',
      'Dvostrani LED ekran dimenzija 4 × 3 metra',
      'Vidljivost reklamnog sadržaja sa obe strane konstrukcije',
      'Pogodna lokacija za lokalne, regionalne i nacionalne reklamne kampanje',
    ],
    addressArea: 'Leštane – Kružni put',
    audience: 'Lokalno stanovništvo, vozači i korisnici pravaca prema Vinči, Boleču i okolnim naseljima',
    tipLokacije: 'LED bilbord',
    recommendedFor: [
      'Trgovinski lanci i maloprodaja',
      'Automobilski brendovi i auto-industrija',
      'Građevinske kompanije i investitori',
      'Banke i finansijske institucije',
      'Telekomunikacione kompanije',
      'Proizvođači i distributeri',
      'Lokalni i regionalni brendovi',
    ],
    images: [],
    h1: 'Dvostrani LED bilbord na Kružnom putu u Leštanima',
    seoTitle: 'LED bilbord Leštane – Kružni put, Vinča i Boleč',
    seoDescription:
      'Zakup dvostranog LED bilborda u Leštanima, na Kružnom putu koji povezuje pravce ka Vinči i Boleču. Digitalno oglašavanje na prometnoj lokaciji.',
    galleryAlt: 'LED bilbord Leštane – Kružni put',
    googleMapsUrl: 'https://www.google.com/maps?q=44.7374722,20.5923889',
    keyInformation: [
      ['Grad', 'Beograd'],
      ['Naselje', 'Leštane'],
      ['Saobraćajni pravac', 'Kružni put, pravci prema Vinči i Boleču'],
      ['Tip lokacije', 'LED bilbord'],
      ['Konstrukcija', 'Dvostrana'],
    ].map(([label, value]) => ({ label, value })),
    technicalSpecifications: [
      ['Fizičke dimenzije', '4 × 3 m'],
      ['Rezolucija', '480 × 360 px'],
      ['Tip reklamne površine', 'LED bilbord'],
      ['Reklamni slot / Loop', '8/64'],
    ].map(([label, value]) => ({ label, value })),
    idealFor: [
      'Trgovinski lanci i maloprodaja',
      'Automobilski brendovi i auto-industrija',
      'Građevinske kompanije i investitori',
      'Banke i finansijske institucije',
      'Telekomunikacione kompanije',
      'Proizvođači i distributeri',
      'Lokalni i regionalni brendovi',
    ],
  },
  {
    id: 'led-bilbord-bulevar-nikole-tesle',
    slug: 'led-bilbord-bulevar-nikole-tesle',
    name: 'Mega LED Bulevar Nikole Tesle',
    city: 'Beograd',
    shortDescription:
      'Mega LED ekran u blizini nekadašnjeg hotela Jugoslavija, vidljiv vozačima u pravcu Zemuna.',
    description:
      'Veliki fasadni LED ekran na Bulevaru Nikole Tesle, uz raskrsnicu sa Aleksinačkih Rudara, namenjen upečatljivom digitalnom oglašavanju u pravcu Zemuna.',
    longDescription: [
      'Na Bulevaru Nikole Tesle, u neposrednoj blizini nekadašnjeg hotela Jugoslavija, nalazi se Mega LED ekran postavljen preko fasade zgrade. Ovaj veliki fasadni LED ekran pozicioniran je uz raskrsnicu sa ulicom Aleksinačkih Rudara i vidljiv je vozačima koji se kreću u pravcu Zemuna.',
      'Posebna prednost ove lokacije je blizina semaforizovane raskrsnice na kojoj se vozila često zadržavaju tokom čekanja na zeleno svetlo. To pruža dodatnu priliku da reklamni sadržaj bude primećen tokom svakodnevnog kretanja kroz ovaj deo grada.',
      'Sa dimenzijama od 5 × 12 metara, ovaj veliki jednostrani LED bilbord omogućava prikaz vizuelno upečatljivih kampanja na jednoj od prepoznatljivih gradskih saobraćajnica. Blizina Dunavskog keja i urbanih sadržaja dodatno povezuje lokaciju sa svakodnevnim kretanjem kroz ovaj deo Beograda.',
    ],
    lat: 44.8283611,
    lng: 20.4193889,
    prednosti: [
      'Pozicija na Bulevaru Nikole Tesle',
      'Vidljivost vozačima koji se kreću u pravcu Zemuna',
      'Neposredna blizina raskrsnice sa Aleksinačkih Rudara',
      'Veliki vertikalni LED ekran dimenzija 5 × 12 m',
      'Pogodna lokacija za nacionalne, regionalne i lokalne kampanje',
    ],
    highlights: [
      'Bulevar Nikole Tesle',
      'Blizina nekadašnjeg hotela Jugoslavija',
      'Pravac ka Zemunu',
      'Veliki vertikalni LED format',
    ],
    benefits: [
      'Pozicija na Bulevaru Nikole Tesle',
      'Vidljivost vozačima koji se kreću u pravcu Zemuna',
      'Neposredna blizina raskrsnice sa Aleksinačkih Rudara',
      'Veliki vertikalni LED ekran dimenzija 5 × 12 m',
      'Pogodna lokacija za nacionalne, regionalne i lokalne kampanje',
    ],
    addressArea: 'Bulevar Nikole Tesle – blizina nekadašnjeg hotela Jugoslavija',
    audience: 'Vozači i korisnici Bulevara Nikole Tesle u pravcu Zemuna',
    tipLokacije: 'LED bilbord',
    recommendedFor: [
      'Nacionalni i međunarodni brendovi',
      'Automobilska industrija',
      'Banke i finansijske institucije',
      'Telekomunikacione kompanije',
      'Tehnološke kompanije',
      'Trgovinski lanci',
      'Nekretnine i investicije',
      'Lifestyle i premium brendovi',
    ],
    images: [],
    h1: 'Mega LED na Bulevaru Nikole Tesle',
    seoTitle: 'Mega LED bilbord Bulevar Nikole Tesle | LED bilbord Beograd',
    seoDescription:
      'Zakup velikog vertikalnog LED bilborda dimenzija 5 × 12 m na Bulevaru Nikole Tesle, kod nekadašnjeg hotela Jugoslavija, sa vidljivošću za vozače ka Zemunu.',
    galleryAlt: 'LED bilbord Bulevar Nikole Tesle kod nekadašnjeg hotela Jugoslavija',
    googleMapsUrl: 'https://www.google.com/maps?q=44.8283611,20.4193889',
    keyInformation: [
      ['Grad', 'Beograd'],
      ['Lokacija', 'Bulevar Nikole Tesle, blizina nekadašnjeg hotela Jugoslavija'],
      ['Raskrsnica', 'Aleksinačkih Rudara'],
      ['Tip lokacije', 'LED bilbord'],
      ['Konstrukcija', 'Jednostrana'],
      ['Pravac vidljivosti', 'Vozačima u pravcu Zemuna'],
    ].map(([label, value]) => ({ label, value })),
    technicalSpecifications: [
      ['Fizičke dimenzije', '5 × 12 m'],
      ['Rezolucija', ''],
      ['Tip reklamne površine', 'LED bilbord'],
      ['Reklamni slot / Loop', '8/64'],
    ].map(([label, value]) => ({ label, value })),
    idealFor: [
      'Nacionalni i međunarodni brendovi',
      'Automobilska industrija',
      'Banke i finansijske institucije',
      'Telekomunikacione kompanije',
      'Tehnološke kompanije',
      'Trgovinski lanci',
      'Nekretnine i investicije',
      'Lifestyle i premium brendovi',
    ],
  },
  {
    id: 'mega-led-bilbordi-tosin-bunar-zemunska',
    slug: 'mega-led-bilbordi-tosin-bunar-zemunska',
    name: 'Mega LED Tošin bunar',
    city: 'Beograd',
    shortDescription:
      'Fasadni Mega LED bilbord sastavljen od dva uspravna reklamna polja dimenzija 4 × 11 m, sa ukupno 88 m² reklamne površine.',
    description:
      'Mega LED bilbord sastavljen od dva zasebna fasadna reklamna polja na važnom saobraćajnom pravcu Novog Beograda, u zoni Tošinog bunara.',
    longDescription: [
      'Na važnom saobraćajnom pravcu Novog Beograda, u zoni Tošinog bunara, nalazi se Mega LED bilbord sastavljen od dva zasebna fasadna reklamna polja montirana jedan pored drugog. Svako polje ima dimenzije 4 × 11 metara, dok zajedno pružaju ukupno 88 m² reklamne površine i jednu veliku vizuelnu kompoziciju.',
      'Lokacija se nalazi u zoni Tošinog bunara, u blizini većeg broja poslovnih centara i poslovnih objekata. Prometna benzinska stanica neposredno ispred lokacije dodatno je čini relevantnom za brendove koji žele da svoje poruke postave u svakodnevni urbani i poslovni kontekst Novog Beograda.',
      'Blizina važne raskrsnice na kojoj se vozila često zadržavaju u kolonama tokom jutarnjih i večernjih časova pruža dodatnu priliku da reklamne poruke budu primećene. Lokacija je zanimljiva i u kontekstu razvoja nove putne infrastrukture i povezivanja sa pravcem ka EXPO 2027, bez oslanjanja na neproverene podatke o saobraćaju ili gledanosti.',
    ],
    lat: 44.8134167,
    lng: 20.3895278,
    prednosti: [
      'Mega LED bilbord sastavljen od dva zasebna reklamna polja',
      'Ukupno 88 m² reklamne površine',
      'Pozicija u zoni Tošinog bunara',
      'Blizina poslovnih centara i poslovnih objekata',
      'Neposredna blizina prometne benzinske stanice i važne raskrsnice',
    ],
    highlights: [
      'Tošin bunar',
      'Dva zasebna reklamna polja',
      'Ukupno 88 m² reklamne površine',
      'Novi Beograd',
    ],
    benefits: [
      'Mega LED bilbord sastavljen od dva zasebna reklamna polja',
      'Ukupno 88 m² reklamne površine',
      'Pozicija u zoni Tošinog bunara',
      'Blizina poslovnih centara i poslovnih objekata',
      'Neposredna blizina prometne benzinske stanice i važne raskrsnice',
    ],
    addressArea: 'Tošin bunar',
    audience: 'Vozači, poslovna publika i korisnici saobraćajnih pravaca Novog Beograda',
    tipLokacije: 'Mega LED bilbord',
    recommendedFor: [
      'Nacionalni i međunarodni brendovi',
      'Automobilska industrija',
      'Banke i finansijske institucije',
      'Telekomunikacione kompanije',
      'Tehnološke kompanije',
      'Trgovinski lanci',
      'Nekretnine i investicije',
      'Lifestyle i premium brendovi',
    ],
    images: [],
    h1: 'Mega LED bilbord Tošin bunar',
    seoTitle: 'Mega LED Tošin bunar | LED bilbord Beograd',
    seoDescription:
      'Zakup Mega LED bilborda na Tošinom bunaru. Dva zasebna fasadna reklamna polja pružaju ukupno 88 m² reklamne površine na prometnoj lokaciji Novog Beograda.',
    galleryAlt: 'Mega LED Tošin bunar',
    googleMapsUrl: 'https://www.google.com/maps?q=44.8134167,20.3895278',
    keyInformation: [
      ['Grad', 'Beograd'],
      ['Zona', 'Tošin bunar'],
      ['Tip lokacije', 'Mega LED bilbord'],
      ['Konstrukcija', 'Dva zasebna uspravna bilborda'],
      ['Dimenzije jednog bilborda', '4 × 11 m'],
    ].map(([label, value]) => ({ label, value })),
    technicalSpecifications: [
      ['Fizičke dimenzije', '2 × (4 × 11 m)'],
      ['Rezolucija', ''],
      ['Tip reklamne površine', 'Dva fasadna LED bilborda'],
      ['Reklamni slot / Loop', '8/64'],
    ].map(([label, value]) => ({ label, value })),
    idealFor: [
      'Nacionalni i međunarodni brendovi',
      'Automobilska industrija',
      'Banke i finansijske institucije',
      'Telekomunikacione kompanije',
      'Tehnološke kompanije',
      'Trgovinski lanci',
      'Nekretnine i investicije',
      'Lifestyle i premium brendovi',
    ],
  },
]

export function getLocationBySlug(slug: string): LocationItem | undefined {
  return locationsData.find((loc) => loc.slug === slug)
}
