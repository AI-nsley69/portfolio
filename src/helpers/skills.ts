import { ref, type Ref } from "vue";

export interface Skill {
	name: string;
	icon: string;
	tags: string[];
}

export const skills: Ref<Skill[]> = ref([
	{
		name: "JavaScript",
		icon: "/skills/javascript.svg",
		tags: ["Programming", "Frontend", "Backend"],
	},
	{
		name: "TypeScript",
		icon: "/skills/typescript.svg",
		tags: ["Programming", "Frontend", "Backend"],
	},
	{
		name: "CSS",
		icon: "/skills/css.svg",
		tags: ["Frontend"],
	},
	{
		name: "HTML",
		icon: "/skills/html.svg",
		tags: ["Frontend"],
	},
	{
		name: "Vue.js",
		icon: "/skills/vue-js.svg",
		tags: ["Frontend", "JavaScript"],
	},
	{
		name: "Tailwind CSS",
		icon: "/skills/tailwind-css.svg",
		tags: ["Frontend", "CSS"],
	},
]);
