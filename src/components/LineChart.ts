import Vue from "vue";
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default Vue.extend({
  extends: Line,
  props: {
    chartData: Object,
    options: Object,
  },
  mixins: [reactiveProp],
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
});

export interface ChartData {
  labels: Array<number>;
  datasets: Array<Dataset>;
}

export interface Dataset {
  label: string;
  data: Array<number>;
  borderColor?: string;
  fill?: boolean;
  lineTension?: number;
  backgroundColor?: string;
}
