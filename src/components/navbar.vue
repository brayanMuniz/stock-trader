<template>
  <!-- Todo: when the navbar goes down, make it a darker color -->
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
      <router-link class="navbar-brand" to="/">
        <img
          v-if="userHasImageURL && userSignedIn"
          width="30"
          height="30"
          :src="userProfileImageURL"
          alt
        />
        <p v-else>Stock-Trader</p>
      </router-link>

      <form class="ml-auto form-inline my-2 my-lg-0" v-if="userSignedIn">
        <input
          class="form-control mr-sm-4"
          type="search"
          placeholder="Search For Stocks"
          aria-label="Search"
        />
      </form>

      <!-- Signed in -->
      <ul class="navbar-nav" v-if="userSignedIn">
        <!-- Todo: add a pop up that makes the user 'deposit' their money  -->
        <li class="nav-item active">
          <router-link to="/cash" class="nav-link">Cash</router-link>
        </li>

        <li class="nav-item active">
          <router-link to="/market" class="nav-link">Market</router-link>
        </li>

        <li class="nav-item active">
          <a href="#" class="nav-link" @click="signOut">Sign Out</a>
        </li>
      </ul>

      <!-- Signed Out -->
      <ul class="navbar-nav ml-auto" v-else>
        <li class="nav-item active">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>

        <li class="nav-item active">
          <router-link to="/signIn" class="nav-link">Sign In</router-link>
        </li>

        <li class="nav-item active">
          <router-link to="/signUp" class="nav-link">Sign Up</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store/store";
import { Portfolio } from "@/store/userModule";
import { firebaseApp } from "../db";

export default Vue.extend({
  methods: {
    async signOut() {
      await firebaseApp
        .auth()
        .signOut()
        .then(res => {
          console.log(res, "signed out");
        });
    }
  },
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