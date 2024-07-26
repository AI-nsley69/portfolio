<template>
  <footer
    class="grid grid-cols-5 gap-4 bg-cod-gray-950 min-h-64 w-full py-4"
  >
    <div class="col-span-1 w-full flex flex-col justify-start items-center py-2 gap-2">
        <span class="uppercase tracking-wider font-bold">Assets</span>
        <div class="w-3/5 h-[2px] bg-gradient-to-r from-transparent via-cod-gray-600 to-transparent mb-4"></div>
        <a href="https://unsplash.com" target="_blank" class="text-neutral-300 hover:text-cardinal-400">Unsplash</a>
        <a href="https://icons8.com" target="_blank" class="text-neutral-300 hover:text-cardinal-400">Icons8</a>
    </div>
    <div class="col-span-3 border-x-2 border-cod-gray-700 w-full h-full"></div>
    <div class="col-span-1 w-full h-full flex flex-col justify-start items-center py-2 gap-2">
        <span class="uppercase tracking-wider font-bold">Built with</span>
        <div class="w-3/5 h-[2px] bg-gradient-to-r from-transparent via-cod-gray-600 to-transparent mb-4"></div>
        <a href="https://vuejs.org/" target="_blank" class="text-neutral-300 hover:text-cardinal-400">Vue.js</a>
        <a href="https://tailwindcss.com/" target="_blank" class="text-neutral-300 hover:text-cardinal-400">Tailwind CSS</a>
    </div>
  </footer>
</template>
