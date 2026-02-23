import './globals.css';
import Navbar from '../components/Navbar';
import NeonEffects from '../components/NeonEffects';

export const metadata = {
  title: 'Danny Blue Jet | Tienda de Juegos & Música',
  description: 'Juegos de mesa y música con estética retrofuturista neon',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <NeonEffects />
        <Navbar />
        <main className="page-container">{children}</main>
        <footer className="footer">© {new Date().getFullYear()} Danny Blue Jet</footer>
      </body>
    </html>
  );
}