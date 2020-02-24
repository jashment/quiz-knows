<template>
  <div>
  <div class="container">
    <h3>Full Name:</h3>
    <h3>Display Name:</h3>
    <h3>UVU Email:</h3>
    <h3>Current Courses:</h3>
    <h3>Operating System:</h3>
    <!-- <v-btn>Edit Settings</v-btn> -->
    <v-btn>Change Password</v-btn>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          
          v-on="on"
        >
          Edit Settings
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline" style="background-color: #109199;"
          primary-title
        >
          Edit Settings
        </v-card-title>

        <v-card-text>
          <v-row>
        <v-col>Full Name: <textarea></textarea></v-col>
         <v-col>Display Name: <textarea></textarea></v-col>
       <v-col cols="12" width="100">UVU Email: <textarea></textarea></v-col>
        <v-col cols="12"><v-select
         :items="courses"
         multiple
          label="Current Course"
          dense
          solo
        ></v-select></v-col>
         <v-col> <v-select
          :items="items"
          label="Operating System"
          dense
          solo
        ></v-select></v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Apply Changes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        dialog: false,
         items: ['macOS', 'Windows'],
          courses: [
          'Insert classes here', 
        ],
      }
    },
  }

</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 250px;
}

.container {
  margin-top: 40px;
  margin-left: 80px;
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
