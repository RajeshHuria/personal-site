interface FocusArea {
  title: string;
  description: string;
}

const focusAreas: FocusArea[] = [
  {
    title: "Multi-agent systems",
    description: "Delegation, execution, verification — in that order. Building systems where AI agents collaborate reliably.",
  },
  {
    title: "Reliable delivery",
    description: "Improving release flow and operational clarity. Making deployments safe, fast, and predictable.",
  },
  {
    title: "Systems + infrastructure",
    description: "Remote execution, local AI, lightweight automation. Building tools that scale without complexity.",
  },
  {
    title: "Product-minded engineering",
    description: "Software, developer experience, practical outcomes. Code that solves real problems.",
  },
];

export default function Focus() {
  return (
    <section className="py-20 px-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-16">What I&apos;m Building</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {focusAreas.map((area, idx) => (
            <div key={idx}>
              <h3 className="font-serif text-xl md:text-2xl font-light mb-3">{area.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
