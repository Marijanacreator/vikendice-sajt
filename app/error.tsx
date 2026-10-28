'use client';
export default function ErrorPage({reset}:{reset:()=>void}){return <main className="setup-message"><h1>Kratak predah</h1><p>Trenutno ne možemo da učitamo vikendice. Pokušajte ponovo za koji trenutak.</p><button className="button" onClick={reset}>Pokušaj ponovo</button></main>}
