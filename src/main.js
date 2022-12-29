import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/scss/reset.css";
import "./assets/scss/style.css";
import "./assets/scss/catalog.css";
import "./assets/scss/favorit.css";
import "./assets/scss/modal.css";
import "./assets/scss/mobile576.css";

Vue.config.productionTip = false;


new Vue({
  router,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
