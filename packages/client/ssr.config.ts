import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    ssr: true,
    lib: {
      entry: path.resolve(__dirname, 'ssr.tsx'),
      name: 'ssr',
      formats: ['cjs'],
    },
    rollupOptions: {
      output: {
        dir: 'dist-ssr',
      },
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return
        }
        warn(warning)
      },
    },
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  ssr: {
    format: 'cjs',
  },
})
