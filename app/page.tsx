import dynamic from "next/dynamic";
import { PersonalSiteInner } from "@/components/PersonalSite";
import { getAllBlogPosts } from "@/lib/blog";

const LanguageToggleWrapper = dynamic(() => import("@/components/LanguageToggleWrapper"), {
  ssr: false,
  loading: () => <PersonalSiteInner recentBlogs={[]} lang="de" />,
});

export default function Page() {
  const allPosts = getAllBlogPosts();
  const recentPosts = allPosts.slice(0, 2);

  return <LanguageToggleWrapper recentBlogs={recentPosts} />;
}
