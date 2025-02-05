<template>
    <div>
      <highcharts :options="chartOptions"></highcharts>
    </div>
  </template>
  
  <script>
  import { ref, defineComponent } from 'vue';
  import Highcharts from 'highcharts';
  import HighchartsVue from 'highcharts-vue';
  
  export default defineComponent({
    components: {
      highcharts: HighchartsVue.component
    },
    setup() {
      const chartOptions = ref({
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Dummy Donut Chart'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            innerSize: '60%', // Makes it a donut chart
            dataLabels: {
              enabled: true,
              format: '{point.name}: {point.y}%'
            }
          }
        },
        series: [
          {
            name: 'Sales',
            data: [
              { name: 'Category A', y: 40, color: '#ff6b6b' },
              { name: 'Category B', y: 30, color: '#5f27cd' },
              { name: 'Category C', y: 20, color: '#10ac84' },
              { name: 'Category D', y: 10, color: '#feca57' }
            ]
          }
        ]
      });
  
      return { chartOptions };
    }
  });
  </script>
  