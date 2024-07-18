<template>
  <section id="#main" class="flex flex-col w-full h-full lg:py-4 xl:py-8">
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
  </section>
</template>

<script setup lang="ts"></script>

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
  letter-spacing: 0.15em;
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
