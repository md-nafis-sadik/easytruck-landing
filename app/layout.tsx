import Footer from "@/components/navigations/Footer";
import Header from "@/components/navigations/Header";
import type { Metadata } from "next";
import { Hind_Siliguri, Inter } from "next/font/google";
import "./globals.css";

const siliguri = Hind_Siliguri({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-hind-siliguri",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// app/layout.tsx or page.tsx (Next.js 13+ App Router)

export const metadata: Metadata = {
  title: "EasyTruck - Smart Truck Rental Solution in Bangladesh",
  description:
    "EasyTruck is a modern platform that makes truck booking, tracking, and payment easier, faster, and safer. Get reliable transport service for drivers, truck owners, retailers, and companies.",
  keywords: [
    "truck rental Bangladesh",
    "online truck booking",
    "EasyTruck",
    "truck transport service",
    "industrial transport Bangladesh",
    "truck tracking",
    "logistics platform",
  ],
  openGraph: {
    title: "EasyTruck - Smart Truck Rental Solution",
    description:
      "Book and track trucks easily with EasyTruck. A safe, affordable, and smart solution for transport in Bangladesh.",
    url: "https://your-domain.com",
    siteName: "EasyTruck",
    images: [
      {
        url: "/images/banner.png", // replace with your actual banner image
        width: 1200,
        height: 630,
        alt: "EasyTruck Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle",
    title: "EasyTruck - Smart Truck Rental Solution",
    description:
      "Smart truck rental and transport solution in Bangladesh. Book, track, and pay easily with EasyTruck.",
    images: ["/images/banner.png"], // replace
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${siliguri.variable} ${inter.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
