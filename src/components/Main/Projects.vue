<template>
  <section class="min-h-screen h-max flex flex-col px-4 bg-with-img">
    <PageHeader title="Projects" />
    <ul
      class="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24 mr-8"
    >
      <ProjectItem
        v-for="project in projects"
        :project="project"
        :key="project.url"
      />
    </ul>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, ref, type Ref } from "vue";
import ProjectItem from "../Project/ProjectItem.vue";
import PageHeader from "../PageHeader.vue";

defineComponent({
  components: {
    ProjectItem,
    PageHeader,
  },
});

interface Project {
  title: string;
  description: string;
  url: string;
  icon: string;
}

const projects: Ref<Project[]> = ref([
  {
    title: "Nyasharp",
    description: "Esoteric language written in C#",
    url: "https://github.com/AI-nsley69/nyasharp",
    icon: "/projects/nyasharp.jpg",
  },
  {
    title: "I Suck",
    description: "Novice Minecraft tweaks",
    url: "https://github.com/AI-nsley69/i-suck",
    icon: "/projects/i-suck.jpg",
  },
  {
    title: "imbed",
    description: "Embed messages into images with encryption",
    url: "https://github.com/AI-nsley69/imbed",
    icon: "/projects/imbed.jpg",
  },
  {
    title: "Khaos Utils",
    description:
      "A special-purpose Discord Bot written in Node.js for a Minecraft community",
    url: "https://github.com/KhaosMC/khaos-utils",
    icon: "/projects/khaos-utils.jpg",
  },
  {
    title: "ZigBrot",
    description: "A simple mandelbrot renderer with basic multi-threading",
    url: "https://github.com/AI-nsley69/ZigBrot",
    icon: "/projects/mandelbrot.jpg",
  },
  {
    title: "MonoPew",
    description: "Simple Space Invaders-like game written in MonoGame",
    url: "https://github.com/AI-nsley69/MonoPew",
    icon: "/projects/monopew.jpg",
  },
]);
</script>

<style scoped>
</style>
