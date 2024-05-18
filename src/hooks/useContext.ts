import { ThemeContext } from "@/context/ThemeCtx";
import { UserContext } from "@/context/UserCtx";
import { useContext } from "react";

export default function useCtx() {
  const themeCtx = useContext(ThemeContext);
  const userCtx = useContext(UserContext);

  return { themeCtx, userCtx };
}
