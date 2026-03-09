import { defineConfig } from 'vite'; // ESSA LINHA É OBRIGATÓRIA

export default defineConfig({
  build: {
    outDir: "dist",
    minify: "esbuild",
    cssMinify: true,
    sourcemap: false
  }
});
