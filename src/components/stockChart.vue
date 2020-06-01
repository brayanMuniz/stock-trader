<template>
  <div class="container-fluid">
    <line-chart :chartData="datacollection" :options="chartOptions"></line-chart>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LineChart, { ChartData } from "./LineChart";

export default Vue.extend({
  name: "stockChart",
  data() {
    return {
      datacollection: new Object() as ChartData,
      chartOptions: { maintainAspectRatio: false }
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData(): void {
      this.datacollection = {
        labels: this.getArrayOfRandomInts(),
        datasets: [
          {
            label: "Crypto Market",
            backgroundColor: "#f87979",
            borderColor: '#8A0707',
            lineTension: 0,
            fill: false,
            data: this.getArrayOfRandomInts()
          }
        ]
      };
    },
    getArrayOfRandomInts(): Array<number> {
      const filledArray: Array<number> = [];
      let counter = 69;
      while (counter > 0) {
        filledArray.push(this.getRandomInt());
        counter--;
      }
      return filledArray;
    },
    getRandomInt(): number {
      return Math.floor(Math.random() * 50) + 5;
    }
  },
  components: {
    LineChart
  }
});
</script>
