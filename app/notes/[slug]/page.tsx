import Link from "next/link";
import { notFound } from "next/navigation";
import NoteContent from "./note-content";

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
      "If you've been curious about using LLMs for vibe-coding projects, this is a nice way to experiment locally before committing to another subscription.",
    ],
  },
];

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

interface NotePageProps {
  params: Promise<{ slug: string }>;
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);

  if (!note) {
    notFound();
  }

  return <NoteContent note={note} />;
}
