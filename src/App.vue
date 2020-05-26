<template>
  <div v-if="dataReady">
    <navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { firebaseApp } from "@/db.ts";
import navbar from "@/components/navbar.vue";
import store from "@/store/store";
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      dataReady: false
    };
  },
  async created() {
    await firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        store.commit("updateUserUid", user.uid);
        this.dataReady = true;
      } else {
        console.log("There is no user");
        store.commit("updateUserUid", null);
        this.dataReady = true;
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