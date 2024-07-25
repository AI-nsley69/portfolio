<template>
  <div class="flex flex-row h-screen w-screen">
    <Navbar />
    <Main />
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/NavBar.vue";
import Main from "./components/Main.vue";
import { defineComponent, onMounted } from "vue";
import { toggleDarkMode } from "./utils";

defineComponent({
  components: {
    Navbar: Navbar,
    Main: Main,
  },
});

onMounted(toggleDarkMode);
</script>

<style scoped></style>
