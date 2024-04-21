import React, { createContext, useEffect, useState } from "react";

type TypeCTX = {
  theme: "dark" | "light";
  handleSetTheme: () => void;
};

export const ThemeContext = createContext<TypeCTX>({
  theme: "dark",
  handleSetTheme: () => undefined,
});

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<TypeCTX["theme"]>(
    (localStorage.getItem("theme") as TypeCTX["theme"]) ?? "light"
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
    <ThemeContext.Provider value={{ theme, handleSetTheme: changeThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
}
