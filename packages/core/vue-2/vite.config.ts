import { defineConfig } from "vite";
import { createVuePlugin as vue } from "vite-plugin-vue2";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import path from "path";

import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    viteCommonjs(),
    dts({
      insertTypesEntry: true, // 컴포넌트 타입 생성
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
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
