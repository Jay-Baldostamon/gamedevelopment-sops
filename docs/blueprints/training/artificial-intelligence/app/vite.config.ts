import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  // Relative base keeps the built tracker portable when it is served from /tracker/ on GitHub Pages.
  base: './',
  plugins: [react()],
  test: {
    include: ['src/**/*.test.ts'],
  },
})
