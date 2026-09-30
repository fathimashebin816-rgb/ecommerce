"use client";

import Link from "next/link";
import { useStore } from "@/components/StoreProvider";
import { formatPrice, products } from "@/lib/products";

const shippingFor = (subtotal: number) => subtotal === 0 || subtotal >= 9999 ? 0 : 199;

export default function BagPage() {
  const { cart, ready, subtotal, setQuantity, remove } = useStore();
  const items = products.filter((product) => (cart[product.id] ?? 0) > 0);
  if (!ready) return <main className="container"><div className="page-intro"><div className="eyebrow">Your selection</div><h1 className="display">Shopping bag</h1></div></main>;
  return <main className="container">
    <div className="page-intro"><div className="eyebrow">Your selection</div><h1 className="display">Shopping bag</h1><p>{items.length ? `${items.length} considered ${items.length === 1 ? "piece" : "pieces"} in your bag.` : "Your next favourite is waiting to be found."}</p></div>
    {items.length === 0 ? <div className="empty-state"><h2>Your bag is taking a breather.</h2><p>Explore the collection and bring home something made to last.</p><Link className="btn-primary" href="/shop">Explore the collection&nbsp; →</Link></div> : <div className="cart-layout">
      <div className="cart-list">{items.map((product) => <article className="cart-item surface-card" key={product.id}>
        <Link href={`/product?id=${product.id}`}><img src={product.image} alt={product.name} /></Link>
        <div><div className="product-category">{product.category}</div><Link href={`/product?id=${product.id}`}><h3>{product.name}</h3></Link><p>{formatPrice(product.price)} each</p><div className="quantity" style={{ marginTop: 14 }}><button aria-label={`Decrease ${product.name} quantity`} onClick={() => setQuantity(product.id, cart[product.id] - 1)}>−</button><span>{cart[product.id]}</span><button aria-label={`Increase ${product.name} quantity`} onClick={() => setQuantity(product.id, cart[product.id] + 1)}>+</button></div></div>
        <div className="cart-item-price" style={{ textAlign: "right" }}><strong>{formatPrice(product.price * cart[product.id])}</strong><button onClick={() => remove(product.id)} style={{ display: "block", margin: "13px 0 0 auto", border: 0, background: "none", color: "var(--muted)", fontSize: 10, textDecoration: "underline" }}>Remove</button></div>
      </article>)}</div>
      <aside className="cart-aside surface-card"><h2>Order summary</h2><div className="summary-line"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div><div className="summary-line"><span>Insured delivery</span><span>{shippingFor(subtotal) ? formatPrice(shippingFor(subtotal)) : "Complimentary"}</span></div>{subtotal > 0 && subtotal < 9999 && <p style={{ color: "var(--muted)", fontSize: 10 }}>Complimentary delivery over ₹9,999.</p>}<div className="summary-line summary-total"><span>Total</span><span>{formatPrice(subtotal + shippingFor(subtotal))}</span></div><Link className="btn-primary" href="/checkout" style={{ width: "100%", marginTop: 12 }}>Continue to checkout&nbsp; →</Link><Link href="/shop" className="eyebrow" style={{ display: "block", marginTop: 18, textAlign: "center" }}>Continue browsing</Link></aside>
    </div>}
  </main>;
}
