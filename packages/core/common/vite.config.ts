import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    dts(),
    tsconfigPaths(), // 절대 경로 생성시 사용된다.
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'core-common',
      formats: ['es', 'cjs'],
      fileName: (format) => `core-common.${format}.js`,
    },
  },
});
