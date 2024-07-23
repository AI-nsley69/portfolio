<template>
  <section class="min-h-screen h-max flex flex-col px-4 bg-with-img">
    <PageHeader title="Projects" />
    <ul
      class="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24"
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
import { defineComponent, onMounted, ref, type Ref } from "vue";
import ProjectItem from "../ProjectItem.vue";
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

let projects: Ref<Project[]> = ref([]);
onMounted(async () => {
  const res = await fetch("/data/projects.json");
  if (!res.ok) return;

  projects.value = await res.json();
});
</script>

<style scoped>
.fading-bottom-border {
  background:
    linear-gradient(var(--primary), var(--primary)) padding-box,
    linear-gradient(
        to right,
        rgba(255, 255, 255, 255) 0%,
        rgba(255, 255, 255, 255) 70%,
        rgba(255, 255, 255, 0) 100%
      )
      border-box;
  border-bottom: 2px solid transparent;
}

/* .bg-with-img {
  background-image: url("/backgrounds/projects.webp");
  background-size: cover;
  background-position: center;

  background-attachment: fixed;

  --mask: linear-gradient(to bottom, var(--primary) 0, rgba(0, 0, 0, 0) 80%)
    100% 50% / 100% 100% repeat-x;
  mask-image: var(--mask);
  -webkit-mask-image: var(--mask);
} */
</style>
