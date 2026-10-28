# Vikendice u prirodi

Next.js App Router + TypeScript + Tailwind + Sanity Studio na `/studio`.

## Lokalni rad

1. Instalirajte Node.js 22.12 ili noviji i pnpm.
2. `pnpm install`
3. Kopirajte `.env.example` u `.env.local` i unesite vrednosti.
4. `pnpm dev` — http://localhost:3000

`pnpm build` proverava produkcijski build. `pnpm typecheck` proverava tipove.

## Podešavanje

- `NEXT_PUBLIC_SANITY_PROJECT_ID`: ID Sanity projekta.
- `NEXT_PUBLIC_SANITY_DATASET`: `production` (javni dataset).
- `NEXT_PUBLIC_CONTACT_EMAIL`: stvarna adresa vlasnika za dugme „Pošalji upit”.

Bez Sanity ID-a početna prikazuje „Vikendice uskoro stižu”. Pravi kvar CMS-a prikazuje stranicu za ponovni pokušaj umesto poruke da je CMS prazan. Za javni sadržaj nije potreban API token. Nikada ne stavljajte privatne podatke u javni dataset.

Podaci i stranice koriste revalidaciju od 60 sekundi i Sanity origin API (`useCdn: false`). Objavljene promene postaju vidljive posle isteka keša i sledećeg zahteva; osvežavanje može da se završi u pozadini.

## Vlasnik: nova vikendica

1. Otvorite `/studio` i prijavite se nalogom koji ima pristup projektu.
2. U listi „Vikendica” izaberite novi dokument i unesite naziv, opis, lokaciju, kapacitet i cenu u evrima.
3. Generišite slug, dodajte fotografije (prva je naslovna), izaberite status.
4. Kliknite „Publish”. Sajt automatski preuzima objavljene izmene.

Slobodno/zauzeto je ručna oznaka vlasnika, nije kalendar rezervacija. Upit otvara imejl aplikaciju gosta i ne rezerviše smeštaj.

## Objavljivanje

Privatni GitHub repo → Vercel projekat. Unesite sve tri promenljive u Production i Preview okruženja pre builda. Sanity CORS: `http://localhost:3000` i konkretan produkcijski HTTPS origin, oba sa credentials. Svaki novi origin dodajte posebno. Promena NEXT_PUBLIC vrednosti zahteva novi deploy.

Hero koristi lokalnu SVG ilustraciju; fotografije vikendica dolaze isključivo iz CMS-a.
