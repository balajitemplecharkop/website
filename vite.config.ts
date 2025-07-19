import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import fs from 'fs';

// Removed vite-plugin-purgecss for build stability

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    // Removed vite-plugin-critters and purgecss for build stability
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    https: process.env.NODE_ENV !== 'production' ? {
      key: fs.readFileSync(path.resolve(__dirname, '.cert/key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, '.cert/cert.pem')),
    } : undefined,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
