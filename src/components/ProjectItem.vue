<template>
  <div class="bg-transparent lg:w-2/5 sm:w-5/6 lg:h-48 sm:h-64 flex flex-col justify-center items-center">
    <div
      class="bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg shadow-lg p-4 w-full h-full"
    >
      <h1 class="text-2xl font-bold text-white mb-4">
        {{ title }}
      </h1>
      <p class="text-md text-white mb-8">
        {{ description }}
      </p>
      <a
        :href="`${url}`"
        class="bg-white hover:bg-gray-200 text-purple-600 font-bold py-2 px-4 rounded"
      >
        Source
      </a>
    </div>
  </div>
  <!-- <a
    class="relative w-2/5 bg-gray-900 block p-6 rounded-lg max-w-sm mx-auto mt-24 -z-10"
    href="#"
  >
    <span
      class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
    ></span>

    <div class="my-4">
      <h2 class="text-white text-2xl font-bold pb-2">{{ title }}</h2>
      <p class="text-gray-300 py-1">{{ description }}</p>
    </div>

    <div class="flex justify-end">
      <button
        class="px-2 py-1 text-white border border-gray-200 font-semibold rounded hover:bg-gray-800"
      >
        Click Me
      </button>
    </div>
  </a> -->

  <!-- <li class="w-1/4 aspect-square rounded-lg gradient-border lg:min-w-48 hover:scale-[1.02]">
    <a :href="url" target="_blank" class="w-full h-full text-white hover:text-white flex flex-col justify-around items-center">
        <span class="text-lg">{{ title }}</span>
        <img :src="icon" :alt="`${title} icon`" loading="lazy" class="w-24 h-24 aspect-square"/>
        <span class="text-sm">{{ description }}</span>
    </a>
  </li> -->
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
