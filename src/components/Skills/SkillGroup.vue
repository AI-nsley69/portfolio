<template>
  <div class="w-full h-fit">
    <h2 class="text-3xl font-bold text-neutral-300 mb-4">{{ name }}</h2>
    <ul class="flex flex-row flex-wrap justify-center gap-8 mt-10 text-center">
      <SkillItem v-for="skill in skills" :skill="skill" :key="skill.name" />
    </ul>
    <div class="bg-white/60 min-h-[2px] w-2/3 mx-auto"></div>
  </div>
</template>

<script setup lang="ts">
import { Skill } from "../../helpers/skills";
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
