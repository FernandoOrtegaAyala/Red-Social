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

export default function LanguageToolbar() {
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
    <div className="relative w-full h-10 flex flex-row items-center hover:bg-ring hover:text-white hover:rounded-md">
      <svg
        className="w-6 h-full"
        aria-label=""
        fill="currentColor"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24">
        <path d="M13.25 5.124h-2.875v-.372a.875.875 0 0 0-1.75 0v.372H5.759a.875.875 0 1 0 0 1.75h.643a8.794 8.794 0 0 0 1.712 2.723 4.84 4.84 0 0 1-1.481.536.875.875 0 0 0 .116 1.742.891.891 0 0 0 .113-.007 6.982 6.982 0 0 0 2.659-1.081 6.99 6.99 0 0 0 2.608 1.08.87.87 0 0 0 .984-.741.878.878 0 0 0-.736-.992 4.846 4.846 0 0 1-1.453-.537 8.57 8.57 0 0 0 1.681-2.723h.645a.875.875 0 0 0 0-1.75Zm-3.73 3.41a6.78 6.78 0 0 1-1.196-1.66h2.37a6.583 6.583 0 0 1-1.175 1.66ZM20 5a1 1 0 0 0 0 2 1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-6a1 1 0 0 0-1 1v1.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l4 4A1 1 0 0 0 15 22v-3h5a3.003 3.003 0 0 0 3-3V8a3.003 3.003 0 0 0-3-3Zm-5 10a3.003 3.003 0 0 0 3-3V4a3.003 3.003 0 0 0-3-3H4a3.003 3.003 0 0 0-3 3v8a3.003 3.003 0 0 0 3 3v3a1 1 0 0 0 1.625.781L10.351 15Zm-5.625-1.781L6 15.919V14a1 1 0 0 0-1-1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-5a1.002 1.002 0 0 0-.625.219Z"></path>
      </svg>
      {cookieLanguage == "en" ? (
        <button
          className="w-full h-full text-start pl-3"
          onClick={() => {
            handleLocaleChange("es");
          }}>
          Cambiar idioma
        </button>
      ) : (
        <button
          className="w-full h-full text-start pl-3"
          onClick={() => {
            handleLocaleChange("en");
          }}>
          Change language
        </button>
      )}
    </div>
  );
}
