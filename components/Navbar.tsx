'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <Link href="/">Danny Blue Jet</Link>
      </div>
      <button
        className="navbar-toggle"
        aria-label="Toggle navigation"
        onClick={() => setOpen((prev) => !prev)}
      >
        ☰
      </button>
      <nav className={`navbar-links${open ? ' open' : ''}`}>
        <Link href="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link href="/juegos" onClick={() => setOpen(false)}>
          Juegos
        </Link>
        <Link href="/musica" onClick={() => setOpen(false)}>
          Música
        </Link>
        <a
          href="https://www.flow.cl"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-flow-nav"
        >
          Flow
        </a>
      </nav>
    </header>
  );
}
