<template>
  <li
    class="lg:w-2/5 sm:4/5 relative overflow-hidden rounded-lg border bg-transparent select-none hover:shadow hover:shadow-teal-200 p-2"
  >
    <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
      <img :src="`${icon}`" class="h-12 w-12 fill-current rounded-md" />
      <div class="space-y-2">
        <h3 class="font-bold text-4xl">{{ title }}</h3>
        <p class="text-md">{{ description }}</p>
      </div>
    </div>
  </li>
  <!-- <div class="bg-transparent lg:w-2/5 sm:w-5/6 lg:h-48 sm:h-64 flex flex-col justify-center items-center">
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
  </div> -->
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
