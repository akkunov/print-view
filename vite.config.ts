import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
// import os from 'os';

// function getLocalIP() {
//     const interfaces = os.networkInterfaces();
//     for (const name in interfaces) {
//         const iface = interfaces[name];
//         if (!iface) continue;
//
//         for (const net of iface) {
//             if (net.family === 'IPv4' && !net.internal) {
//                 return net.address;
//             }
//         }
//     }
//     return 'localhost'; // fallback
// }

const localIP = `https://print-server-yj0j.onrender.com/`;

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    server: {
        host: localIP,
        port: 80,
        proxy: {
            '/api': {
                target: `https://print-server-yj0j.onrender.com`,
                changeOrigin: true,
            },
        },
    },
    resolve: {
        alias: {
            '@components': '/src/components',
            '@utils': '/src/utils',
        },
    },
});
