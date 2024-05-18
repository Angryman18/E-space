"use client";

import { tableIcon, listIcon } from "@/icons";
import Image from "next/image";
import style from "./style.module.css";
import React, { useCallback, useState } from "react";
import { ViewType } from "@/types";

const ViewSwitch = () => {
  const [currentView, setCurrentView] = useState<ViewType>("List");

  const generateViewClass = useCallback((isView: boolean) => {
    return isView
      ? style.view_switch_button + " " + style.view_switch_button_selected
      : style.view_switch_button;
  }, []);

  const handleChangeView = (view: ViewType) => {
    setCurrentView(view);
  };

  return (
    <div className='flex gap-x-2'>
      <div
        onClick={handleChangeView.bind(null, "List")}
        className={generateViewClass(currentView === "List")}
      >
        <span>List</span>
        <Image src={listIcon} width={16} height={16} alt='table' />
      </div>
      <div
        onClick={handleChangeView.bind(null, "Icon")}
        className={generateViewClass(currentView === "Icon")}
      >
        <span>Icon</span>
        <Image src={tableIcon} width={16} height={16} alt='table' />
      </div>
    </div>
  );
};

export default React.memo(ViewSwitch);
