import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/navbar";
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Personal Portfolio",
  description: "Welcome to my personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-white text-gray-900`}
      >
        <Navbar />
        <main className="min-h-[calc(100vh-64px)]">
          {children}
        </main>
      </body>
    </html>
  );
}