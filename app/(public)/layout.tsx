import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Topnav from "../components/Topnav";
import { Footer } from "../components/Footer";
import { Toaster } from "@/components/ui/sonner"

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "JICTDE",
  description: "Jigawa State Digital ICT and Digital Economy",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        <Topnav />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
