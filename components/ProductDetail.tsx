"use client";

import Link from "next/link";
import { useState } from "react";
import { Product, formatPrice } from "@/lib/products";
import { useStore } from "@/components/StoreProvider";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export function ProductDetail({ product }: { product: Product }) {
  const { add } = useStore();
  const [finish, setFinish] = useState("Obsidian");
  const [added, setAdded] = useState(false);
  const addToBag = () => { add(product.id); setAdded(true); window.setTimeout(() => setAdded(false), 1400); };
  const buyNow = () => { add(product.id); window.location.assign("/checkout"); };
  return <main className="container">
    <div className="breadcrumbs"><Link href="/shop">Collection</Link>&nbsp; / &nbsp;{product.category}&nbsp; / &nbsp;{product.name}</div>
    <div className="product-detail">
      <div className="detail-image"><img src={product.image} alt={product.name} /></div>
      <section className="detail-copy">
        <div className="eyebrow">{product.badge ?? "Vanguard Atelier"}</div>
        <h1 className="display">{product.name}</h1>
        <div className="product-rating">★★★★★ <span style={{ color: "var(--muted)" }}> · 4.9 / 5 from Atelier clients</span></div>
        <div className="detail-price">{formatPrice(product.price)}</div>
        <p className="detail-subtitle">{product.description}</p>
        <div className="detail-divider" />
        <div className="product-category">Finish</div>
        <div className="option-row">{["Obsidian", "Champagne", "Slate"].map((option) => <button key={option} className={`option-button ${finish === option ? "option-button-active" : ""}`} onClick={() => setFinish(option)}>{option}</button>)}</div>
        <p className="detail-subtitle" style={{ fontSize: 11, marginTop: 10 }}>Selected: {finish} · Ships in a presentation box with insured delivery.</p>
        <div className="detail-actions"><button className="btn-primary" onClick={addToBag}>{added ? "Added to your bag ✓" : "Add to bag"}</button><button className="btn-secondary" onClick={buyNow}>Buy now</button></div>
        <div className="benefits"><div className="benefit">Insured delivery</div><div className="benefit">7-day easy returns</div><div className="benefit">Atelier warranty</div></div>
        <div className="detail-divider" />
        <details><summary style={{ cursor: "pointer", fontSize: 12, fontWeight: 700 }}>Materials & craftsmanship</summary><p className="detail-subtitle">Designed for daily wear, assembled with carefully selected materials and finished by skilled makers. Every piece is inspected before it leaves the Atelier.</p></details>
      </section>
    </div>
    <section className="section"><div className="section-heading"><div><div className="eyebrow">Complete your rotation</div><h2 className="display">More from the Atelier</h2></div><Link className="eyebrow" href="/shop">View all&nbsp; ↗</Link></div><div className="product-grid">{products.filter((item) => item.id !== product.id).slice(0, 4).map((item) => <ProductCard key={item.id} product={item} />)}</div></section>
  </main>;
}
