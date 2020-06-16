<template>
  <div v-if="userSignedIn">
    <div class="container">
      <div class="row">
        <div class="col-md-10">
          <stock-chart :chartData="datacollection" :chartOptions="chartOptions"></stock-chart>
        </div>
        <div class="col-md-2">
          <watchlist />
        </div>
      </div>
    </div>
  </div>
  <div v-else>Template Page</div>
</template>

<script lang='ts'>
import Vue from "vue";
import store from "@/store/store";
import stockChart from "@/components/stockChart.vue";
import watchlist from "@/components/watchlist.vue";
import { ChartData } from "@/components/LineChart";

export default Vue.extend({
  name: "Home",
  data() {
    return {
      datacollection: new Object() as ChartData,
      chartOptions: { maintainAspectRatio: false }
    };
  },
  mounted() {
    this.datacollection = this.fillData();
  },
  methods: {
    fillData(): ChartData {
      return {
        labels: this.getArrayOfRandomInts(),
        datasets: [
          {
            label: "Crypto Market",
            backgroundColor: "#f87979",
            borderColor: "#8A0707",
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
      return Math.floor(Math.random() * 69) + 5;
    }
  },
  computed: {
    userSignedIn(): boolean {
      const myUserUid: string | null = store.getters.getUserUid;
      if (myUserUid != null) return true;
      return false;
    }
  },
  components: {
    stockChart,
    watchlist
  }
});
</script>
