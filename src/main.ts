import "./style.css";
import type { App } from "vue";
// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { addIcons } from "./helpers/fontAwesome";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// Pinia
import { createPinia } from "pinia";
const pinia = createPinia();

addIcons(library);

export default (app: App) => {
    app.component("font-awesome-icon", FontAwesomeIcon).use(pinia);
}
