<template>
  <section
    class="flex flex-1 flex-col justify-start overflow-y-scroll overflow-x-hidden text-white bg-with-img-lazy"
  >
    <!-- Site components -->
    <Introduction id="home" />
    <div class="py-8 bg-gradient-to-t from-black via-black/90 to-black/20">
      <WorkExperience id="work-experience" />
      <Projects id="projects" />
      <Skills id="skills" />
    </div>
    <!-- Footer -->
    <Footer />
  </section>
</template>

<script setup lang="ts">
import { defineAsyncComponent, defineComponent, onMounted } from "vue";
import Introduction from "../Main/Introduction.vue";
import Footer from "./Footer.vue";

const WorkExperience = defineAsyncComponent(
  () => import("../Main/WorkExperience.vue")
);
const Projects = defineAsyncComponent(() => import("../Main/Projects.vue"));
const Skills = defineAsyncComponent(() => import("../Main/Skills.vue"));

defineComponent({
  components: {
    Introduction,
    WorkExperience,
    Projects,
    Skills,
    Footer,
  },
});

onMounted(() => {
  setTimeout(() => {
    const section = document.querySelector(".bg-with-img");
    section?.classList.add("bg-with-img-lazy");
  });
});
</script>

<style scoped>
.bg-with-img-lazy {
  background-image: url("/backgrounds/pages.jpg");
}

.bg-with-img {
}

section {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
section::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
