<template>
  <v-container class="text-center">
    <h1 class="text-center py-12 font-weight-light">Students Enrolled</h1>
    <v-row v-if="this.students !== null">
      <v-col cols="8" xs="12" sm="12" md="12" lg="10" xl="8" class="mx-auto">
        <v-data-table
          :headers="headers"
          dense
          :items="students"
          height="410"
          :search="search"
          :sort-desc="[true, false]"
          calculate-widths
          class="elevation-3 mx-12 my-12"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Students</v-toolbar-title>
              <v-divider class="mx-4" inset vertical />
              <v-spacer />
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-toolbar>
          </template>

          <template v-slot:item.grades="{ item }">
            <v-btn @click="viewStudent(item)" color="cyan" text>View</v-btn>
          </template>

          <template v-slot:item.action="{ item }">
            <v-btn text @click="deleteItem(item)">
              <v-icon small class="title mr-4" color="red">
                  mdi-trash-can-outline
              </v-icon>
              DELETE
            </v-btn>
          </template>

          <template v-slot:no-data>
            <v-progress-linear indeterminate color="cyan"></v-progress-linear>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase";

export default {
  mounted() {
    firebase
      .database()
      .ref("users")
      .once("value")
      .then((snapshot) => {
        let data = snapshot.val();
        console.log(snapshot.val());

        for (let item in data){
          this.IDs.push(item)
        }

        for (var key in data) {
          if (data.hasOwnProperty(key)) {
            this.students.push(data[key]);
          }
        }
      });
  },
  data: () => ({
    dialog: false,
    test: [],
    search: "",
    IDs: [],
    selectedStudent: null,
    headers: [
      { text: "Grades", value: `grades`, sortable: false, width: '100' },
      { text: "First", value: "firstName", sortable: false },
      { text: "Last", value: "lastName", sortable: false },
      { text: "UVU ID", value: "uvid", sortable: false },
      { text: "Role", value: "role", sortable: false },
      { text: "Email", value: "email", sortable: false },
      { text: "Actions", value: "action", sortable: false, width: '200' },
    ],
    students: null,
  }),
  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.students = [];
    },

    viewStudent(item) {
      let index = this.students.indexOf(item)
      this.$router.replace("/grades/" + this.IDs[index])
    },

    editItem(item) {
      firebase
        .database()
        .ref("users/")
        .once("value")
        .then((snapshot) => {
          let key = Object.keys(snapshot.val())[this.selectedStudent];
          this.selectedStudent = key;
          console.log(this.selectedStudent);
        });
      this.editedIndex = this.students.indexOf(item);
      console.log(this.students.indexOf(item));
      this.selectedStudent = this.students.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.students.indexOf(item);
      // console.log();
      confirm("Are you sure you want to delete this student?") &&
        this.students.splice(index, 1);
      this.selectedStudent = this.students.indexOf(item);

      // DELETE STUDENT FROM DB
    },
  },
};
</script>

<style scoped>
</style>
