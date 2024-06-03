import useCtx from "@/hooks/useContext";
import { profile, arrow_down } from "@/icons/index";
import Image from "next/image";

const User: React.FC<{}> = (props) => {
  const {
    userCtx: { user },
  } = useCtx();
  return (
    <div className='flex select-none items-center justify-between duration-100 dark:hover:bg-gray-700 hover:bg-gray-50  hover:cursor-pointer hover:rounded-lg'>
      <div className='flex items-center'>
        <Image
          src={user.avatar ?? profile}
          width={36}
          height={36}
          alt='user'
          data-testid="user:image"
          className='bg-white rounded-full dark:bg-white'
        />
        <div data-testid="user:fullname" className='font-bold dark:text-white pl-2'>{user.fullname}</div>
      </div>
      <div>
        <Image src={arrow_down} width={16} height={16} alt='arrow_down' />
      </div>
    </div>
  );
};

export default User;
