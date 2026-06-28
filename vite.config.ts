import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Split the React/Router runtime into its own long-lived chunk.
        // It rarely changes, so returning visitors keep it cached even
        // after app code is redeployed.
        manualChunks(id) {
          if (
            /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|@remix-run|scheduler)[\\/]/.test(
              id
            )
          ) {
            return "react-vendor";
          }
        },
      },
    },
  },
});
