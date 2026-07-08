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
  title: "NitroEdge Garage — Detailing & Performance Auto Care",
  description:
    "A dark, aggressive, premium landing page for a performance-focused auto detailing and ceramic coating garage.",
  keywords: [
    "car detailing",
    "ceramic coating",
    "auto shop landing page",
    "performance garage",
    "NitroEdge Garage",
  ],
  openGraph: {
    title: "NitroEdge Garage — Premium Auto Detailing",
    description:
      "Sharper paint, deeper gloss, and premium vehicle enhancement services for drivers who care.",
    url: "https://nitroedge-garage.vercel.app",
    siteName: "NitroEdge Garage",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "NitroEdge Garage performance auto care landing page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NitroEdge Garage — Premium Auto Detailing",
    description:
      "A dark, aggressive landing page concept for a performance auto care brand.",
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
