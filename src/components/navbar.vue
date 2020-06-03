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
      <router-link class="navbar-brand" to="/">
        <img v-if="userHasImageURL" width="30" height="30" :src="userProfileImageURL" alt />
      </router-link>

      <form class="ml-auto form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-4"
          type="search"
          placeholder="Search For Stocks"
          aria-label="Search"
        />
      </form>

      <ul class="navbar-nav" v-if="userSignedIn">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">Home</router-link>|
        </li>
        <li class="nav-item active">
          <router-link to="/about" class="nav-link">About</router-link>|
        </li>

        <li class="nav-item active">
          <a href="#" class="nav-link" @click="signOut">Sign Out</a>
        </li>

        <li class="nav-item active" v-if="!userSignedIn">
          <router-link to="/signIn" class="nav-link">Sign In</router-link>
        </li>

        <li class="nav-item active" v-if="!userSignedIn">
          <router-link to="/signUp" class="nav-link">Sign Up</router-link>
        </li>
      </ul>

      <ul class="navbar-nav" v-else>
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
    }
  }
});
</script>