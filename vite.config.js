import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Ensure JSX in .js files is transformed since you kept App.js
      include: [
        '**/*.jsx',
        '**/*.js'
      ]
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
