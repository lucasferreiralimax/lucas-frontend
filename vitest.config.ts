import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import path from "path";

export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
  }
})
