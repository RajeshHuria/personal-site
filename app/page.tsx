import PageClient from "./page-client";
import { getAllBlogPosts } from "@/lib/blog";

export default function Page() {
  const allPosts = getAllBlogPosts();
  const recentPosts = allPosts.slice(0, 2);

  return <PageClient recentBlogs={recentPosts} />;
}
