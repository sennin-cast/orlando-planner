import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
  },
  server: {
    port: 3000,
    proxy: {
      '/api/queue-times': {
        target: 'https://queue-times.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/queue-times/, ''),
      },
    },
  },
});
