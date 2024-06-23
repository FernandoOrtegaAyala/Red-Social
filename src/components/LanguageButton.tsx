"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { type Locale } from "../lib/locales";

function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

const removeLocalePrefix = (pathname, prefixes) => {
  for (let prefix of prefixes) {
    if (pathname.startsWith(prefix)) {
      return pathname.substring(prefix.length);
    }
  }
  return pathname;
};

export default function LanguageButton() {
  const router = useRouter();
  const pathname = usePathname();

  const cookieLanguage = getCookie("NEXT_LOCALE");

  function handleLocaleChange(newLocale: Locale): void {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.push(`/${newLocale}/${cleanedPathname}`);
  }

  useEffect(() => {}, []);

  const prefixes = ["/es", "/en"];

  const cleanedPathname = removeLocalePrefix(pathname, prefixes);

  return (
    <div className="w-full h-full flex items-center justify-start lg:justify-center text-lg lg:text-lg enlaces hover:text-sky-600 text-current">
      {cookieLanguage == "en" ? (
        <button
          onClick={() => {
            handleLocaleChange("es");
          }}>
          ESP
        </button>
      ) : (
        <button
          onClick={() => {
            handleLocaleChange("en");
          }}>
          ENG
        </button>
      )}
    </div>
  );
}
