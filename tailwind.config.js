/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
        accent: "var(--accent)",
        navy: "var(--navy)",
        navy2: "var(--navy2)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      keyframes: {
        rise: {
          from: { opacity: 0, transform: "translateY(28px)" },
          to: { opacity: 1, transform: "none" },
        },
      },
      animation: { rise: "rise .8s cubic-bezier(.2,.7,.2,1) both" },
    },
  },
  plugins: [],
};
