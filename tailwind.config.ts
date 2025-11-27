import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'var(--font-inter)',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      colors: {
        brand: {
          red: "hsl(var(--brand-red) / <alpha-value>)",
          blue: "hsl(var(--brand-blue) / <alpha-value>)",
          green: "hsl(var(--brand-green) / <alpha-value>)",
          orange: "hsl(var(--brand-orange) / <alpha-value>)",
          yellow: "hsl(var(--brand-yellow) / <alpha-value>)",
        },
        brutal: {
          bg: "hsl(var(--brutal-bg) / <alpha-value>)",
          text: "hsl(var(--brutal-text) / <alpha-value>)",
          border: "hsl(var(--brutal-border) / <alpha-value>)",
        },
      },
      borderWidth: {
        "3": "3px",
      },
      boxShadow: {
        brutal: "4px 4px 0px 0px #000",
        "brutal-sm": "2px 2px 0px 0px #000",
        "brutal-lg": "8px 8px 0px 0px #000",
      },
    },
  },
  plugins: [],
};

export default config;
