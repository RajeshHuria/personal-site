"use client";

import Link from "next/link";
import { useLanguage } from "@/app/LanguageProvider";
import { translations } from "@/lib/translations";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
}

interface BlogsPageClientProps {
  posts: BlogPost[];
}

export default function BlogsPageClient({ posts }: BlogsPageClientProps) {
  const { lang } = useLanguage();
  const t = translations[lang];

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
          className="hover:text-blue-700"
        >
          {t.backHome}
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
          {t.blogs}
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
              className="hover:bg-slate-100 hover:border-slate-300"
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
                  {new Date(post.date).toLocaleDateString(lang === "de" ? "de-DE" : "en-US", {
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
          <p style={{ color: "#94a3b8", fontSize: "1rem" }}>{t.noBlogs}</p>
        )}
      </div>
    </main>
  );
}
