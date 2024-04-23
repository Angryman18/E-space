"use client";
import { ThemeContext } from "@/context/ThemeCtx";
import { useContext } from "react";
import BaseButtonStructure from "@/components/RecentSection/BaseButtonStructure";

export default function Home() {
  const ctx = useContext(ThemeContext);

  return (
    <main className='dark:bg-black dark:text-white'>
      <button onClick={() => ctx.handleSetTheme()}>Toggle</button>
      
    </main>
  );
}
