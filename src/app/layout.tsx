import type { Metadata } from "next";
import { Fleur_De_Leah, Caveat } from "next/font/google";
import "./globals.css";

const fleurDeLeah = Fleur_De_Leah({
  weight: "400",
  variable: "--font-fleur",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maria Larissa",
  description: "A tribute for International Women's Day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fleurDeLeah.variable} ${caveat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
