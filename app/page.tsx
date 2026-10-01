import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function HomePage() {
  return <main>
    <section className="hero"><div className="hero-content">
      <div className="eyebrow">Curated fashion · Modern style · Made for you</div>
      <h1 className="display">Discover your style,<br />the way it should be.</h1>
      <p>Handpicked collections. Quality fabrics. Timeless designs. No compromises — just honest fashion.</p>
      <div className="hero-actions"><Link className="btn-primary" href="/shop">Explore collection&nbsp; →</Link><Link className="btn-secondary" href="#our-story">Our story</Link></div>
    </div></section>

    <section className="section container">
      <div className="section-heading"><div><div className="eyebrow">sinafaya collection</div><h2 className="display">Pieces worth wearing.</h2><p>From casual essentials to statement pieces — each item curated with the same attention to detail.</p></div><Link className="eyebrow" href="/shop">Shop all&nbsp; ↗</Link></div>
      <div className="product-grid">{products.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} />)}</div>
    </section>

    <section id="our-story" className="container section" style={{ paddingTop: 0 }}>
      <div className="collection-band"><div className="collection-copy"><div className="eyebrow">Our promise</div><h2 className="display">Nothing to hide.</h2><p>Most fashion hides behind fast trends and poor quality. We don't. Our collections are curated for longevity: quality fabrics, timeless cuts, honest pricing. That's it. The piece you choose tells you exactly what you're getting.</p><Link className="btn-secondary" href="/shop">Discover the difference&nbsp; →</Link></div><div className="collection-image" role="img" aria-label="sinafaya fashion collection on display" /></div>
    </section>

    <section className="section container" style={{ paddingTop: 0 }}>
      <div className="section-heading"><div><div className="eyebrow">Find your style</div><h2 className="display">Choose your vibe.</h2></div></div>
      <div className="category-list"><Link className="chip" href="/shop?category=Casual">Casual Essentials</Link><Link className="chip" href="/shop?category=Formal">Formal Wear</Link><Link className="chip" href="/shop?category=Accessories">Accessories</Link><Link className="chip" href="/shop?category=Sale">Sale</Link></div>
    </section>
  </main>;
}