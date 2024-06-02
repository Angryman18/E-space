import React from "react";
import style from "./style.module.css";
import { TLoader } from "@/types";

const Loader = ({ text = "", loader }: { text?: string; loader?: TLoader }) => {
  const Comp = () => {
    switch (loader) {
      case TLoader.Text:
        return <div className={style.loader}></div>;
      case TLoader.Dot:
        return <div className={style.loader2}></div>;
      default:
        return <div className={style.loader}></div>;
    }
  };

  return (
    <div className='flex justify-center items-center flex-col pt-4'>
      {loader === TLoader.Text || !loader && (
        <p className='text-lg font-bold text-center py-4'>{text || "Please Wait..."}</p>
      )}
      <Comp />
    </div>
  );
};

export default Loader;
