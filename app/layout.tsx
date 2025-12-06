import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "DevLove Generator - Automated Romance for Developers",
  description: "Automated developer-style pickup lines. Because your girlfriend deserves DevOps-powered romance! 💕",
  keywords: ["devlove", "pickup lines", "romance", "developers", "cute", "fun"],
  authors: [{ name: "DevLove" }],
  openGraph: {
    title: "DevLove Generator ✨",
    description: "Generate cute developer-style pickup lines for your girlfriend",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#ec4899",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased bg-linear-to-br from-pink-50 to-indigo-50`}
      >
        {children}
      </body>
    </html>
  );
}
