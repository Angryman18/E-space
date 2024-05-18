import { useState } from "react";
import { search_dark, search_light } from "@/icons";
import Image from "next/image";
import useCtx from "@/hooks/useContext";
import style from './searchbar.module.css'

export default function SearchBar() {
  const [isElementFocused, setIsElementFocused] = useState<boolean>(false);
  const {
    themeCtx: { isDark },
  } = useCtx();
  // console.log('is dark ', isDark ? search_dark : search_light)
  return (
    <div className='my-4 mx-2'>
      <div
        className={`flex border-2 rounded-full w-[40%] min-w-64 overflow-hidden pr-4 ${
          isElementFocused && "border-gray-400"
        }`}
      >
        <div className='w-12 flex justify-center items-center mx-2'>
          <Image
            src={isDark ? search_dark : search_light}
            width={20}
            height={20}
            alt='search'
            className='opacity-50'
          />
        </div>
        <input
          placeholder='search inside storage'
          className='w-full py-1 text-lg outline-none dark:bg-black dark:text-white'
          type='search'
          onFocus={setIsElementFocused.bind(null, true)}
          onBlur={setIsElementFocused.bind(null, false)}
        />
      </div>
      {/* <div className={style.backdrop}></div> */}
    </div>
  );
}
