import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          burgundy: "#8b1524",
          darkBurgundy: "#5c0b15",
          lightBurgundy: "#ab2133",
          gold: "#d4af37",
          lightGold: "#f3cf65",
          darkGold: "#aa841c",
          darkBg: "#090d16",
          cardBg: "#121826",
        }
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Outfit", "Plus Jakarta Sans", "sans-serif"],
        body: ["var(--font-body)", "Plus Jakarta Sans", "Outfit", "sans-serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Outfit", "sans-serif"],
      }
    },
  },
  plugins: [],
};

export default config;
