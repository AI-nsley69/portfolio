<template>
  <div
    class="absolute right-2 top-1/2 bottom-1/2 m-auto w-12 h-fit bg-neutral-700 px-2 rounded-xl"
  >
    <!-- <div
      id="logo"
      class="flex flex-col items-center justify-center h-24 w-full gap-2 xl:gap-4"
    >
      <img src="/logo.jpg" alt="logo" class="h-full w-full rounded-md" />
      <div class="border-b-2 border-solid border-gray-400 w-11/12"></div>
    </div> -->
    <div
      id="content"
      class="flex flex-col items-center justify-center py-2 lg:py-4 gap-4"
    >
      <img
        src="/icons/person-digging.svg"
        class="w-4/5 rounded-md filter-white cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
        @click="triggerScroll('#work-experience')"
      />
      <img
        src="/icons/briefcase.svg"
        class="w-4/5 rounded-md filter-white cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
        @click="triggerScroll('#projects')"
      />
      <img
        src="/icons/gears.svg"
        class="w-4/5 rounded-md filter-white cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
        @click="triggerScroll('#skills')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
function triggerScroll(id: string) {
  const el = document.querySelector(id);
  el?.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
}
</script>

<style scoped>
.filter-white {
  filter: invert(100%);
}
</style>
