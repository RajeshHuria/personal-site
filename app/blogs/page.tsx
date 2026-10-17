import { getAllBlogPosts } from "@/lib/blog";
import Link from "next/link";

export default function BlogsPage() {
  const posts = getAllBlogPosts();

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
          maxWidth: "80rem",
          marginLeft: 0,
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: "0.875rem",
            color: "#2563eb",
            textDecoration: "none",
            fontWeight: "500",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#1e40af")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#2563eb")}
        >
          ← Back home
        </Link>

        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginTop: "2rem",
            marginBottom: "3rem",
            color: "#0f172a",
          }}
        >
          Blogs
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              style={{
                padding: "1.5rem",
                backgroundColor: "#f8fafc",
                borderRadius: "0.5rem",
                border: "1px solid #e2e8f0",
                textDecoration: "none",
                color: "inherit",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f1f5f9";
                e.currentTarget.style.borderColor = "#cbd5e1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#f8fafc";
                e.currentTarget.style.borderColor = "#e2e8f0";
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                <h2
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "#2563eb",
                  }}
                >
                  {post.title}
                </h2>
                <span style={{ color: "#94a3b8", fontSize: "0.875rem", whiteSpace: "nowrap" }}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <p style={{ color: "#94a3b8", fontSize: "1rem" }}>No blogs yet.</p>
        )}
      </div>
    </main>
  );
}
