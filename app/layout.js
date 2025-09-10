import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata = {
  title: "ShopKart - Product Listing",
  description: "Browse products on ShopKart with SSR, SEO, and responsive layout using Next.js App Router.",
  keywords: "ShopKart, online shopping, products, ecommerce, nextjs",
  openGraph: {
    title: "ShopKart - Product Listing",
    description: "Browse products on ShopKart with SSR, SEO, and responsive layout using Next.js App Router.",
    url: "https://appscrip-task-praveen-git-main-praveen-ks-projects-7fbabb68.vercel.app?_vercel_share=IQzMBrn3m0wVhTBI6ts4rYfJs8nvo394",
    siteName: "ShopKart",
    locale: "en_IND",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />
        
        {/* Main Content */}
        <main className="flex-1">{children}</main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
