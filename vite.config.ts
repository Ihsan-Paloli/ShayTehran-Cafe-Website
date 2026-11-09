import { defineConfig } from "vite";
import { resolve } from "node:path";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(process.cwd(), "src"),
    },
  },
  css: {
    transformer: "postcss",
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
    }),
    nitro(),
    viteReact(),
  ],
});
