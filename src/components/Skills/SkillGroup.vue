<template>
  <div class="sm:w-4/5 lg:w-2/3 mx-auto h-fit bg-white/20 p-4 rounded-box backdrop-blur-md">
    <h2 class="text-3xl font-bold text-neutral-100 drop-shadow-lg mb-4">
      {{ name }}
    </h2>
    <ul class="flex flex-row flex-wrap justify-center gap-8 mt-10 text-center">
      <SkillItem v-for="skill in skills" :skill="skill" :key="skill.name" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Skill } from "../../helpers/skills";
import SkillItem from "./SkillItem.vue";

interface IProp {
  skillGroup: {
    name: string;
    skills: Skill[];
  };
}

const { skillGroup } = defineProps<IProp>();
const { name, skills } = skillGroup;
</script>

<style scoped></style>
