import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/content/site";

/**
 * Display font: "Geodr Faux", a faux-Cyrillic face (R reads as Я, N as И, W as Ш,
 * U as Ц, Y as Ч, D as Д). It is built from Montserrat (SIL OFL) by
 * scripts/build-faux-cyrillic-font.py. The page text stays ordinary Latin, only
 * the letter shapes change. It is used for headings, the brand name and the
 * numbers; paragraphs and buttons stay in Inter so they remain easy to read.
 */
const faux = localFont({
  src: [
    { path: "./fonts/GeodrFaux-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/GeodrFaux-ExtraBold.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-faux",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: site.intro,
  keywords: [
    "Geofry Oduor",
    "Geodr",
    "AI developer Kenya",
    "full-stack developer Kenya",
    "multi-agent systems",
    "Next.js developer Kenya",
    "AI automation consultant",
  ],
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.brand,
    title: `${site.name} — ${site.role}`,
    description: site.intro,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.intro,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf9f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1122" },
  ],
};

/**
 * Applies the saved theme before first paint so the page never flashes the
 * wrong colours. Kept inline and dependency-free on purpose.
 */
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dark = stored ? stored === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.classList.toggle('light', !dark);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${faux.variable} ${inter.variable} light`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-screen flex-col bg-bg-0 text-text-primary antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster position="top-center" richColors />
        <Analytics />
      </body>
    </html>
  );
}
