"use client";
import { ThemeContext } from "@/context/ThemeCtx";
import { useContext } from "react";
// import BaseButtonStructure from "@/components/RecentSection/BaseButtonStructure";
import TitleText from "@/components/Text/TitleText";
import Table from "@/components/Table/Table";

export default function Home() {
  const ctx = useContext(ThemeContext);

  return (
    <main className='dark:bg-black dark:text-white'>
      <button onClick={() => ctx.handleSetTheme()}>Toggle</button>
      {/* <hr className='my-4' /> */}
      <TitleText text='All Files' />
      <Table />
    </main>
  );
}
