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
      name: 'heman-core-test-common',
      fileName: (format) => `heman-core-test-common.${format}.js`,
    },
  },
});
