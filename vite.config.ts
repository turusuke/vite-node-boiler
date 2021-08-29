import { defineConfig } from "vite"
import { VitePluginNode } from "vite-plugin-node"

export default defineConfig({
  // ...vite configures
  server: {
    // vite server configs, for details see [vite doc](https://vitejs.dev/config/#server-host)
    port: 8081,
  },
  plugins: [
    ...VitePluginNode({
      // Nodejs native Request adapter
      // currently this plugin support 'express', 'nest', 'koa' and 'fastify' out of box,
      // you can also pass a function if you are using other frameworks, see Custom Adapter section
      adapter: "fastify",

      // tell the plugin where is your project entry
      appPath: "./src/app.ts",
    }),
  ],
})
