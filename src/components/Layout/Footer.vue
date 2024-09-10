<template>
  <footer class="grid grid-cols-5 gap-4 bg-charcoal-950 min-h-64 w-full p-4">
    <Left />
    <Main />
    <Right />
  </footer>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import Left from "./Footer/Left.vue";
import Main from "./Footer/Main.vue";
import Right from "./Footer/Right.vue";

defineComponent({
  components: {
    Left,
    Main,
    Right,
  },
});
</script>
