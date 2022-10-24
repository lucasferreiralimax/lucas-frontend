import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import VitePluginHtmlEnv from 'vite-plugin-html-env';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VitePluginHtmlEnv(), svgr(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 7777
  }
})
