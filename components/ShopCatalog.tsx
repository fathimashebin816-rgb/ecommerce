"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

const categories = ["All products", "Casual Essentials", "Formal Wear", "Accessories"];

export function ShopCatalog({ initialCategory = "All products" }: { initialCategory?: string }) {
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : "All products");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const shown = useMemo(() => {
    const filtered = products.filter((product) => (category === "All products" || product.category === category) && `${product.name} ${product.category}`.toLowerCase().includes(query.toLowerCase()));
    if (sort === "price-low") return [...filtered].sort((a, b) => a.price - b.price);
    if (sort === "price-high") return [...filtered].sort((a, b) => b.price - a.price);
    return filtered;
  }, [category, query, sort]);

  return <main className="container">
    <div className="page-intro"><div className="eyebrow">sinafaya collection</div><h1 className="display">Honest fashion.</h1><p>Curated styles. Quality fabrics. Every piece tells a different story.</p></div>
    <div className="catalog-tools">
      <div className="category-list" aria-label="Filter products by category">{categories.map((item) => <button key={item} className={`chip ${category === item ? "chip-active" : ""}`} onClick={() => setCategory(item)}>{item}</button>)}</div>
      <div className="search-sort"><input className="input" type="search" placeholder="Search products" value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search products" /><select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort products"><option value="featured">Featured</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select></div>
    </div>
    <p style={{ color: "var(--muted)", fontSize: 11, margin: "0 0 14px" }}>{shown.length} curated {shown.length === 1 ? "piece" : "pieces"}</p>
    <div className="product-grid">{shown.map((product) => <ProductCard key={product.id} product={product} />)}</div>
    {shown.length === 0 && <div className="empty-state"><h2>No pieces found</h2><p>Try a different search or browse the full collection.</p><button className="btn-secondary" onClick={() => { setQuery(""); setCategory("All products"); }}>Show all products</button></div>}
  </main>;
}