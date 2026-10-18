"use client";

import { useLanguage } from "@/app/LanguageProvider";
import { PersonalSiteInner } from "./PersonalSite";
import type { PersonalSiteProps } from "./PersonalSite";

export default function PersonalSiteClient(props: PersonalSiteProps) {
  const { lang } = useLanguage();
  return <PersonalSiteInner {...props} lang={lang} showLanguageToggle />;
}
