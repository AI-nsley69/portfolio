<template>
    <section class="min-h-screen flex flex-col px-4">
        <h2 class="text-2xl w-full text-left">Projects</h2>
        <div class="w-1/5 border-b-2 border-white border-solid mb-4"></div>
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