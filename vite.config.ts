import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isShopify = mode === "shopify";

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: isShopify
      ? {
          outDir: "shopify/assets",
          emptyOutDir: false,
          manifest: true,
          rollupOptions: {
            input: path.resolve(__dirname, "src/main.tsx"),
            output: {
              entryFileNames: "main.js",
              chunkFileNames: "chunks/[name].js",
              assetFileNames: (assetInfo) => {
                if (assetInfo.name?.endsWith(".css")) {
                  return "main.css";
                }
                return "assets/[name][extname]";
              },
            },
          },
        }
      : undefined,
  };
});
