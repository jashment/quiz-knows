<template>
  <v-container class="text-center">
    <h1 class="text-center py-12 font-weight-light">Students Enrolled</h1>
    <v-data-table
      :headers="headers"
      :items="students"
      :sort-desc="[true, false]"
      sort-by="approved"
      class="elevation-3 mx-12 my-12"
    >
      <template v-slot:item.approved="{ item }">
        <v-chip :color="getColor(item.approved)" dark>{{ getApproved(item.approved) }}</v-chip>
      </template>

      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Students</v-toolbar-title>
          <v-divider class="mx-4" inset vertical />
          <v-spacer />
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-title>
                <span class="headline">Student Approval</span>
              </v-card-title>

              <!-- If student has not been approed, ability to approve -->
              <v-card-text v-if="editedItem.approved === false">
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="12" class="text-center">
                      <p class="title font-weight-regular">
                        Would you like to approve
                        <span class="font-weight-bold blue--text">
                          {{
                          editedItem.name
                          }}
                        </span>
                        to your course?
                      </p>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions v-if="editedItem.approved === false">
                <v-spacer />
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="green" @click="save(true)">Approve</v-btn>
              </v-card-actions>

              <!-- end of not approving student -->

              <!-- If student has been approved, ability to remove approval -->
              <v-card-text v-if="editedItem.approved === true">
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="12" class="text-center">
                      <p class="title font-weight-regular">
                        Would you like to remove approved for
                        <span
                          class="font-weight-bold blue--text"
                        >
                          {{
                          editedItem.name
                          }}
                        </span>
                        to your course?
                      </p>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions v-if="editedItem.approved === true">
                <v-spacer />
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="red" @click="save(false)">Remove approved</v-btn>
              </v-card-actions>

              <!-- end of removing approval from student -->
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>

      <template v-slot:item.photo="{ item }">
        <v-avatar size="30px">
          <v-img :src="item.photo" max-height="60" max-width="60" class="circular-thumb-frame" />
        </v-avatar>
      </template>

      <template v-slot:item.action="{ item }">
        <v-btn text @click="editItem(item)"><v-icon small class="mr-5 title" color="blue" >mdi-pencil-outline</v-icon></v-btn>
        <v-btn text @click="deleteItem(item)"><v-icon small class="title" color="red">mdi-trash-can-outline</v-icon></v-btn>
      </template>

      <template v-slot:no-data>
        <v-progress-linear indeterminate color="cyan"></v-progress-linear>
      </template>
    </v-data-table>
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
      .then(snapshot => {
        let data = snapshot.val();
        console.log(snapshot.val());
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
    selectedStudent: null,
    headers: [
      { text: "Photo", value: `photo`, sortable: false },
      { text: "First", value: "firstName", sortable: false },
      { text: "Last", value: "lastName", sortable: false },
      { text: "UVU ID", value: "uvid", sortable: false },
      { text: "Role", value: "role", sortable: false },
      { text: "Role", value: "email", sortable: false },
      { text: "SignUp Date", value: "signUp", sortable: false },
      { text: "Approved", value: "approved", sortable: false },
      { text: "Actions", value: "action", sortable: false }
    ],
    students: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      uvuid: "",
      windows: ""
    },
    defaultItem: {
      name: "",
      uvuid: "",
      windows: ""
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === "Approve student";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    getColor(approve) {
      return approve ? "green" : "red";
    },
    getApproved(approved) {
      if (approved === true) return "Approved";
      else return "Not Approved";
    },
    initialize() {
      this.students = [];
    },

    editItem(item) {
      firebase
        .database()
        .ref("users/")
        .once("value")
        .then(snapshot => {
          let key = Object.keys(snapshot.val())[this.selectedStudent]
          this.selectedStudent = key
          console.log(this.selectedStudent);
        })
      this.editedIndex = this.students.indexOf(item);
      console.log(this.students.indexOf(item))
      this.selectedStudent = this.students.indexOf(item)
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.students.indexOf(item);
      // console.log();
      confirm("Are you sure you want to delete this student?") &&
      this.students.splice(index, 1);
      this.selectedStudent = this.students.indexOf(item)

      // DELETE STUDENT FROM DB
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save(test) {
      this.editedItem.approval = test;
      console.log(this.selectedStudent);
      // APPROVE STUDENT
      // let update = ['/users/' + this.selectedStudent]
      // console.log(update);
      // firebase
      //   .database()
      //   .ref()
      //   .update(update.approved = true)

      if (this.editedIndex > -1) {
        Object.assign(this.students[this.editedIndex], this.editedItem);
      } else {
        this.students.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

<style></style>
