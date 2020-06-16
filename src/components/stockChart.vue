<template>
  <div class="container-fluid">
    <line-chart :chartData="chartData" :options="chartOptions"></line-chart>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LineChart, { ChartData } from "./LineChart";

export default Vue.extend({
  name: "stockChart",
  props: ["chartData", "chartOptions"],
  components: {
    LineChart
  }
});
</script>
