import { ThemeContext } from "@/context/ThemeCtx";
import { useContext } from "react";

export default function useCtx() {
  const themeCtx = useContext(ThemeContext);

  return { themeCtx };
}
