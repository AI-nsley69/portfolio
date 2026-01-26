<template>
  <section class="min-h-screen flex flex-col px-4 text-left bg-with-img w-full">
    <PageHeader title="Experience" />
    <div
      class="container w-full px-4 py-12 mx-auto bg-gradient-to-r from-amethyst-800 via-amethyst-800 to-electric-violet-700 rounded-lg shadow-2xl"
    >
      <div class="grid gap-4 mx-4 sm:grid-cols-12 mr-8">
        <div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
          <div
            class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300"
          >
            <div
              v-for="experience in workExperience"
              class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-rose-700"
            >
              <h3 class="text-xl font-semibold tracking-wide text-neutral-300" >
                {{ experience.title }}, {{ experience.company }}
              </h3>
              <time
                class="text-xs tracking-wide uppercase dark:text-gray-300"
                >{{ periodToString(experience.period) }}</time
              >
              <ul class="mt-3">
                <li v-for="work in experience.work" class="flex flex-row justify-start align-text-top ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="h-5 pt-1 fill-neutral-300 mr-2"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M247.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L179.2 256 41.9 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                  <p class="text-md text-neutral-300" >{{ work }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { defineComponent, onMounted, type Ref, ref } from "vue";
import PageHeader from "../PageHeader.vue";
import { type Experience, workExperience } from "../../helpers/workExperience";

defineComponent({
  components: {
    PageHeader,
  },
});

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function periodToString(period: Experience["period"]): string {
  const start = new Date(period.start);
  const end = period.end ? new Date(period.end) : null;

  const startString = `${monthNames[start.getMonth()]} ${start.getFullYear()}`;
  const endString = end
    ? `${monthNames[end.getMonth()]} ${end.getFullYear()}`
    : "Present";

  return `${startString} - ${endString}`;
}
</script>

<style scoped></style>
