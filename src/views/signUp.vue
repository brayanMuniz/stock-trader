<template>
  <div>
    <form @submit.prevent="makeNewUser">
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

      <div class="form-group">
        <label for="Name">Name</label>
        <input v-model.trim="name" type="text" class="form-control" id="Name" />
      </div>

      <div class="form-group">
        <label for="Starting Amount">Starting Amount $</label>
        <input
          v-model.trim="startingAmount"
          type="number"
          class="form-control"
          id="Starting Amount"
        />
      </div>

      <div class="form-group">
        <label for="Starting Amount">Select A File for Profile Image:</label>
        <input
          ref="upload"
          name="file-upload"
          @change="previewFiles"
          type="file"
          class="form-control"
          id="Profile Image"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script lang="ts">
// Todo: add file for images, name, starting amount
import Vue from "vue";
import { firebaseApp } from "@/db.ts";
export default Vue.extend({
  data() {
    return {
      email: "",
      password: "",
      name: "",
      profilePicture: File,
      startingAmount: 0
    };
  },
  methods: {
    previewFiles(event: any): void {
      this.profilePicture = event.target.files[0];
      console.log(this.profilePicture);
    },
    // Todo: fix profile picture misuse of type
    // Todo: Make FB Functions and whenver a user adds a profile picture add a field linking their url to it in firestores
    async uploadProfilePicture(myUid: string) {
      if (this.profilePicture) {
        const imageUserRef = firebaseApp
          .storage()
          .ref(`users/${myUid}/profilePicture`);
        await imageUserRef
          .put(this.profilePicture)
          .then((res: firebase.storage.UploadTaskSnapshot) => {
            console.log(res.state);
          });
      }
    },
    async addUserData(myUid: string) {
      return await firebaseApp
        .firestore()
        .collection("users")
        .doc(myUid)
        .set({
          name: this.name,
          currentFunds: this.startingAmount
        });
    },
    async makeNewUser() {
      if (this.password.length < 6) {
        alert("Make password at least 6 characters");
      } else if (this.name.length < 1) {
        alert("Make name at least 2 characters");
      } else if (this.startingAmount < 0 || this.startingAmount > 100000) {
        alert("Make Starting amount between 0 and 100,000");
      } else {
        console.log("Will make user");

        await firebaseApp
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(async res => {
            if (res.user) {
              const myUid: string = res.user.uid;
              await this.uploadProfilePicture(myUid);
              await this.addUserData(myUid);
            }
          })
          .catch(err => {
            console.error(err.code, err.message);
          });
      }

      console.log("Todo: Submit data to firestore");
    }
  }
});
</script>
<style lang="scss">
.form-group {
  margin: 1em;
}
</style>