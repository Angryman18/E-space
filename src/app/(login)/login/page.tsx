"use client";
import React from "react";
import { wave1, wave2 } from "@/icons";
import Image from "next/image";

const LoginPage = () => {
  const handleClick = () => {
    const url = new URL(process.env.NEXT_PUBLIC_SSO_URL!);
    const currURL = window.location.origin;
    url.searchParams.append("next", `${currURL}/callback`);
    url.searchParams.append("next", currURL);
    window.location.replace(url);
  };

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative", overflow: "hidden" }}>
      <Image className='absolute -bottom-[10px] left-0 right-0 w-[100vw]' src={wave1} alt='wave' />
      <Image
        className='absolute rotate-180 -top-[10px] left-0 right-0 w-[100vw]'
        src={wave2}
        alt='wave'
      />

      <div className='z-40 font-bold absolute left-16 top-16 text-4xl text-white select-none'>
        Engine Space
      </div>
      <div className='flex items-center justify-center border-2 border-black h-screen'>
        {/* <button
          onMouseEnter={() => setText(" ->")}
          onMouseOut={() => setText("")}
          className='px-8 py-4 bg-blue-500 text-xl transition-all ease-in-out outline-none hover:bg-blue-600 duration-75 text-white rounded-lg'
        >
          Login with Engine SSO{text}
        </button> */}

        <button
          onClick={handleClick}
          className='px-8 py-4 relative group text-white bg-blue-500 hover:bg-blue-600 text-xl rounded-lg transition-all duration-300 ease-in-out'
        >
          <span className='group-hover:pr-6 transition-all duration-300 ease-in-out'>
            Login with Engine SSO
          </span>
          <span className='absolute pr-4 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out'>
            {" →"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
