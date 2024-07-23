<template>
  <li
    class="rounded-3xl p-px bg-gradient-to-tr from-rose-500 to-fuchsia-600 h-64 m-4 transition duration-300 ease-in-out hover:bg-gradient-to-r hover:scale-[1.02] active:scale-[0.98]"
  >
    <div
      class="bg-gradient-to-tr from-neutral-700 to-stone-800 md:p-8 lg:p-14 flex flex-col justify-center items-center w-full h-full rounded-3xl"
    >
      <div
        class="w-14 h-14 rounded-full bg-transparent flex justify-center items-center"
      >
        <i :class="`${icon} text-4xl text-neutral-100`"></i>
      </div>
      <h3 class="mt-12 text-xl font-bold text-neutral-100">{{ title }}</h3>
      <p class="mt-5 text-base text-gray-300">{{ description }}</p>
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
const { /* url, */ description, title, icon } = project;
</script>

<style scoped>
.gradient-border {
  background:
    linear-gradient(var(--primary), var(--primary)) padding-box,
    linear-gradient(135deg, darkorchid, var(--accent)) border-box;
  border: 2px solid transparent;
}
</style>
