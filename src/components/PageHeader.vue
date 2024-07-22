<template>
    <h2 class="text-2xl w-full text-left mb-4">{{ title || 'Placeholder' }}</h2>
    <div class="w-1/5 fading-bottom-border mb-4"></div>
</template>

<script setup lang="ts">
defineProps({
    title: String,
});
</script>

<style scoped>
.fading-bottom-border {
  background:
    linear-gradient(var(--primary), var(--primary)) padding-box,
    linear-gradient(to right, rgba(255, 255, 255, 255) 0%, rgba(255, 255, 255, 255) 70%, rgba(255, 255, 255, 0) 100%) border-box;
  border-bottom: 2px solid transparent;
}
</style>