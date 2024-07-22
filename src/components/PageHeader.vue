<template>
    <h2 class="text-2xl w-full text-left mb-4">{{ title }}</h2>
    <div class="w-1/5 bg-gradient-to-r from-white via-neutral-500 to-transparent h-0.5 mb-4"></div>
</template>

<script setup lang="ts">
defineProps({
    title: String,
});
</script>

<style scoped>
</style>