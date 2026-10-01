"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { products } from "@/lib/products";

interface StoreContextType {
  cart: Record<string, number>;
  ready: boolean;
  add: (productId: string) => void;
  remove: (productId: string) => void;
  setQuantity: (productId: string, qty: number) => void;
  count: number;
  subtotal: number;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [ready, setReady] = useState(false);

  if (typeof window !== "undefined" && !ready) {
    try {
      const stored = window.localStorage.getItem("twt-cart");
      if (stored) setCart(JSON.parse(stored));
    } catch {}
    setReady(true);
  }

  const add = useCallback((productId: string) => {
    setCart((prev) => {
      const next = { ...prev, [productId]: (prev[productId] ?? 0) + 1 };
      if (typeof window !== "undefined") window.localStorage.setItem("twt-cart", JSON.stringify(next));
      return next;
    });
  }, []);

  const remove = useCallback((productId: string) => {
    setCart((prev) => {
      const next = { ...prev };
      delete next[productId];
      if (typeof window !== "undefined") window.localStorage.setItem("twt-cart", JSON.stringify(next));
      return next;
    });
  }, []);

  const setQuantity = useCallback((productId: string, qty: number) => {
    setCart((prev) => {
      const next = { ...prev };
      if (qty <= 0) delete next[productId];
      else next[productId] = qty;
      if (typeof window !== "undefined") window.localStorage.setItem("twt-cart", JSON.stringify(next));
      return next;
    });
  }, []);

  const count = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const subtotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = products.find((p) => p.id === id);
    return sum + (product ? product.price * qty : 0);
  }, 0);

  return (
    <StoreContext.Provider value={{ cart, ready, add, remove, setQuantity, count, subtotal }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}