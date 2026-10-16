"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(true);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/5 dark:bg-black/5 border-b border-gray-200/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-light italic">
          Rajesh
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8">
            <Link href="#about" className="text-sm uppercase tracking-widest opacity-60 hover:opacity-100 transition">
              About
            </Link>
            <Link href="#projects" className="text-sm uppercase tracking-widest opacity-60 hover:opacity-100 transition">
              Projects
            </Link>
            <Link href="#writing" className="text-sm uppercase tracking-widest opacity-60 hover:opacity-100 transition">
              Writing
            </Link>
            <Link href="#contact" className="text-sm uppercase tracking-widest opacity-60 hover:opacity-100 transition">
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsDark(!isDark)}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200/10 transition"
            aria-label="Toggle dark mode"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>
    </header>
  );
}
