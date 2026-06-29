import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.GITHUB_PAGES === "true" ? "/VCIIP/" : "/",
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: 5174,
    strictPort: false,
    proxy: {
      "/wp-json": {
        target: "https://vciip.lt",
        changeOrigin: true,
      },
    },
  },
  preview: {
    host: "0.0.0.0",
    port: 4174,
    strictPort: false,
  },
});
