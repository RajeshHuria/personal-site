"use client";

import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
}

interface PersonalSiteProps {
  recentBlogs?: BlogPost[];
}

const projects = [
  {
    id: "mcp-teamviewer",
    title: "TeamViewer MCP Server",
    description: "Model Context Protocol server exposing TeamViewer Web API as tools for Claude. Enables programmatic device management and session control.",
    tags: ["Python", "FastAPI", "MCP", "APIs"],
    year: 2026,
  },
  {
    id: "ollama-task-orchestrator",
    title: "Ollama Task Orchestrator",
    description: "Local LLM task runner with intent-based command interpretation, dry-run previews, and multi-agent workflows. Supports natural language task specification and safe execution.",
    tags: ["Python", "Ollama", "Local AI", "Automation"],
    year: 2026,
  },
];

const focusAreas = [
  {
    title: "Release Automation & Governance",
    description: "Enterprise release process design and governance. Built dashboards for data-driven decisions.",
  },
  {
    title: "AI-Assisted Delivery Operations",
    description: "Claude-based automation for documentation, reporting, workflows, and team enablement.",
  },
  {
    title: "Team Leadership & Mentoring",
    description: "Building scalable teams, setting standards, enabling high performance.",
  },
  {
    title: "Delivery Performance & Risk",
    description: "Cycle-time optimization, rollback planning, governance frameworks, metrics-driven decisions.",
  },
];

export default function PersonalSite({ recentBlogs = [] }: PersonalSiteProps) {
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
          <Link
            href="/"
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#0f172a",
              textDecoration: "none",
              cursor: "pointer",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#2563eb")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#0f172a")}
          >
            Rajesh Huria
          </Link>
          <div style={{ display: "flex", gap: "2rem", fontSize: "0.875rem" }}>
            <Link href="/#projects" style={{ color: "#475569", textDecoration: "none", fontWeight: "500", transition: "color 0.3s" }}>
              PROJECTS
            </Link>
            <Link href="/#focus" style={{ color: "#475569", textDecoration: "none", fontWeight: "500", transition: "color 0.3s" }}>
              FOCUS
            </Link>
            <Link href="/blogs" style={{ color: "#475569", textDecoration: "none", fontWeight: "500", transition: "color 0.3s" }}>
              BLOGS
            </Link>
            <Link href="/#contact" style={{ color: "#475569", textDecoration: "none", fontWeight: "500", transition: "color 0.3s" }}>
              CONTACT
            </Link>
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
            <p>Release Manager & Engineer at TeamViewer</p>
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
            Recent Projects
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {projects.map((project) => (
              <div key={project.id} style={{ borderBottom: "1px solid #e2e8f0", paddingBottom: "2.5rem" }}>
                <div style={{ marginBottom: "1rem", display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                  <div>
                    <a
                      href={
                        project.id === "mcp-teamviewer"
                          ? "https://github.com/teamviewer/teamviewer-mcp-server"
                          : project.id === "ollama-task-orchestrator"
                            ? "https://github.com/RajeshHuria/ollama-task-orchestrator"
                            : "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <h3
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: "600",
                          marginBottom: "0.5rem",
                          color: "#2563eb",
                          cursor: "pointer",
                          transition: "color 0.3s",
                        }}
                      >
                        {project.title}
                      </h3>
                    </a>
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

      {/* Recent Blogs */}
      {recentBlogs.length > 0 && (
        <section id="blogs" style={{ padding: "4rem 1.5rem", borderBottom: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                marginBottom: "3rem",
                color: "#0f172a",
              }}
            >
              Recent Blogs
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {recentBlogs.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blogs/${blog.slug}`}
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
                    <h3
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: "600",
                        color: "#2563eb",
                      }}
                    >
                      {blog.title}
                    </h3>
                    <span style={{ color: "#94a3b8", fontSize: "0.875rem", whiteSpace: "nowrap" }}>
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ marginTop: "2rem" }}>
              <Link
                href="/blogs"
                style={{
                  color: "#2563eb",
                  textDecoration: "none",
                  fontWeight: "500",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1e40af")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#2563eb")}
              >
                View all blogs →
              </Link>
            </div>
          </div>
        </section>
      )}

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
                  href="https://www.linkedin.com/in/rajeshhuria/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#2563eb", textDecoration: "none", fontWeight: "500", transition: "color 0.3s" }}
                >
                  LinkedIn
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
              fontSize: "0.75rem",
              color: "#94a3b8",
              flexWrap: "wrap",
            }}
          >
            <p>&copy; 2026 Rajesh Huria</p>
            <p>Release Manager &amp; Engineer at TeamViewer</p>
          </div>
        </div>
      </section>
    </div>
  );
}
