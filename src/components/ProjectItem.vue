<template>
  <li
    class="rounded-3xl p-[2px] bg-gradient-to-tr from-rose-500 to-fuchsia-600 h-64 m-4 transition duration-300 ease-in-out hover:bg-gradient-to-r drop-shadow-xl"
  >
    <div
      class="bg-gradient-to-tr from-neutral-600 to-stone-800 grid grid-cols-5 w-full h-full rounded-3xl overflow-hidden"
    >
      <!-- <div
        class="w-14 h-14 rounded-full bg-transparent flex justify-center items-center"
      >
        <i :class="`${icon} text-4xl text-neutral-100`"></i>
      </div> -->

      <img
        :src="icon"
        class="w-full h-full object-cover col-span-2"
        loading="lazy"
        :alt="`${title} project image`"
      />

      <div class="flex flex-col justify-start items-center col-span-3 gap-2">
        <h3 class="mt-12 text-3xl font-bold text-neutral-100">{{ title }}</h3>
        <p class="mt-5 text-base text-neutral-400">{{ description }}</p>
        <div class="relative inline-flex group mt-4">
            <div
                class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-sm group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt rounded-lg">
            </div>
            <a :href="url"
                class="relative gap-2 inline-flex items-center justify-center p-2 text-lg font-bold text-white hover:text-white transition-all duration-200 bg-black font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 rounded-lg"
                role="button">
                <font-awesome-icon :icon="['fa-brands', 'github']" class="h-5" />
                <span>Source</span>
            </a>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Project {
  title: string;
  description: string;
  url: string;
  icon: string;
}

interface IProp {
  project: Project;
}

const { project } = defineProps<IProp>();
const { url, description, title, icon } = project;
</script>

<style scoped>
.gradient-border {
  background:
    linear-gradient(var(--primary), var(--primary)) padding-box,
    linear-gradient(135deg, darkorchid, var(--accent)) border-box;
  border: 2px solid transparent;
}
</style>
