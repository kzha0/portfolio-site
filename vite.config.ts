import path from "node:path";
import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import mdx from "@mdx-js/rollup";
import { netlifyPlugin } from "@netlify/remix-adapter/plugin";

declare module "@remix-run/node" {
    interface Future {
        v3_singleFetch: true;
    }
}

export default defineConfig({
    plugins: [
        mdx({ providerImportSource: "@mdx-js/react" }),
        remix({
            ssr: false, // SPA mode https://remix.run/docs/en/main/guides/spa-mode
            future: {
                v3_fetcherPersist: true,
                v3_relativeSplatPath: true,
                v3_throwAbortReason: true,
                v3_singleFetch: true,
                v3_lazyRouteDiscovery: true,
            },
            appDirectory: "./src/app",
        }),
        tsconfigPaths(),
        netlifyPlugin(),
    ],
    resolve: {
        alias: {
            "~": path.resolve(__dirname, "./src"),
        },
    },
});
