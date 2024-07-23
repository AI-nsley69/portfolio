<template>
  <section
    class="flex flex-1 flex-col justify-start overflow-y-scroll overflow-x-hidden"
  >
    <!-- Overlay -->
    <Email />
    <!-- Site components -->
    <Introduction id="home" />
    <div class="min-h-16 w-full bg-[#121212]"></div>
    <div class="pages">
      <div
        class="min-h-24 w-full bg-gradient-to-b from-[#121212] to-transparent"
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
import { defineComponent } from "vue";
import Email from "./Email.vue";
import Introduction from "./Main/Introduction.vue";
import WorkExperience from "./Main/WorkExperience.vue";
import Projects from "./Main/Projects.vue";
import Skills from "./Main/Skills.vue";
import Footer from "./Footer.vue";

defineComponent({
  components: {
    Email,
    Introduction,
    WorkExperience,
    Projects,
    Skills,
    Footer,
  },
});
</script>

<style scoped>
.pages {
  background-image: url("/backgrounds/pages.jpg");
  background-size: cover;
  background-position: center;

  background-attachment: fixed;
  background-blend-mode: overlay;
}
section {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
section::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
</style>
