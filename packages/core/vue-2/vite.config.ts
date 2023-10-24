import { defineConfig } from "vite";
import { createVuePlugin as vue } from "vite-plugin-vue2";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    viteCommonjs(),
    dts({
      insertTypesEntry: true, // 컴포넌트 타입 생성
    }),
    cssInjectedByJsPlugin(), // 빌드시 css를 js에 삽입
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // scss import
        additionalData:
          '@import "./src/styles/variables.scss";' +
          '@import "./src/styles/var.scss";' +
          '@import"./src/styles/colors.scss";' +
          '@import "./src/styles/mixins.scss";',
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "heman-core-test-vue-2",
      fileName: (format) => `heman-core-test-vue-2.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
