"use client";
import { ThemeContext } from "@/context/ThemeCtx";
import { useContext } from "react";
import BaseButtonStructure from "@/components/RecentSection/BaseButtonStructure";

export default function Home() {
  const ctx = useContext(ThemeContext);
  console.log("ctx ", ctx);

  const handleCreateClick = () => {
    console.log("Create is clicked");
  };

  const handleFolderClick = (val: string) => {
    console.log("Folder is clicked ", val);
  };

  return (
    <main className='dark:bg-black dark:text-white'>
      <button onClick={() => ctx.handleSetTheme()}>Toggle</button>
      
    </main>
  );
}
