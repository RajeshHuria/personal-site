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
    slug: "local-plus-cloud-coding-setup",
    title: "What actually works in a local-plus-cloud coding setup",
    intro:
      "Use strong cloud models for planning and local models for execution.",
    body: [
      "One model should coordinate, another should execute.",
      "Trying to do everything with one model leads to instability.",
      "Clear roles make systems more reliable.",
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
          <h1 className="text-3xl font-semibold md:text-5xl">
            {note.title}
          </h1>

          <p className="mt-6 text-lg text-neutral-600">
            {note.intro}
          </p>

          <div className="mt-10 space-y-6 text-neutral-700">
            {note.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}