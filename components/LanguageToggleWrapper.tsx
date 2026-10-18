"use client";

import { useLanguage } from "@/app/LanguageProvider";
import { PersonalSiteInner } from "./PersonalSite";
import type { PersonalSiteProps } from "./PersonalSite";

export default function LanguageToggleWrapper(props: PersonalSiteProps) {
  const { lang, setLang } = useLanguage();

  return (
    <div style={{ position: "relative" }}>
      <PersonalSiteInner {...props} lang={lang as "en" | "de"} showLanguageToggle={false} />
      <div
        style={{
          position: "fixed",
          top: "1.5rem",
          right: "1.5rem",
          display: "flex",
          gap: "0.5rem",
          zIndex: 1000,
        }}
      >
        <button
          onClick={() => setLang("en")}
          style={{
            padding: "0.25rem 0.5rem",
            backgroundColor: lang === "en" ? "#2563eb" : "transparent",
            color: lang === "en" ? "#ffffff" : "#475569",
            border: "1px solid #cbd5e1",
            borderRadius: "0.25rem",
            cursor: "pointer",
            fontSize: "0.75rem",
            fontWeight: "500",
            transition: "all 0.3s",
          }}
        >
          EN
        </button>
        <button
          onClick={() => setLang("de")}
          style={{
            padding: "0.25rem 0.5rem",
            backgroundColor: lang === "de" ? "#2563eb" : "transparent",
            color: lang === "de" ? "#ffffff" : "#475569",
            border: "1px solid #cbd5e1",
            borderRadius: "0.25rem",
            cursor: "pointer",
            fontSize: "0.75rem",
            fontWeight: "500",
            transition: "all 0.3s",
          }}
        >
          DE
        </button>
      </div>
    </div>
  );
}
