<template>
  <li
    class="h-64 m-4 transition duration-300 ease-in-out hover:bg-gradient-to-r drop-shadow-xl"
  >
    <div
      class="bg-gradient-to-t from-amethyst-700 to-amethyst-800 grid grid-cols-5 w-full h-full rounded-3xl overflow-hidden transition duration-300 ease-in-out hover:scale-[1.02]"
    >
      <img
        :src="icon"
        class="w-full h-full object-center object-cover col-span-2"
        loading="lazy"
        :alt="`${title} project image`"
      />

      <div class="flex flex-col justify-start items-center col-span-3 gap-2">
        <h3
          class="mt-12 text-3xl font-bold text-screamin-green-500 uppercase tracking-wider"
        >
          {{ title }}
        </h3>
        <p class="mt-5 text-base text-neutral-300">{{ description }}</p>
        <a
          :href="url"
          target="_blank"
          class="btn btn-secondary btn-md mt-4 hover:text-inherit active:text-inherit outline-none border-none"
          role="button"
        >
          <font-awesome-icon :icon="['fa-brands', 'github']" class="h-5" />
          <span>Source</span>
        </a>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { Project } from "../../helpers/projects";

interface IProp {
  project: Project;
}

const { project } = defineProps<IProp>();
const { url, description, title, icon } = project;
</script>

<style scoped>
.gradient-border {
  background: linear-gradient(var(--primary), var(--primary)) padding-box,
    linear-gradient(135deg, darkorchid, var(--accent)) border-box;
  border: 2px solid transparent;
}
</style>
