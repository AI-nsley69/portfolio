<template>
  <li
    class="rounded-3xl p-[2px] bg-gradient-to-tr from-rose-500 to-fuchsia-600 h-64 m-4 transition duration-300 ease-in-out hover:bg-gradient-to-r hover:scale-[1.02] active:scale-[0.98]"
  >
    <div
      class="bg-gradient-to-tr from-neutral-700 to-stone-800 grid grid-cols-4 w-full h-full rounded-3xl overflow-hidden"
    >
      <!-- <div
        class="w-14 h-14 rounded-full bg-transparent flex justify-center items-center"
      >
        <i :class="`${icon} text-4xl text-neutral-100`"></i>
      </div> -->

      <img :src="icon" class="w-full h-full object-cover" />

      <div class="flex flex-col justify-start items-center col-span-3">
        <h3 class="mt-12 text-3xl font-bold text-neutral-100">{{ title }}</h3>
        <p class="mt-5 text-base text-neutral-400">{{ description }}</p>
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
