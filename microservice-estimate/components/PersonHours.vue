<template>
    <div class="uk-margin uk-card uk-card-default uk-card-body">

        <vk-grid>
            <div class="uk-width-expand@m"><h3>Person-Hours</h3></div>
            <div class="uk-width-1-2@m">
                <vk-button type="primary" @click="render();">Render</vk-button>
            </div>
        </vk-grid>

        <LineChart ref="chart" :chart-data="phData" :options="options"/>

    </div>

</template>

<script>

export default {

  data() {
   return {
      chartData: {
        labels: [ '1', '2', '3', '4'],
        datasets: [
            {label: 'Mono', data: [40, 30, 20, 10] },
            {label: 'Micro', data: [10, 20, 22, 28] }
        ],
      },
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
      phData() {
        const fp = this.$store.state.data.personHours.mono;

        const from = this.$store.state.data.config.from;
        const to = this.$store.state.data.config.to;

        const lbl = [];
        for (let n = from; n <= to ; n++) {
            lbl.push(n);
        }

        return {
            chartData: {
                labels: lbl,
                datasets: [
                {label: 'Mono', data: fp },
                ],
            },
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