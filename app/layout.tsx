import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import siteConfig from "../site.config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.universityName,
    template: `%s | ${siteConfig.universityName}`,
  },
  description: siteConfig.tagline,
};

function buildCssVars(): React.CSSProperties {
  const { colors } = siteConfig;
  const keyMap: Record<string, string> = {
    primary: "brand-primary",
    secondary: "brand-secondary",
    accent: "brand-accent",
    primaryLight: "brand-primary-light",
    secondaryLight: "brand-secondary-light",
    textOnPrimary: "brand-text-on-primary",
    textOnSecondary: "brand-text-on-secondary",
    background: "brand-background",
    surface: "brand-surface",
    textPrimary: "brand-text-primary",
    textMuted: "brand-text-muted",
  };

  const vars: Record<string, string> = {};
  for (const [key, value] of Object.entries(colors)) {
    const cssKey = keyMap[key];
    if (cssKey) {
      vars[`--${cssKey}`] = value;
    }
  }
  return vars as React.CSSProperties;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} style={buildCssVars()}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
