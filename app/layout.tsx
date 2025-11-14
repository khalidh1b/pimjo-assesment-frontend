import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/landing/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pimjo - Assesment",
  description: "Pimjo Frontend Assesment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} container mx-auto ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      > 
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
};