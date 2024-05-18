"use client";

import { ThemeContext } from "@/context/ThemeCtx";
import React, { useContext } from "react";

const Toggle = () => {
  const ctx = useContext(ThemeContext);
  return <button onClick={() => ctx.handleSetTheme()}>Toggle</button>;
};

export default Toggle;
