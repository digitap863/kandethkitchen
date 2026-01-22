import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Nunito_Sans,
  Raleway,
  Rammetto_One,
  Revalia,
  Roboto,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { timesNewRoman } from "@/lib/fonts/timesNewRoman";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const revalia = Revalia({
  variable: "--font-revalia",
  subsets: ["latin"],
  weight: "400", // only regular exists
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"], // optional
});
const rammettoOne = Rammetto_One({
  variable: "--font-rammetto-one",
  subsets: ["latin"],
  weight: "400", // only one weight available
});

export const metadata: Metadata = {
  title: "Kandeth",
  description: "Kandeth Kitchen & Accessories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunitoSans.variable} ${timesNewRoman.variable} ${raleway.variable} ${roboto.variable} ${revalia.variable} ${rammettoOne.variable} antialiased overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
