import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

export const metadata: Metadata = {
  title: "Saad Sayyed SWE",
  description: "Built by me, not AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body>
        <header>
          <Navbar />
        </header>
        <main className="min-h-full flex flex-col bg-black">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
