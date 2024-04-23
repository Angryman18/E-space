"use client";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/context/ThemeCtx";
import SideBar from "@/components/Sidebar/Sidebar";
import BaseButtonStructure from "@/components/RecentSection/BaseButtonStructure";
import SearchBar from "@/components/TopBar/SearchBar";

const inter = Inconsolata({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const handleFolderClick = (val: string) => console.log("Hello");
  const handleCreateClick = () => console.log("Hello");
  return (
    <html lang='en'>
      <body data-testid='layout_body' className={`${inter.className} dark:bg-black`}>
        <ThemeProvider>
          <div className='flex'>
            <div className='w-[18%]'>
              <SideBar />
            </div>
            <div className='w-[82%]'>
              <SearchBar />
              <hr className="my-4" />
              <div className='overflow-x-scroll'>
                <div className='inline-flex overflow-hidden'>
                  <BaseButtonStructure.Create handleCreateClick={handleCreateClick} />
                  <BaseButtonStructure
                    folderName='Video'
                    handleFolderClick={handleFolderClick.bind(null, "1")}
                  />
                  <BaseButtonStructure
                    folderName='Images'
                    handleFolderClick={handleFolderClick.bind(null, "1")}
                  />
                  <BaseButtonStructure
                    folderName='Backups'
                    handleFolderClick={handleFolderClick.bind(null, "1")}
                  />
                  <BaseButtonStructure
                    folderName='Documents'
                    handleFolderClick={handleFolderClick.bind(null, "1")}
                  />
                  <BaseButtonStructure
                    folderName='Movies'
                    handleFolderClick={handleFolderClick.bind(null, "1")}
                  />
                  <BaseButtonStructure
                    folderName='Games'
                    handleFolderClick={handleFolderClick.bind(null, "1")}
                  />
                  <BaseButtonStructure
                    folderName='Animie'
                    handleFolderClick={handleFolderClick.bind(null, "1")}
                  />
                </div>
              </div>
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
