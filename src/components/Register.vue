Registration
<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            Register
          </div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">
              {{ error }}
            </div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right"
                  >First Name</label
                >

                <div class="col-md-6">
                  <v-text-field
                    id="firstName"
                    v-model="form.firstName"
                    type="firstName"
                    :rules="[nameRules.required]"
                    class="form-control"
                    name="firstName"
                    value
                    required
                    autofocus
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right"
                  >Last Name</label
                >

                <div class="col-md-6">
                  <v-text-field
                    id="lastName"
                    v-model="form.lastName"
                    type="lastName"
                    :rules="[nameRules.required]"
                    class="form-control"
                    name="lastName"
                    value
                    required
                    autofocus
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right"
                  >Email</label
                >

                <div class="col-md-6">
                  <v-text-field
                    id="email"
                    v-model="form.email"
                    :rules="emailRules"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
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
                    :rules="[rules.required, rules.min]"
                    class="form-control"
                    name="password"
                    required
                  />
                </div>
              </div>

              <v-divider class="my-6"></v-divider>

              <div class="form-group row">
                <label for="uvid" class="col-md-4 col-form-label text-md-right"
                  >UVU ID</label
                >

                <div class="col-md-6">
                  <v-text-field
                    id="uvid"
                    v-model="form.uvid"
                    type="text"
                    :rules="[rules.idMin]"
                    class="form-control"
                    name="uvid"
                    value
                    required
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="role" class="col-md-4 col-form-label text-md-right"
                  >Role</label
                >
                <label for="">Student</label>
                <input
                  id="student"
                  v-model="form.role"
                  checked
                  type="radio"
                  name="roleRadio"
                  value="Student"
                />
                <label for="">Teacher</label>
                <input
                  id="teacher"
                  v-model="form.role"
                  type="radio"
                  name="roleRadio"
                  value="Teacher"
                />
              </div>

              <div class="form-group row">
                <label for="preferredOS" class="col-md-4 col-form-label text-md-right"
                  >Preferred OS</label
                >
                <label for="">Mac OS</label>
                <input
                  id="macOS"
                  v-model="form.preferredOS"
                  checked
                  type="radio"
                  name="OSRadio"
                  value="MacOS"
                />
                <label for="">Windows</label>
                <input
                  id="windows"
                  v-model="form.preferredOS"
                  type="radio"
                  name="OSRadio"
                  value="Windows"
                />
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <v-btn type="submit" class="btn btn-primary">
                    Register
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
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        uvid: "",
        role: "",
        preferredOS: "",
        password: "",
      },
      error: null,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      rules: {
        required: value => !!value || "Password is Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match",
        idMin: v => v.length >= 8 || "Must have 8 characters"
      },
      nameRules: {
        required: value => !!value || "Name is Required."
      }
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.firstName
            })
            .then(moreData => {
              firebase
                .database()
                .ref("users")
                .child(data.user.uid)
                .set({
                  firstName: this.form.firstName,
                  lastName: this.form.lastName,
                  email: this.form.email,
                  uvid: this.form.uvid,
                  role: this.form.role,
                  preferredOS: this.form.preferredOS,
                  approved: false
                });
                return moreData
            });
          this.$router.replace("/");
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLen: minLength(6)
    },
    name: {
      required
    }
  }
};
</script>
<style scoped>
label {
  padding: 10px;
}
input {
  margin: auto 0;
}
</style>
