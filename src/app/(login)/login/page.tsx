"use client";
import React from "react";
// import { wave1, wave2 } from "@/icons";
import "./style.css";
// import Image from "next/image";

const LoginPage = () => {
  const handleClick = () => {
    const url = new URL(process.env.NEXT_PUBLIC_SSO_URL!);
    const currURL = window.location.origin;
    url.searchParams.append("next", `${currURL}/callback`);
    url.searchParams.append("next", window.location.href);
    window.location.replace(url);
  };

  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
      <div className='wave-container relative'>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <div className='w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl fade-in relative z-10'>
            <div className='md:flex'>
              <div className='w-full p-8 text-center'>
                <h1 className='text-4xl font-bold text-blue-600 mb-6 hero-text flex items-center justify-center'>
                  <i className='fas fa-rocket mr-3'></i> Engine
                  <span className='before:block mx-2 before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-800 text-white relative inline-block'>
                    <span className='relative text-white'>Space</span>
                  </span>
                </h1>
                <div className='mb-6'>
                  <h2 className='text-2xl font-semibold text-gray-700 mb-4'>
                    Welcome to Engine Space!
                  </h2>
                  <ul className='text-left list-disc list-inside space-y-2 text-gray-600'>
                    <li>Engine Space is offering 50MB storage per user completely free of cost.</li>
                    <li>Safely store your documents with us.</li>
                    <li>Access them anytime, anywhere.</li>
                  </ul>
                </div>
                <button
                  onClick={handleClick}
                  className='mt-6 px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold shadow-lg transform transition hover:bg-blue-700 hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'
                >
                  Login with Engine SSO
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
      </div>
    </div>
  );
};

export default LoginPage;
