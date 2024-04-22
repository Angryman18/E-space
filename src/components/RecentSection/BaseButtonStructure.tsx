import { plus, folder } from "@/icons/index";
import Image from "next/image";

type TBase = {
  folderName: string;
  handleFolderClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export default function BaseButtonStructure(props: TBase) {
  return (
    <div
      onClick={props.handleFolderClick}
      className='w-52 select-none ml-2 bg-green-100 rounded-lg p-4 m-2 hover:cursor-pointer active:scale-95 duration-100'
    >
      <Image src={folder} width={40} height={40} alt='plus_icon' className='py-1' />
      <div className='font-bold text-bold dark:text-black'>{props.folderName}</div>
    </div>
  );
}

const Create = (props: { handleCreateClick: () => void }) => {
  return (
    <div
      onClick={props.handleCreateClick}
      className='w-52 ml-2 bg-gray-200 select-none rounded-lg p-4 m-2 hover:cursor-pointer active:scale-95 duration-100'
    >
      <Image src={plus} width={40} height={40} alt='plus_icon' className='py-1' />
      <div className='font-bold text-bold dark:text-black'>Create Folder</div>
    </div>
  );
};

BaseButtonStructure.Create = Create;
