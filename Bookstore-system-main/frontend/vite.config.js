/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    mode: 'development',
    resolve: {
        alias: [
            { find: "@", replacement: path.resolve(__dirname, './src/') },
            { find: "@pages", replacement: path.resolve(__dirname, './src/pages/') },
            { find: "@components", replacement: path.resolve(__dirname, './src/components/') },
            { find: "@routes", replacement: path.resolve(__dirname, './src/routes/') },
            { find: "@styles", replacement: path.resolve(__dirname, './src/styles/') },
            { find: "@api", replacement: path.resolve(__dirname, './src/api/') },
            { find: "@utils", replacement: path.resolve(__dirname, './src/utils/') },
            { find: "@hooks", replacement: path.resolve(__dirname, './src/hooks/') },
        ]
    },
    build: {
        cssMinify: "lightningcss",
        minify: "esbuild",
        manifest: true
    },
    server: {
        port: 3000
    }
})
