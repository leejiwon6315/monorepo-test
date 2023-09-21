import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true, // 컴포넌트 타입 생성
    }),
    tsconfigPaths(), // 절대 경로 생성
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'core-vue-3',
      formats: ['es', 'cjs'],
      fileName: (format) => `core-vue-3.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
