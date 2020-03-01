<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            Register
          </div>
          <div class="card-body">
            <div
              v-if="error"
              class="alert alert-danger"
            >
              {{ error }}
            </div>
            <form
              action="#"
              @submit.prevent="submit"
            >
              <div class="form-group row">
                <label
                  for="name"
                  class="col-md-4 col-form-label text-md-right"
                >Name</label>

                <div class="col-md-6">
                  <v-text-field
                    id="name"
                    v-model="form.name"
                    type="name"
                    class="form-control"
                    name="name"
                    value
                    required
                    autofocus
                  />
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="email"
                  class="col-md-4 col-form-label text-md-right"
                >Email</label>

                <div class="col-md-6">
                  <v-text-field
                    id="email"
                    v-model="form.email"
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
                  for="role"
                  class="col-md-4 col-form-label text-md-right"
                >Student or Teacher?</label>
                <select
                  v-model="form.role"
                  class="form-control"
                >
                  <option
                    id="student"
                    type="radio"
                    name="student"
                    :value="student"
                  >
                    Student
                  </option>
                  <option
                    id="teacher"
                    type="radio"
                    name="teacher"
                    :value="teacher"
                  >
                    Teacher
                  </option>
                </select>
                <!-- <div class="col-md-6">
                  <v-text-field
                    id="role"
                    v-model="form.role"
                    type="text"
                    class="form-control"
                    name="role"
                    value
                    required
                  />
                </div> -->
              </div>

              <div class="form-group row">
                <label
                  for="password"
                  class="col-md-4 col-form-label text-md-right"
                >Password</label>

                <div class="col-md-6">
                  <v-text-field
                    id="password"
                    v-model="form.password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <v-btn
                    type="submit"
                    class="btn btn-primary"
                  >
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
import firebase from 'firebase'

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        role: '',
        password: '',
      },
      error: null,
    }
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name,
            })
            .then(moreData => {
              alert(`User ${moreData.displayName} created!`)
              firebase.database().ref('users/').push({
                uid: data.user.uid
              }).set({
                name: this.form.name,
                email: this.form.email,
                role: this.form.role
              })
            })
            this.$router.replace('cardlayout')
            console.log(data)

        })
        .catch(err => {
          this.error = err.message
        })
    },
  },
}
</script>
