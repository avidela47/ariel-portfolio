/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem" },
      screens: { lg: "1100px", xl: "1200px" },
    },
    extend: {
      colors: {
        ink: "#07080d",
        surface: "#0d0f17",
        line: "rgba(255,255,255,0.08)",
        accent: "#36bcf7",
        violet: "#8b5cf6",
      },
      fontFamily: {
        sora: ["var(--font-sora)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #36bcf7 0%, #8b5cf6 100%)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blink: { "0%,100%": { opacity: 1 }, "50%": { opacity: 0 } },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
