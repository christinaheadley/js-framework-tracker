/* eslint-disable vue/no-unused-components */
<template>
  <div id="app">
    <h2>Welcome in Vue Highcharts Wrapper Demo</h2>
    <hr style="width: 200px; margin: 60px auto" />

    <div>
      <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
      <charts :options="chartOptions"></charts>
    </div>
    <div>
      Angular Stargazers: {{ angulars["stargazers_count"] }} Angular Watchers:
      {{ angulars["subscribers_count"] }} Angular Forks: {{ angulars["forks_count"] }}
    </div>
    <!-- 
    <div>
      Ember Stargazers: {{ embers["stargazers_count"] }} Ember Watchers: {{ embers["subscribers_count"] }} Ember Forks:
      {{ embers["forks_count"] }}
    </div>
    <div>
      React Stargazers: {{ reacts["stargazers_count"] }} React Watchers: {{ reacts["subscribers_count"] }} React Forks:
      {{ reacts["forks_count"] }}
    </div>
    <div>
      Svelte Stargazers: {{ sveltes["stargazers_count"] }} Svelte Watchers: {{ sveltes["subscribers_count"] }} Svelte
      Forks: {{ sveltes["forks_count"] }}
    </div>
    <div>
      Vue Stargazers: {{ vues["stargazers_count"] }} Vue Watchers: {{ vues["subscribers_count"] }} Vue Forks:
      {{ vues["forks_count"] }}
    </div> -->
  </div>
</template>

<style>
.highcharts-figure,
.highcharts-data-table table {
  min-width: 310px;
  max-width: 800px;
  margin: 1em auto;
}

#container {
  height: 400px;
}

.highcharts-data-table table {
  font-family: Verdana, sans-serif;
  border-collapse: collapse;
  border: 1px solid #ebebeb;
  margin: 10px auto;
  text-align: center;
  width: 100%;
  max-width: 500px;
}
.highcharts-data-table caption {
  padding: 1em 0;
  font-size: 1.2em;
  color: #555;
}
.highcharts-data-table th {
  font-weight: 600;
  padding: 0.5em;
}
.highcharts-data-table td,
.highcharts-data-table th,
.highcharts-data-table caption {
  padding: 0.5em;
}
.highcharts-data-table thead tr,
.highcharts-data-table tr:nth-child(even) {
  background: #f8f8f8;
}
.highcharts-data-table tr:hover {
  background: #f1f7ff;
}
</style>

<script>
// const username = "christinaheadley";
import axios from "axios";
// import Chart from "./components/Chart.vue";
// import { Chart } from "highcharts-vue";
export default {
  name: "app",
  data: function () {
    return {
      selected: "chart",
      currentView: "chart",
      angulars: "",
      embers: "",
      reacts: "",
      sveltes: "",
      vues: "",
      Angular: "",
      // Ember: "",
      // React: "",
      // Svelte: "",
      // Vue: "",
      chartOptions: {
        chart: {
          type: "column",
        },
        title: {
          text: "JavaScript Frameworks Use",
        },
        // subtitle: {
        //   text: "Source: <a href="https://github.com">Github API</a>",
        // },
        xAxis: {
          categories: ["Stars", "Watchers", "Forks"],
          crosshair: true,
        },
        yAxis: {
          min: 0,
          title: {
            text: "Count",
          },
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
          },
        },
        series: [
          {
            name: "Angular",
            data: [
              // 66000,
              // 55000,
              // 5000,
              this.angularInfo["stargazers_count"],
              this.angularInfo["subscribers_count"],
              this.angularInfo["forks_count"],
            ],
          },
          {
            name: "Ember",
            data: [
              11000,
              5500,
              1000,
              // this.emberInfo["stargazers_count"],
              // this.emberInfo["subscribers_count"],
              // this.emberInfo["forks_count"],
            ],
          },
          {
            name: "React",
            data: [
              150000,
              100000,
              5000,
              // this.reactInfo["stargazers_count"],
              // this.reactInfo["subscribers_count"],
              // this.reactInfo["forks_count"],
            ],
          },
          {
            name: "Svelte",
            data: [
              6000,
              5000,
              500,
              // this.svelteInfo["stargazers_count"],
              // this.svelteInfo["subscribers_count"],
              // this.svelteInfo["forks_count"],
            ],
          },
          {
            name: "Vue",
            data: [
              166000,
              155000,
              5000,
              // this.vueInfo["stargazers_count"],
              // this.vueInfo["subscribers_count"],
              // this.vueInfo["forks_count"],
            ],
          },
        ],
      },
    };
  },

  created: function () {
    this.angularInfo();
    // this.emberInfo();
    // this.reactInfo();
    // this.svelteInfo();
    // this.vueInfo();
  },
  methods: {
    angularInfo: function () {
      axios.get("https://api.github.com/repos/angular/angular.js").then((response) => {
        this.angulars = response.data;
        // console.log(this.angulars);
      });
    },
    emberInfo: function () {
      axios.get("https://api.github.com/repos/emberjs/ember.js").then((response) => {
        this.embers = response.data;
        // console.log(this.embers);
      });
    },
    reactInfo: function () {
      axios.get("https://api.github.com/repos/facebook/react").then((response) => {
        this.reacts = response.data;
        // console.log(this.reacts);
      });
    },
    svelteInfo: function () {
      axios.get("https://api.github.com/repos/sveltejs/svelte").then((response) => {
        this.sveltes = response.data;
        // console.log(this.sveltes);
      });
    },
    vueInfo: function () {
      axios.get("https://api.github.com/repos/vuejs/vue").then((response) => {
        this.vues = response.data;
        // console.log(this.vues);
      });
    },
  },
};
</script>
