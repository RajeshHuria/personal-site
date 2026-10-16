interface Note {
  slug: string;
  title: string;
  tag: string;
  date: string;
  readTime: number;
}

const notes: Note[] = [
  {
    slug: "ai-agents-simulate-execution",
    title: "Why AI agents fail when they simulate execution",
    tag: "Agents",
    date: "2024-10-01",
    readTime: 5,
  },
  {
    slug: "local-plus-cloud-coding-setup",
    title: "Local + cloud coding setup",
    tag: "Setup",
    date: "2024-09-15",
    readTime: 8,
  },
  {
    slug: "practical-multi-agent-lessons",
    title: "Multi-agent lessons from the field",
    tag: "Systems",
    date: "2024-08-20",
    readTime: 12,
  },
];

export default function Writing() {
  return (
    <section id="writing" className="py-20 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-16">Writing</h2>

        <div className="space-y-8">
          {notes.map((note) => (
            <a
              key={note.slug}
              href={`/notes/${note.slug}`}
              className="block group border-b border-gray-200 dark:border-gray-800 pb-8 last:border-0 hover:opacity-60 transition"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-600 uppercase tracking-widest mb-2">
                    {note.tag}
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-light group-hover:text-gray-600 dark:group-hover:text-gray-400 transition">
                    {note.title}
                  </h3>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-600 whitespace-nowrap pt-2">
                  {note.readTime} min
                </span>
              </div>
              <time className="text-sm text-gray-500 dark:text-gray-600">
                {new Date(note.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
