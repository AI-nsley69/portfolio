<template>
  <section class="flex flex-col w-full min-h-screen gap-4 leading-4">
    <div class="w-full flex flex-col flex-1 backdrop-blur-sm">
      <div
        class="flex flex-col flex-1 justify-center items-center w-full gap-8"
      >
        <div class="text-left w-full flex flex-row justify-center px-4 h-fit">
          <h1
            class="typewriter font-bold w-fit max-w-fit text-2xl xl:text-6xl py-1 drop-shadow-2xl"
          >
            Hello, I'm Benjamin! 👋
          </h1>
        </div>
        <h2
          class="text-xl xl:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-lime-200 py-1 drop-shadow-lg"
        >
          Software Engineer
        </h2>
        <p class="text-md xl:text-xl text-neutral-300 animate-fade">
          I'm a {{ age }} year old developer from Sweden.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const birthday = new Date(2004, 3, 7);
const yearsInMilliseconds = 365 * 24 * 60 * 60 * 1000;
const age = Math.floor(
  (new Date().getTime() - birthday.getTime()) / yearsInMilliseconds
);
</script>

<style scoped>
.typewriter {
  overflow: hidden;
  border-right: 2px solid #fff;
  white-space: nowrap;
  letter-spacing: 0.1em;
  animation: typewriter 3s steps(100, end), blink-caret 0.75s step-end infinite;
}

@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 100%;
    max-width: fit-content;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #fff;
  }
}
</style>
