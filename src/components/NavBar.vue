<template>
  <div
    class="flex flex-col items-center justify-start w-24 h-screen border-gray-400 border-r-2 border-solid p-1"
  >
    <div
      id="logo"
      class="flex flex-col items-center justify-center h-24 w-full gap-2 xl:gap-4"
    >
      <img src="/logo.jpg" alt="logo" class="h-full w-full rounded-md" />
      <div class="border-b-2 border-solid border-gray-400 w-11/12"></div>
    </div>
    <div
      id="content"
      class="flex flex-1 flex-col items-center justify-start py-2 xl:py-4"
    >
      <p>Hello World!</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
