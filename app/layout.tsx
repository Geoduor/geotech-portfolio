import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import "./globals.css";
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

/** Condensed display face for the home page's giant headings (Anton, SIL OFL). */
const anton = localFont({
  src: [{ path: "./fonts/Anton-Regular.woff2", weight: "400", style: "normal" }],
  variable: "--font-anton-src",
  display: "swap",
  fallback: ["Impact", "Arial Narrow", "sans-serif"],
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
    { media: "(prefers-color-scheme: light)", color: "#edf0fc" },
    { media: "(prefers-color-scheme: dark)", color: "#070b1d" },
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
    <html lang="en" suppressHydrationWarning className={`${faux.variable} ${anton.variable} ${inter.variable} light`}>
      <head>
        {/* themeScript is a fixed string defined above, with no user input. React would
            HTML-escape it as a text child and break the code, so it is set as raw HTML. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-bg-0 text-text-primary antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <Toaster position="top-center" richColors />
        <Analytics />
      </body>
    </html>
  );
}
