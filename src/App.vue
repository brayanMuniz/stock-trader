<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
// import { db } from "@/db.ts";

import Vue from "vue";
export default Vue.extend({
  data() {
    return {};
  }
  // firestore: {
  //   Users: db.collection("Users").doc('myUserId')
  // }
});
</script>