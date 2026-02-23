import ProductCard from '@/components/ProductCard';
import { productos } from '@/lib/productos';

export default function JuegosPage() {
  return (
    <section className="section-juegos">
      <div className="container">
        <h2>Tienda de Juegos</h2>
        <div className="products-grid">
          {productos.map((p) => (
            <ProductCard key={p.id} producto={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
