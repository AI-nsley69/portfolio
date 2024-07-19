<template>
    <section class="min-h-screen flex flex-col px-4">
        <h2 class="text-2xl w-full text-left">Work Experience</h2>
        <div class="w-1/5 fading-bottom-border mb-4"></div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.fading-bottom-border {
  background:
    linear-gradient(var(--primary), var(--primary)) padding-box,
    linear-gradient(to right, rgba(255, 255, 255, 255) 0%, rgba(255, 255, 255, 255) 70%, rgba(255, 255, 255, 0) 100%) border-box;
  border-bottom: 2px solid transparent;
}
</style>