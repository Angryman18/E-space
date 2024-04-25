import Image, { StaticImageData } from "next/image";
import React from "react";

const MimeDesign: React.FC<{ iconType: string | StaticImageData }> = ({ iconType }) => {
  return (
    <Image
      className='p-1 rounded-md bg-gray-100 dark:bg-white inline'
      src={iconType}
      width={28}
      height={28}
      alt='icon'
    />
  );
};

export default MimeDesign;
