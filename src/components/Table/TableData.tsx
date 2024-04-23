import React from "react";

const TableData: React.FC<{ className: string }> = (props) => {
  return (
    <tbody className={props.className}>
      <tr className='dark:hover:bg-gray-700 duration-75'>
        <td>My File</td>
        <td>My File</td>
        <td>My File</td>
        <td>My File</td>
        <td>My File</td>
      </tr>
      <tr className='dark:hover:bg-gray-700 duration-75'>
        <td>My File</td>
        <td>My File</td>
        <td>My File</td>
        <td>My File</td>
        <td>My File</td>
      </tr>
      <tr className='dark:hover:bg-gray-700 duration-75'>
        <td>My File</td>
        <td>My File</td>
        <td>My File</td>
        <td>My File</td>
        <td>My File</td>
      </tr>
    </tbody>
  );
};

export default TableData;
