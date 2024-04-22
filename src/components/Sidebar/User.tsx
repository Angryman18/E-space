import { profile, arrow_down } from "@/icons/index";
import Image from "next/image";

const User: React.FC<{}> = (props) => {
  return (
    <div className='flex select-none items-center justify-between duration-100 dark:hover:bg-gray-700 hover:bg-gray-50  hover:cursor-pointer hover:rounded-lg'>
      <div className='flex items-center'>
        <Image
          src={profile}
          width={36}
          height={36}
          alt='user'
          className='bg-white rounded-full dark:bg-white'
        />
        <div className='font-bold dark:text-white pl-2'>Shyam Mahanta</div>
      </div>
      <div>
        <Image src={arrow_down} width={16} height={16} alt='arrow_down' />
      </div>
    </div>
  );
};

export default User;
