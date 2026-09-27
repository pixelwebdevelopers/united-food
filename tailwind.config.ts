import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          burgundy: "#34070c",
          darkBurgundy: "#1f0306",
          lightBurgundy: "#4e0b12",
          accentBurgundy: "#6b0f1a",
          gold: "#d4af37",
          lightGold: "#f3cf65",
          darkGold: "#aa841c",
          darkBg: "#180306",
          cardBg: "#240508",
        }
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Outfit", "Plus Jakarta Sans", "sans-serif"],
        body: ["var(--font-body)", "Plus Jakarta Sans", "Outfit", "sans-serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Outfit", "sans-serif"],
        serif: ["'Playfair Display'", "'Cormorant Garamond'", "Georgia", "serif"],
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
      }
    },
  },
  plugins: [],
};

export default config;
