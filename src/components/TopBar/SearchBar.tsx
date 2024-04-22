import { useState } from "react";
import { search } from "@/icons";
import Image from "next/image";

export default function SearchBar() {
  const [isElementFocused, setIsElementFocused] = useState<boolean>(false);

  return (
    <div className='my-4 mx-2'>
      <div
        className={`flex border rounded-2xl w-[40%] min-w-64 overflow-hidden ${
          isElementFocused && "border-gray-400"
        }`}
      >
        <div className='w-12 flex justify-center items-center mx-2'>
          <Image src={search} width={20} height={20} alt='search' className='opacity-40' />
        </div>
        <input
          placeholder='search inside storage'
          className='w-full border-0 py-1 text-lg outline-none'
          type='search'
          onFocus={setIsElementFocused.bind(null, true)}
          onBlur={setIsElementFocused.bind(null, false)}
        />
      </div>
    </div>
  );
}
