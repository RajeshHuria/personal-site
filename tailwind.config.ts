import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: [
          "var(--font-serif)",
          "Cormorant Garamond",
          "Georgia",
          "serif",
        ],
        mono: ["var(--font-mono)", "DM Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
