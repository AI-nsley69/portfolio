<template>
  <section
    class="flex flex-1 flex-col justify-start overflow-y-scroll overflow-x-hidden text-white bg-with-img"
  >
    <!-- Overlay -->
    <Transition name="fade">
      <EmailForm v-if="store.emailFormOpen" />
    </Transition>
    <EmailToggle />
    <!-- Site components -->
    <Introduction id="home" />
    <div class="my-8">
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
import EmailToggle from "../Email/EmailToggle.vue";
import Introduction from "../Main/Introduction.vue";
import Footer from "./Footer.vue";

const EmailForm = defineAsyncComponent(() => import("../Email/EmailForm.vue"));

const WorkExperience = defineAsyncComponent(() => import('../Main/WorkExperience.vue'));
const Projects = defineAsyncComponent(() => import('../Main/Projects.vue'));
const Skills = defineAsyncComponent(() => import("../Main/Skills.vue"));

import { useStore } from "../../store";

const store = useStore();

defineComponent({
  components: {
    EmailToggle,
    EmailForm,
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
  background-size: cover;
  background-position: center;

  /*  this is where the magic happens:  */
  background-attachment: fixed;
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
