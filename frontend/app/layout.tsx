import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Make sure this path is correct!

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sahyog | Logistics for Social Good",
  description: "Unifying surplus food, textiles, and emergency relief.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-200 min-h-screen antialiased selection:bg-emerald-500/30`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}