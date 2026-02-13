// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";  // <-- New import for Tailwind v4

export default defineConfig({
  site: "https://cusoon-pools.com",
  vite: {
    plugins: [tailwindcss()],  // <-- Add the Vite plugin here (instead of integrations)
  },
});