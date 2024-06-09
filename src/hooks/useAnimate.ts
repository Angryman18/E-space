import { useRef, useState } from "react";

export default function useAnimate(style: Readonly<Record<string, any>>) {
  const [popupClass, setPopupClass] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [optionBtnClass, setOptionBtnClass] = useState("");

  const handleClickUserIcon = () => {
    if (showPopup) return handleBlur();
    setShowPopup(!showPopup);
    setPopupClass(style["dropdown-appear"]);
    setOptionBtnClass(style["option-btn"]);
    if (menuRef.current) menuRef.current.focus();
  };

  const handleBlur = () => {
    if (!showPopup) return;
    setPopupClass(style["dropdown-disappear"]);
    setOptionBtnClass(style["option-btn-disappear"]);
    const timer = setTimeout(() => {
      setShowPopup(false);
      clearTimeout(timer);
    }, 200);
  };

  return { handleBlur, handleClickUserIcon, optionBtnClass, popupClass, showPopup };
}
