import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nitroedge-garage.vercel.app"),
  title: "NitroEdge Garage | Premium Car Detailing & Ceramic Coating",
  description:
    "NitroEdge Garage offers premium car detailing, ceramic coating, paint correction, interior deep cleaning, and showroom finish packages for drivers who want their vehicle to look sharper, cleaner, and protected.",
  keywords: [
    "car detailing",
    "auto detailing",
    "ceramic coating",
    "paint correction",
    "interior deep cleaning",
    "showroom finish",
    "performance garage",
    "NitroEdge Garage",
  ],
  openGraph: {
    title: "NitroEdge Garage | Premium Car Detailing & Ceramic Coating",
    description:
      "Premium car detailing, ceramic coating, paint correction, and showroom finish packages for sharper, cleaner, protected vehicles.",
    url: "https://nitroedge-garage.vercel.app",
    siteName: "NitroEdge Garage",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "NitroEdge Garage premium car detailing and ceramic coating landing page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NitroEdge Garage | Premium Car Detailing & Ceramic Coating",
    description:
      "A dark, aggressive landing page concept for premium car detailing, ceramic coating, and paint correction services.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body>{children}</body>
    </html>
  );
}
