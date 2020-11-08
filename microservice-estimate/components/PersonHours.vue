<template>
    <div class="uk-margin uk-card uk-card-default uk-card-body">

        <vk-grid>
            <div class="uk-width-expand@m"><h3>Person-Hours</h3></div>
            <div class="uk-width-1-2@m">
                <vk-button type="primary" @click="render();">Render</vk-button>
            </div>
        </vk-grid>

        <LineChart ref="chart" :chart-data="chartData" :options="options"/>

    </div>

</template>

<script>

export default {

  data() {
   return {
      options: {
          layout: {
              padding: {top: 20, left: 20, right: 20, bottom: 20}
          },
          scales: {
              xAxes: [{ display: true }],
              yAxes: [{ display: true }],
          },
          color: ['blue', 'green']
      }
    };
  },
  computed : {
      chartData() {
        const data = this.$store.getters['data/personHoursChartData'];
        console.log(data);
        return data;
      }
  },
  methods : {
    render() {
      this.chartData.datasets = [
            {label: 'Mono', data: [5, 25, 10, 10] },
            {label: 'Micro', data: [10, 40, 50, 60] }
      ];
      this.$refs.chart.render();
    }
  }
};
</script>