<template>
  <div v-if="userSignedIn">
    <div class="container">
      <div class="row">
        <div class="col-md-10">
          <stock-chart></stock-chart>
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

export default Vue.extend({
  name: "Home",
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
