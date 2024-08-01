import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Interligado",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen max-h-screen bg-slate-900 font-sans flex flex-col overflow-hidden">
          <Header />
          <div className="flex flex-grow overflow-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
