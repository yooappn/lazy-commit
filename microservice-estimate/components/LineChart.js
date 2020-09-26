import { Line, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['options'],
  mounted() {
    this.render();
  },
  methods: {
    render() {
      this.renderChart(this.chartData, this.options);
    }
  }
}