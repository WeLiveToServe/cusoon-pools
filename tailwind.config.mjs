/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        xl: "1200px",
      },
    },
    extend: {
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        sea: "rgb(var(--color-sea) / <alpha-value>)",
        aqua: "rgb(var(--color-aqua) / <alpha-value>)",
        sand: "rgb(var(--color-sand) / <alpha-value>)",
        foam: "rgb(var(--color-foam) / <alpha-value>)",
        sun: "rgb(var(--color-sun) / <alpha-value>)",
      },
      fontFamily: {
        display: ["\"Fraunces\"", "serif"],
        body: ["\"Manrope\"", "system-ui", "sans-serif"],
      },
      boxShadow: {
        lift: "0 18px 45px -30px rgb(10 28 44 / 0.6)",
        glow: "0 0 0 6px rgb(96 200 215 / 0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        rise: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        rise: "rise 0.7s ease-out both",
        shimmer: "shimmer 9s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
