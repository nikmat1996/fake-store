import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FakeStore",
  description: "A assignment by MakerStudio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="space-x-4 mx-auto p-5">
        <Link href={'/'}>Home</Link>
        <Link href={'cart'}>Cart</Link>
        </nav>
        {children}
        </body>
    </html>
  );
}
