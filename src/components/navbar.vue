<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
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
          <router-link to="/" class="nav-link">Home</router-link>|
        </li>
        <li class="nav-item active">
          <router-link to="/about" class="nav-link">About</router-link>|
        </li>

        <div class="card" v-if="userSignedIn">
          <img
            v-if="userHasImageURL"
            width="100"
            :src="userProfileImageURL"
            class="card-img-top"
            alt
          />
          <div class="card-body">
            <h5 class="card-title">{{userData.name}}</h5>
            <p class="card-text">{{userData.currentFunds}}</p>
          </div>
        </div>

        <li class="nav-item active" v-if="!userSignedIn">
          <router-link to="/signUp" class="nav-link">Sign Up</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script lang="ts">
import Vue from "vue";
import store from "@/store/store";
import { Portfolio } from "../store/userModule";
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