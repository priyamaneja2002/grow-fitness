// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // This covers everything inside src
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Just in case you aren't using src
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gymYellow: "#F5D73D",
      },
      fontFamily: {
        teko: ["var(--font-teko)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;