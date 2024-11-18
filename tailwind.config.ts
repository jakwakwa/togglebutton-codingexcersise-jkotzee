import type { Config } from "tailwindcss";
import { blackA, mauve, violet } from "@radix-ui/colors";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 
    "./.storybook/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ...blackA,
				...mauve,
				...violet,
      },
    },
  },
  plugins: [],
} satisfies Config;


