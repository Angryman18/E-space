import useCtx from "@/hooks/useContext";
import { profile, arrow_down } from "@/icons/index";
import Image from "next/image";
import { useRef, useState } from "react";
import style from "./style.module.css";
import useAnimate from "@/hooks/useAnimate";
import useMenu from "@/hooks/useMenu";

const User: React.FC<{}> = (props) => {
  const {
    userCtx: { user },
  } = useCtx();
  const menuRef = useRef<HTMLDivElement>(null);
  const { handleBlur, handleClickUserIcon, optionBtnClass, popupClass, showPopup } =
    useAnimate(style);
  const { signOutWithRedirect } = useMenu();

  return (
    <div>
      <div
        onClick={handleClickUserIcon}
        tabIndex={0}
        onBlur={handleBlur}
        ref={menuRef}
        className={`flex ${
          showPopup
            ? "bg-white rounded-tr-lg dark:bg-gray-700 rounded-tl-lg shadow-lg"
            : "hover:rounded-lg"
        } select-none items-center justify-between duration-100 dark:hover:bg-gray-700 hover:bg-gray-50  hover:cursor-pointer`}
      >
        <div className='flex items-center'>
          <Image
            src={user.avatar ?? profile}
            width={36}
            height={36}
            alt='user'
            data-testid='user:image'
            className='bg-white rounded-full dark:bg-white'
          />
          <div data-testid='user:fullname' className='font-bold dark:text-white pl-2'>
            {user.fullname}
          </div>
        </div>
        <div>
          <Image src={arrow_down} width={16} height={16} alt='arrow_down' />
        </div>
      </div>
      {showPopup && (
        <div
          className={`${popupClass} h-36 w-auto dark:bg-slate-700 bg-white rounded-br-lg rounded-bl-lg shadow-md`}
        >
          <div className='flex flex-col '>
            <button className={`${optionBtnClass} dark:hover:bg-slate-600`}>Accounts</button>
            <button className={`${optionBtnClass} dark:hover:bg-slate-600`}>Settings</button>
            <button
              className={`${optionBtnClass} dark:hover:bg-slate-600`}
              onMouseDown={() => {
                handleBlur();
                signOutWithRedirect();
              }}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
