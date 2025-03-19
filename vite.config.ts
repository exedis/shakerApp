import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import dns from "dns";
import basicSsl from "@vitejs/plugin-basic-ssl";
dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react({
      babel: {
        plugins: [
          "@emotion",
          ["@babel/plugin-proposal-decorators", { legacy: true }],
        ],
      },
    }),
  ],
  server:
    process.env.NODE_ENV === "production"
      ? undefined
      : {
          port: 3001,
          cors: {
            origin: true,
          },
          proxy: {
            "/api": {
              changeOrigin: true,
              target: "http://localhost:3000",
            },
          },
        },
  build: {
    outDir: "./docs",
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: [
            "node_modules/react/index.js",
            "node_modules/react-dom/index.js",
          ],
        },
      },
    },
  },
  define: {
    "process.env": process.env,
  },
  base: "./",
});
