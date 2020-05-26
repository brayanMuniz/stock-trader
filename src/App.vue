<template>
  <div v-if="dataReady">
    <navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { firebaseApp, db } from "@/db.ts";
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
        if (userData != null)
          store.commit("updateMyData", JSON.parse(userData));
        if (store.getters.getMyUserData == null)
          await this.getMyData().then(res => {
            this.dataReady = true;
          });
        else {
          this.dataReady = true;
        }
        console.log(store.getters.getMyUserData);
      } else {
        console.log("There is no user");
        store.commit("updateUserUid", null);
        this.dataReady = true;
      }
    });
  },
  methods: {
    // Todo: Whenever you call updateMyData, update window.localStorage;
    async getMyData() {
      const myUId: string | null = store.getters.getUserUid;
      if (myUId != null)
        await db
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
  // firestore: {
  //   Users: db.collection("Users").doc('myUserId')
  // }
});
</script>