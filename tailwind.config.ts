import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
        heading: ["Cinzel", "serif"],
        body: ["Outfit", "sans-serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
};

export default config;
