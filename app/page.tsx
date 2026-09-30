import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function HomePage() {
  return <main>
    <section className="hero"><div className="hero-content">
      <div className="eyebrow">Modern heirlooms · Made with intention</div>
      <h1 className="display">Good things<br />stay with you.</h1>
      <p>Thoughtful timepieces, leather and everyday objects, shaped by honest materials and made to be lived in.</p>
      <div className="hero-actions"><Link className="btn-primary" href="/shop">Explore the collection&nbsp; →</Link><Link className="btn-secondary" href="#atelier">Our point of view</Link></div>
    </div></section>

    <section className="section container">
      <div className="section-heading"><div><div className="eyebrow">Selected by the Atelier</div><h2 className="display">Pieces worth keeping.</h2><p>Considered details. Quiet confidence. Made for the everyday.</p></div><Link className="eyebrow" href="/shop">Shop all pieces&nbsp; ↗</Link></div>
      <div className="product-grid">{products.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} />)}</div>
    </section>

    <section id="atelier" className="container section" style={{ paddingTop: 0 }}>
      <div className="collection-band"><div className="collection-copy"><div className="eyebrow">Made to be lived in</div><h2 className="display">A little more character, every day.</h2><p>We look for pieces that feel right in the hand, wear beautifully and earn their place in your routine. Thoughtfully sourced materials, careful finishing and no unnecessary noise.</p><Link className="btn-secondary" href="/shop">Meet the collection&nbsp; →</Link></div><div className="collection-image" role="img" aria-label="Hand-finished Vanguard chronograph on dark stone" /></div>
    </section>

    <section className="section container" style={{ paddingTop: 0 }}>
      <div className="section-heading"><div><div className="eyebrow">A considered edit</div><h2 className="display">Find your everyday.</h2></div></div>
      <div className="category-list"><Link className="chip" href="/shop?category=Timepieces">Timepieces</Link><Link className="chip" href="/shop?category=Leather%20goods">Leather goods</Link><Link className="chip" href="/shop?category=Accessories">Accessories</Link></div>
    </section>
  </main>;
}
