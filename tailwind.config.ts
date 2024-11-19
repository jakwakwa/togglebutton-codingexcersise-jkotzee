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
        "main-color": "#091E42",
        "icon-default": "#44546F",
        "icon-inverse": "#FFFFFF",
        "icon-disabled": "rgba(9, 30, 66, 0.31)", // #091E424F
        "text-default": "rgba(23, 43, 77, 1)", // #172B4D
        "text-inverse": "rgba(255, 255, 255, 1)", // #FFFFFF
        "text-disabled": "rgba(9, 30, 66, 0.31)", // #091E424F
        "border-default": "rgba(9, 30, 66, 0.14)", // #091E4224
        "border-selected": "rgba(48, 56, 74, 1)", // ##30384A
        "border-disabled": "rgba(9, 30, 66, 0.06)", // #091E420F
        "background-default": "rgba(9, 30, 66, 0.06)", // #091E420F
        "background-selected": "rgba(48, 56, 74, 1)", // ##30384A
        "background-disabled": "rgba(9, 30, 66, 0.03)", // #091E4208
        "background-hover": "rgba(9, 30, 66, 0.14)", // #091E4224
        "background-selected-hover": "rgba(75, 81, 96, 1)", // #4B5160
        "background-neutral-hover": "rgba(9, 30, 66, 0.14)", // #091E424F
        "background-neutral-active": "rgba(9, 30, 66, 0.31)", // #091E420A
        "background-selected-active": "rgba(91, 98, 111, 1)", // ##5B626F
        background: "var(--background)",
        foreground: "var(--foreground)",
        ...blackA,
				...mauve,
				...violet,
      },
      fontSize: {
        "label-sm": "12px",
        "label-md": "16px",
        "label-lg": "18px",
      },
    },
  },
  plugins: [],
} satisfies Config;


