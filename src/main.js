 import Vue from "vue";
import App from "./App.vue";
import router from "./starterRouter";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
