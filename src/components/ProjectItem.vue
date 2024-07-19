<template>
  <li class="w-1/4 aspect-square rounded-lg gradient-border lg:min-w-48">
    <a :href="url" target="_blank" class="w-full h-full block">

    </a>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  url: String,
  title: String,
});
</script>

<style scoped>
.gradient-border {
  background:
    linear-gradient(var(--primary), var(--primary)) padding-box,
    linear-gradient(135deg, darkorchid, var(--accent)) border-box;
  border: 2px solid transparent;
}
</style>
