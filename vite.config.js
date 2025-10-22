import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/Template/',
    test: {
        environment: 'jsdom',
        setupFiles: './tests/setup.js',
        css: true,
        coverage: { reporter: ['text', 'html'] },
    },
})
