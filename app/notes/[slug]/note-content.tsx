"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

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

      <main
        style={{
          backgroundColor: "#080807",
          color: "#f0ebe4",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            maxWidth: "36rem",
            margin: "0 auto",
            padding: "clamp(60px, 10vh, 120px) clamp(24px, 5vw, 80px)",
          }}
        >
          <Link
            href="/notes"
            style={{
              fontSize: "0.875rem",
              color: "#6b6560",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#d4a84b")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6560")}
          >
            ← Back to notes
          </Link>

          <article style={{ marginTop: "2rem" }}>
            <h1
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 300,
                letterSpacing: "-0.025em",
                lineHeight: 1.2,
              }}
            >
              {note.title}
            </h1>

            <p
              style={{
                marginTop: "1.5rem",
                fontSize: "1.125rem",
                lineHeight: 1.6,
                color: "#b3aaa0",
              }}
            >
              {note.intro}
            </p>

            <div
              style={{
                marginTop: "2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {note.body.map((paragraph) => (
                <p
                  key={paragraph}
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    color: "#b3aaa0",
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
