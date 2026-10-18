import Link from "next/link";
import { getBlogPost, getBlogSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";
import BlogContentClient from "./BlogContentClient";

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <BlogContentClient post={post} />
  );
}
