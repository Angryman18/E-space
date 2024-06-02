"use client";
import { Inconsolata } from "next/font/google";
import "@/app/globals.css";
import ThemeProvider from "@/context/ThemeCtx";
import LayoutContainer from "@/components/HomeLayoutContainer/LayoutContainer";
import UserContextProvider from "@/context/UserCtx";

const inter = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserContextProvider>
      <ThemeProvider>
        <LayoutContainer>{children}</LayoutContainer>
      </ThemeProvider>
    </UserContextProvider>
  );
}
