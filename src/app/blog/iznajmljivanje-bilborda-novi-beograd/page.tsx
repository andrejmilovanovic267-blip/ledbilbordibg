import { BlogPostLayout } from '@/components/blog/BlogPostLayout'

export const metadata = {
  title: 'Iznajmljivanje LED bilborda Novi Beograd | LED Bilbordi',
  description:
    'LED oglašavanje u Novom Beogradu. Saznajte prednosti, vidljivost i okvirne cene zakupa LED bilborda.',
}

const post = {
  title: 'Iznajmljivanje LED bilborda Novi Beograd',
  introText:
    'Novi Beograd je jedna od najprometnijih i najatraktivnijih oglašivačkih zona u Beogradu. LED bilbordi ovde pružaju savremenu, visoko vidljivu promociju vašeg brenda. Saznajte prednosti, okvirne cene i kako započeti kampanju.',
  sections: [
    {
      title: 'Zašto je Novi Beograd idealan za LED oglašavanje?',
      variant: 'muted' as const,
      paragraphs: [
        'Oglašavanje na LED bilbordima u Novom Beogradu donosi brojne prednosti.',
        'Ova zona karakteristična je po:',
      ],
      bullets: [
        'Velikom protoku saobraćaja',
        'Poslovnim i komercijalnim centrima',
        'Modernoj urbanoj strukturi',
        'Visokoj frekvenciji vizuelnih kontakata',
      ],
      paragraphsAfter: [
        'LED reklama u ovoj opštini pruža snažan efekat prisutnosti brenda.',
      ],
    },
    {
      title: 'Ko može imati najviše koristi?',
      variant: 'white' as const,
      paragraphs: [
        'LED bilbordi u Novom Beogradu posebno su efikasni za:',
      ],
      bullets: [
        'Kompanije i korporativne brendove',
        'Restorane i kafiće',
        'Auto-industriju',
        'IT i tech sektor',
        'Retail i trgovinu',
      ],
      paragraphsAfter: [
        'Zahvaljujući velikom broju zaposlenih i svakodnevnim migracijama, publika je široka i raznovrsna.',
      ],
    },
    {
      title: 'Vidljivost koja pravi razliku',
      variant: 'muted' as const,
      paragraphs: [
        'LED ekrani omogućavaju dinamičan prikaz reklame sa visokim kontrastom i osvetljenjem.',
        'Za razliku od statičnih bilborda, digitalni sadržaj privlači više pažnje i ostavlja jači utisak.',
        'Emitovanje 24/7 osigurava konstantnu izloženost poruke.',
      ],
    },
    {
      title: 'Koliko traje zakup?',
      variant: 'white' as const,
      paragraphs: [
        'Minimalni zakup najčešće iznosi 30 dana.',
        'Duže kampanje omogućavaju:',
      ],
      bullets: [
        'Stabilniju frekvenciju prikaza',
        'Jaču prepoznatljivost',
        'Bolju isplativost budžeta',
      ],
    },
    {
      title: 'Koliki budžet je potreban?',
      variant: 'muted' as const,
      paragraphs: [
        'Cena iznajmljivanja LED bilborda u Novom Beogradu zavisi od lokacije i paketa.',
        'Kod nas kampanje možete započeti već od:',
      ],
      bullets: [
        'Osnovni paket – 199€ mesečno',
        'Standard paket – 249€',
        'Prošireni paket – 399€ mesečno',
      ],
      paragraphsAfter: [
        'Bez skrivenih troškova i sa transparentnim uslovima saradnje.',
      ],
    },
    {
      title: 'Novi Beograd: zona visoke vidljivosti',
      variant: 'white' as const,
      paragraphs: [
        'Novi Beograd je jedna od najjačih oglašivačkih zona u gradu.',
        'Ako želite visoku vidljivost, moderan nastup i snažan vizuelni efekat, LED bilbord u ovoj opštini je odličan izbor.',
      ],
    },
  ],
}

export default function IznajmljivanjeBilbordaNoviBeograd() {
  return <BlogPostLayout {...post} />
}
