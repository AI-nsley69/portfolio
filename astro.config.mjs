import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	output: "static",
	integrations: [vue({ appEntrypoint: "/src/main.ts" }), tailwind()],
});
