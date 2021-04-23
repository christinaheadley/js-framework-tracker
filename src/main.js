import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import HighchartsVue from "highcharts-vue";
import axios from "axios";
// import Highcharts from "highcharts";

Vue.config.productionTip = false;
Vue.use(HighchartsVue, { tagName: "charts" });
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
