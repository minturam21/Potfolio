import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { viteSourceLocator } from "@metagptx/vite-plugin-source-locator";

export default defineConfig({
  base: "./",
  plugins: [
    viteSourceLocator({ prefix: "mgx" }),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "/src": path.resolve(__dirname, "src"),
    },
  },
});
