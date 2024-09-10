<template>
  <h2
    class="md:text-4xl lg:text-5xl w-full text-left mb-4 font-bold uppercase tracking-wider"
  >
    {{ title }}
  </h2>
  <div
    class="w-3/5 xl:w-1/5 bg-gradient-to-r from-white via-neutral-500 to-transparent h-0.5 mb-4"
  ></div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
});
</script>

<style scoped></style>
