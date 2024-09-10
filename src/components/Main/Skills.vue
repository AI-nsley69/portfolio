<template>
  <section class="min-h-screen flex flex-col px-4">
    <PageHeader title="Skills" />
    <div
      class="w-full h-full flex flex-col justify-space items-center gap-8 mr-8 sm:my-4 lg:my-8"
    >
      <SkillGroup
        v-for="skillGroup in skills"
        :key="skillGroup.name"
        :skillGroup="skillGroup"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import { skills } from "../../helpers/skills.ts";
import PageHeader from "../PageHeader.vue";
import SkillGroup from "../Skills/SkillGroup.vue";

defineComponent({
  components: {
    PageHeader,
    SkillGroup,
  },
});
</script>

<style scoped></style>
