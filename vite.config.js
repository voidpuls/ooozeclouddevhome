import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react({ fastRefresh: true })],
  server: {
    port: 4200,
    open: true,
    onListening: ({ server }) => {
      const address = server.address();
      const host = address.address === "::" ? "localhost" : address.address;
      const protocol = server.config.server.https ? "https" : "http";
      console.log(
        `🚀 Grenn友 Dev Server ready at: ${protocol}://${host}:${address.port}`
      );
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    sourcemap: true,
    target: "esnext",
  },
});
