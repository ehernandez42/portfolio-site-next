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
        "sawad-bg": "#0a0e1a",
        "sawad-lime": "#00d4ff",
        "sawad-orange": "#3b82f6",
        "sawad-muted": "#6b7280",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        sawad: {
          primary: "#00d4ff",
          secondary: "#3b82f6",
          accent: "#00d4ff",
          neutral: "#111827",
          "base-100": "#0a0e1a",
          "base-200": "#111827",
          "base-300": "#1f2937",
          info: "#00d4ff",
          success: "#00d4ff",
          warning: "#3b82f6",
          error: "#ef4444",
        },
      },
    ],
  },
};
export default config;
