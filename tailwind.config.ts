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
        "bg-color": "var(--bg-color)",
        "dark-bg-color": "var(--dark-bg-color)",
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "dark-secondary-color": "var(--dark-secondary-color)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
