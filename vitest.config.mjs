import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './frontend'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./frontend/vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
    include: [
      'frontend/**/*.{test,spec}.{ts,tsx}',
      'packages/**/src/**/*.{test,spec}.ts',
      'services/**/src/**/*.{test,spec}.ts',
    ],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/src/generated/**',
      'frontend/app/feed/**',
      'frontend/app/community/**',
      'frontend/app/shura/**',
      'frontend/app/admin/community/**',
      'frontend/app/test-route/**',
      'frontend/components/feed/**',
      'frontend/components/community/**',
      'frontend/lib/feed-store.ts',
      'frontend/lib/shura-store.ts',
      'frontend/lib/shura-mock-data.ts',
      'frontend/lib/webrtc-service.ts',
    ],
  },
})
