"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import LanguageButton from "@/components/LanguageButton";

import { Switch } from "@/components/ui/switch";

export default function ThemeButtonSwitch() {
  const { theme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  }, [theme]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckedValue = event.target.checked;
    setIsChecked(newCheckedValue);
    handleCheckedChange(newCheckedValue);
  };

  const handleCheckedChange = (checked: boolean) => {
    setIsChecked((prevState) => !prevState);
    if (checked === false) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="absolute flex items-center justify-center gap-4 lg:gap-5 top-6 right-5 lg:right-10 z-50 max-w-6xl mx-auto ">
      <LanguageButton />
      <div className="mx-auto flex flex-row justify-center gap-2">
        <MoonIcon className="h-6 w-6 rotate-0 transition-all dark:rotate-12 dark:scale-100" />
        <Switch checked={isChecked} onCheckedChange={handleCheckedChange} />
        <SunIcon className="h-6 w-6 rotate-90 transition-all dark:rotate-0 dark:scale-100" />
      </div>
    </div>
  );
}
