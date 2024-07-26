<template>
  <div
    class="absolute bottom-2 right-2 w-12 h-12 xl:w-14 xl:h-14  bg-white cursor-pointer rounded-lg flex flex-col items-center justify-center p-1"
  >
    <font-awesome-icon
      :icon="['fa', 'envelope']"
      class="text-black w-4/5 h-4/5"
      @click="store.toggleEmailForm()"
    />
  </div>
</template>

<script setup lang="ts">
import { useStore } from "../../store";

const store = useStore();
</script>

<style scoped></style>
