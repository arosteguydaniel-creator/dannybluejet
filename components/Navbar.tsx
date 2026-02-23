'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="nav-inner container">
        <Link href="/" className="brand">Danny Blue Jet</Link>
        <nav className={`nav-links ${open ? 'open' : ''}`}>  
          <Link href="/juegos">Juegos</Link>
          <Link href="/musica">Música</Link>
          <a href="https://www.flow.cl" target="_blank" rel="noreferrer">Flow</a>
        </nav>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle">☰</button>
      </div>
    </header>
  );
}