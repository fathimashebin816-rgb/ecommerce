import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/components/StoreProvider";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "sinafaya | Fashion Station",
  description: "Discover the latest fashion trends at sinafaya. Curated collections for the modern individual.",
  keywords: ["fashion", "clothing", "accessories", "sinafaya", "online shopping", "fashion station"],
  authors: [{ name: "sinafaya" }],
  openGraph: {
    title: "sinafaya | Fashion Station",
    description: "Discover the latest fashion trends at sinafaya. Curated collections for the modern individual.",
    type: "website",
    locale: "en_IN",
    siteName: "sinafaya",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body className="font-body antialiased">
      <StoreProvider>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </StoreProvider>
    </body>
  </html>;
}