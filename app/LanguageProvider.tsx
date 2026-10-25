"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language } from "@/lib/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function detectBrowserLanguage(): Language {
  if (typeof navigator === "undefined") return "de";

  const lang = navigator.language.toLowerCase();
  const languages = navigator.languages?.map((l) => l.toLowerCase()) || [];

  // Check if any language is German (de-DE, de-AT, de-CH, etc.)
  const allLangs = [lang, ...languages];
  const isGerman = allLangs.some((l) => l.startsWith("de"));

  return isGerman ? "de" : "en";
}

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";

  const stored = localStorage.getItem("language") as Language | null;
  if (stored === "en" || stored === "de") {
    return stored;
  }

  return detectBrowserLanguage();
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => getInitialLanguage());

  useEffect(() => {
    localStorage.setItem("language", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
