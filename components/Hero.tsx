export default function Hero() {
  return (
    <section className="pt-40 pb-24 px-6 border-b border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl font-light mb-8 leading-tight text-gray-50">
            I build systems that turn ideas into reliable execution.
          </h1>
          <p className="text-base text-gray-400 mb-10 leading-relaxed max-w-xl">
            Release Manager & Engineer at TeamViewer. I focus on multi-agent systems, reliable delivery, and infrastructure that scales. Based in Germany.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-accent text-gray-950 rounded font-medium hover:opacity-80 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-700 text-gray-300 rounded hover:border-gray-600 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
