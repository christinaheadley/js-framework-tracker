<!--<template>
  <div id="app">
    <div>
      <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
      <charts :options="chartOptions"></charts>
      <highcharts :options="chartOptions" :callback="someFunction"></highcharts>
    </div>
    <figure class="highcharts-figure">
      <p class="highcharts-description">
        A basic column chart compares rainfall values between four cities. Tokyo has the overall highest amount of
        rainfall, followed by New York. The chart is making use of the axis crosshair feature, to highlight months as
        they are hovered over.
      </p>
    </figure>
  </div>
</template>

<style scoped>
input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}
#colorPicker {
  border: 0;
  padding: 0;
  margin: 0;
  width: 30px;
  height: 30px;
}
.numberInput {
  width: 30px;
}
</style>


<script>
-->
// import axios from "axios";
// // import HighchartsVue from "highcharts-vue";
// // import Highcharts from "highcharts";
// export default {
//   data: function () {
//     return {
//       selected: "chart",
//       currentView: "chart",
//       angulars: "",
//       embers: "",
//       reacts: "",
//       sveltes: "",
//       vues: "",
//       frameworks: [],
//       // [angulars, ember, react, svelte, vue],
//       chartOptions: {
//         chart: {
//           type: "column",
//         },
//         title: {
//           text: "JavaScript Frameworks Use",
//         },
//         // subtitle: {
//         //   text: "Source: <a href="https://github.com">Github API</a>",
//         // },
//         xAxis: {
//           categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//           crosshair: true,
//         },
//         yAxis: {
//           min: 0,
//           title: {
//             text: "Rainfall (mm)",
//           },
//         },
//         tooltip: {
//           headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
//           pointFormat:
//             '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
//             '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
//           footerFormat: "</table>",
//           shared: true,
//           useHTML: true,
//         },
//         plotOptions: {
//           column: {
//             pointPadding: 0.2,
//             borderWidth: 0,
//           },
//         },
//         series: [
//           {
//             name: "Tokyo",
//             data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
//           },
//           {
//             name: "New York",
//             data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3],
//           },
//           {
//             name: "London",
//             data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2],
//           },
//           {
//             name: "Berlin",
//             data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1],
//           },
//         ],
//       },

//   created: function () {
//     this.angularInfo();
//     this.emberInfo();
//     this.reactInfo();
//     this.svelteInfo();
//     this.vueInfo();
//   },
//   methods: {
//     angularInfo: function () {
//       axios.get("https://api.github.com/repos/angular/angular.js").then((response) => {
//         this.angulars = response.data;
//         console.log(this.angulars);
//       });
//     },
//     emberInfo: function () {
//       axios.get("https://api.github.com/repos/emberjs/ember.js").then((response) => {
//         this.embers = response.data;
//         console.log(this.embers);
//       });
//     },
//     reactInfo: function () {
//       axios.get("https://api.github.com/repos/facebook/react").then((response) => {
//         this.reacts = response.data;
//         console.log(this.reacts);
//       });
//     },
//     svelteInfo: function () {
//       axios.get("https://api.github.com/repos/sveltejs/svelte").then((response) => {
//         this.sveltes = response.data;
//         console.log(this.sveltes);
//       });
//     },
//     vueInfo: function () {
//       axios.get("https://api.github.com/repos/vuejs/vue").then((response) => {
//         this.vues = response.data;
//         console.log(this.vues);
//       });
//     },
//   },
// };
//
</script>
