<template>
  <section
    class="flex flex-1 flex-col justify-start overflow-y-scroll overflow-x-hidden text-white"
  >
    <!-- Overlay -->
    <Transition name="fade">
      <EmailForm v-if="store.emailFormOpen" />
    </Transition>
    <EmailToggle />
    <!-- Site components -->
    <Introduction id="home" />
    <div class="min-h-16 w-full bg-black"></div>
    <div class="pages">
      <div
        class="min-h-24 w-full bg-gradient-to-b from-black to-transparent"
      ></div>
      <WorkExperience id="work-experience" />
      <Projects id="projects" />
      <Skills id="skills" />
    </div>
    <!-- Footer -->
    <Footer />
  </section>
</template>

<script setup lang="ts">
import { defineComponent, onMounted } from "vue";
import EmailToggle from "./EmailToggle.vue";
import EmailForm from "./EmailForm.vue";
import Introduction from "./Main/Introduction.vue";
import WorkExperience from "./Main/WorkExperience.vue";
import Projects from "./Main/Projects.vue";
import Skills from "./Main/Skills.vue";
import Footer from "./Footer.vue";

import { useStore } from "../store";

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
    const section = document.querySelector(".pages");
    section?.classList.add("pages-lazy");
  });
});
</script>

<style scoped>
.pages-lazy {
  background-image: url("/backgrounds/pages.jpg");
}

.pages {
  background-size: cover;
  background-position: center;

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
