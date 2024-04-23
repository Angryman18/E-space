import React from "react";
import BaseButtonStructure from "./BaseButtonStructure";

const Recent = () => {
  const handleFolderClick = (val: string) => console.log("Hello");
  const handleCreateClick = () => console.log("Hello");
  return (
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
  );
};

export default Recent;
