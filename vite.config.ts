import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");

  return {
    // Use root base when running on Vercel (deployed at domain root),
    // otherwise keep the GitHub Pages subpath used during development/gh-pages deploys.
    base: (process.env.VERCEL === '1' || process.env.VERCEL === 'true') ? '/' : '/w.m.-development-web/',

    plugins: [react(), tailwindcss()],

    define: {
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  };
});