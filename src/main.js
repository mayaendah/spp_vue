import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'


import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

axios.defaults.baseURL = 'http://localhost:8000/api/';

createApp(App).use(router).component('Datepicker', Datepicker).mount('#app')
