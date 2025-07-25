import {
    defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        proxy: {
            '/api': {
                target: 'https://www.demonslayer-api.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '/api/v1'),
            },
        },
    },
    build: {
        outDir: 'dist'
    }
})