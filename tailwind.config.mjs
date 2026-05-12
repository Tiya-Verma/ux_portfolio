/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        canvas: "#ffffff",
        ink: "#111827",
        body: "#374151",
        muted: "#6b7280",
        soft: "#9ca3af",
        ghost: "#b5bcc5",
        rule: "#eef0f3",
        accent: "#10b981",
        hover: "#3b82f6",
      },
      fontFamily: {
        sans: [
          '"DM Sans"',
          '"Inter"',
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        display: [
          '"Manrope"',
          '"DM Sans"',
          '"Inter"',
          '"Helvetica Neue"',
          "sans-serif",
        ],
      },
      letterSpacing: {
        whisper: "0.005em",
        tightish: "-0.015em",
      },
    },
  },
  plugins: [],
};
