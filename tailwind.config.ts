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
        "nordic-blue": "#2563eb",
        "fresh-green": "#059669",
        "success-green": "#10b981",
        "soft-gray": "#f8fafc",
        "medium-gray": "#64748b",
        "dark-gray": "#1e293b",
      },
    },
  },
  plugins: [],
};

export default config;
