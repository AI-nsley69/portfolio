<template>
    <section class="min-h-screen h-max flex flex-col px-4">
        <h2 class="text-2xl w-full text-left">Projects</h2>
        <div class="w-1/5 fading-bottom-border mb-4"></div>
        <ul class="flex flex-row flex-wrap gap-4 w-full justify-center">
            <ProjectItem url="https://google.se" title="Google" />
            <ProjectItem url="https://google.se" title="Google" />
            <ProjectItem url="https://google.se" title="Google" />
            <ProjectItem url="https://google.se" title="Google" />
            <ProjectItem url="https://google.se" title="Google" />
            <ProjectItem url="https://google.se" title="Google" />
        </ul>
    </section>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import ProjectItem from '../ProjectItem.vue';

defineComponent({
    components: {
        ProjectItem,
    }
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