<template>
  <div
    href="#"
    class="fixed top-0 left-0 w-full h-full bg-charcoal-950/80 z-[90] p-8 flex flex-col items-center justify-center"
  >
    <a class="fixed z-[90] w-full h-full" href="#"></a>
    <div
      class="absolute inset-0 bg-gradient-to-r from-amethyst-700 to-electric-violet-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-xl w-full max-w-6xl h-full ml-auto mr-auto"
    ></div>
    <div
      class="absolute flex flex-col justify-space z-[100] items-center w-full max-w-6xl h-full bg-charcoal-900 rounded-xl p-4 gap-8"
    >
      <h2 class="w-full font-bold text-2xl text-center">Contact me! ✨</h2>
      <div
        class="w-3/5 h-[2px] max-h-[2px] bg-gradient-to-r from-transparent via-white to-transparent rounded-md z-[100]"
      ></div>
      <form
        target="_blank"
        action="https://formsubmit.co/0ae1a832962f11e170e19b8b83abed87"
        method="POST"
        class="flex flex-col justify-space items-center w-full gap-4"
      >
        <input type="hidden" name="_url" value="https://portfolio.benji.foo" />
        <div
          class="relative flex flex-col text-left gap-2 w-full max-w-md my-2"
        >
          <input
            type="text"
            id="name"
            name="name"
            class="peer bg-transparent h-10 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-screamin-green-700 focus:ring-screamin-green-600 focus:outline-none"
            placeholder="Your Name"
            required
          />
          <label
            for="name"
            class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-charcoal-900 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-screamin-green-400 peer-focus:text-sm transition-all"
            >Name</label
          >
        </div>
        <div
          class="relative flex flex-col text-left gap-2 w-full max-w-md my-2"
        >
          <input
            type="email"
            id="email"
            name="email"
            class="peer bg-transparent h-10 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-screamin-green-700 focus:ring-screamin-green-600 focus:outline-none"
            placeholder="E-mail"
            required
          />
          <label
            for="email"
            class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-charcoal-900 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-screamin-green-400 peer-focus:text-sm transition-all"
            >E-mail</label
          >
        </div>
        <div
          class="relative flex flex-col text-left gap-2 w-full max-w-md my-2"
        >
          <textarea
            type="content"
            id="message"
            name="message"
            class="peer bg-transparent h-48 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-screamin-green-700 focus:ring-screamin-green-600 focus:outline-none"
            placeholder="Inquiry"
            required
          ></textarea>
          <label
            for="message"
            class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-charcoal-900 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-screamin-green-400 peer-focus:text-sm transition-all"
            >Inquiry</label
          >
        </div>
        <div class="flex flex-row gap-2 justify-center w-full max-w-md">
          <button
            type="submit"
            class="bg-charcoal-950 text-white px-4 py-2 rounded-lg w-full border-charcoal-950 border-2 hover:border-violet-600 active:border-violet-400"
            @submit=""
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
