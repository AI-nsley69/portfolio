<template>
  <div
    class="absolute right-2 top-1/2 bottom-1/2 m-auto w-12 h-fit bg-gradient-to-b from-punch-700 to-punch-600 px-2 rounded-box z-50 border-2 border-punch-800"
  >
    <div
      id="content"
      class="flex flex-col items-center justify-center py-2 lg:py-4 gap-4" client:only="vue"
    >
      <font-awesome-icon
        :icon="['fas', 'person-digging']"
        class="w-4/5 text-white text-xl cursor-pointer hover:scale-110 active:scale-90 hover:text-electric-violet-400 transition duration-300 ease-in-out"
        @click="triggerScroll('#work-experience')"
      />
      <font-awesome-icon
        :icon="['fas', 'briefcase']"
        class="w-4/5 text-white text-xl cursor-pointer hover:scale-110 active:scale-90 hover:text-electric-violet-400 transition duration-300 ease-in-out"
        @click="triggerScroll('#projects')"
      />
      <font-awesome-icon
        :icon="['fas', 'gears']"
        class="w-4/5 text-white text-xl cursor-pointer hover:scale-110 active:scale-90 hover:text-electric-violet-400 transition duration-300 ease-in-out"
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
