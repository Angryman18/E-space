import React from "react";

const TableHeader: React.FC<{ className: string }> = (props) => {
  return (
    <thead className={props.className}>
      <tr className='dark:text-white dark:bg-gray-800'>
        <td>File Name</td>
        <td>CID</td>
        <td>Size</td>
        <td>File Type</td>
        <td>Created On</td>
      </tr>
    </thead>
  );
};

export default TableHeader;
