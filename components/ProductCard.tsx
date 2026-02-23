'use client';

import Image from 'next/image';
import type { Producto } from '@/lib/productos';

interface ProductCardProps {
  producto: Producto;
}

export default function ProductCard({ producto }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-img-wrap">
        <Image
          src={producto.imagen}
          alt={producto.titulo}
          width={200}
          height={200}
          className="product-img"
          unoptimized
        />
      </div>
      <h3 className="product-title">{producto.titulo}</h3>
      <p className="product-desc">{producto.descripcion}</p>
      <p className="product-price">{producto.precio}</p>
      <a
        href={producto.flowLink}
        className="btn-flow"
        target="_blank"
        rel="noopener noreferrer"
      >
        Comprar con Flow
      </a>
    </div>
  );
}
