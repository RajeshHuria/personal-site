export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 dark:border-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">Let's work together</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Open to conversations about delivery, agent systems, infrastructure, and product engineering.
            </p>
            <a
              href="mailto:rajesh.huria@gmail.com"
              className="inline-block px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium hover:opacity-90 transition"
            >
              Send me an email
            </a>
          </div>

          <div>
            <h3 className="font-serif text-lg font-light mb-4">Links</h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <div>
                <a
                  href="https://github.com/rajeshhuria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 dark:hover:text-gray-100 transition"
                >
                  GitHub
                </a>
              </div>
              <div>
                <a
                  href="https://linkedin.com/in/rajesh-huria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 dark:hover:text-gray-100 transition"
                >
                  LinkedIn
                </a>
              </div>
              <div>
                <a
                  href="https://twitter.com/rajesh_huria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 dark:hover:text-gray-100 transition"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-600">
          <p>&copy; 2024 Rajesh Huria. Based in Germany.</p>
          <p>Release Manager &amp; Engineer at TeamViewer</p>
        </div>
      </div>
    </footer>
  );
}
