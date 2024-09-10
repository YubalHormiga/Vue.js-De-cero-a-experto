import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  test: {
    coverage: {
      provider: 'v8', // Usar V8 como proveedor de cobertura
      reporter: ['text', 'html', 'json'], // Tipos de reportes a generar
      reportsDirectory: './coverage', // Directorio donde se guardarán los reportes
      include: ['src/**/*.ts', 'src/**/*.vue'],
      exclude: ['node_modules/', 'dist/', 'tests/'],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
