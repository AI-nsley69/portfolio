<template>
  <section class="min-h-screen flex flex-col px-4">
    <PageHeader title="Skills" />
    <ul class="flex flex-row flex-wrap justify-center gap-4 mt-10 text-center">
      <SkillItem v-for="skill in skills" :skill="skill" :key="skill.name" />
    </ul>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, ref, type Ref } from "vue";
import PageHeader from "../PageHeader.vue";
import SkillItem from "../Skills/SkillItem.vue";

defineComponent({
  components: {
    PageHeader,
  },
});

interface Skill {
  name: string;
  description: string;
  icon: string;
  tags: string[];
}

const skills: Ref<Skill[]> = ref([
  {
    name: "JavaScript",
    description:
      "JavaScript is a programming language that is one of the core technologies of the World Wide Web. It is also used in many non-browser environments, such as Node.js.",
    icon: "/skills/javascript.svg",
    tags: ["Programming", "Frontend", "Backend"],
  },
  {
    name: "TypeScript",
    description:
      "TypeScript is a superset of JavaScript that compiles to clean JavaScript output. It is designed for developing large applications and transpiling to JavaScript is one of its key features.",
    icon: "/skills/typescript.svg",
    tags: ["Programming", "Frontend", "Backend"],
  },
  {
    name: "CSS",
    description:
      "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.",
    icon: "/skills/css.svg",
    tags: ["Frontend"],
  },
  {
    name: "HTML",
    description:
      "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets, client-side scripting languages, and server-side scripting languages such as PHP and JavaScript.",
    icon: "/skills/html.svg",
    tags: ["Frontend"],
  },
  {
    name: "Vue.js",
    description:
      "Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, with a strong emphasis on the view layer.",
    icon: "/skills/vue-js.svg",
    tags: ["Frontend", "JavaScript"],
  },
  {
    name: "Tailwind CSS",
    description:
      "Tailwind CSS is a utility-first CSS framework that allows you to style your application without writing any new CSS. It provides a set of predefined utility classes that can be used to quickly build custom designs.",
    icon: "/skills/tailwind-css.svg",
    tags: ["Frontend", "CSS"],
  },
]);
</script>

<style scoped></style>
