"use client";

import Link from "next/link";
import { useStore } from "@/components/StoreProvider";

export function SiteHeader() {
  const { count } = useStore();
  return <header className="header">
    <div className="header-promo">Complimentary insured delivery on orders over ₹9,999&nbsp; · &nbsp;7-day easy returns</div>
    <div className="container header-main">
      <Link href="/" className="brand" aria-label="Vanguard Atelier home">
        <span className="brand-name">Vanguard</span><span className="brand-sub">Atelier</span>
      </Link>
      <nav className="nav-links" aria-label="Main navigation">
        <Link href="/shop">Shop all</Link><Link href="/shop?category=Timepieces">Timepieces</Link><Link href="/shop?category=Leather%20goods">Leather</Link>
      </nav>
      <div className="header-actions">
        <Link className="cart-link" href="/bag" aria-label={`Shopping bag, ${count} items`}>
          <span>Bag</span><span className="cart-count">{count}</span>
        </Link>
      </div>
    </div>
  </header>;
}

export function SiteFooter() {
  const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");
  const conciergeUrl = whatsappNumber ? `https://wa.me/${whatsappNumber}` : "https://wa.me/";
  return <footer className="footer"><div className="container footer-inner">
    <Link href="/" className="brand"><span className="brand-name">Vanguard</span><span className="brand-sub">Atelier</span></Link>
    <span>Objects made to be kept. Crafted with care, sent with care.</span>
    <div style={{ display: "flex", gap: 20, alignItems: "center" }}><a href={conciergeUrl} target="_blank" rel="noreferrer" className="eyebrow">WhatsApp concierge&nbsp; ↗</a><Link href="/shop" className="eyebrow">Discover the collection&nbsp; ↗</Link></div>
  </div></footer>;
}
