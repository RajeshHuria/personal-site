import Link from "next/link";
import { notFound } from "next/navigation";

const notes = [
  {
    slug: "ai-agents-simulate-execution",
    title: "Why AI agents fail when they simulate execution",
    intro:
      "Most agent failures start with one problem: they describe actions instead of actually performing them.",
    body: [
      "In practice, this creates false confidence. A model says it used a tool, but nothing really ran.",
      "Reliable systems need clear separation between planning and execution.",
      "If something did not run, it should be treated as failure.",
    ],
  },
  {
    slug: "practical-multi-agent-lessons",
    title: "Lessons from building a practical multi-agent system",
    intro:
      "Multi-agent systems work only when roles and rules are clear.",
    body: [
      "Define who executes and who decides.",
      "Always verify results with logs and outputs.",
      "Simple systems scale better than complex ones.",
    ],
  },
  {
    slug: "ollama-task-runner-linkedin-summary",
    title: "Ollama Task Runner LinkedIn Summary",
    intro:
      "Introducing my local Ollama task runner improvements on LinkedIn.",
    body: [
      "Made my local Ollama task runner much more natural to use.",
      "Now I can type things like: ollama run \"run tests for auth\"",
      "ollama run \"add a retry decorator to src/utils.py\"",
      "ollama run --dry-run \"update src/api.py with a FastAPI endpoint\"",
      "Instead of rigid commands, it understands intent, routes safely, and lets me preview actions before anything risky runs.",
      "Here is the GitHub link for anyone who wants to try it: https://lnkd.in/dhBdXm8Q",
      "If you’ve been curious about using LLMs for vibe-coding projects, this is a nice way to experiment locally before committing to another subscription.",
    ],
  },
];

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);

  if (!note) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <Link href="/" className="text-sm text-neutral-500 hover:text-black">
          ← Back home
        </Link>

        <article className="mt-8">
          <h1 className="text-3xl font-semibold md:text-5xl">{note.title}</h1>

          <p className="mt-6 text-lg text-neutral-600">{note.intro}</p>

          <div className="mt-10 space-y-6 text-neutral-700">
            {note.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}

