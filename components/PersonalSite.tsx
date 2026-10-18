import Link from "next/link";
import { translations } from "@/lib/translations";
import { useLanguage } from "@/app/LanguageProvider";
import LanguageToggle from "./LanguageToggle";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
}

interface PersonalSiteProps {
  recentBlogs?: BlogPost[];
}

function getProjects(lang: string) {
  if (lang === "de") {
    return [
      {
        id: "mcp-teamviewer",
        title: translations.de.projects.teamviewerMcp,
        description: translations.de.projects.teamviewerDesc,
        tags: ["Python", "FastAPI", "MCP", "APIs"],
        year: 2026,
      },
      {
        id: "ollama-task-orchestrator",
        title: translations.de.projects.ollama,
        description: translations.de.projects.ollamaDesc,
        tags: ["Python", "Ollama", "Local AI", "Automation"],
        year: 2026,
      },
    ];
  }
  return [
    {
      id: "mcp-teamviewer",
      title: translations.en.projects.teamviewerMcp,
      description: translations.en.projects.teamviewerDesc,
      tags: ["Python", "FastAPI", "MCP", "APIs"],
      year: 2026,
    },
    {
      id: "ollama-task-orchestrator",
      title: translations.en.projects.ollama,
      description: translations.en.projects.ollamaDesc,
      tags: ["Python", "Ollama", "Local AI", "Automation"],
      year: 2026,
    },
  ];
}

function getFocusAreas(lang: string) {
  if (lang === "de") {
    return [
      {
        title: translations.de.focusAreas.releaseAutomation,
        description: translations.de.focusAreas.releaseAutomationDesc,
      },
      {
        title: translations.de.focusAreas.aiDelivery,
        description: translations.de.focusAreas.aiDeliveryDesc,
      },
      {
        title: translations.de.focusAreas.leadership,
        description: translations.de.focusAreas.leadershipDesc,
      },
      {
        title: translations.de.focusAreas.performance,
        description: translations.de.focusAreas.performanceDesc,
      },
    ];
  }
  return [
    {
      title: translations.en.focusAreas.releaseAutomation,
      description: translations.en.focusAreas.releaseAutomationDesc,
    },
    {
      title: translations.en.focusAreas.aiDelivery,
      description: translations.en.focusAreas.aiDeliveryDesc,
    },
    {
      title: translations.en.focusAreas.leadership,
      description: translations.en.focusAreas.leadershipDesc,
    },
    {
      title: translations.en.focusAreas.performance,
      description: translations.en.focusAreas.performanceDesc,
    },
  ];
}

interface PersonalSiteInnerProps extends PersonalSiteProps {
  lang: "en" | "de";
  showLanguageToggle?: boolean;
}

export function PersonalSiteInner({ recentBlogs = [], lang, showLanguageToggle = false }: PersonalSiteInnerProps) {
  const t = translations[lang];
  const projects = getProjects(lang);
  const focusAreas = getFocusAreas(lang);

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
            className="hover:!text-blue-600"
          >
            {t.rajeshHuria}
          </Link>
          <div style={{ display: "flex", gap: "2rem", fontSize: "0.875rem", alignItems: "center" }}>
            <Link href="/#projects" style={{ color: "#475569", textDecoration: "none", fontWeight: "500", transition: "color 0.3s" }}>
              {t.projectsNav}
            </Link>
            <Link href="/#focus" style={{ color: "#475569", textDecoration: "none", fontWeight: "500", transition: "color 0.3s" }}>
              {t.focus}
            </Link>
            <Link href="/blogs" style={{ color: "#475569", textDecoration: "none", fontWeight: "500", transition: "color 0.3s" }}>
              {t.blogs}
            </Link>
            <Link href="/#contact" style={{ color: "#475569", textDecoration: "none", fontWeight: "500", transition: "color 0.3s" }}>
              {t.contact}
            </Link>
            {showLanguageToggle && <LanguageToggle />}
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
            {t.hero.title}
          </h1>
          <div style={{ marginBottom: "2rem", color: "#475569", lineHeight: "1.6" }}>
            <p>{t.hero.role}</p>
            <p>{t.hero.location}</p>
            <p style={{ marginTop: "1rem", fontSize: "0.95rem" }}>{t.hero.services}</p>
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
              {t.hero.viewProjects}
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
              {t.hero.getInTouch}
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
            {t.recentProjects}
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
            {t.whatBuilding}
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
              {t.recentBlogs}
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
                  className="hover:bg-slate-100 hover:border-slate-300"
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
                className="hover:text-blue-700"
              >
                {t.viewAllBlogs}
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
                {t.letsWorkTogether}
              </h2>
              <p style={{ color: "#64748b", marginBottom: "1.5rem", lineHeight: "1.6" }}>
                {t.collaboration}
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
                {t.sendEmail}
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
                {t.links}
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
            <p>{t.footer.copyright}</p>
            <p>{t.footer.position}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

function PersonalSiteClient(props: PersonalSiteProps) {
  const { lang } = useLanguage();
  return <PersonalSiteInner {...props} lang={lang} showLanguageToggle />;
}

export default PersonalSiteClient;
