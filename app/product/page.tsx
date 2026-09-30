import { ProductDetail } from "@/components/ProductDetail";
import { products } from "@/lib/products";

export default async function ProductPage({ searchParams }: { searchParams: Promise<{ id?: string }> }) {
  const { id } = await searchParams;
  const product = products.find((item) => item.id === id) ?? products[0];
  return <ProductDetail product={product} />;
}
