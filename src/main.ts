import { createApp } from "vue";
import "./style.css";
// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { addIcons } from "./helpers/fontAwesome";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// Pinia
import { createPinia } from "pinia";
const pinia = createPinia();

import App from "./App.vue";

const app = createApp(App);

addIcons(library);

app.component("font-awesome-icon", FontAwesomeIcon).use(pinia).mount("#app");
