import React from "react";
import TableHeader from "./Header";
import style from "./style.module.css";
import TableData from "./TableData";

const Table = () => {
  return (
    <div className='mx-2 lg:h-[320px] overflow-y-scroll'>
      <table className='border-0 w-full dark:border-gray-500 overlflow-y-scroll h-[200px]'>
        <TableHeader className={style.thead} />
        <TableData className={style.tbody} />
      </table>
    </div>
  );
};

export default Table;
