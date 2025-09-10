import ProductPage from "./product-page";

export default async function Home() {
  // ✅ Server-side fetch for SSR
  const res = await fetch("https://fakestoreapi.com/products", { cache: "no-store" });
  const products = await res.json();

  return <ProductPage initialProducts={products} />;
}


