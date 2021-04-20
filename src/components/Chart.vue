<!--<template>
  <div class="chartElem">
    <div class="row">
      <highcharts class="chart" :options="chartOptions" :updateArgs="updateArgs"></highcharts>
      <div>
        <h3>Flexibly change the value of each point:</h3>
        <h4>Points:</h4>
        <form class="row points">
          <div v-for="index in 8" :key="index">
            <p>{{ index }}</p>
            <input v-model.number="points[index - 1]" type="number" class="numberInput" />
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div id="title">
        <h3>Set chart title dynamically:</h3>
        <input type="text" v-model="title" />
      </div>
      <div id="chartType">
        <h3>Select chart type:</h3>
        <select v-model="chartType">
          <option>Spline</option>
          <option>AreaSpline</option>
          <option>Line</option>
          <option>Scatter</option>
          <option>Column</option>
          <option>Area</option>
        </select>
      </div>
      <div id="animationDuration">
        <h3>Select update animation duration:</h3>
        <select v-model="animationDuration" type="number">
          <option>0</option>
          <option>500</option>
          <option>1000</option>
          <option>2000</option>
        </select>
      </div>
      <div id="seriesColor">
        <h3>Select color of the series:</h3>
        <div class="row">
          <input id="colorPicker" v-if="colorInputIsSupported" type="color" value="#6fcd98" v-model="seriesColor" />
          <select v-else v-model="seriesColor">
            <option>Red</option>
            <option>Green</option>
            <option>Blue</option>
            <option>Pink</option>
            <option>Orange</option>
            <option>Brown</option>
            <option>Black</option>
            <option>Purple</option>
          </select>
        </div>
        <p>Current color: {{ seriesColor }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    highcharts: Chart,
  },
  data: function() {
    return {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Monthly Average Rainfall'
  },
  subtitle: {
    text: 'Source: WorldClimate.com'
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Rainfall (mm)'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Tokyo',
    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

  }, {
    name: 'New York',
    data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

  }, {
    name: 'London',
    data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

  }, {
    name: 'Berlin',
    data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

  }]
};
  // data() {
  //   return {
  //     title: "",
  //     points: [10, 0, 8, 2, 6, 4, 5, 5],
  //     chartType: "Spline",
  //     seriesColor: "#6fcd98",
  //     colorInputIsSupported: null,
  //     animationDuration: 1000,
  //     updateArgs: [true, true, { duration: 1000 }],
  //     chartOptions: {
  //       chart: {
  //         type: "spline",
  //       },
  //       title: {
  //         text: "Sin chart",
  //       },
  //       series: [
  //         {
  //           data: [10, 0, 8, 2, 6, 4, 5, 5],
  //           color: "#6fcd98",
  //         },
  //       ],
  //     },
  //   };
  // },
</script>

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
</style> -->
