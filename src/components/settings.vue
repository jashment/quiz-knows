<template>
  <div>
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-12 mb-0 pb-0 ml-3">
          <v-avatar color="indigo" size="120">
            <v-icon dark>mdi-account</v-icon>
          </v-avatar>
        </div>
        <div class="col-md-12 mt-0 pt-0">
          <v-dialog v-model="dialog3" width="500">
            <template v-slot:activator="{ on }">
              <!-- <v-btn text small color="primary" v-on="on">Change Photo</v-btn> -->
            </template>

            <v-card>
              <v-card-title
                class="headline"
                style="background-color: #109199;"
                primary-title
              >Change Photo</v-card-title>

              <v-card-text>
                <v-row>
                  <v-col>
                    (insert file upload here):
                    <textarea />
                  </v-col>
                </v-row>
              </v-card-text>
              <v-divider />

              <v-card-actions>
                <v-btn color="primary" text @click="dialog3 = false">Cancel</v-btn>
                <v-spacer />
                <v-btn color="primary" text @click="dialog3 = false">Set Image</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </div>

      <h3>Full Name: {{user.data.firstName}} {{user.data.lastName}}</h3>
      <h3>Display Name: {{user.data.firstName}}</h3>
      <h3>UVU Email: {{user.data.email}}</h3>
      <h3>Operating System: {{user.data.preferredOS}}</h3>

      <v-dialog v-model="dialog2" width="500">
        <template v-slot:activator="{ on }">
          <v-btn @click="sendPasswordReset">Send Password Reset Email</v-btn>
          <!-- <v-btn v-on="on">Change Password</v-btn> -->
        </template>

        <v-card>
          <v-card-title
            class="headline"
            style="background-color: #109199;"
            primary-title
          >Change Password</v-card-title>

          <v-card-text>
            <v-row>
              <v-col>
                Current Password:
                <textarea />
              </v-col>
              <v-col>
                New Password:
                <textarea />
              </v-col>
              <v-col cols="12" width="100">
                Confirm New Password:
                <textarea />
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider />

          <v-card-actions>
            <v-btn color="primary" text @click="dialog2 = false">Cancel</v-btn>
            <v-spacer />
            <v-btn color="primary" text @click="dialog2 = false">Set New Password</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on }">
          <!-- <v-btn v-on="on">Edit Settings</v-btn> -->
        </template>

        <v-card>
          <v-card-title
            class="headline"
            style="background-color: #109199;"
            primary-title
          >Edit Settings</v-card-title>

          <v-card-text>
            <v-row>
              <v-col>
                Full Name:
                <textarea />
              </v-col>
              <v-col>
                Display Name:
                <textarea />
              </v-col>
              <v-col cols="12" width="100">
                UVU Email:
                <textarea />
              </v-col>
              <v-col cols="12">
                <v-select :items="courses" multiple label="Current Course" dense solo />
              </v-col>
              <v-col>
                <v-select :items="items" label="Operating System" dense solo />
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider />

          <v-card-actions>
            <v-btn color="primary" text @click="dialog = false">Cancel</v-btn>
            <v-spacer />
            <v-btn color="primary" text @click="dialog = false">Apply Changes</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      dialog2: false,
      dialog3: false,
      items: ["macOS", "Windows"],
      courses: ["Insert classes here"]
    };
  },
  computed: {
    ...mapGetters(["user"])
  },
  methods: {
    sendPasswordReset() {
      const currUserEmail = firebase.auth().currentUser.email;
      console.log(currUserEmail);
      firebase
        .auth()
        .sendPasswordResetEmail(currUserEmail)
        .then(() => {
          alert("Password Reset Email Sent!");
        });
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 250px;
}

.container {
  margin-top: 60px;
  margin-left: 180px;
}

h3 {
  margin-bottom: 7px;
}

.v-btn {
  margin-top: 20px;
  margin-right: 25px;
}

textarea {
  background-color: white !important;
  height: 25px;
  margin: 0;
  padding: 0;
  color: black;
  display: block;
  border-radius: 7px;
  padding-left: 10px;
}
</style>
