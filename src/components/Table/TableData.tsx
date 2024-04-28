import React from "react";
import MimeDesign from "../Mimedesign/MimeDesign";
import { docIcon, imageIcon, videoIcon } from "@/icons";
import { StaticImageData } from "next/image";

const DataRow = ({ iconType, name }: { iconType: string | StaticImageData; name: string }) => {
  return (
    <td>
      <div className='flex items-center gap-x-2'>
        <MimeDesign iconType={iconType} /> {name}
      </div>
    </td>
  );
};

const TableData: React.FC<{ className: string }> = (props) => {
  return (
    <tbody className={props.className}>
      <tr className='dark:hover:bg-gray-700 duration-75'>
        <DataRow iconType={imageIcon} name='My Image File' />
        <td>FFDA256FDA95</td>
        <td>25 MB</td>
        <td>Image</td>
        <td>2 Days ago</td>
      </tr>
      <tr className='dark:hover:bg-gray-700 duration-75'>
        <DataRow iconType={docIcon} name='My Doc File' />
        <td>FFDA256FDA95</td>
        <td>36.45 KB</td>
        <td>Doc</td>
        <td>5 Days ago</td>
      </tr>
      <tr className='dark:hover:bg-gray-700 duration-75'>
        <DataRow iconType={videoIcon} name='My Video File' />
        <td>FFDA256FDA95</td>
        <td>201.62 MB</td>
        <td>Video</td>
        <td>1 Day ago</td>
      </tr>
      <tr className='dark:hover:bg-gray-700 duration-75'>
        <DataRow iconType={videoIcon} name='My Video File' />
        <td>FFDA256FDA95</td>
        <td>201.62 MB</td>
        <td>Video</td>
        <td>1 Day ago</td>
      </tr>
      <tr className='dark:hover:bg-gray-700 duration-75'>
        <DataRow iconType={videoIcon} name='My Video File' />
        <td>FFDA256FDA95</td>
        <td>201.62 MB</td>
        <td>Video</td>
        <td>1 Day ago</td>
      </tr>
      <tr className='dark:hover:bg-gray-700 duration-75'>
        <DataRow iconType={videoIcon} name='My Video File' />
        <td>FFDA256FDA95</td>
        <td>201.62 MB</td>
        <td>Video</td>
        <td>1 Day ago</td>
      </tr>
      <tr className='dark:hover:bg-gray-700 duration-75'>
        <DataRow iconType={videoIcon} name='My Video File' />
        <td>FFDA256FDA95</td>
        <td>201.62 MB</td>
        <td>Video</td>
        <td>1 Day ago</td>
      </tr>
      <tr className='dark:hover:bg-gray-700 duration-75'>
        <DataRow iconType={videoIcon} name='My Video File' />
        <td>FFDA256FDA95</td>
        <td>201.62 MB</td>
        <td>Video</td>
        <td>1 Day ago</td>
      </tr>
      <tr className='dark:hover:bg-gray-700 duration-75'>
        <DataRow iconType={videoIcon} name='My Video File' />
        <td>FFDA256FDA95</td>
        <td>201.62 MB</td>
        <td>Video</td>
        <td>1 Day ago</td>
      </tr>
      <tr className='dark:hover:bg-gray-700 duration-75'>
        <DataRow iconType={videoIcon} name='My Video File' />
        <td>FFDA256FDA95</td>
        <td>201.62 MB</td>
        <td>Video</td>
        <td>1 Day ago</td>
      </tr>
      <tr className='dark:hover:bg-gray-700 duration-75'>
        <DataRow iconType={videoIcon} name='My Video File' />
        <td>FFDA256FDA95</td>
        <td>201.62 MB</td>
        <td>Video</td>
        <td>1 Day ago</td>
      </tr>
    </tbody>
  );
};

export default TableData;
