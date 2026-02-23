import Link from 'next/link';

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-inner container">
        <h1 className="hero-title">Danny Blue Jet</h1>
        <p className="hero-sub">Juegos de mesa • Música • Retrofuturo en neón</p>
        <div className="hero-cta">
          <Link href="/juegos" className="btn btn-primary">Ir a la Tienda 🎲</Link>
          <Link href="/musica" className="btn btn-ghost">Escuchar Música 🎵</Link>
        </div>
      </div>
    </section>
  );
}