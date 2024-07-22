<template>
    <section class="min-h-screen flex flex-col px-4 text-left">
        <h2 class="text-2xl w-full text-left mb-4">Work Experience</h2>
        <div class="w-1/5 fading-bottom-border mb-4"></div>
        <div class="container max-w-5xl px-4 py-12 mx-auto">
			<div class="grid gap-4 mx-4 sm:grid-cols-12">
				<div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
					<div class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
						<div v-for="experience in workExperience" class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-rose-700">
							<h3 class="text-xl font-semibold tracking-wide">{{ experience.title }}, {{ experience.company }}</h3>
							<time class="text-xs tracking-wide uppercase dark:text-gray-300">{{ periodToString(experience.period) }}</time>
							<p class="mt-3">Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet tincidunt nec nec dui. Donec mollis turpis eget egestas sodales.</p>
						</div>
					</div>
				</div>
			</div>
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

    const startString = `${monthNames[start.getMonth()]} ${start.getFullYear()}`;
    const endString = end ? `${monthNames[end.getMonth()]} ${end.getFullYear()}` : "Present";

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