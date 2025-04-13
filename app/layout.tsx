import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Kacper Pietrusiak",
  description: "portfolio deweloperskie Kacper Pietrusiak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className="min-h-screen flex flex-col">
    <main className="flex-grow flex flex-col items-center justify-center overflow-hidden">
      
        {children}
        <Footer/>
      </main>
    </body>
  </html>
  );
}
