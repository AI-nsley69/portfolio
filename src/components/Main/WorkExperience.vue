<template>
  <section class="min-h-screen flex flex-col px-4 text-left bg-with-img w-full">
    <PageHeader title="Experience" />
    <div
      class="container w-full px-4 py-12 mx-auto bg-gradient-to-r from-fuchsia-800 via-fuchsia-800 to-violet-700 bg-opacity-30 rounded-lg shadow-2xl"
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
              <h3 class="text-xl font-semibold tracking-wide">
                {{ experience.title }}, {{ experience.company }}
              </h3>
              <time
                class="text-xs tracking-wide uppercase dark:text-gray-300"
                >{{ periodToString(experience.period) }}</time
              >
              <p class="mt-3">
                Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc
                ut diam aliquet tincidunt nec nec dui. Donec mollis turpis eget
                egestas sodales.
              </p>
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

defineComponent({
  components: {
    PageHeader,
  },
});

interface Experience {
  title: string;
  company: string;
  period: {
    start: number;
    end: number | null;
  };
}

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

const workExperience: Ref<Experience[]> = ref([]);
onMounted(async () => {
  const res = await fetch("/data/work-experience.json");
  if (!res.ok) return;

  workExperience.value = await res.json();
});
</script>

<style scoped>
/* .bg-with-img {
  background-image: url("/backgrounds/projects.webp");
  background-size: cover;
  background-position: center;

  background-attachment: fixed;

  --mask: linear-gradient(to bottom, var(--primary) 0, rgba(0, 0, 0, 0) 80%)
    100% 50% / 100% 100% repeat-x;
  mask-image: var(--mask);
  -webkit-mask-image: var(--mask);
} */
</style>
