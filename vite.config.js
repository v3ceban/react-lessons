import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pages from "./pages.json";

const toBuild = {};
pages.forEach((page) => {
  //eslint-disable-next-line no-undef
  toBuild[page] = resolve(__dirname, `pages/${page}/index.html`);
});

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        //eslint-disable-next-line no-undef
        main: resolve(__dirname, "index.html"),
        ...toBuild,
      },
    },
  },
  plugins: [react()],
});
