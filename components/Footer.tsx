export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-4 text-gray-50">Let&apos;s work together</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Open to conversations about delivery, agent systems, infrastructure, and product engineering.
            </p>
            <a
              href="mailto:rajesh.huria@gmail.com"
              className="inline-block px-6 py-3 bg-accent text-gray-950 rounded font-medium hover:opacity-80 transition"
            >
              Send me an email
            </a>
          </div>

          <div>
            <h3 className="font-serif text-lg font-light mb-4 text-gray-100">Links</h3>
            <div className="space-y-2">
              <div>
                <a
                  href="https://github.com/rajeshhuria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition"
                >
                  GitHub
                </a>
              </div>
              <div>
                <a
                  href="https://linkedin.com/in/rajesh-huria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition"
                >
                  LinkedIn
                </a>
              </div>
              <div>
                <a
                  href="https://twitter.com/rajesh_huria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>&copy; 2024 Rajesh Huria. Based in Germany.</p>
          <p>Release Manager &amp; Engineer at TeamViewer</p>
        </div>
      </div>
    </footer>
  );
}
