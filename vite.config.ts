import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    visualizer({
      filename: "dist/stats.html",
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    chunkSizeWarningLimit: 500, // increase chunk size warning (default is 500kb)

    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          motion: ["framer-motion"],
          query: ["@tanstack/react-query"],
          carousel: ["embla-carousel"],
          analytics: ["react-ga4"],
        },
      },
    },
  },
});
