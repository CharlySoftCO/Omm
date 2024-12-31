import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/admin.scss',
                'resources/sass/auth.scss',
                'resources/sass/guest.scss',
                'resources/js/admin.jsx',
                'resources/js/auth.jsx',
                'resources/js/guest.jsx',
            ],
            refresh: true,
        }),
        react(),
    ],
    build: {
        rollupOptions: {
            external: [
                'datatables.net-bs5/css/dataTables.bootstrap5.css',
            ],
        },
    },
});
