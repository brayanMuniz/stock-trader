<template>
  <div class="card-group">
    <div class="card" v-for="topicStocks in exampleData" :key="topicStocks.topicName">
      <div class="card-header">{{topicStocks.topicName}}</div>
      <div class="card-body">
        <div class="card" v-for="stock in topicStocks.stocksWathced" :key="stock.name">
          <div class="card-header">{{stock.name}}</div>
          <div class="card-text">${{stock.currentPrice}}</div>
          <div class="card-footer">{{stock.amountOwned}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "watchlist",
  data() {
    return {
      exampleData: Array<Topic>()
    };
  },
  mounted() {
    this.exampleData = this.getExampleData();
  },
  methods: {
    getExampleData(): Array<Topic> {
      const exampleDataArray: Array<Topic> = [];
      const exampleData: Topic = {
        topicName: "Crypto",
        stocksWathced: [
          {
            name: "BTC",
            currentPrice: 20000,
            amountOwned: 100,
            changeIn24Hours: 0.5
          }
        ]
      };
      const exampleDataTwo: Topic = {
        topicName: "Overview",
        stocksWathced: [
          {
            name: "TSLA",
            currentPrice: 5000,
            amountOwned: 5,
            changeIn24Hours: -0.02
          }
        ]
      };

      exampleDataArray.push(exampleData);
      exampleDataArray.push(exampleDataTwo);

      return exampleDataArray;
    }
  }
});

interface Topic {
  topicName: string;
  stocksWathced: Array<WatchlistStock>;
}

interface WatchlistStock {
  name: string;
  currentPrice: number;
  amountOwned: number;
  changeIn24Hours: number;
}
</script>

<style lang="scss" scoped>
.card-group {
  flex-flow: column wrap !important;
}
.card {
  background-color: #1e2124 !important;
}
</style>