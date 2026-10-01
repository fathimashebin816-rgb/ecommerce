"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { useStore } from "@/components/StoreProvider";
import { formatPrice, products } from "@/lib/products";

const FREE_SHIPPING_THRESHOLD = 999;

const paymentOptions = [
  { id: "upi", label: "UPI", detail: "Google Pay, PhonePe, Paytm and other UPI apps" },
  { id: "card", label: "Credit or debit card", detail: "Visa, Mastercard, RuPay and other major cards" },
  { id: "netbanking", label: "Net banking", detail: "Pay through your bank" },
  { id: "cod", label: "Cash on delivery", detail: "Available for eligible delivery addresses" },
];

export default function CheckoutPage() {
  const { cart, ready, subtotal } = useStore();
  const [payment, setPayment] = useState("upi");
  const [sent, setSent] = useState(false);
  const items = useMemo(() => products.filter((product) => (cart[product.id] ?? 0) > 0), [cart]);
  const delivery = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 75;
  const total = subtotal + delivery;

  const sendOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const address = String(form.get("address") ?? "").trim();
    const city = String(form.get("city") ?? "").trim();
    const state = String(form.get("state") ?? "").trim();
    const pincode = String(form.get("pincode") ?? "").trim();
    const paymentLabel = paymentOptions.find((option) => option.id === payment)?.label ?? payment;
    const orderLines = items.map((item) => `• ${item.name} × ${cart[item.id]} — ${formatPrice(item.price * cart[item.id])}`).join("\n");
    const message = [
      "Hello sinafaya, I would like to place this order:",
      "",
      orderLines,
      "",
      `Subtotal: ${formatPrice(subtotal)}`,
      `Delivery: ${delivery === 0 ? "Free" : formatPrice(delivery)}`,
      `Total: ${formatPrice(total)}`,
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email || "Not provided"}`,
      `Address: ${address}, ${city}, ${state} ${pincode}`,
      `Preferred payment: ${paymentLabel}`,
    ].join("\n");
    const number = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");
    const destination = number ? `https://wa.me/${number}` : "https://wa.me/";
    window.open(`${destination}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  if (!ready) return <main className="container"><div className="page-intro"><div className="eyebrow">Checkout</div><h1 className="display">Your details</h1></div></main>;
  if (items.length === 0) return <main className="container"><div className="page-intro"><div className="eyebrow">Checkout</div><h1 className="display">Your details</h1></div><div className="empty-state"><h2>Your bag is empty.</h2><p>Add an item to your bag before checking out.</p><Link className="btn-primary" href="/shop">Browse collection&nbsp; →</Link></div></main>;

  return <main className="container">
    <div className="page-intro"><div className="eyebrow">Checkout</div><h1 className="display">A few details, then it's yours.</h1><p>Your order and delivery details will be sent to our team on WhatsApp so we can confirm everything with you.</p></div>
    <form className="checkout-layout" onSubmit={sendOrder}>
      <div className="checkout-form">
        <section className="form-section surface-card"><h2>Delivery details</h2><div className="form-grid">
          <label className="form-field">Full name<input className="input" name="name" autoComplete="name" required placeholder="Your name" /></label>
          <label className="form-field">Mobile number<input className="input" name="phone" type="tel" autoComplete="tel" required minLength={10} placeholder="10-digit mobile number" /></label>
          <label className="form-field form-wide">Email address <span style={{ fontWeight: 400, letterSpacing: 0, textTransform: "none" }}>(optional)</span><input className="input" name="email" type="email" autoComplete="email" placeholder="you@example.com" /></label>
          <label className="form-field form-wide">Street address<input className="input" name="address" autoComplete="street-address" required placeholder="House number, street and area" /></label>
          <label className="form-field">City<input className="input" name="city" autoComplete="address-level2" required placeholder="City" /></label>
          <label className="form-field">State<input className="input" name="state" autoComplete="address-level1" required placeholder="State" /></label>
          <label className="form-field">PIN code<input className="input" name="pincode" autoComplete="postal-code" inputMode="numeric" pattern="[0-9]{6}" minLength={6} maxLength={6} required placeholder="6-digit PIN code" /></label>
        </div></section>

        <section className="form-section surface-card"><h2>Preferred payment</h2><p style={{ color: "var(--muted)", fontSize: 11, lineHeight: 1.7 }}>Choose how you would like to pay. Our team will confirm the secure payment steps with you on WhatsApp.</p>
          {paymentOptions.map((option) => <label key={option.id} className={`payment-option ${payment === option.id ? "payment-option-selected" : ""}`}><input type="radio" name="payment" value={option.id} checked={payment === option.id} onChange={() => setPayment(option.id)} /><span><strong>{option.label}</strong><small>{option.detail}</small></span></label>)}
        </section>
      </div>

      <aside className="cart-aside surface-card"><h2>Your order</h2>
        <div className="checkout-order-lines">{items.map((item) => <div className="summary-line" key={item.id}><span>{item.name} × {cart[item.id]}</span><strong>{formatPrice(item.price * cart[item.id])}</strong></div>)}</div>
        <div className="detail-divider" /><div className="summary-line"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div><div className="summary-line"><span>Delivery</span><span>{delivery ? formatPrice(delivery) : "Free"}</span></div><div className="summary-line summary-total"><span>Total due</span><span>{formatPrice(total)}</span></div>
        <button className="btn-primary" type="submit" style={{ width: "100%", marginTop: 12 }}>Send order on WhatsApp&nbsp; ↗</button>
        {sent && <p className="notice" role="status" style={{ marginTop: 12 }}>Your order details are ready in WhatsApp. Send the message there to confirm your order.</p>}
        <p style={{ color: "var(--muted)", fontSize: 10, lineHeight: 1.7, marginTop: 14 }}>No payment is collected on this page. Your selected payment method is sent with your order for confirmation.</p>
      </aside>
    </form>
  </main>;
}