import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: "Daniel Ciuffetelli | Frontend Developer",
  description: "Frontend Developer — React, Next.js, TypeScript",
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
