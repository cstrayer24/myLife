import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      "ml-onyx": "#343E3d",
      "ml-Celadon": "#B8E0C7",
      "ml-emerald": "#7BD389",
      "ml-aqua": "#38E4AE",
      "ml-forest": "#008C00",
    },
  },
  plugins: [],
};
export default config;
