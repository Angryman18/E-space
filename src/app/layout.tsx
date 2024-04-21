"use client";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/context/ThemeCtx";

const inter = Inconsolata({ subsets: ["latin"], weight: "400" });

// export const metadata: Metadata = {
//   title: "E-Space",
//   description: "E-space File Vault",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
