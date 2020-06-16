import Vue from "vue";
import { Line, mixins } from "vue-chartjs";
import { Component, Prop } from "vue-property-decorator";

@Component({
  extends: Line,
  mixins: [mixins.reactiveProp],
})
export default class LineChart extends Vue<Line> {
  constructor() {
    super();
  }
  @Prop({
    default: {
      labels: [],
      datasets: [],
    },
  })
  readonly chartData!: ChartData;

  @Prop() readonly options: any;
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
}

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
