<template>
  <section class="min-h-screen h-max flex flex-col px-4 bg-with-img mt-10 sm:mt-16 xl:mt-24">
    <PageHeader title="Projects" />
    <ul
      class="grid grid-cols-1 text-center sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 mr-8"
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
import { defineComponent } from "vue";
import ProjectItem from "../Project/ProjectItem.vue";
import PageHeader from "../PageHeader.vue";
import { projects } from "../../helpers/projects";

defineComponent({
  components: {
    ProjectItem,
    PageHeader,
  },
});
</script>

<style scoped></style>
