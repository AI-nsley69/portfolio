<template>
  <li class="w-1/4 aspect-square rounded-lg gradient-border lg:min-w-48 hover:scale-[1.02]">
    <a :href="url" target="_blank" class="w-full h-full text-white hover:text-white flex flex-col justify-around items-center">
        <span class="text-lg">{{ title }}</span>
        <img :src="icon" :alt="`${title} icon`" loading="lazy" class="w-24 h-24 aspect-square"/>
        <span class="text-sm">{{ description }}</span>
    </a>
  </li>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";

interface Project {
    title: string,
    description: string,
    url: string,
    icon: string,
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
