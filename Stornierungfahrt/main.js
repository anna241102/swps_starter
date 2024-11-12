import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import { ToastPlugin } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

Vue.config.productionTip = false;

// Axios global verfügbar machen
Vue.prototype.$axios = axios;

// Vue Toastification verwenden
Vue.use(ToastPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app');
