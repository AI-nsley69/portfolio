<template>
  <section class="min-h-screen flex flex-col px-4">
    <PageHeader title="Skills" />
    <ul class="flex flex-row flex-wrap justify-center gap-4 mt-10 text-center">
      <SkillItem v-for="skill in skills" :skill="skill" :key="skill.name" />
    </ul>
  </section>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import { skills } from '../../helpers/skills.ts'
import PageHeader from "../PageHeader.vue";
import SkillItem from "../Skills/SkillItem.vue";

defineComponent({
  components: {
    PageHeader,
  },
});
</script>

<style scoped></style>
