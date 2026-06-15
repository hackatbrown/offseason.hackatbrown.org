import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import TrustBadgeMLH from "./components/TrustBadgeMLH";
import "./globals.css";

const bdrMono = localFont({
  src: "../public/assets/fonts/BDRMono-Bold.otf",
  variable: "--font-bdr-mono",
  weight: "700",
  display: "swap",
});

const figtree = localFont({
  src: "../public/assets/fonts/Figtree-VariableFont_wght.ttf",
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hack@Brown 2027",
  description: "Coming Soon",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bdrMono.variable} ${figtree.variable}`}>
      <body>
        <TrustBadgeMLH />
        {children}
      </body>
    </html>
  );
}
