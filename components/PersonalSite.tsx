"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    id: "mcp-teamviewer",
    title: "TeamViewer MCP Server",
    description: "Model Context Protocol server exposing TeamViewer Web API as tools for Claude. Enables programmatic device management and session control.",
    tags: ["Python", "FastAPI", "MCP", "APIs"],
    year: 2024,
  },
  {
    id: "personal-site",
    title: "Personal Portfolio Site",
    description: "Full-stack portfolio with blog integration, dark mode, and optimized performance. Built with Next.js and TypeScript.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    year: 2024,
  },
  {
    id: "release-automation",
    title: "Release Automation Framework",
    description: "Internal framework for coordinating multi-team releases at TeamViewer. Handles versioning, testing, and deployment orchestration.",
    tags: ["Python", "CI/CD", "DevOps"],
    year: 2023,
  },
];

const focusAreas = [
  {
    title: "Multi-agent systems",
    description: "Delegation, execution, verification — in that order. Building systems where AI agents collaborate reliably.",
  },
  {
    title: "Reliable delivery",
    description: "Improving release flow and operational clarity. Making deployments safe, fast, and predictable.",
  },
  {
    title: "Systems + infrastructure",
    description: "Remote execution, local AI, lightweight automation. Building tools that scale without complexity.",
  },
  {
    title: "Product-minded engineering",
    description: "Software, developer experience, practical outcomes. Code that solves real problems.",
  },
];

const notes = [
  {
    slug: "ai-agents-simulate-execution",
    title: "Why AI agents fail when they simulate execution",
    tag: "Agents",
    date: "2024-10-01",
    readTime: 5,
  },
  {
    slug: "local-plus-cloud-coding-setup",
    title: "Local + cloud coding setup",
    tag: "Setup",
    date: "2024-09-15",
    readTime: 8,
  },
  {
    slug: "practical-multi-agent-lessons",
    title: "Multi-agent lessons from the field",
    tag: "Systems",
    date: "2024-08-20",
    readTime: 12,
  },
];

export default function PersonalSite() {
  const cursorRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        color: "#1e293b",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <header style={{ borderBottom: "1px solid #e2e8f0", padding: "1.5rem 1.5rem" }}>
        <nav
          style={{
            maxWidth: "80rem",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "1.5rem", fontWeight: "700", color: "#0f172a" }}>
            Rajesh Huria
          </div>
          <div style={{ display: "flex", gap: "2rem", fontSize: "0.875rem" }}>
            <a href="#projects" style={{ color: "#475569", textDecoration: "none", fontWeight: "500", transition: "color 0.3s" }}>
              PROJECTS
            </a>
            <a href="#focus" style={{ color: "#475569", textDecoration: "none", fontWeight: "500", transition: "color 0.3s" }}>
              FOCUS
            </a>
            <a href="#writing" style={{ color: "#475569", textDecoration: "none", fontWeight: "500", transition: "color 0.3s" }}>
              WRITING
            </a>
            <a href="#contact" style={{ color: "#475569", textDecoration: "none", fontWeight: "500", transition: "color 0.3s" }}>
              CONTACT
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section style={{ padding: "4rem 1.5rem", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              lineHeight: "1.2",
              marginBottom: "1.5rem",
              color: "#0f172a",
            }}
          >
            I build systems that turn ideas into reliable execution
          </h1>
          <div style={{ marginBottom: "2rem", color: "#475569", lineHeight: "1.6" }}>
            <p>Release Manager &amp; Engineer at TeamViewer</p>
            <p>Based in Esslingen am Neckar, Germany</p>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a
              href="#projects"
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "#2563eb",
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "0.375rem",
                fontWeight: "600",
                transition: "background-color 0.3s",
              }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              style={{
                padding: "0.75rem 1.5rem",
                border: "2px solid #2563eb",
                color: "#2563eb",
                textDecoration: "none",
                borderRadius: "0.375rem",
                fontWeight: "600",
                transition: "all 0.3s",
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: "4rem 1.5rem", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "3rem",
              color: "#0f172a",
            }}
          >
            Selected Projects
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {projects.map((project) => (
              <div key={project.id} style={{ borderBottom: "1px solid #e2e8f0", paddingBottom: "2.5rem" }}>
                <div style={{ marginBottom: "1rem", display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "600",
                        marginBottom: "0.5rem",
                        color: "#0f172a",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p style={{ color: "#64748b", lineHeight: "1.6" }}>{project.description}</p>
                  </div>
                  <span style={{ color: "#94a3b8", fontSize: "0.875rem", whiteSpace: "nowrap" }}>
                    {project.year}
                  </span>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.75rem",
                        padding: "0.25rem 0.75rem",
                        backgroundColor: "#dbeafe",
                        color: "#1e40af",
                        borderRadius: "9999px",
                        fontWeight: "500",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section id="focus" style={{ padding: "4rem 1.5rem", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "3rem",
              color: "#0f172a",
            }}
          >
            What I&apos;m Building
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            {focusAreas.map((area, idx) => (
              <div key={idx} style={{ padding: "1.5rem", backgroundColor: "#f8fafc", borderRadius: "0.5rem", border: "1px solid #e2e8f0" }}>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "600",
                    marginBottom: "0.75rem",
                    color: "#0f172a",
                  }}
                >
                  {area.title}
                </h3>
                <p style={{ color: "#64748b", lineHeight: "1.6", fontSize: "0.95rem" }}>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Writing */}
      <section id="writing" style={{ padding: "4rem 1.5rem", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "3rem",
              color: "#0f172a",
            }}
          >
            Writing
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {notes.map((note) => (
              <a
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
              >
                <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", marginBottom: "0.75rem" }}>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#2563eb", textTransform: "uppercase", fontWeight: "600", marginBottom: "0.5rem" }}>
                      {note.tag}
                    </div>
                    <h3
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: "600",
                        color: "#0f172a",
                      }}
                    >
                      {note.title}
                    </h3>
                  </div>
                  <span style={{ color: "#94a3b8", fontSize: "0.875rem", whiteSpace: "nowrap", fontWeight: "500" }}>
                    {note.readTime} min
                  </span>
                </div>
                <time style={{ fontSize: "0.875rem", color: "#94a3b8" }}>
                  {new Date(note.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section id="contact" style={{ padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>
            <div>
              <h2
                style={{
                  fontSize: "1.75rem",
                  fontWeight: "700",
                  marginBottom: "1rem",
                  color: "#0f172a",
                }}
              >
                Let&apos;s work together
              </h2>
              <p style={{ color: "#64748b", marginBottom: "1.5rem", lineHeight: "1.6" }}>
                Open to conversations about delivery, agent systems, infrastructure, and product engineering.
              </p>
              <a
                href="mailto:rajesh.huria@gmail.com"
                style={{
                  display: "inline-block",
                  padding: "0.75rem 1.5rem",
                  backgroundColor: "#2563eb",
                  color: "#ffffff",
                  textDecoration: "none",
                  borderRadius: "0.375rem",
                  fontWeight: "600",
                  transition: "background-color 0.3s",
                }}
              >
                Send me an email
              </a>
            </div>

            <div>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: "700",
                  marginBottom: "1rem",
                  color: "#0f172a",
                }}
              >
                Links
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <a
                  href="https://github.com/rajeshhuria"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#2563eb", textDecoration: "none", fontWeight: "500", transition: "color 0.3s" }}
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/rajesh-huria"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#2563eb", textDecoration: "none", fontWeight: "500", transition: "color 0.3s" }}
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/rajesh_huria"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#2563eb", textDecoration: "none", fontWeight: "500", transition: "color 0.3s" }}
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid #e2e8f0",
              paddingTop: "2rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
              fontSize: "0.875rem",
              color: "#94a3b8",
              flexWrap: "wrap",
            }}
          >
            <p>&copy; 2024 Rajesh Huria. Based in Germany.</p>
            <p>Release Manager &amp; Engineer at TeamViewer</p>
          </div>
        </div>
      </section>
    </div>
  );
}
