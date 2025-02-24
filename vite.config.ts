import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { splitVendorChunkPlugin } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin()
  ],
  base: './',  // 使用相对路径
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    target: 'esnext',  // 使用最新的 JS 特性
    minify: 'terser',  // 使用 terser 进行更好的压缩
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          // React 相关库打包到 react-vendor
          if (id.includes('node_modules/react') || 
              id.includes('node_modules/react-dom') || 
              id.includes('node_modules/react-router-dom')) {
            return 'react-vendor';
          }
          // UI 相关库打包到 ui-vendor
          if (id.includes('node_modules/lucide-react')) {
            return 'ui-vendor';
          }
        },
        // 优化文件名以更好地缓存
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  // 优化开发体验
  server: {
    open: true,
    cors: true,
    host: true,
  }
});
