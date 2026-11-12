# KONTEKST PROJEKTA I RADNA UPUTSTVA ZA CODEX / CHATGPT

Ovaj dokument prenosi sažeti kontekst iz prethodnog razgovora. Koristi ga kao početni kontekst za rad na postojećem sajtu. Ovo nije dozvola za veliki refaktor: prvo pregledaj trenutno stanje koda i radi male, kontrolisane izmene.

## 1. Način rada

- Korisnik nije programer i želi jasna, praktična objašnjenja bez nepotrebnog žargona.
- Pre izmena pregledaj relevantne fajlove i strukturu projekta. Nemoj pretpostavljati da je kod ostao isti kao u ranijem razgovoru.
- Sačuvaj postojeći dizajn, komponente, SEO podešavanja, URL-ove i ponašanje sajta osim ako je izričito tražena promena.
- Ne diraj nepovezane delove sajta i ne radi veliki refaktor bez jasne potrebe.
- Ponovo koristi postojeće komponente i obrasce kad god je moguće.
- Ne izmišljaj činjenice: dimenzije, cene, koordinate, udaljenosti, promet, broj prikaza, karakteristike reklama ili fotografije.
- Ako podatak nedostaje, potraži ga u postojećem kodu ili pouzdanom izvoru. Ako nije potvrđen, nemoj ga objavljivati; pitaj korisnika ili prijavi šta treba potvrditi.
- Posle izmena pokreni `npm run build`, ako je dostupan. Ako ne uspe, navedi stvarnu grešku i nemoj tvrditi da je build uspešan.
- Proveri mobilni, tablet i desktop prikaz kad god je moguće.
- Na kraju ukratko navedi izmenjene fajlove, URL-ove, rezultat build-a i šta još treba potvrditi.

## 2. Tehnološki i projektni kontekst

- Projekat je ranije bio Next.js/React, ali potvrdi tehnologiju pregledom trenutnog repozitorijuma.
- Stranica pregleda lokacija ranije je koristila nazive poput `LokacijePage`, `locationsData`, `LocationSection` i `MapSection`. Ovo su tragovi, ne garancija da struktura i dalje postoji.
- Stranica „Južni bulevar” bila je šablon za pojedinačne stranice lokacija. Pronađi trenutnu verziju i koristi je kao referencu za dizajn, komponente, CTA i SEO.
- SEO je važan. Čuvaj postojeće metapodatke, canonical URL-ove, robots pravila, sitemap i interne linkove. Ne menjaj postojeće URL-ove bez izričitog odobrenja.
- Partner logotipi na početnoj strani ranije su bili u `PartnerMarquee.tsx`, a ne `PartnerLogosMarquee.tsx`. Proveri stvarni kod pre izmene.
- Ranije dodati nazivi fajlova logotipa uključivali su `trium.png`, `oohdigital.png`, `grandslot.png`, `savanova.png`, `diplomat.png` i `bw.png`. Proveri da li fajlovi i konfiguracija i dalje postoje.

## 3. Pregled lokacija i ranije traženi redosled

Ranije je tražen sledeći raspored na stranici pregleda lokacija:
1. Kartica „Vrnjačka Banja” treba da vodi na postojeću stranicu, ne na duplikat.
2. Odmah ispod „Vrnjačke Banje” treba da budu, ovim redom:
   - Autoput E-75 Velika Plana 1
   - Autoput E-75 Velika Plana 2
   - Autoput E-75 Velika Plana 3
   - Autoput E-75 Velika Plana 4
3. Odmah ispod te četiri kartice treba da ide:
   - Magistrala Požega - Užice (Uzići)

Ovo je redosled tražen u prethodnom razgovoru. Uporedi ga sa trenutnim kodom i nemoj menjati druge kartice bez potrebe. U ranijoj prepisci se pominjao i „Južni bulevar”; proveri postojeći redosled pre izmene umesto da nagađaš.

## 4. Četiri planirane stranice za bilborde na E-75

Potrebne su četiri zasebne stranice:
- Autoput E-75 Velika Plana 1
- Autoput E-75 Velika Plana 2
- Autoput E-75 Velika Plana 3
- Autoput E-75 Velika Plana 4

Svaka treba da prati postojeću stranicu „Južni bulevar” kao dizajnerski i tehnički šablon, ali sa jedinstvenim i tačnim sadržajem.

### Poznate činjenice koje je korisnik dostavio

- To su klasični veliki bilbordi, nisu LED ekrani.
- Tri bilborda su dvostrana, a jedan je jednostran.
- Jedan od dvostranih bilborda nije osvetljen.
- Ostali bilbordi su osvetljeni.
- Korisnik želi da se istakne velika vidljivost, ali bez neutemeljenih brojčanih tvrdnji.

### Podatak koji još nije utvrđen

Nije poznato koji broj bilborda (1–4) je jednostran niti koji dvostrani bilbord nije osvetljen. Nemoj nasumično dodeliti karakteristike stranicama. Proveri postojeće podatke, fotografije ili konfiguraciju. Ako se ne može pouzdano zaključiti, pitaj korisnika pre objavljivanja ili jasno ostavi podatak nepotvrđen.

### Sadržaj stranica

U skladu sa postojećim dizajnom:
- jedinstven naslov i uvodni opis;
- fotografije samo ako zaista prikazuju tu lokaciju;
- blok sa potvrđenim karakteristikama: klasični bilbord, broj strana i osvetljenje samo ako su poznati;
- opis položaja i konteksta puta samo kada je potvrđen;
- prednosti oglašavanja bez izmišljenih statistika;
- jasan CTA za upit/zakup koji koristi postojeći kontakt obrazac ili postojeći način kontakta.

Ako nema odgovarajućih fotografija, nemoj prikazivati fotografije Južnog bulevara kao da su sa Velike Plane. Koristi postojeći neutralni placeholder ako postoji ili zatraži fotografije.

Ne dodaj karakteristike LED ekrana, kao što su rezolucija, interval rotacije, broj sekundi po oglasu, broj mesečnih prikaza ili tvrdnja o radu 24/7. Takve informacije nisu potvrđene i ne odgovaraju klasičnim bilbordima.

## 5. Dnevni saobraćaj na E-75

Zvanični izvor pronađen u prethodnom razgovoru:
- Putevi Srbije — „Brojanje saobraćaja”: https://putevi-srbije.rs/index.php/sr/brojanje-saobra%C4%87aja
- Izvor objavljuje PGDS (prosečni godišnji dnevni saobraćaj) prema deonicama i godinama, uključujući državne puteve IA reda/autoputeve.

U prethodnoj proveri nije potvrđen tačan broj za odgovarajuću deonicu E-75 kod Velike Plane. Zato:
- nemoj izmišljati broj vozila;
- pronađi zvaničnu deonicu/brojačko mesto najbliže bilbordima;
- proveri godinu, smerove i kategorije vozila, kao i da li broj pokriva oba smera ili jedan;
- ako deonica nije pouzdano utvrđena, nemoj prikazivati broj na sajtu;
- ako se broj koristi, navedi godinu i objasni da je to PGDS za deonicu, a ne broj ljudi koji su videli oglas ili broj reklamnih impresija;
- zabeleži izvor da bi tvrdnja mogla da se proveri.

## 6. SEO i URL smernice

- Pregledaj postojeću strukturu ruta pre nego što praviš stranice.
- Napravi četiri jedinstvene stranice koristeći konvenciju koja već postoji u projektu.
- Ne menjaj URL-ove postojećih ili nepovezanih stranica.
- Svaka stranica treba da ima jedinstven SEO title i meta description, jedan smislen H1, pravilnu hijerarhiju naslova i prirodno korišćene izraze za lokaciju.
- Proveri canonical, robots, sitemap i interne linkove u skladu sa postojećom implementacijom.
- Ne dodaj lažne strukturirane podatke ili nedokazane tvrdnje.
- Poveži četiri kartice na pregledu lokacija sa odgovarajućim novim stranicama i sačuvaj traženi redosled.
- Ne menjaj početnu stranicu, logotipe ili druge SEO stranice ako to nije neophodno za zadatak.

## 7. Početni prompt za Codex

Pre izmena uradi audit postojećeg projekta i potvrdi stvarno stanje koda. Ovaj dokument je kontekst; trenutni repozitorijum je izvor istine.

**ZADATAK**
1. Pregledaj strukturu projekta i identifikuj framework, rute, stranicu pregleda lokacija, podatke za kartice i postojeću detaljnu stranicu „Južni bulevar”.
2. Proveri da li stranica „Vrnjačka Banja” već postoji i da li kartica vodi na nju.
3. Proveri redosled kartica za Vrnjačku Banju, četiri lokacije E-75 Velika Plana 1–4 i Magistralu Požega–Užice (Uzići). Ako se kod razlikuje, prvo prijavi razliku umesto da nasumično menjaš raspored.
4. Proveri slike i potvrđene karakteristike četiri bilborda. Nemoj pretpostaviti koji je jednostran ili koji dvostrani nije osvetljen.
5. Istraži zvanične podatke o saobraćaju na sajtu Puteva Srbije i relevantnim tabelama. Objavi broj samo ako možeš pouzdano da ga povežeš sa odgovarajućom deonicom kod Velike Plane i navedeš godinu i objašnjenje.
6. Napravi mali plan izmena i navedi nedostajuće podatke. Ako nepoznanica može da dovede do netačnog javnog sadržaja, prvo pitaj korisnika.
7. Kada su činjenice jasne, napravi četiri detaljne stranice po obrascu „Južni bulevar”, koristeći postojeće komponente, dizajn, CTA i SEO strukturu. Svaka stranica mora imati jedinstven i tačan sadržaj.
8. Poveži kartice sa odgovarajućim stranicama, sačuvaj dogovoreni redosled i ne diraj nepovezane delove sajta.
9. Pokreni `npm run build` i popravi samo greške nastale izmenama ovog zadatka. Ako build već pada zbog ranijih problema, odvoji ih i prijavi.
10. Na kraju prijavi izmenjene fajlove, nove URL-ove, SEO izmene, izvor i podatak o saobraćaju (ako je potvrđen), rezultat build-a i sve što korisnik treba da potvrdi.

**Granice rada:** Bez velikog refaktora, bez promene postojećih URL-ova, bez lažnih fotografija, bez izmišljenih brojki i bez menjanja nepovezanih stranica. Prvo pregled, zatim ograničene izmene, pa provera.

## 8. Ograničenja ovog prenosa

Ovo je sažeti prenos konteksta, a ne kompletan izvoz svih poruka niti kopija repozitorijuma. Ne sadrži trenutni kod, stvarne fotografije bilborda, potvrđene URL-ove novih stranica, tačne dimenzije, cene, koordinate, niti raspored jednostranog/ne-osvetljenog bilborda po brojevima. Codex treba da proveri repo i pita za podatke koji nedostaju.
