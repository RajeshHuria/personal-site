"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(true);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-light italic text-gray-200">
          Rajesh
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8">
            <Link href="#about" className="text-xs uppercase tracking-widest text-gray-600 hover:text-gray-200 transition">
              About
            </Link>
            <Link href="#projects" className="text-xs uppercase tracking-widest text-gray-600 hover:text-gray-200 transition">
              Projects
            </Link>
            <Link href="#writing" className="text-xs uppercase tracking-widest text-gray-600 hover:text-gray-200 transition">
              Writing
            </Link>
            <Link href="#contact" className="text-xs uppercase tracking-widest text-gray-600 hover:text-gray-200 transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
