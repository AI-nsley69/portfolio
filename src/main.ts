import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faUser} from '@fortawesome/free-solid-svg-icons';

library.add(faUser);


createApp(App)
	.component('fa-icon', FontAwesomeIcon)
	.mount('#app');
