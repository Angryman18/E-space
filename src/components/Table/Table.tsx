import React from "react";
import TableHeader from "./Header";
import style from "./style.module.css";
import TableData from "./TableData";

const Table = () => {
  return (
    <div className='mx-2 overflow-y-scroll lg:max-h-[40vh] xl:max-h-[55vh] 2xl:max-h[60vh]'>
      <table className='border-0 w-full dark:border-gray-500 overlflow-y-scroll'>
        <TableHeader className={style.thead} />
        <TableData className={style.tbody} />
      </table>
    </div>
  );
};

export default Table;
