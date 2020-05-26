<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { firebaseApp } from "@/db.ts";
import navbar from "@/components/navbar.vue";

import Vue from "vue";
export default Vue.extend({
  data() {
    return {};
  },
  async created() {
    await firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
      } else {
        console.log("There is no user");
      }
    });
  },
  components: {
    navbar
  }
  // firestore: {
  //   Users: db.collection("Users").doc('myUserId')
  // }
});
</script>