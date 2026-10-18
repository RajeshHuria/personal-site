"use client";

import dynamic from "next/dynamic";
import type { PersonalSiteProps } from "@/components/PersonalSite";

const LanguageToggleWrapper = dynamic(() => import("@/components/LanguageToggleWrapper"), {
  ssr: false,
});

export default function PageClient(props: PersonalSiteProps) {
  return <LanguageToggleWrapper {...props} />;
}
