"use client";
import { ThemeContext } from "@/context/ThemeCtx";
import { useContext } from "react";

export default function Home() {
  const ctx = useContext(ThemeContext);
  console.log("ctx ", ctx);

  return (
    <main className='flex dark:bg-black dark:text-white'>
      Hello World From NextJS
      <button onClick={() => ctx.handleSetTheme()}>Toggle</button>
    </main>
  );
}
