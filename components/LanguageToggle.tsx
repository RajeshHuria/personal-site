"use client";

import { useLanguage } from "@/app/LanguageProvider";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div style={{ display: "flex", gap: "0.5rem", marginLeft: "1rem", paddingLeft: "1rem", borderLeft: "1px solid #e2e8f0" }}>
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
  );
}
