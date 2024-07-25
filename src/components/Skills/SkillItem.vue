<template>
  <li class="px-3 py-3">
    <div
      class="flex flex-col max-w-sm rounded-lg overflow-hidden shadow-lg bg-gradient-to-tr from-fuchsia-700 to-violet-600 h-full"
    >
      <img
        class="w-1/2 max-h-1/4 mx-auto"
        :src="icon"
        :alt="`${name} skill icon`"
        loading="lazy"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ name }}</div>
        <p class="text-gray-300 text-base">
          {{ description }}
        </p>
      </div>
      <div class="flex-1 min-h-1 w-full"></div>
      <div
        class="relative bottom-0 mt-auto flex flex-row flex-wrap gap-2 px-4 py-4 justify-center items-center"
      >
        <span
          v-for="tag in tags"
          class="inline-block bg-white rounded-full text-sm font-semibold text-violet-600 mr-2 p-2"
          >#{{ tag }}</span
        >
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
interface Skill {
  name: string;
  description: string;
  icon: string;
  tags: string[];
}

interface IProp {
  skill: Skill;
}

const { skill } = defineProps<IProp>();
const { name, description, icon, tags } = skill;
</script>

<style scoped></style>
