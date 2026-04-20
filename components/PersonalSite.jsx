"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const principles = [
  "Execution over intention",
  "If it did not run, it did not happen",
  "Logs beat assumptions",
  "Keep systems simple enough to debug",
  "Clarity before cleverness",
  "Release often · verify always",
];

const building = [
  {
    idx: "01",
    title: "Multi-agent systems",
    desc: "Delegation, execution, verification — in that order.",
  },
  {
    idx: "02",
    title: "Reliable delivery",
    desc: "Improving release flow and operational clarity.",
  },
  {
    idx: "03",
    title: "Systems + infrastructure",
    desc: "Remote execution, local AI, lightweight automation.",
  },
  {
    idx: "04",
    title: "Product-minded engineering",
    desc: "Software, developer experience, practical outcomes.",
  },
];

const notes = [
  {
    slug: "ai-agents-simulate-execution",
    tag: "Agents",
    title: "Why AI agents fail when they simulate execution",
    blurb: "Agents say they did things — but nothing actually ran.",
  },
  {
    slug: "local-plus-cloud-coding-setup",
    tag: "Setup",
    title: "Local + cloud coding setup",
    blurb: "Use cloud for thinking, local for execution.",
  },
  {
    slug: "practical-multi-agent-lessons",
    tag: "Systems",
    title: "Multi-agent lessons from the field",
    blurb: "Clear roles + verification = working systems.",
  },
];

export default function PersonalSite() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef({ x: 0, y: 0 });
  const ringRef = useRef({ x: 0, y: 0 });
  const cursorElRef = useRef(null);
  const ringElRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
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
    els.forEach((el) => {
      el.addEventListener("mouseenter", () => setIsHovering(true));
      el.addEventListener("mouseleave", () => setIsHovering(false));
    });

    return () => {
      els.forEach((el) => {
        el.removeEventListener("mouseenter", () => setIsHovering(true));
        el.removeEventListener("mouseleave", () => setIsHovering(false));
      });
    };
  }, []);

  useEffect(() => {
    const fadeEls = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -60px 0px" }
    );

    fadeEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("in");
      } else {
        io.observe(el);
      }
    });

    return () => io.disconnect();
  }, []);

  return (
    <div style={{ "--marquee-speed": "30s" }}>
      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :root {
          --bg: #080807;
          --fg: #f0ebe4;
          --muted: #6b6560;
          --rule: #1e1d1b;
          --accent: #d4a84b;
          --serif: "Cormorant Garamond", Georgia, serif;
          --mono: "DM Mono", monospace;
          --pad: clamp(24px, 5vw, 80px);
          --max: 1400px;
        }

        html {
          font-size: 16px;
          scroll-behavior: smooth;
        }

        body {
          background: var(--bg);
          color: var(--fg);
          font-family: var(--mono);
          font-weight: 300;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          cursor: none;
        }

        /* ── GRAIN ── */
        body::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: 9999;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 256px 256px;
          mix-blend-mode: overlay;
          opacity: 0.6;
        }

        /* ── CURSOR ── */
        #cursor {
          position: fixed;
          z-index: 10000;
          width: 8px;
          height: 8px;
          background: var(--accent);
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
          transition: width 0.25s, height 0.25s, border-color 0.25s,
            opacity 0.25s;
        }

        body.cursor-hover #cursor {
          width: 4px;
          height: 4px;
        }

        body.cursor-hover #cursor-ring {
          width: 48px;
          height: 48px;
          border-color: var(--accent);
          opacity: 0.7;
        }

        /* ── NAV ── */
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 500;
          padding: 1.5rem var(--pad);
          display: flex;
          align-items: center;
          justify-content: space-between;
          mix-blend-mode: difference;
        }

        .nav-brand {
          font-family: var(--serif);
          font-style: italic;
          font-size: 1rem;
          color: var(--fg);
          text-decoration: none;
          letter-spacing: 0.04em;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-links a {
          font-size: 0.65rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--fg);
          text-decoration: none;
          opacity: 0.5;
          transition: opacity 0.2s;
          position: relative;
        }

        .nav-links a::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 100%;
          height: 1px;
          background: var(--accent);
          transition: right 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .nav-links a:hover {
          opacity: 1;
        }

        .nav-links a:hover::after {
          right: 0;
        }

        /* ── HERO ── */
        #hero {
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 var(--pad) clamp(40px, 6vh, 80px);
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid var(--rule);
        }

        .hero-name {
          font-family: var(--serif);
          font-weight: 300;
          font-style: italic;
          font-size: clamp(5rem, 12.5vw, 18rem);
          line-height: 0.88;
          letter-spacing: -0.03em;
          color: var(--fg);
          position: relative;
          z-index: 2;
          animation: heroReveal 1.2s cubic-bezier(0.77, 0, 0.175, 1) 0.1s both;
        }

        @keyframes heroReveal {
          from {
            clip-path: inset(100% 0 0 0);
            opacity: 0;
          }
          to {
            clip-path: inset(0 0 0 0);
            opacity: 1;
          }
        }

        .hero-sub {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: clamp(24px, 4vh, 56px);
          padding-top: clamp(24px, 4vh, 48px);
          border-top: 1px solid var(--rule);
          position: relative;
          z-index: 2;
          animation: fadeUp 0.9s cubic-bezier(0.25, 0.8, 0.25, 1) 0.7s both;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }

        .hero-tagline {
          font-family: var(--serif);
          font-size: clamp(1.2rem, 2.2vw, 2.2rem);
          font-weight: 300;
          line-height: 1.3;
          letter-spacing: -0.01em;
          color: var(--fg);
        }

        .hero-meta {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted);
          justify-content: flex-end;
          align-items: flex-end;
          text-align: right;
        }

        .hero-meta .pill {
          display: inline-block;
          border: 1px solid var(--rule);
          padding: 0.35rem 0.8rem;
          font-size: 0.62rem;
          letter-spacing: 0.14em;
          color: var(--muted);
          transition: border-color 0.2s, color 0.2s;
        }

        .hero-meta .pill:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        /* ── MARQUEE ── */
        .marquee-wrap {
          overflow: hidden;
          padding: 1rem 0;
          border-bottom: 1px solid var(--rule);
        }

        .marquee-track {
          display: flex;
          white-space: nowrap;
          animation: marquee var(--marquee-speed, 30s) linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 2rem;
          padding: 0 2rem;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted);
          flex-shrink: 0;
        }

        .marquee-sep {
          color: var(--accent);
          font-size: 0.8rem;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        /* ── SECTIONS ── */
        .section {
          border-bottom: 1px solid var(--rule);
          position: relative;
          overflow: hidden;
        }

        .section-inner {
          max-width: var(--max);
          margin: 0 auto;
          padding: clamp(60px, 10vh, 120px) var(--pad);
        }

        .ghost-num {
          position: absolute;
          font-family: var(--serif);
          font-size: clamp(12rem, 25vw, 32rem);
          font-weight: 300;
          font-style: italic;
          color: transparent;
          -webkit-text-stroke: 1px var(--rule);
          right: var(--pad);
          top: 50%;
          transform: translateY(-50%);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }

        .fade-up {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .fade-up.in {
          opacity: 1;
          transform: none;
        }

        .s-label {
          font-size: 0.62rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 2rem;
          display: block;
        }

        .s-heading {
          font-family: var(--serif);
          font-size: clamp(2.5rem, 5.5vw, 7rem);
          font-weight: 300;
          letter-spacing: -0.025em;
          line-height: 0.95;
          position: relative;
          z-index: 1;
        }

        .s-heading em {
          font-style: italic;
          color: var(--accent);
        }

        /* ── ABOUT ── */
        .about-body {
          font-family: var(--serif);
          font-size: clamp(1.4rem, 2.6vw, 3rem);
          font-weight: 300;
          line-height: 1.45;
          letter-spacing: -0.01em;
          max-width: 36ch;
          position: relative;
          z-index: 1;
          margin-top: 3rem;
        }

        .about-body em {
          font-style: italic;
          color: var(--accent);
        }

        .about-aside {
          margin-top: 3rem;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          max-width: 600px;
        }

        .aside-item {
          border-top: 1px solid var(--rule);
          padding-top: 1rem;
          font-size: 0.72rem;
          letter-spacing: 0.06em;
          color: var(--muted);
          line-height: 1.7;
        }

        .aside-item strong {
          display: block;
          color: var(--fg);
          font-weight: 400;
          margin-bottom: 0.3rem;
        }

        /* ── FOCUS ── */
        .focus-list {
          position: relative;
          z-index: 1;
          margin-top: 4rem;
        }

        .focus-item {
          display: grid;
          grid-template-columns: 3.5rem 1fr auto;
          gap: 2rem;
          align-items: baseline;
          padding: 1.6rem 0;
          border-top: 1px solid var(--rule);
          transition: background 0.15s;
          position: relative;
        }

        .focus-item::before {
          content: "";
          position: absolute;
          left: calc(-1 * var(--pad));
          right: calc(-1 * var(--pad));
          top: 0;
          bottom: 0;
          background: var(--rule);
          opacity: 0;
          transition: opacity 0.2s;
          z-index: -1;
        }

        .focus-item:hover::before {
          opacity: 1;
        }

        .focus-item:last-child {
          border-bottom: 1px solid var(--rule);
        }

        .focus-idx {
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          color: var(--muted);
          font-variant-numeric: tabular-nums;
        }

        .focus-name {
          font-family: var(--serif);
          font-size: clamp(1.1rem, 2vw, 1.8rem);
          font-weight: 300;
          letter-spacing: -0.01em;
        }

        .focus-desc {
          font-size: 0.72rem;
          letter-spacing: 0.04em;
          color: var(--muted);
          line-height: 1.6;
          max-width: 32ch;
          text-align: right;
        }

        /* ── NOTES ── */
        .notes-list {
          position: relative;
          z-index: 1;
          margin-top: 4rem;
        }

        .note-item {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 2rem;
          align-items: center;
          padding: 1.8rem 0;
          border-top: 1px solid var(--rule);
          text-decoration: none;
          color: var(--fg);
          position: relative;
          overflow: hidden;
        }

        .note-item::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 100%;
          height: 1px;
          background: var(--accent);
          transition: right 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .note-item:hover::after {
          right: 0;
        }

        .note-item:last-child {
          border-bottom: 1px solid var(--rule);
        }

        .note-tag {
          display: block;
          font-size: 0.6rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.5rem;
        }

        .note-title {
          font-family: var(--serif);
          font-size: clamp(1rem, 1.8vw, 1.5rem);
          font-weight: 300;
          letter-spacing: -0.01em;
          transition: color 0.2s;
        }

        .note-item:hover .note-title {
          color: var(--accent);
        }

        .note-blurb {
          font-size: 0.72rem;
          color: var(--muted);
          margin-top: 0.3rem;
          letter-spacing: 0.04em;
        }

        .note-arrow {
          font-family: var(--serif);
          font-style: italic;
          font-size: 1.5rem;
          color: var(--muted);
          opacity: 0.3;
          transition: opacity 0.2s, transform 0.2s, color 0.2s;
        }

        .note-item:hover .note-arrow {
          opacity: 1;
          color: var(--accent);
          transform: translate(4px, -4px);
        }

        /* ── CONTACT ── */
        .contact-big-email {
          display: block;
          font-family: var(--serif);
          font-style: italic;
          font-weight: 300;
          font-size: clamp(2.5rem, 7vw, 10rem);
          letter-spacing: -0.03em;
          line-height: 0.9;
          color: var(--fg);
          text-decoration: none;
          margin-top: 2rem;
          position: relative;
          z-index: 1;
          background: linear-gradient(90deg, var(--fg) 50%, var(--accent) 50%);
          background-size: 200% 100%;
          background-position: 0%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: background-position 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .contact-big-email:hover {
          background-position: -100%;
        }

        .contact-links-row {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 3rem;
          position: relative;
          z-index: 1;
        }

        .contact-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.7rem 1.4rem;
          border: 1px solid var(--rule);
          font-size: 0.65rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--muted);
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
        }

        .contact-link:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        /* ── FOOTER ── */
        footer {
          padding: 1.5rem var(--pad);
          max-width: var(--max);
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-name {
          font-family: var(--serif);
          font-style: italic;
          font-size: 0.875rem;
          color: var(--muted);
        }

        .footer-copy {
          font-size: 0.62rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted);
        }

        /* ── Responsive ── */
        @media (max-width: 700px) {
          .hero-sub {
            grid-template-columns: 1fr;
          }
          .focus-item {
            grid-template-columns: 1fr;
            gap: 0.4rem;
          }
          .focus-idx,
          .focus-desc {
            display: none;
          }
          .note-item {
            grid-template-columns: 1fr auto;
          }
          .nav-links {
            display: none;
          }
          .ghost-num {
            display: none;
          }
          .about-aside {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div id="cursor" ref={cursorElRef}></div>
      <div id="cursor-ring" ref={ringElRef}></div>

      {/* Navigation */}
      <nav>
        <a className="nav-brand" href="#hero">
          R.H.
        </a>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#focus">Focus</a>
          </li>
          <li>
            <Link href="/notes">Notes</Link>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hero */}
      <section id="hero">
        <h1 className="hero-name">
          Rajesh<br />
          <span style={{ color: "var(--accent)" }}>Huria.</span>
        </h1>

        <div className="hero-sub">
          <p className="hero-tagline">
            I build systems that turn ideas<br />
            into reliable execution.
          </p>
          <div className="hero-meta">
            <span>Release Manager · Engineer</span>
            <span>Based in Germany</span>
            <span style={{ marginTop: "0.5rem" }}>
              <a href="#focus" className="pill">
                View focus areas
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...principles, ...principles].map((p, i) => (
            <div key={i} className="marquee-item">
              {p}
              <span className="marquee-sep">·</span>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <section className="section" id="about">
        <div className="ghost-num">01</div>
        <div className="section-inner">
          <span className="s-label fade-up">About</span>
          <p className="about-body fade-up" style={{ transitionDelay: "0.1s" }}>
            Engineering, systems thinking, and delivery —{" "}
            <em>all three at once.</em> Making workflows dependable. Reducing
            friction between planning and production. Still breaking things to
            understand them.
          </p>
          <div
            className="about-aside fade-up"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="aside-item">
              <strong>Now building</strong>Multi-agent workflows for practical
              software execution
            </div>
            <div className="aside-item">
              <strong>Exploring</strong>Local AI, remote runners, lightweight
              infrastructure
            </div>
            <div className="aside-item">
              <strong>Interested in</strong>Developer tooling, release
              reliability, minimal design
            </div>
            <div className="aside-item">
              <strong>Location</strong>Germany · remote-first
            </div>
          </div>
        </div>
      </section>

      {/* Focus */}
      <section className="section" id="focus">
        <div className="ghost-num">02</div>
        <div className="section-inner">
          <span className="s-label fade-up">Current focus</span>
          <h2 className="s-heading fade-up" style={{ transitionDelay: "0.1s" }}>
            What I'm<br />
            <em>building.</em>
          </h2>
          <div
            className="focus-list fade-up"
            style={{ transitionDelay: "0.2s" }}
          >
            {building.map((item) => (
              <div key={item.idx} className="focus-item">
                <span className="focus-idx">{item.idx}</span>
                <span className="focus-name">{item.title}</span>
                <span className="focus-desc">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="section" id="notes">
        <div className="ghost-num">03</div>
        <div className="section-inner">
          <span className="s-label fade-up">Notes</span>
          <h2 className="s-heading fade-up" style={{ transitionDelay: "0.1s" }}>
            Ideas worth<br />
            <em>writing down.</em>
          </h2>
          <div
            className="notes-list fade-up"
            style={{ transitionDelay: "0.2s" }}
          >
            {notes.map((note) => (
              <Link key={note.slug} href={`/notes/${note.slug}`} className="note-item hover-trigger">
                <div>
                  <span className="note-tag">{note.tag}</span>
                  <p className="note-title">{note.title}</p>
                  <p className="note-blurb">{note.blurb}</p>
                </div>
                <span className="note-arrow">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <div className="ghost-num">04</div>
        <div className="section-inner">
          <span className="s-label fade-up">Contact</span>
          <p
            className="fade-up"
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              color: "var(--muted)",
              maxWidth: "80ch",
              lineHeight: 1.7,
              transitionDelay: "0.1s",
              whiteSpace: "nowrap",
            }}
          >
            Open to conversations about delivery, agent systems, infrastructure,
            and developer tooling.
          </p>
          <a
            className="contact-big-email fade-up hover-trigger"
            href="mailto:rajesh.huria@gmail.com"
            style={{ transitionDelay: "0.15s" }}
          >
            rajesh.huria@gmail.com
          </a>
          <div
            className="contact-links-row fade-up"
            style={{ transitionDelay: "0.25s" }}
          >
            <a
              className="contact-link hover-trigger"
              href="https://github.com/rajeshhuria"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M9 19c-4 1.5-4-2-6-2" />
                <path d="M15 22v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.8A5.3 5.3 0 0 0 19 5.1 4.9 4.9 0 0 0 18.9 1S17.7.7 15 2.5a13.4 13.4 0 0 0-6 0C6.3.7 5.1 1 5.1 1A4.9 4.9 0 0 0 5 5.1a5.3 5.3 0 0 0-1.3 3.6c0 5.3 3.2 6.5 6.2 6.8A3.4 3.4 0 0 0 9 18.1V22" />
              </svg>
              GitHub
            </a>
            <a
              className="contact-link hover-trigger"
              href="https://linkedin.com/in/rajeshhuria"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
                <path d="M2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div style={{ maxWidth: "var(--max)", margin: "0 auto", borderTop: "1px solid var(--rule)" }}>
        <footer>
          <span className="footer-name">Rajesh Huria</span>
          <span className="footer-copy">© 2026 · huria.dev</span>
        </footer>
      </div>
    </div>
  );
}
