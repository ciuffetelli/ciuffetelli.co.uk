import { Nav } from "@/components/nav";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Ciuffetelli | Frontend Developer",
  description: "Frontend Developer — React, Next.js, TypeScript",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-canvas text-ink font-sans">
        <Nav />
        {children}
      </body>
    </html>
  );
}
