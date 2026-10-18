import LanguageToggleWrapper from "@/components/LanguageToggleWrapper";
import { getAllBlogPosts } from "@/lib/blog";

export default function Page() {
  const allPosts = getAllBlogPosts();
  const recentPosts = allPosts.slice(0, 2);

  return <LanguageToggleWrapper recentBlogs={recentPosts} />;
}
