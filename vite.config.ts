import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import visualizer from "rollup-plugin-visualizer";
import Compression from "vite-compression-plugin"; // gzip  压缩
import { resolve } from "path";
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  envDir: "./",
  resolve: {
    alias: {
      src: resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: "hidden",
    brotliSize: false,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  plugins: [
    vue(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    Compression(),
    visualizer({
      filename: "./node_modules/.cache/visualizer/stats.html",
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
    AutoImport({ // 配置自动导入
      imports: ['vue']
    }),
  ],
});
