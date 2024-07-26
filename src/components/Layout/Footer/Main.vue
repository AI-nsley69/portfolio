<template>
  <div
    class="col-span-3 border-x-2 border-cod-gray-700 w-full h-full flex flex-row justify-center items-start py-2 gap-2"
  >
    <div class="flex flex-col justify-center items-center gap-2">
      <span class="uppercase tracking-wider font-bold">Socials</span>
      <div
        class="w-32 h-[2px] bg-gradient-to-r from-transparent via-cod-gray-600 to-transparent mb-4 gap-4"
      ></div>
      <ul class="menu menu-horizontal">
        <li>
          <a href="https://github.com/AI-nsley69" target="_blank">
            <font-awesome-icon
              :icon="['fa-brands', 'fa-github']"
              class="w-8 h-8 text-white hover:text-white"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/benjamin-aronsson-89a477272/"
            target="_blank"
          >
            <font-awesome-icon
              :icon="['fa-brands', 'fa-linkedin']"
              class="w-8 h-8 text-white hover:text-white"
            />
          </a>
        </li>
        <!-- To be added -->
      </ul>
    </div>
  </div>
</template>
