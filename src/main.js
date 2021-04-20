import Vue from "vue";
import App from "./App.vue";
import HighchartsVue from "highcharts-vue";
// import axios from "axios";
// import Highcharts from "highcharts";

Vue.config.productionTip = false;
Vue.use(HighchartsVue, { tagName: "charts" });

new Vue({
  el: "#app",
  render: (h) => h(App),
}).$mount("#app");
