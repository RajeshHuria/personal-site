export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="font-serif text-6xl md:text-7xl font-light mb-6 leading-tight">
            I build systems that turn ideas into reliable execution.
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Release Manager & Engineer at TeamViewer. I focus on multi-agent systems, reliable delivery, and infrastructure that scales. Based in Germany.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium hover:opacity-90 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-900/50 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
