import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Danny Blue Jet</h1>
        <p className="hero-subtitle">Juegos de mesa &amp; música con estética retrofuturista neon</p>
        <div className="hero-cta">
          <Link href="/juegos" className="btn btn-primary">
            🎮 Tienda de Juegos
          </Link>
          <Link href="/musica" className="btn btn-secondary">
            🎵 Música
          </Link>
        </div>
      </div>
    </section>
  );
}
