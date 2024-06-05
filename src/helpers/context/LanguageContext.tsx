"use client";

import { createContext, useContext, useState } from "react";
import data from "@/data/traducciones.json";

type Language = "es" | "en";

const initialLanguage = "es";

type TranslationStructure = {
  [key: string]: string;
};

type LanguageContextType = {
  texts: TranslationStructure;
  handleLanguage: () => void;
};

const defaultValue: LanguageContextType = {
  texts: data[initialLanguage],
  handleLanguage: () => {},
};

export const LanguageContext = createContext<LanguageContextType>(defaultValue);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [texts, setTexts] = useState(data[language]);

  const handleLanguage = () => {
    const newLanguage = language === "es" ? "en" : "es";
    setLanguage(newLanguage);
    setTexts(data[newLanguage]);
  };
  return (
    <LanguageContext.Provider value={{ texts, handleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error(
      "useLanguageContext must be used within a LanguageProvider"
    );
  }
  return context;
};

export default useLanguageContext;

//Para consumirlo
// const { texts } = useLanguageContext();
