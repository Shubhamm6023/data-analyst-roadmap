import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Future01 - Data Analyst Journey | Learn Skills. Analyze Data. Build Your Future.",
  description: "Complete Data Analytics Learning Platform - From Zero to Job Ready. Master Excel, SQL, Python, Statistics, Power BI and more with Hindi/Hinglish support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.variable} antialiased min-h-full`}>
        {children}
      </body>
    </html>
  );
}
