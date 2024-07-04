import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  define: {
    "process.env": {},
  },
  resolve: {
    alias: {
      '/@/': path.resolve(__dirname, 'src'),
      '/@assets/': path.resolve(__dirname, 'src/assets'),
    },
  },
});
