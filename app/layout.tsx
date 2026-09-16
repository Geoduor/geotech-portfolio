import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Geodr. | Geofry Oduor – AI & Full-Stack Engineer",
  description:
    "I build AI automation, SaaS platforms and full-stack systems for businesses across Africa. Clean code. Fast delivery. Real impact.",
  keywords: [
    "Geofry Oduor",
    "Geodr.",
    "AI Engineer",
    "Full-Stack Developer",
    "Kenya",
    "SaaS",
    "Software Engineer Nairobi",
  ],
  authors: [{ name: "Geofry Oduor" }],
  openGraph: {
    title: "Geodr. | Geofry Oduor",
    description:
      "AI & Full-Stack Engineer building intelligent software solutions for Africa.",
    url: "https://geodr-portfolio.vercel.app",
    siteName: "Geodr.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Geodr. | Geofry Oduor",
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
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} light`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-bg-0 text-text-primary antialiased font-sans pt-16">
        <Navbar />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.remove('light');
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
