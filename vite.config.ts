import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    tanstackStart({ server: { entry: "server" } }),
    viteReact(),
    tailwindcss(),
    /**
     * Nitro is what turns the SSR bundle into a real deployable server.
     *
     * Why this is required and not optional: `vite build` alone emits
     * `dist/client` + `dist/server/server.js`, which is not a platform build
     * output. Deployed as-is, the host has no server entry to route requests to
     * and answers every path with 404. The `vercel` preset makes Nitro emit the
     * Build Output API layout (`.vercel/output`) instead, which is the contract
     * the platform actually reads.
     */
    nitro({ preset: "vercel" }),
  ],
});
