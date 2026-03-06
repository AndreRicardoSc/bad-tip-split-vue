import { createApp } from 'vue';
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css'
import App from './App.vue';
import router from './router';
import './style.css';

createApp(App).use(router).use(ToastPlugin).mount('#app');
