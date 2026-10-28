import Studio from './studio';
export const dynamic='force-static';
export const metadata={title:'Uređivanje vikendica',robots:{index:false,follow:false}};
export default function StudioPage(){return process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?<Studio/>:<main className="setup-message"><h1>Studio se priprema</h1><p>Povezivanje sa sistemom za uređivanje je u toku.</p><a href="/">← Nazad na sajt</a></main>}
