import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        entryFileNames: "assets/index.js",
        chunkFileNames: "assets/chunk-[hash].js",
        assetFileNames: "assets/[name].[ext]"
      }
    }
  },
  publicDir: "public"
});
