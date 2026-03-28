import Link from "next/link";

const IconGithub = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M9 19c-4 1.5-4-2-6-2" />
    <path d="M15 22v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.8A5.3 5.3 0 0 0 19 5.1 4.9 4.9 0 0 0 18.9 1S17.7.7 15 2.5a13.4 13.4 0 0 0-6 0C6.3.7 5.1 1 5.1 1A4.9 4.9 0 0 0 5 5.1a5.3 5.3 0 0 0-1.3 3.6c0 5.3 3.2 6.5 6.2 6.8A3.4 3.4 0 0 0 9 18.1V22" />
  </svg>
);

const IconLinkedin = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
    <path d="M2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const IconMail = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

const IconArrowUpRight = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const IconServer = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <rect x="3" y="4" width="18" height="6" rx="2" />
    <rect x="3" y="14" width="18" height="6" rx="2" />
    <path d="M7 7h.01M7 17h.01" />
  </svg>
);

const IconBot = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <rect x="4" y="7" width="16" height="10" rx="3" />
    <path d="M12 3v4M9 12h.01M15 12h.01M8 21l1.5-4M16 17l1.5 4" />
  </svg>
);

const IconSmartphone = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <rect x="7" y="2" width="10" height="20" rx="2" />
    <path d="M11 18h2" />
  </svg>
);

const IconWorkflow = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <circle cx="6" cy="6" r="2" />
    <circle cx="18" cy="6" r="2" />
    <circle cx="12" cy="18" r="2" />
    <path d="M8 6h8M7.5 7.5 10.5 16M16.5 7.5 13.5 16" />
  </svg>
);

const building = [
  {
    title: "Multi-agent systems",
    text: "Designing practical agent workflows focused on delegation, execution, and verification.",
    icon: IconBot,
  },
  {
    title: "Reliable delivery",
    text: "Improving release flow, operational clarity, and the path from planning to production.",
    icon: IconWorkflow,
  },
  {
    title: "Systems + infrastructure",
    text: "Exploring remote execution, local AI, VPS setups, and lightweight automation stacks.",
    icon: IconServer,
  },
  {
    title: "Product-minded engineering",
    text: "Working at the intersection of software, developer experience, and practical outcomes.",
    icon: IconSmartphone,
  },
];

const principles = [
  "Execution over intention",
  "If it did not run, it did not happen",
  "Logs beat assumptions",
  "Keep systems simple enough to debug",
];

const focusAreas = [
  {
    name: "OpenClaw workflows",
    desc: "Multi-agent orchestration, execution boundaries, and dependable task routing.",
  },
  {
    name: "Local + cloud AI setup",
    desc: "Combining local coding models with stronger coordinator models for real work.",
  },
  {
    name: "Remote execution",
    desc: "Mac-based runners, VPN-connected access, and infrastructure that stays practical.",
  },
];

const notes = [
  {
    slug: "ai-agents-simulate-execution",
    title: "Why AI agents fail when they simulate execution",
    blurb: "Agents say they did things—but nothing actually ran.",
  },
  {
    slug: "local-plus-cloud-coding-setup",
    title: "Local + cloud coding setup",
    blurb: "Use cloud for thinking, local for execution.",
  },
  {
    slug: "practical-multi-agent-lessons",
    title: "Multi-agent lessons",
    blurb: "Clear roles + verification = working systems.",
  },
];

export default function PersonalSite() {
  return (
    <div className="min-h-screen bg-white text-neutral-950 antialiased">
      <div className="mx-auto max-w-6xl px-6 py-6 md:px-10">
        <header className="flex items-center justify-between border-b border-neutral-200 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-neutral-200 text-sm font-semibold">
              RH
            </div>
            <div>
              <p className="text-sm font-medium">Rajesh Huria</p>
              <p className="text-xs text-neutral-500">Software · Systems · Delivery</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-neutral-600 md:flex">
            <a href="#about" className="transition hover:text-neutral-950">About</a>
            <a href="#work" className="transition hover:text-neutral-950">Work</a>
            <Link href="/notes" className="transition hover:text-neutral-950">Notes</Link>
            <a href="#contact" className="transition hover:text-neutral-950">Contact</a>
          </nav>
        </header>

        <main>
          <section className="grid gap-10 py-20 md:grid-cols-[1.3fr_0.7fr] md:py-28">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.24em] text-neutral-500">
                My Minimal website
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-neutral-950 md:text-6xl md:leading-[1.05]">
                I build practical systems that turn ideas into reliable execution.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 md:text-lg">
                Computer scientist based in Germany, working across software, delivery, automation,
                and system design. Interested in useful products, clear workflows, and technology
                that actually works in production.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
                >
                  Get in touch
                  <IconArrowUpRight />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium transition hover:border-neutral-950"
                >
                  View focus areas
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-200 p-6 md:p-7">
              <p className="text-sm font-medium">Now</p>
              <div className="mt-5 space-y-4 text-sm leading-6 text-neutral-600">
                <p>Building multi-agent workflows for practical software execution.</p>
                <p>Exploring local AI, remote runners, and lightweight infrastructure setups.</p>
                <p>Interested in developer tooling, release reliability, and minimal product design.</p>
              </div>
            </div>
          </section>

          <section id="about" className="border-t border-neutral-200 py-16 md:py-20">
            <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">About</p>
                <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-700">
                  My work sits between engineering, systems thinking, and delivery. I enjoy making
                  workflows more dependable, reducing friction between planning and execution, and
                  designing setups that remain understandable as they grow.
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">Principles</p>
                <ul className="mt-5 space-y-3 text-sm text-neutral-700">
                  {principles.map((item) => (
                    <li key={item} className="rounded-2xl border border-neutral-200 px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="work" className="border-t border-neutral-200 py-16 md:py-20">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">What I’m building</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                  Current areas of focus
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-neutral-600">
                A compact view of the systems, tools, and workflows I am most interested in right now.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {building.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-neutral-200 p-6 transition hover:-translate-y-0.5 hover:border-neutral-950"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100">
                      <Icon />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-neutral-600">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="border-t border-neutral-200 py-16 md:py-20">
            <div className="grid gap-4 md:grid-cols-3">
              {focusAreas.map((item) => (
                <div key={item.name} className="rounded-3xl border border-neutral-200 p-6">
                  <p className="text-base font-semibold">{item.name}</p>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="notes" className="border-t border-neutral-200 py-16 md:py-20">
            <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">Notes</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                  Ideas worth writing about
                </h2>
              </div>

              <div className="space-y-4">
                {notes.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/notes/${item.slug}`}
                    className="flex items-start justify-between gap-4 rounded-3xl border border-neutral-200 px-5 py-4 transition hover:border-neutral-950"
                  >
                    <div>
                      <p className="text-sm font-medium text-neutral-800">{item.title}</p>
                      <p className="mt-1 text-xs leading-6 text-neutral-600">{item.blurb}</p>
                    </div>
                    <IconArrowUpRight className="mt-1 h-4 w-4 text-neutral-500" />
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="border-t border-neutral-200 py-16 md:py-20">
            <div className="rounded-[2rem] border border-neutral-200 p-8 md:p-10">
              <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">Contact</p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                    Let’s build something useful.
                  </h2>
                </div>

                <div className="flex flex-wrap gap-3 text-sm">
                  <a
                    href="mailto:rajesh.huria@gmail.com"
                    className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 px-4 py-3 transition hover:border-neutral-950"
                  >
                    <IconMail />
                    Email
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 px-4 py-3 transition hover:border-neutral-950"
                  >
                    <IconGithub />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 px-4 py-3 transition hover:border-neutral-950"
                  >
                    <IconLinkedin />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-neutral-200 py-6 text-sm text-neutral-500">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Rajesh Huria</p>
            <p>Minimal by design. Easy to extend.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}