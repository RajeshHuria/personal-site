"use client";

import Link from "next/link";

interface Note {
  slug: string;
  title: string;
  intro: string;
  body: string[];
}

interface NoteContentProps {
  note: Note;
}

export default function NoteContent({ note }: NoteContentProps) {
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
          href="/notes"
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
          ← Back to blogs
        </Link>

        <article style={{ marginTop: "2rem" }}>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              lineHeight: 1.2,
              marginBottom: "1.5rem",
              color: "#0f172a",
            }}
          >
            {note.title}
          </h1>

          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.6,
              color: "#475569",
              marginBottom: "2.5rem",
            }}
          >
            {note.intro}
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {note.body.map((paragraph, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "#475569",
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
