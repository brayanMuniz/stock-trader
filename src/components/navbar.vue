<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">Stock-Trader</router-link>
        </li>
        <li class="nav-item active">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>

        <li class="nav-item active" v-if="!userSignedIn">
          <router-link to="/signUp" class="nav-link">Sign Up</router-link>
        </li>

        <!-- Todo: push to the right side -->
        <router-link class="ml-auto navbar-brand" to="/portfolio">
          <img v-if="userHasImageURL" width="30" height="30" :src="userProfileImageURL" alt />
        </router-link>
      </ul>
    </div>
  </nav>
</template>
<script lang="ts">
import Vue from "vue";
import store from "@/store/store";
import { Portfolio } from "@/store/userModule";

export default Vue.extend({
  computed: {
    userSignedIn(): boolean {
      const myUserUid: string | null = store.getters.getUserUid;
      if (myUserUid != null) return true;
      return false;
    },
    userHasImageURL(): boolean {
      const myProfileImageURL: string | null =
        store.getters.getMyProfilePictureURL;
      if (myProfileImageURL != null) return true;
      return false;
    },
    userProfileImageURL(): string {
      return store.getters.getMyProfilePictureURL;
    },
    userData(): Portfolio {
      return store.getters.getMyUserData;
    }
  }
});
</script>