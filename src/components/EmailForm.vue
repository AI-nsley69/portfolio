<template>
  <div
    v-if="store.emailFormOpen"
    class="absolute top-0 left-0 w-full h-full bg-black/50 z-[90] p-8 flex flex-col items-center justify-center"
    @click:outside="store.toggleEmailForm()"
  >
    <div
      class="relative w-[90%] h-4/5 flex flex-col items-center justify-center"
    >
      <div
        class="absolute inset-0 bg-gradient-to-r from-fuchsia-800 to-violet-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-xl w-full max-w-6xl h-full ml-auto mr-auto"
      ></div>
      <div
        class="relative flex flex-col justify-space items-center w-full max-w-6xl h-full z-[100] bg-neutral-800 rounded-xl p-4 gap-4"
      >
        <font-awesome-icon
          :icon="['fas', 'x']"
          class="text-white relative ml-auto right-2 cursor-pointer border-2 border-white/30 hover:border-rose-500 rounded-full p-2 w-4 h-4"
          @click="store.toggleEmailForm()"
        />
        <h2 class="w-full font-bold text-2xl">Contact me! ✨</h2>
        <div
          class="w-3/5 h-[2px] max-h-[2px] bg-gradient-to-r from-transparent via-white to-transparent rounded-md z-[100]"
        ></div>
        <form
          target="_blank"
          action="https://formsubmit.co/af08eb4d77ce09e8b586dd8bbfa2756b"
          method="POST"
          class="flex flex-col justify-space items-center w-full gap-4"
          @submit.capture="handleSubmit"
        >
          <input
            type="hidden"
            name="_url"
            value="https://portfolio.benji.foo"
          />
          <div class="flex flex-col text-left gap-2 w-full max-w-md">
            <label for="name" class="text-neutral-300 text-xl">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full rounded-md p-2 border-2 border-rose-800 bg-transparent outline-none focus:border-rose-500"
              placeholder="Your name"
              required
            />
          </div>
          <div class="flex flex-col text-left gap-2 w-full max-w-md">
            <label for="email" class="text-neutral-300 text-xl">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full rounded-md p-2 border-2 border-rose-800 bg-transparent outline-none focus:border-rose-500"
              placeholder="Your email"
              required
            />
          </div>
          <div class="flex flex-col text-left gap-2 w-full max-w-md">
            <label for="message" class="text-neutral-300 text-xl"
              >Message</label
            >
            <textarea
              type="content"
              id="message"
              name="message"
              class="w-full h-48 rounded-md p-2 border-2 border-rose-800 bg-transparent outline-none focus:border-rose-500"
              placeholder="Your inquiry"
              required
            ></textarea>
          </div>
          <div class="flex flex-row gap-2 justify-center w-full max-w-md">
            <button
              type="submit"
              class="bg-black text-white px-4 py-2 rounded-lg w-full hover:border-rose-800 hover:border-2"
              @submit=""
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "../store";

const store = useStore();

function handleSubmit() {
  setTimeout(store.toggleEmailForm, 100);
}
</script>

<style scoped></style>
