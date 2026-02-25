import { BlogPostLayout } from '@/components/blog/BlogPostLayout'

export const metadata = {
  title: 'Cena LED bilborda u Beogradu | LED Bilbordi',
  description:
    'Saznajte od čega zavisi cena LED bilborda u Beogradu i kako se formira budžet kampanje. Kampanje već od 199€ mesečno.',
}

const post = {
  title: 'Cena LED bilborda u Beogradu: od čega zavisi i kako se računa',
  introText:
    'Cena LED bilborda u Beogradu zavisi od lokacije, trajanja zakupa i paketa. LED bilbordi predstavljaju jedan od najefikasnijih vidova spoljnog oglašavanja, zahvaljujući snazi tradicionalnog marketinga i fleksibilnosti digitalnog prikaza. Kada znate šta utiče na cenu, lakše planirate budžet i birate paket koji odgovara vašim potrebama.',
  sections: [
    {
      title: 'Ključni faktori koji utiču na cenu',
      variant: 'muted' as const,
      paragraphs: [
        'Cena LED bilborda u Beogradu najčešće se formira na osnovu sledećih elemenata:',
      ],
      subsections: [
        {
          title: 'Lokacija bilborda',
          content:
            'Prometnije zone i glavne saobraćajnice imaju veću cenu zbog veće vidljivosti.',
        },
        {
          title: 'Trajanje kampanje',
          content:
            'Duži period zakupa obično donosi povoljniju mesečnu cenu.',
        },
        {
          title: 'Frekvencija emitovanja',
          content:
            'Kraći interval između prikaza reklame znači veću izloženost.',
        },
        {
          title: 'Paket usluge',
          content:
            'Različiti paketi uključuju različite nivoe vidljivosti, trajanja i dodatnih pogodnosti.',
        },
      ],
    },
    {
      title: 'Kako izgleda obračun cene',
      variant: 'white' as const,
      paragraphs: [
        'U praksi, cena LED oglašavanja se definiše kombinacijom gore navedenih faktora.',
        'Na primer, lokalni biznis koji želi prisustvo na jednoj atraktivnoj lokaciji može odabrati osnovni paket sa nižom mesečnom investicijom.',
        'Sa druge strane, kompanije koje žele maksimalnu dominaciju u određenoj zoni često biraju premium opcije sa većim brojem prikaza i jačom frekvencijom.',
        'Ovakav model omogućava fleksibilnost i prilagođavanje gotovo svakom budžetu.',
      ],
    },
    {
      title: 'Koliki budžet je potreban?',
      variant: 'muted' as const,
      paragraphs: [
        'Cena LED bilborda u Beogradu može značajno varirati, ali okvirno se najčešće kreće u rasponu od nekoliko stotina evra mesečno, u zavisnosti od paketa i lokacije.',
        'Kod nas, kampanje možete započeti već od:',
      ],
      bullets: [
        'Basic paket – 199€ mesečno',
        'Standard paket – 249€ mesečno',
        'Premium paket – 399€ mesečno',
      ],
      paragraphsAfter: [
        'Bez skrivenih troškova i sa jasnim uslovima saradnje.',
      ],
    },
    {
      title: 'Transparentnost i planiranje budžeta',
      variant: 'white' as const,
      paragraphs: [
        'Transparentnost cena i fleksibilni paketi omogućavaju vam da unapred planirate budžet i izbegnete neprijatna iznenađenja.',
        'Ako razmišljate o LED oglašavanju u Beogradu, pravi trenutak za planiranje kampanje je upravo sada.',
      ],
    },
  ],
}

export default function BlogPostCena() {
  return <BlogPostLayout {...post} />
}
