<template>
    <section class="min-h-screen h-max flex flex-col px-4">
        <h2 class="text-2xl w-full text-left">Projects</h2>
        <div class="w-1/5 fading-bottom-border mb-4"></div>
        <ul class="flex flex-row flex-wrap gap-4 w-full justify-center">
            <ProjectItem v-for="project in projects" :project="project" :key="project.url" />
        </ul>
    </section>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, ref, type Ref } from 'vue';
import ProjectItem from '../ProjectItem.vue';

defineComponent({
    components: {
        ProjectItem,
    }
})

interface Project {
    title: string,
    description: string,
    url: string,
    icon: string,
}

let projects: Ref<Project[]> = ref([]);
onMounted(async () => {
    const res = await fetch("/data/projects.json");
    if (!res.ok) return;

    projects.value = await res.json();
})

</script>

<style scoped>
.fading-bottom-border {
  background:
    linear-gradient(var(--primary), var(--primary)) padding-box,
    linear-gradient(to right, rgba(255, 255, 255, 255) 0%, rgba(255, 255, 255, 255) 70%, rgba(255, 255, 255, 0) 100%) border-box;
  border-bottom: 2px solid transparent;
}
</style>