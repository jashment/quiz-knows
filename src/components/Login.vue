<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            Login
          </div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">
              {{ error }}
            </div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right"
                  >Email</label
                >

                <div class="col-md-6">
                  <v-text-field
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                  />
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="password"
                  class="col-md-4 col-form-label text-md-right"
                  >Password</label
                >

                <div class="col-md-6">
                  <v-text-field
                    id="password"
                    v-model="form.password"
                    type="password"
                    class="form-control text-black"
                    name="password"
                    required
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <v-btn type="submit" class="btn btn-primary" outlined>
                    Login
                  </v-btn>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        uid: null
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(user => {
          return Promise.resolve(firebase
            .database()
            .ref(`users/${user.user.uid}`)
            .once("value")
            .then(firebaseUser => {
              const firebaseUserData = firebaseUser.val();
              sessionStorage.setItem(
                "firebaseUserData",
                JSON.stringify(firebaseUserData)
              );
              return firebaseUserData
            }))
            
        })
        .catch(err => {
          this.error = err.message;
        });
        this.$router.replace("/");
    }
  },
};
</script>
