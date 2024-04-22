"use client";

import React, { createContext, useEffect, useState } from "react";

export type TypeCTX = {
  theme: "dark" | "light";
  handleSetTheme: () => void;
  isDark: boolean;
};

export const ThemeContext = createContext<TypeCTX>({
  theme: "dark",
  handleSetTheme: () => undefined,
  isDark: true,
});

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const isNotSSR = typeof window !== "undefined";
  const [theme, setTheme] = useState<TypeCTX["theme"]>(
    isNotSSR ? (localStorage.getItem("theme") as TypeCTX["theme"]) ?? "light" : "light"
  );

  const handleSetTheme = (theme: TypeCTX["theme"]) => {
    if (typeof window !== "undefined") {
      document.querySelector("html")?.classList.remove("dark", "light");
      document.querySelector("html")?.classList.add(theme);
      localStorage.setItem("theme", theme);
      setTheme(theme);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "light") handleSetTheme("light");
    else handleSetTheme("dark");
  }, []);

  const changeThemeHandler = () => {
    if (theme === "light") handleSetTheme("dark");
    else handleSetTheme("light");
  };

  return (
    <ThemeContext.Provider
      value={{ theme, handleSetTheme: changeThemeHandler, isDark: theme === "dark" }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
