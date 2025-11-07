import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-chakra-petch',
  preload: true,
});

export const metadata: Metadata = {
  title: "OozeCloud - Premium Game Hosting for Serious Gamers",
  description: "Deploy your game server in seconds. Enjoy low latency, high performance, and 24/7 support. Built by gamers, for gamers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${chakraPetch.variable}`}>
      <body className={chakraPetch.className}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
