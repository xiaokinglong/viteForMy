import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import Compression from 'vite-compression-plugin'; // gzip  压缩

export default defineConfig({
  build: {
    outDir: "dist",
    sourcemap: "hidden",
  },
  plugins: [
    vue(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    Compression(),
  ],
});
