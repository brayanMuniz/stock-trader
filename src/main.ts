import Vue from "vue";
import App from "@/App.vue";
import router from "@/router/router";
import store from "@/store/store";
import { firestorePlugin } from "vuefire";

Vue.config.productionTip = true;
Vue.use(firestorePlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
