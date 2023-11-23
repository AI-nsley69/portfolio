<template>
  <header
    class="w-full min-h-fit h-16 flex align-middle justify-start py-2 px-4"
  >
    <button
      v-for="(item, index) of pages"
      :key="index"
      class="flex flex-row align-middle justify-center"
    >
      <fa-icon :icon="item.icon"></fa-icon>
      <span class="flex-1">{{ item.title }}</span>
    </button>
  </header>
</template>

<script setup lang="ts">
const pages = [
  {
    component: () => import("./pages/About.vue"),
    title: "About",
    icon: "user",
  },
];
</script>

<style scoped>
header {
  background-color: #121212;
}
</style>
