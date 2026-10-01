export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  compareAt?: number;
  image: string;
  description: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "casual-tee",
    name: "Classic Cotton Tee",
    category: "Casual Essentials",
    price: 1299,
    compareAt: 1599,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop",
    description: "Our signature classic tee. Made with 100% organic cotton, pre-shrunk for the perfect fit. Soft, breathable, and built to last.",
    badge: "Bestseller",
  },
  {
    id: "formal-shirt",
    name: "Oxford Button-Down",
    category: "Formal Wear",
    price: 2499,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&h=1000&fit=crop",
    description: "Crisp oxford cloth shirt for the modern professional. Tailored fit with mother-of-pearl buttons. Wrinkle-resistant and easy care.",
    badge: "New arrival",
  },
  {
    id: "denim-jeans",
    name: "Slim Fit Denim",
    category: "Casual Essentials",
    price: 2999,
    compareAt: 3499,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=1000&fit=crop",
    description: "Premium Japanese denim with just the right amount of stretch. Classic five-pocket styling. Ages beautifully with wear.",
  },
  {
    id: "leather-belt",
    name: "Italian Leather Belt",
    category: "Accessories",
    price: 1899,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=1000&fit=crop",
    description: "Full-grain Italian leather with a matte brass buckle. Handcrafted in small batches. The only belt you'll need.",
    badge: "Limited batch",
  },
  {
    id: "silk-scarf",
    name: "Printed Silk Scarf",
    category: "Accessories",
    price: 2199,
    image: "https://images.unsplash.com/photo-1584030373286-5d1de5f46e08?w=800&h=1000&fit=crop",
    description: "Luxurious mulberry silk with an exclusive sinafaya print. Lightweight and versatile — wear it multiple ways.",
  },
  {
    id: "wool-blazer",
    name: "Merino Wool Blazer",
    category: "Formal Wear",
    price: 5999,
    compareAt: 6999,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=1000&fit=crop",
    description: "Tailored merino wool blazer with a modern silhouette. Unstructured for comfort, lined for polish. Four-season weight.",
    badge: "Premium",
  },
];

export const formatPrice = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;