import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "codeXtreme Hall of Fame | Winners Gallery",
  description: "Celebrating Africa's brightest student innovators building solutions that shape communities",
  keywords: ["codeXtreme", "hackathon", "winners", "innovation", "Africa", "students"],
  authors: [{ name: "codeXtreme" }],
  openGraph: {
    title: "codeXtreme Hall of Fame",
    description: "Celebrating Africa's brightest student innovators",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
