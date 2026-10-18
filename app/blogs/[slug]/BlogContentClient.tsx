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

interface BlogContentClientProps {
  post: BlogPost;
}

export default function BlogContentClient({ post }: BlogContentClientProps) {
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
          {t.backToBlogs}
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
            {new Date(post.date).toLocaleDateString(lang === "de" ? "de-DE" : "en-US", {
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
              <p key={idx}>
                {paragraph.split(/(\bhttps?:\/\/[^\s]+)/g).map((part, i) =>
                  part.match(/\bhttps?:\/\/[^\s]+/) ? (
                    <a
                      key={i}
                      href={part}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#2563eb",
                        textDecoration: "underline",
                        transition: "color 0.3s",
                      }}
                    >
                      {part}
                    </a>
                  ) : (
                    part
                  )
                )}
              </p>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
