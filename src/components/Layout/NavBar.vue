<template>
  <div
    class="absolute right-2 top-1/2 bottom-1/2 m-auto w-12 h-fit bg-gradient-to-b from-cardinal-700 to-cardinal-500 px-2 rounded-xl z-50 border-2 border-cardinal-800"
  >
    <div
      id="content"
      class="flex flex-col items-center justify-center py-2 lg:py-4 gap-4"
    >
        <font-awesome-icon
          :icon="['fas', 'person-digging']"
          class="w-4/5 text-white text-xl cursor-pointer hover:scale-[1.02] active:scale-[0.98] hover:text-red-400"
          @click="triggerScroll('#work-experience')"
        />
        <font-awesome-icon
          :icon="['fas', 'briefcase']"
          class="w-4/5 text-white text-xl cursor-pointer hover:scale-[1.02] active:scale-[0.98] hover:text-red-400"
          @click="triggerScroll('#projects')"
        />
        <font-awesome-icon
          :icon="['fas', 'gears']"
          class="w-4/5 text-white text-xl cursor-pointer hover:scale-[1.02] active:scale-[0.98] hover:text-red-400"
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
