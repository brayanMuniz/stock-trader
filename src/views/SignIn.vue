<template>
  <div class="container">
    <form @submit.prevent="signInUser">
      <div class="form-group">
        <label for="Email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="Email"
          aria-describedby="emailHelp"
          v-model.trim="email"
        />
      </div>

      <div class="form-group">
        <label for="Password">Password</label>
        <input v-model.trim="password" type="password" class="form-control" id="Password" />
      </div>

      <button type="submit" class="btn btn-primary">Sign In</button>
    </form>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { firebaseApp } from "@/db";
export default Vue.extend({
  name: "SignIn",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async signInUser() {
      if (this.password.length < 6) {
        alert("Make password at least 6 characters");
      } else {
        await firebaseApp
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .catch(err => {
            console.error(err);
          });
      }
    }
  }
});
</script>