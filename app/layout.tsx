import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/data";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "Pixel Craft · Software engineer in Accra",
    template: "%s · Pixel Craft",
  },
  description:
    "Pixel Craft is a software engineer in Accra, Ghana. He designs and builds web products, mobile tools, and the services behind them.",
  openGraph: {
    title: "Pixel Craft · Software engineer in Accra",
    description:
      "Web products, mobile tools, and careful engineering from a studio in East Legon, Accra.",
    locale: "en_GH",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f3d30",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: "Software engineering studio in Accra, Ghana.",
  email: site.email,
  telephone: site.phones.map((phone) => phone.tel),
  address: {
    "@type": "PostalAddress",
    streetAddress: "East Legon",
    addressLocality: "Accra",
    addressCountry: "GH",
  },
  areaServed: "Accra",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="min-h-screen bg-mist font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-lime focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-forest"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
