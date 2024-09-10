import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://portfolio.benji.foo",
  integrations: [vue({ appEntrypoint: "/src/main.ts" }), tailwind()],
});
