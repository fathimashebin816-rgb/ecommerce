"use client";

import Link from "next/link";
import { useState } from "react";
import { Product, formatPrice } from "@/lib/products";
import { useStore } from "@/components/StoreProvider";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useStore();
  const [added, setAdded] = useState(false);
  const addToBag = () => {
    add(product.id);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1100);
  };
  return <article className="product-card">
    <Link href={`/product?id=${product.id}`} className="product-image" aria-label={`View ${product.name}`}>
      <img src={product.image} alt={product.name} loading="lazy" />
      {product.badge && <span className="product-badge">{product.badge}</span>}
    </Link>
    <div className="product-info">
      <div className="product-category">{product.category}</div>
      <Link href={`/product?id=${product.id}`}><h3 className="product-title">{product.name}</h3></Link>
      <div className="product-rating">★★★★★ <span style={{ color: "var(--muted)" }}>· Clean label</span></div>
      <div className="product-bottom"><span className="product-price">{formatPrice(product.price)}</span><button className="add-small" onClick={addToBag}>{added ? "Added ✓" : "Add to bag"}</button></div>
    </div>
  </article>;
}