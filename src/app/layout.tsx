"use client";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
// import ThemeProvider from "@/context/ThemeCtx";
// import SideBar from "@/components/Sidebar/Sidebar";
// import SearchBar from "@/components/TopBar/SearchBar";
// import Recent from "@/components/RecentSection/Recent";
// import TitleText from "@/components/Text/TitleText";

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
    <html lang='en'>
      <body
        data-testid='layout_body'
        className={`${inter.className} dark:bg-black transition-colors duration-300;`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
