import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import "./globals.css";

const inter = Questrial({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "E-Space",
  description: "E-space File Vault",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
