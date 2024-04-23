import React from "react";
import TableHeader from "./Header";
import style from "./style.module.css";

const Table = () => {
  return (
    <div className="mx-2 overflow-x-scroll">
      <table className='border w-full dark:border-gray-500'>
        <thead>
          <tr className='w-full bg-gray-200 dark:text-white dark:bg-gray-800 border-0'>
            <td className='w-[28%] font-bold px-2'>File Name</td>
            <td className={`w-[18%] ${style.table_style}`}>CID</td>
            <td className={`w-[18%] ${style.table_style}`}>Size</td>
            <td className={`w-[18%] ${style.table_style}`}>File Type</td>
            <td className={`w-[18%] ${style.table_style}`}>Created On</td>
          </tr>
        </thead>
      </table>
      <TableHeader />
    </div>
  );
};

export default Table;
