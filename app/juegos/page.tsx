import ProductCard from '../../components/ProductCard';

async function getProducts() {
  const res = await fetch('/api/productos');
  return res.ok ? res.json() : [];
}

export default async function JuegosPage() {
  const products = await getProducts();
  return (
    <section className="container">
      <h2 className="section-title">Tienda — Juegos de Mesa</h2>
      <div className="grid products-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}