import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "node:fs";
import path from "node:path";

function copyStaticAssets() {
  return {
    name: "copy-static-assets",
    closeBundle() {
      fs.cpSync(path.resolve("assets"), path.resolve("dist/assets"), {
        recursive: true,
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), copyStaticAssets()],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        capitalview: "capitalview.html",
        nhg: "nhg.html",
        nexus: "nexus.html",
      },
    },
  },
});
