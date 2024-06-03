import { ThemeContext, TypeCTX } from "@/context/ThemeCtx";
import React from "react";

export const MockThemeProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: TypeCTX;
}) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
