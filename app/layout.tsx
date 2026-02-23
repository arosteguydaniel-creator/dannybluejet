import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import NeonEffects from '@/components/NeonEffects';

export const metadata: Metadata = {
  title: 'Danny Blue Jet | Tienda de Juegos & Música',
  description: 'Juegos de mesa y música con estética retrofuturista neon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <NeonEffects />
        <Navbar />
        <main>{children}</main>
        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Danny Blue Jet — Todos los derechos reservados</p>
        </footer>
      </body>
    </html>
  );
}