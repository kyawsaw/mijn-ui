import "./css/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"], fallback: ["sans serif"] });

export const metadata: Metadata = {
  title: "MijnUI",
  description: "Component Library for React, Laravel, HTML",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
