<template>
    <section class="min-h-screen flex flex-col px-4">
        <h2 class="text-2xl w-full text-left mb-4">Work Experience</h2>
        <div class="w-1/5 fading-bottom-border mb-4"></div>
        <div v-if="workExperience.length > 0" class="flex flex-1 flex-col items-center justify-start gap-4">
            <div v-for="experience in workExperience" class="border-2 border-solid border-neutral-400 p-4 rounded-lg flex flex-row w-4/5 bg-red-800/15" :key="`${experience.title}-${experience.company}`">
                <span>{{ experience.title }} @ {{ experience.company }}, ({{ periodToString(experience.period) }}) </span>
            </div>
        </div>
        <div v-else class="flex flex1 flex-col items-center justify-start gap-4">
            <span class="text-2xl">Unable to fetch work experience :(</span>
        </div>
    </section>
</template>
<script setup lang="ts">
import { onMounted, type Ref, ref } from 'vue';

interface Experience {
    title: string,
    company: string,
    period: {
        start: number,
        end: number | null
    }
}

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function periodToString(period: Experience["period"]): string {
    const start = new Date(period.start);
    const end = period.end ? new Date(period.end) : null;

    const startString = `${monthNames[start.getMonth()]}, ${start.getFullYear()}`;
    const endString = end ? `${monthNames[end.getMonth()]}, ${end.getFullYear()}` : "Present";

    return `${startString} - ${endString}`;
}

let workExperience: Ref<Experience[]> = ref([]);
onMounted(async () => {
    const res = await fetch('/data/work-experience.json');
    if (!res.ok) return;

    workExperience.value = await res.json();
})
</script>

<style scoped>
.fading-bottom-border {
  background:
    linear-gradient(var(--primary), var(--primary)) padding-box,
    linear-gradient(to right, rgba(255, 255, 255, 255) 0%, rgba(255, 255, 255, 255) 70%, rgba(255, 255, 255, 0) 100%) border-box;
  border-bottom: 2px solid transparent;
}
</style>