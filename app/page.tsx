import PersonalSiteClient from "@/components/PersonalSiteClient";
import { getAllBlogPosts } from "@/lib/blog";

export default function Page() {
  const allPosts = getAllBlogPosts();
  const recentPosts = allPosts.slice(0, 2);

  return <PersonalSiteClient recentBlogs={recentPosts} />;
}
