import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KairosCV - Capstone Project Presentation",
  description: "AI-Powered Resume Optimization Platform - Capstone Project CA2 Presentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
