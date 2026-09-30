import fs from "node:fs";
import path from "node:path";

export type ScreenName = "home_storefront" | "shop_product_catalog" | "product_details_chronograph_automatique" | "bag_shopping_cart" | "checkout_address_payment";

export function getScreen(name: ScreenName) {
  const file = path.join(process.cwd(), "stitch_men_s_accessories_e_commerce_store", name, "code.html");
  const source = fs.readFileSync(file, "utf8");
  const body = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? source;
  const scripts = [...body.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)].map((match) => match[1]).filter(Boolean);
  const html = body.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");
  return { html, scripts };
}


