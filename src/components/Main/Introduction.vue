<template>
  <section class="flex flex-col w-full min-h-screen lg:py-4 xl:py-8 gap-2 bg-with-img">
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
.bg-with-img {
  --mask: linear-gradient(to bottom, var(--primary) 0, rgba(0, 0, 0, 0) 80%)
    100% 50% / 100% 100% repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);
  z-index: -1;
  background-image: url('/background.jpg');
  background-size: cover;
  background-position: center;
  
/*  this is where the magic happens:  */
  background-attachment: fixed;
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
