<template>
    <div class="flex items-center justify-between border-b pb-2">
      <div>
        <h3 class="text-sm font-medium">{{ name }}</h3>
        <p class="text-gray-700 font-semibold">{{ value.toFixed(2) }}</p>
        <p
          :class="change > 0 ? 'text-green-500' : 'text-red-500'"
          class="text-sm"
        >
          {{ change > 0 ? '▲' : '▼' }} {{ Math.abs(change).toFixed(2) }}%
        </p>
      </div>
      <div class="w-20 h-10">
        <highcharts :options="chartOptions"></highcharts>
      </div>
    </div>
  </template>
  
  <script>
  import { Chart } from "highcharts-vue";
  
  export default {
    components: {
      highcharts: Chart,
    },
    props: ["name", "value", "change", "data"],
    computed: {
      chartOptions() {
        return {
          chart: {
            type: "spline",
            backgroundColor: "transparent",
            height: 50,
          },
          title: { text: "" },
          xAxis: { visible: false },
          yAxis: { visible: false },
          series: [
            {
              data: this.data,
              color: this.change > 0 ? "green" : "red",
              marker: { enabled: false },
            },
          ],
          tooltip: { enabled: false },
          credits: { enabled: false },
        };
      },
    },
  };
  </script>
  