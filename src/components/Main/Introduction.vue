<template>
  <section id="#main" class="flex flex-col w-full min-h-screen lg:py-4 xl:py-8 gap-2">
    <img
      class="w-full fixed top-0 h-1/2 object-cover opacity-30"
      id="bg-img"
      src="/background.jpg"
      alt="background"
      loading="lazy"
    />
    <h1 class="typewriter w-fit max-w-fit lg:text-xl xl:text-4xl">
      Hello, I'm Benjamin! 👋
    </h1>
    <h2 class="text-lg xl:text-2xl">Software Engineer</h2>
    <h3>I'm a {{ age }} year old developer from Sweden.</h3>
  </section>
</template>

<script setup lang="ts">
const birthday = new Date(2004, 3, 7);
const yearsInMilliseconds = 365 * 24 * 60 * 60 * 1000;
const age = Math.floor(
  (new Date().getTime() - birthday.getTime()) / yearsInMilliseconds,
);
</script>

<style scoped>
#bg-img {
  --mask: linear-gradient(to bottom, var(--primary) 0, rgba(0, 0, 0, 0) 80%)
    100% 50% / 100% 100% repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);
  z-index: -1;
}

.typewriter {
  overflow: hidden;
  border-right: 2px solid #fff;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.1em;
  animation:
    typewriter 4s steps(100, end),
    blink-caret 0.75s step-end infinite;
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
