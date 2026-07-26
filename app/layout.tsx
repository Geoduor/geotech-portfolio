import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GEOTech | Geofry Oduor – AI & Full-Stack Engineer",
  description:
    "I build AI automation, SaaS platforms and full-stack systems for businesses across Africa. Clean code. Fast delivery. Real impact.",
  keywords: [
    "Geofry Oduor",
    "GEOTech",
    "AI Engineer",
    "Full-Stack Developer",
    "Kenya",
    "SaaS",
    "Software Engineer Nairobi",
  ],
  authors: [{ name: "Geofry Oduor" }],
  openGraph: {
    title: "GEOTech | Geofry Oduor",
    description:
      "AI & Full-Stack Engineer building intelligent software solutions for Africa.",
    url: "https://geotech-portfolio.vercel.app",
    siteName: "GEOTech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GEOTech | Geofry Oduor",
    description:
      "AI & Full-Stack Engineer building intelligent software solutions for Africa.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[#0a0a0a] text-white antialiased">
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}