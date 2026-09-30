"use client";

import { useEffect, useRef } from "react";

const paths: Record<string, string> = { home: "/", shop: "/shop", bag: "/bag", checkout: "/checkout", product: "/product", wishlist: "/shop", account: "/" };

export function Screen({ html, scripts }: { html: string; scripts: string[] }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = root.current;
    if (!node) return;
    node.querySelectorAll<HTMLElement>("[data-path]").forEach((link) => {
      const route = paths[link.dataset.path ?? ""];
      if (route) link.setAttribute("href", route);
    });
    const handleStoreNavigation = (event: MouseEvent) => {
      const button = (event.target as HTMLElement).closest("button");
      const label = button?.textContent?.replace(/\s+/g, " ").trim().toLowerCase();
      if (!label) return;
      if (label.includes("proceed to checkout")) window.location.assign("/checkout");
      if (label.includes("shop now")) window.location.assign("/shop");
      if (!button && (event.target as HTMLElement).closest("article")) window.location.assign("/product");
    };
    node.addEventListener("click", handleStoreNavigation);
    const injected = scripts.map((code) => {
      const script = document.createElement("script");
      script.textContent = code;
      document.body.appendChild(script);
      return script;
    });
    return () => {
      node.removeEventListener("click", handleStoreNavigation);
      injected.forEach((script) => script.remove());
    };
  }, [html, scripts]);
  return <div className="screen" ref={root} dangerouslySetInnerHTML={{ __html: html }} />;
}



