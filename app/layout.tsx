import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Nav from "@/components/layout/Nav";
import HeaderSection from "@/components/layout/HeaderSection";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Car Rental App",
  description: "Car Rental App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${montserrat.variable} antialiased`}
      >
        <Nav />
        <HeaderSection />
        {children}
      </body>
    </html>
  );
}
