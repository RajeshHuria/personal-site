"use client";

import Link from "next/link";
import { marked } from "marked";
import React from "react";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
}

interface BlogContentClientProps {
  post: BlogPost;
  backToBlogs: string;
}

function linkifyText(text: string): (string | React.ReactElement)[] {
  // Handle markdown links [text](url) and raw URLs
  const urlRegex = /(\bhttps?:\/\/[^\s\)]+)/g;
  const mdRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;
  const matches: Array<{ start: number; end: number; text: string; url: string }> = [];

  while ((match = mdRegex.exec(text)) !== null) {
    matches.push({ start: match.index, end: match.index + match[0].length, text: match[1], url: match[2] });
  }

  if (matches.length === 0) {
    // No markdown links, process raw URLs
    const parts = text.split(urlRegex);
    return parts.map((part, i) =>
      part.match(/\bhttps?:\/\/[^\s\)]+/) ? (
        <a key={i} href={part} target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb", textDecoration: "underline" }}>
          {part}
        </a>
      ) : (
        part
      )
    );
  }

  // Process with markdown links
  const result: (string | React.ReactElement)[] = [];
  let lastIndex = 0;

  matches.forEach((m, i) => {
    if (m.start > lastIndex) {
      result.push(text.substring(lastIndex, m.start));
    }
    result.push(
      <a key={`md-${i}`} href={m.url} target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb", textDecoration: "underline" }}>
        {m.text}
      </a>
    );
    lastIndex = m.end;
  });

  if (lastIndex < text.length) {
    result.push(text.substring(lastIndex));
  }

  return result;
}

function renderMarkdown(markdown: string) {
  const tokens = marked.lexer(markdown);
  return tokens.map((token, idx) => {
    if (token.type === "heading") {
      const headingToken = token as { depth: number; text: string };
      const styles = {
        2: { fontSize: "1.75rem", fontWeight: "700", marginTop: "2rem", marginBottom: "1rem", color: "#0f172a" },
        3: { fontSize: "1.25rem", fontWeight: "600", marginTop: "1.5rem", marginBottom: "0.75rem", color: "#1e293b" },
        4: { fontSize: "1.125rem", fontWeight: "600", marginTop: "1.25rem", marginBottom: "0.5rem", color: "#1e293b" },
      } as Record<number, React.CSSProperties>;

      const HeadingComponent = {
        2: "h2",
        3: "h3",
        4: "h4",
      }[headingToken.depth] || "h2";

      return React.createElement(
        HeadingComponent,
        { key: idx, style: styles[headingToken.depth] || styles[2] },
        headingToken.text
      ) as React.ReactElement;
    }
    if (token.type === "paragraph") {
      return (
        <p key={idx} style={{ marginBottom: "1.5rem", color: "#475569", lineHeight: "1.7" }}>
          {linkifyText(token.text)}
        </p>
      );
    }
    if (token.type === "list") {
      const listToken = token as { ordered: boolean; items: Array<{ text: string }> };
      const ListTag = listToken.ordered ? "ol" : "ul";
      return React.createElement(
        ListTag,
        { key: idx, style: { marginBottom: "1.5rem", marginLeft: "2rem", color: "#475569", lineHeight: "1.7" } },
        listToken.items.map((item, i) =>
          React.createElement("li", { key: i, style: { marginBottom: "0.5rem" } }, item.text)
        )
      );
    }
    if (token.type === "code") {
      return (
        <pre key={idx} style={{ backgroundColor: "#f1f5f9", padding: "1rem", borderRadius: "0.5rem", overflow: "auto", marginBottom: "1.5rem" }}>
          <code style={{ color: "#1e293b", fontSize: "0.875rem", fontFamily: "monospace" }}>{token.text}</code>
        </pre>
      );
    }
    if (token.type === "blockquote") {
      return (
        <blockquote key={idx} style={{ borderLeft: "4px solid #2563eb", paddingLeft: "1rem", marginLeft: 0, marginBottom: "1.5rem", color: "#64748b", fontStyle: "italic" }}>
          {token.text}
        </blockquote>
      );
    }
    if (token.type === "image") {
      const imgToken = token as { href: string; title?: string; text: string };
      return (
        <figure key={idx} style={{ marginBottom: "1.5rem", marginLeft: 0, marginRight: 0 }}>
          <img src={imgToken.href} alt={imgToken.text} style={{ width: "100%", borderRadius: "0.5rem", marginBottom: "0.5rem" }} />
          {imgToken.text && <figcaption style={{ fontSize: "0.875rem", color: "#64748b", fontStyle: "italic", textAlign: "center" }}>{imgToken.text}</figcaption>}
        </figure>
      );
    }
    return null;
  });
}

export default function BlogContentClient({ post, backToBlogs }: BlogContentClientProps) {

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
          {backToBlogs}
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

          <div style={{ fontSize: "1rem", color: "#475569" }}>
            {renderMarkdown(post.content)}
          </div>
        </article>
      </div>
    </main>
  );
}
