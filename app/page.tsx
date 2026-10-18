import { PersonalSiteInner } from "@/components/PersonalSite";
import { getAllBlogPosts } from "@/lib/blog";

export default function Page() {
  const allPosts = getAllBlogPosts();
  const recentPosts = allPosts.slice(0, 2);

  return <PersonalSiteInner recentBlogs={recentPosts} lang="de" setLang={() => {}} />;
}
