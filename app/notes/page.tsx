"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

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
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef({ x: 0, y: 0 });
  const ringRef = useRef({ x: 0, y: 0 });
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

  useEffect(() => {
    const els = document.querySelectorAll("a, button, .hover-trigger");
    const handleEnter = () => {
      setIsHovering(true);
      document.body.classList.add("cursor-hover");
    };
    const handleLeave = () => {
      setIsHovering(false);
      document.body.classList.remove("cursor-hover");
    };

    els.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      els.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        body {
          background: #080807;
          color: #f0ebe4;
          cursor: none;
        }

        #cursor {
          position: fixed;
          z-index: 10000;
          width: 8px;
          height: 8px;
          background: #d4a84b;
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: width 0.2s, height 0.2s, opacity 0.2s;
          mix-blend-mode: difference;
        }

        #cursor-ring {
          position: fixed;
          z-index: 9998;
          width: 32px;
          height: 32px;
          border: 1px solid rgba(212, 168, 75, 0.3);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: width 0.25s, height 0.25s, border-color 0.25s, opacity 0.25s;
        }

        body.cursor-hover #cursor {
          width: 4px;
          height: 4px;
        }

        body.cursor-hover #cursor-ring {
          width: 48px;
          height: 48px;
          border-color: #d4a84b;
          opacity: 0.7;
        }
      `}</style>

      <div id="cursor" ref={cursorElRef}></div>
      <div id="cursor-ring" ref={ringElRef}></div>
      <main style={{ backgroundColor: "#080807", color: "#f0ebe4" }}>
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            pointerEvents: "none",
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
            mixBlendMode: "overlay",
            opacity: 0.6,
          }}
        />

        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "clamp(60px, 10vh, 120px) clamp(24px, 5vw, 80px)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Link
            href="/"
            style={{
              fontSize: "0.875rem",
              color: "#6b6560",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#d4a84b")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6560")}
          >
            ← Back home
          </Link>

          <div style={{ marginTop: "2rem" }}>
            <p
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#d4a84b",
                marginBottom: "2rem",
              }}
            >
              Notes
            </p>
            <h1
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "clamp(2.5rem, 5.5vw, 7rem)",
                fontWeight: 300,
                letterSpacing: "-0.025em",
                lineHeight: 0.95,
              }}
            >
              Writing and<br />
              <em style={{ fontStyle: "italic", color: "#d4a84b" }}>ideas.</em>
            </h1>
          </div>

          <div
            style={{
              marginTop: "4rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            {notes.map((item) => (
              <Link
                key={item.slug}
                href={`/notes/${item.slug}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "2rem",
                  alignItems: "center",
                  padding: "1.8rem 0",
                  borderTop: "1px solid #1e1d1b",
                  textDecoration: "none",
                  color: "#f0ebe4",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#d4a84b";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#f0ebe4";
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "0.62rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#d4a84b",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Essay
                  </p>
                  <p
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontSize: "clamp(1rem, 1.8vw, 1.5rem)",
                      fontWeight: 300,
                      letterSpacing: "-0.01em",
                      transition: "color 0.2s",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontSize: "0.72rem",
                      color: "#6b6560",
                      marginTop: "0.3rem",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {item.blurb}
                  </p>
                </div>
                <span
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontStyle: "italic",
                    fontSize: "1.5rem",
                    color: "#6b6560",
                    opacity: 0.3,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.color = "#d4a84b";
                    e.currentTarget.style.transform = "translate(4px, -4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "0.3";
                    e.currentTarget.style.color = "#6b6560";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

