<template>
  <li class="px-3 py-3">
    <div class="flex flex-col max-w-sm overflow-hidden rounded-lg w-36 h-36">
      <img
        class="w-24 mx-auto"
        :src="icon"
        :alt="`${name} skill icon`"
        loading="lazy"
      />
      <div class="py-2">
        <div class="font-bold text-xl mb-2 text-neutral-300">{{ name }}</div>
      </div>
      <!-- <div class="flex-1 min-h-1 w-full"></div>
      <div
        class="relative bottom-0 mt-auto flex flex-row flex-wrap gap-2 px-4 py-4 justify-center items-center"
      >
        <span
          v-for="tag in tags"
          class="inline-block bg-white rounded-full text-sm font-semibold text-electric-violet-500 p-2"
          >#{{ tag }}</span
        >
      </div> -->
    </div>
  </li>
</template>

<script setup lang="ts">
import type { Skill } from "../../helpers/skills";

interface IProp {
  skill: Skill;
}

const { skill } = defineProps<IProp>();
const { name, icon, tags } = skill;
</script>

<style scoped></style>
