"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { products } from "@/lib/products";

type Cart = Record<string, number>;
type StoreContextValue = {
  cart: Cart;
  ready: boolean;
  count: number;
  subtotal: number;
  add: (id: string, amount?: number) => void;
  setQuantity: (id: string, amount: number) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const StoreContext = createContext<StoreContextValue | null>(null);
const STORAGE_KEY = "vanguard-atelier-cart-v1";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Cart;
        setCart(Object.fromEntries(Object.entries(parsed).filter(([id, amount]) => products.some((product) => product.id === id) && Number.isFinite(amount) && amount > 0)));
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart, ready]);

  const add = useCallback((id: string, amount = 1) => {
    setCart((current) => ({ ...current, [id]: (current[id] ?? 0) + amount }));
  }, []);
  const setQuantity = useCallback((id: string, amount: number) => {
    setCart((current) => {
      if (amount <= 0) {
        const next = { ...current };
        delete next[id];
        return next;
      }
      return { ...current, [id]: Math.min(amount, 99) };
    });
  }, []);
  const remove = useCallback((id: string) => setQuantity(id, 0), [setQuantity]);
  const clear = useCallback(() => setCart({}), []);

  const value = useMemo(() => {
    const count = Object.values(cart).reduce((total, amount) => total + amount, 0);
    const subtotal = products.reduce((total, product) => total + product.price * (cart[product.id] ?? 0), 0);
    return { cart, ready, count, subtotal, add, setQuantity, remove, clear };
  }, [cart, ready, add, setQuantity, remove, clear]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const value = useContext(StoreContext);
  if (!value) throw new Error("useStore must be used within StoreProvider");
  return value;
}
