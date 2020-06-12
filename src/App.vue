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
    await firebaseApp.auth().onAuthStateChanged(async user => {
      if (user) {
        store.commit("updateUserUid", user.uid);
        const userData: string | null = window.localStorage.getItem("userData");
        if (userData != null) {
          store.commit("updateMyData", JSON.parse(userData));
          store.commit(
            "updateProfilePictureURL",
            JSON.parse(userData).profilePictureURL
          );
        }
        if (store.getters.getMyUserData === null)
          await this.getMyUserData().then(res => {
            this.dataReady = true;
          });
        else {
          this.dataReady = true;
        }
      } else {
        console.log("There is no user");
        window.localStorage.clear();
        store.commit("updateProfilePictureURL", null);
        store.commit("updateUserUid", null);
        store.commit("updateMyData", null);
        this.dataReady = true;
      }
    });
  },
  methods: {
    async getMyUserData() {
      const myUId: string | null = store.getters.getUserUid;
      if (myUId != null)
        await firebaseApp
          .firestore()
          .collection("users")
          .doc(myUId)
          .get()
          .then(done => {
            window.localStorage.setItem(
              "userData",
              JSON.stringify(done.data())
            );
            store.commit("updateMyData", done.data());
          });
    }
  },
  components: {
    navbar
  }
});
</script>

<style lang="scss">
body {
  background-color: #343a40 !important;
  color: white !important;
}

@import "~bootstrap/scss/bootstrap";
</style>