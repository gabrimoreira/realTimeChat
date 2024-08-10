import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist', // Para que o build seja gerado dentro da pasta server
        emptyOutDir: true,
    },
});
