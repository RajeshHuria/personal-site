import Link from "next/link";
import { getBlogPost, getBlogSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";

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
    <main
      style={{
        backgroundColor: "#ffffff",
        color: "#1e293b",
        minHeight: "100vh",
        padding: "3rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "60rem",
          marginLeft: 0,
        }}
      >
        <Link
          href="/blogs"
          style={{
            fontSize: "0.875rem",
            color: "#2563eb",
            textDecoration: "none",
            fontWeight: "500",
            transition: "color 0.3s",
          }}
          className="hover:text-blue-700"
        >
          ← Back to blogs
        </Link>

        <article style={{ marginTop: "2rem" }}>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              lineHeight: 1.2,
              marginBottom: "0.5rem",
              color: "#0f172a",
            }}
          >
            {post.title}
          </h1>

          <p style={{ color: "#94a3b8", fontSize: "0.875rem", marginBottom: "2.5rem" }}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "#475569",
            }}
          >
            {post.content.split("\n\n").map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
