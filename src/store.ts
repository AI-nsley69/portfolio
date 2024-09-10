import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore({
  id: "app",
  state: () => ({
    emailFormOpen: ref(false),
  }),
  actions: {
    toggleEmailForm() {
      this.emailFormOpen = !this.emailFormOpen;
    },
  },
});
