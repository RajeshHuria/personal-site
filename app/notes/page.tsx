"use client";

import Link from "next/link";

const notes = [
  {
    slug: "ai-agents-simulate-execution",
    title: "Why AI agents fail when they simulate execution",
    blurb: "Agents say they did things, but nothing actually ran.",
  },
  {
    slug: "practical-multi-agent-lessons",
    title: "Lessons from building a practical multi-agent system",
    blurb: "Clear roles and verification make agent systems work.",
  },
  {
    slug: "ollama-task-runner-linkedin-summary",
    title: "Ollama Task Runner LinkedIn Summary",
    blurb:
      "Introducing my local Ollama task runner improvements on LinkedIn.",
  },
];

export default function NotesPage() {
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
          {notes.map((note) => (
            <Link
              key={note.slug}
              href={`/notes/${note.slug}`}
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
              <h2
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                  color: "#2563eb",
                }}
              >
                {note.title}
              </h2>
              <p style={{ fontSize: "0.95rem", color: "#64748b" }}>
                {note.blurb}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
