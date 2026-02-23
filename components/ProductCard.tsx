'use client';
import React from 'react';

export default function ProductCard({ product }: { product: any }) {
  return (
    <article className="card product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3>{product.title}</h3>
      <p className="muted">{product.description}</p>
      <p className="price">{product.price}</p>
      <div className="card-actions">
        <a className="btn btn-primary" href={product.flowLink} target="_blank" rel="noreferrer">Comprar</a>
      </div>
    </article>
  );
}