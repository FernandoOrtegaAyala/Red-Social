"use client";

import { useEffect } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export default function ThemeButton({
  clases,
  texto,
  tema,
}: {
  clases: string;
  texto: string;
  tema: string;
}) {
  const { theme, setTheme } = useTheme();

  const modeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [theme]);

  return (
    <>
      <button className={`${clases}`} onClick={modeToggle}>
        <MoonIcon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <SunIcon className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <p className={`${texto} ml-2 py-1`}>{tema}</p>
      </button>
    </>
  );
}
