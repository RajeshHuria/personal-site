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
  const ringRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const cursorElRef = useRef<HTMLDivElement>(null);
  const ringElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };

      if (cursorElRef.current) {
        cursorElRef.current.style.left = e.clientX + "px";
        cursorElRef.current.style.top = e.clientY + "px";
      }
    };

    const animRing = () => {
      const mx = cursorRef.current.x;
      const my = cursorRef.current.y;
      const rx = ringRef.current.x;
      const ry = ringRef.current.y;

      ringRef.current.x = rx + (mx - rx) * 0.12;
      ringRef.current.y = ry + (my - ry) * 0.12;

      if (ringElRef.current) {
        ringElRef.current.style.left = ringRef.current.x + "px";
        ringElRef.current.style.top = ringRef.current.y + "px";
      }

      requestAnimationFrame(animRing);
    };

    window.addEventListener("mousemove", handleMouseMove);
    const rafId = requestAnimationFrame(animRing);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div
        ref={cursorElRef}
        style={{
          position: "fixed",
          width: "8px",
          height: "8px",
          backgroundColor: "#d4a84b",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        ref={ringElRef}
        style={{
          position: "fixed",
          width: "40px",
          height: "40px",
          border: "1px solid #d4a84b",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Grain texture overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          backgroundColor: "#0f172a",
          color: "#f1f5f9",
          minHeight: "100vh",
          cursor: "none",
        }}
      >
        {/* Header */}
        <header style={{ borderBottom: "1px solid #1e293b", padding: "2rem 1.5rem" }}>
          <nav
            style={{
              maxWidth: "80rem",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: "300" }}>
              RH
            </div>
            <div style={{ display: "flex", gap: "2rem", fontSize: "0.875rem" }}>
              <a href="#projects" style={{ color: "#cbd5e1", textDecoration: "none", transition: "color 0.3s" }}>
                PROJECTS
              </a>
              <a href="#focus" style={{ color: "#cbd5e1", textDecoration: "none", transition: "color 0.3s" }}>
                FOCUS
              </a>
              <a href="#writing" style={{ color: "#cbd5e1", textDecoration: "none", transition: "color 0.3s" }}>
                WRITING
              </a>
              <a href="#contact" style={{ color: "#cbd5e1", textDecoration: "none", transition: "color 0.3s" }}>
                CONTACT
              </a>
            </div>
          </nav>
        </header>

        {/* Hero */}
        <section style={{ padding: "6rem 1.5rem", borderBottom: "1px solid #1e293b" }}>
          <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "3.5rem",
                fontWeight: "300",
                lineHeight: "1.2",
                marginBottom: "1.5rem",
                color: "#f1f5f9",
              }}
            >
              I build systems that turn ideas into reliable execution
            </h1>
            <div style={{ marginBottom: "2rem", color: "#cbd5e1" }}>
              <p>Release Manager &amp; Engineer at TeamViewer</p>
              <p>Based in Esslingen am Neckar, Germany</p>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a
                href="#projects"
                style={{
                  padding: "0.75rem 1.5rem",
                  backgroundColor: "#d4a84b",
                  color: "#0f172a",
                  textDecoration: "none",
                  borderRadius: "0.375rem",
                  fontWeight: "500",
                  transition: "opacity 0.3s",
                }}
              >
                View Projects
              </a>
              <a
                href="#contact"
                style={{
                  padding: "0.75rem 1.5rem",
                  border: "1px solid #d4a84b",
                  color: "#d4a84b",
                  textDecoration: "none",
                  borderRadius: "0.375rem",
                  fontWeight: "500",
                  transition: "opacity 0.3s",
                }}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" style={{ padding: "5rem 1.5rem", borderBottom: "1px solid #1e293b" }}>
          <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "2.25rem",
                fontWeight: "300",
                marginBottom: "4rem",
                color: "#f1f5f9",
              }}
            >
              Selected Projects
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
              {projects.map((project) => (
                <div key={project.id} style={{ borderBottom: "1px solid #1e293b", paddingBottom: "3rem" }}>
                  <div style={{ marginBottom: "1rem", display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "1.25rem",
                          fontWeight: "300",
                          marginBottom: "0.5rem",
                          color: "#f1f5f9",
                        }}
                      >
                        {project.title}
                      </h3>
                      <p style={{ color: "#94a3b8" }}>{project.description}</p>
                    </div>
                    <span style={{ color: "#64748b", fontSize: "0.875rem", whiteSpace: "nowrap" }}>
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
                          backgroundColor: "#1e293b",
                          color: "#94a3b8",
                          borderRadius: "9999px",
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
        <section id="focus" style={{ padding: "5rem 1.5rem", borderBottom: "1px solid #1e293b" }}>
          <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "2.25rem",
                fontWeight: "300",
                marginBottom: "4rem",
                color: "#f1f5f9",
              }}
            >
              What I&apos;m Building
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "3rem" }}>
              {focusAreas.map((area, idx) => (
                <div key={idx}>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.25rem",
                      fontWeight: "300",
                      marginBottom: "0.75rem",
                      color: "#f1f5f9",
                    }}
                  >
                    {area.title}
                  </h3>
                  <p style={{ color: "#94a3b8", lineHeight: "1.6" }}>{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Writing */}
        <section id="writing" style={{ padding: "5rem 1.5rem", borderBottom: "1px solid #1e293b" }}>
          <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "2.25rem",
                fontWeight: "300",
                marginBottom: "4rem",
                color: "#f1f5f9",
              }}
            >
              Writing
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {notes.map((note) => (
                <a
                  key={note.slug}
                  href={`/notes/${note.slug}`}
                  style={{
                    borderBottom: "1px solid #1e293b",
                    paddingBottom: "2rem",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "opacity 0.3s",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", marginBottom: "0.75rem" }}>
                    <div>
                      <div style={{ fontSize: "0.75rem", color: "#64748b", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                        {note.tag}
                      </div>
                      <h3
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "1.25rem",
                          fontWeight: "300",
                          color: "#f1f5f9",
                        }}
                      >
                        {note.title}
                      </h3>
                    </div>
                    <span style={{ color: "#64748b", fontSize: "0.75rem", whiteSpace: "nowrap" }}>
                      {note.readTime} min
                    </span>
                  </div>
                  <time style={{ fontSize: "0.75rem", color: "#64748b" }}>
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
        <section id="contact" style={{ padding: "4rem 1.5rem", borderBottom: "1px solid #1e293b" }}>
          <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: "300",
                    marginBottom: "1rem",
                    color: "#f1f5f9",
                  }}
                >
                  Let&apos;s work together
                </h2>
                <p style={{ color: "#94a3b8", marginBottom: "1.5rem", lineHeight: "1.6" }}>
                  Open to conversations about delivery, agent systems, infrastructure, and product engineering.
                </p>
                <a
                  href="mailto:rajesh.huria@gmail.com"
                  style={{
                    display: "inline-block",
                    padding: "0.75rem 1.5rem",
                    backgroundColor: "#d4a84b",
                    color: "#0f172a",
                    textDecoration: "none",
                    borderRadius: "0.375rem",
                    fontWeight: "500",
                    transition: "opacity 0.3s",
                  }}
                >
                  Send me an email
                </a>
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.125rem",
                    fontWeight: "300",
                    marginBottom: "1rem",
                    color: "#f1f5f9",
                  }}
                >
                  Links
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <a
                    href="https://github.com/rajeshhuria"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#94a3b8", textDecoration: "none", transition: "color 0.3s" }}
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/rajesh-huria"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#94a3b8", textDecoration: "none", transition: "color 0.3s" }}
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://twitter.com/rajesh_huria"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#94a3b8", textDecoration: "none", transition: "color 0.3s" }}
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{
                borderTop: "1px solid #1e293b",
                paddingTop: "2rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
                fontSize: "0.75rem",
                color: "#64748b",
                flexWrap: "wrap",
              }}
            >
              <p>&copy; 2024 Rajesh Huria. Based in Germany.</p>
              <p>Release Manager &amp; Engineer at TeamViewer</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
