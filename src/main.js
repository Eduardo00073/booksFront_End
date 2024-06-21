import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const app = createApp(App);

app.use(router);

app.mount('#app');
