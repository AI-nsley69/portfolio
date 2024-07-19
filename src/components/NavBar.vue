<template>
  <div
    class="flex flex-col items-center justify-start w-24 h-screen border-gray-400 border-r-2 border-solid p-1 lg:p-2"
  >
    <div
      id="logo"
      class="flex flex-col items-center justify-center h-24 w-full gap-2 xl:gap-4"
    >
      <img src="/logo.jpg" alt="logo" class="h-full w-full rounded-md" />
      <div class="border-b-2 border-solid border-gray-400 w-11/12"></div>
    </div>
    <div
      id="content"
      class="flex flex-1 flex-col items-center justify-start py-2 lg:py-4"
    >
      <img src="/icons/briefcase.svg" class="w-2/5 rounded-md filter-white cursor-pointer" @click="triggerScroll('#projects')">
    </div>
  </div>
</template>

<script setup lang="ts">
function triggerScroll(id: string) {
    const el = document.querySelector(id);
    el?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
    });
}
</script>

<style scoped>
.filter-white {
    filter: invert(100%)
}
</style>
