import './style.css';
import 'vue-toast-notification/dist/theme-bootstrap.css';
import '@mdi/font/css/materialdesignicons.css';
import { createApp } from 'vue';
import ToastPlugin from 'vue-toast-notification';
import App from './App.vue';
import router from './router';

createApp(App).use(router).use(ToastPlugin).mount('#app');
