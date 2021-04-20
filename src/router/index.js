Vue.use(VueRouter);

import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Chart from "./components/Chart.vue";

import generateVueComponent from "./component";
import Highcharts from "highcharts";

// const Chart = generateVueComponent(Highcharts);
// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home,
//   },
// ];

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes,
// });

export default function install(Vue, options = {}) {
  Vue.component(options.tagName || "highcharts", generateVueComponent(options.highcharts || Highcharts));
}
export { Chart };

// export default router;
