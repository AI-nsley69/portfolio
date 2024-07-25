import { createApp } from "vue";
import "./style.css";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { addIcons } from './helpers/fontAwesome';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from "./App.vue";

const app = createApp(App)

addIcons(library);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')
