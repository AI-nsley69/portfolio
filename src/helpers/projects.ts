import { ref, type Ref } from 'vue';

export interface Project {
    title: string;
    description: string;
    url: string;
    icon: string;
  }

export const projects: Ref<Project[]> = ref([
    {
      title: "Nyasharp",
      description: "Esoteric language written in C#",
      url: "https://github.com/AI-nsley69/nyasharp",
      icon: "/projects/nyasharp.jpg",
    },
    {
      title: "I Suck",
      description: "Novice Minecraft tweaks",
      url: "https://github.com/AI-nsley69/i-suck",
      icon: "/projects/i-suck.jpg",
    },
    {
      title: "imbed",
      description: "Embed messages into images with encryption",
      url: "https://github.com/AI-nsley69/imbed",
      icon: "/projects/imbed.jpg",
    },
    {
      title: "Khaos Utils",
      description:
        "A special-purpose Discord Bot written in Node.js for a Minecraft community",
      url: "https://github.com/KhaosMC/khaos-utils",
      icon: "/projects/khaos-utils.jpg",
    },
    {
      title: "ZigBrot",
      description: "A simple mandelbrot renderer with basic multi-threading",
      url: "https://github.com/AI-nsley69/ZigBrot",
      icon: "/projects/mandelbrot.jpg",
    },
    {
      title: "MonoPew",
      description: "Simple Space Invaders-like game written in MonoGame",
      url: "https://github.com/AI-nsley69/MonoPew",
      icon: "/projects/monopew.jpg",
    },
  ]);