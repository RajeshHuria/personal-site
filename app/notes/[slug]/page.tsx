import { notFound } from "next/navigation";
import NoteContent from "./note-content";

const notes = [
  {
    slug: "ai-agents-simulate-execution",
    title: "Why AI agents fail when they simulate execution",
    intro:
      "Most agent failures start with one problem: they describe actions instead of actually performing them. The confidence is real. The execution is not.",
    body: [
      "In practice, this creates false confidence. A model says it used a tool, but nothing really ran. It generated the right syntax, but the command never hit a shell. The database query was never sent. The file was never written. Meanwhile, the agent moves forward as if the world changed.",
      "This is where theory meets reality. In development workflows, the difference between planning and executing is everything. An agent can be brilliant at reasoning through a problem—mapping the dependencies, spotting the edge cases, writing the code—but if it stops at description instead of action, that intelligence never materializes.",
      "Reliable systems need clear separation between planning and execution. Planning can be speculative. Execution must be real. If something did not run, treat it as failure. Check logs. Verify state. Let the agent see what actually happened, not what it predicted would happen.",
      "The best multi-agent systems I've built treat execution as sacred ground. Every action is logged. Every result is reported back. If a tool call succeeds, the agent knows it. If it fails, the agent adjusts. This loop—try, execute, verify, adapt—is what separates working systems from confident hallucinations.",
    ],
  },
  {
    slug: "practical-multi-agent-lessons",
    title: "Lessons from building a practical multi-agent system",
    intro:
      "Multi-agent systems work only when roles and rules are clear. I learned this the hard way, through systems that started elegant and ended chaotic.",
    body: [
      "The first lesson is structural: define who executes and who decides. You need at least one agent that can actually run commands, and at least one that can reason about what should run. The executor should not decide. The reasoner should not execute. This boundary saves you from deadlocks and cascading failures.",
      "The second lesson is verification: always verify results with logs and outputs. Never trust an agent's report that something worked. Check the logs yourself. Read the actual output. An agent can be confidently wrong, and if you believe it without verification, the system will propagate that confidence through subsequent decisions.",
      "The third lesson, which surprised me, is simplicity. Simple systems scale better than complex ones. I've seen three-agent systems outperform ten-agent ones because the routing was clearer and the dependencies were visible. Complexity creates surface area for failure.",
      "The most practical insight: instrument everything from day one. Logs, metrics, execution traces. When something goes wrong—and it will—you need to see what actually happened, not what the agents reported. This also helps you understand the patterns: which kinds of tasks cause agents to fail, which decision points are bottlenecks, where you need additional verification steps.",
    ],
  },
  {
    slug: "ollama-task-runner-linkedin-summary",
    title: "Ollama Task Runner LinkedIn Summary",
    intro:
      "Introducing my local Ollama task runner improvements on LinkedIn. It transforms how I work with LLMs locally—from rigid commands to natural intent.",
    body: [
      "Made my local Ollama task runner much more natural to use. Instead of learning specific syntax, I can type what I want to do and the system understands intent.",
      "Now I can type things like: ollama run \"run tests for auth\". Or ollama run \"add a retry decorator to src/utils.py\". Or ollama run --dry-run \"update src/api.py with a FastAPI endpoint\"",
      "The key insight is the --dry-run flag. Before anything risky runs, I see exactly what the system plans to do. This transforms it from a tool I have to trust blindly into a tool I can verify first.",
      "Instead of rigid commands, it understands intent, routes safely, and lets me preview actions before anything risky runs. It handles authentication, checks permissions, and validates against my project structure.",
      "The system is built for vibe-coding projects. Instead of context-switching between my editor, the terminal, and my notes, I stay in flow and let the system handle the mechanical parts.",
      "For anyone curious about using LLMs for local task automation, this is a nice way to experiment before committing to another subscription or cloud service. You keep everything local, own your data, and pay once.",
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
