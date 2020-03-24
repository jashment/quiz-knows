<template>
  <v-container class="text-center">
    <h1 class="text-center py-12 font-weight-light">
      Create New Quiz
    </h1>
    <v-row>
      <v-col cols="6" class="mx-auto">
        <v-card class="pa-10 elevation-8">
          <p class="title">Quiz Details</p>
          <v-text-field 
            label="Quiz Title" 
            placeholder="premiere practice" 
            v-model="quiz.details.title"></v-text-field>
          <v-text-field 
            label="Software" 
            placeholder="ex: adobe premiere" 
            v-model="quiz.details.software"></v-text-field>
          <v-textarea 
            clearable label="ex: Quiz Description" 
            rows="3" 
            placeholder="ex: Use shortcut keys from the Adobe Premiere program to answer the quiz questions." 
            v-model="quiz.details.description"></v-textarea>
        </v-card>

      </v-col>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="this.quiz.questions"
      sort-by="macOS"
      class="elevation-8 mx-12 my-12"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer />
          <v-dialog v-model="dialog" max-width="500px" persistent>
            <template v-slot:activator="{ on }">
              <v-btn color="green" dark class="mb-2" v-on="on">
                New Question
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <v-textarea
                        v-model="editedItem.question"
                        dense
                        label="Question"
                      />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="text-center pb-0">
                      <p>
                        Enter keys separated by a comma. (example: cmd, shift,
                        t)
                      </p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.macOS"
                        @keydown="logKey"
                        label="macOS Shortcut"
                      />
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.windows"
                        label="Windows Shortcut"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer />
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" @click="save">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.action="{ item }">
        <v-icon small class="mr-5 title" color="blue" @click="editItem(item)">
          mdi-pencil-outline
        </v-icon>
        <v-icon small class="title" color="red" @click="deleteItem(item)">
          mdi-trash-can-outline
        </v-icon>
      </template>
      <template v-slot:no-data>
        <p>You currently have no questions in this quiz</p>
        <p>Add New Question to begin building quiz</p>
      </template>
    </v-data-table>
    <v-btn class="primary mb-12" @click="saveQuiz">
      Save Quiz
    </v-btn>
  </v-container>
</template>

<script>
// import firebase from "firebase";

export default {
  data: () => ({
    dialog: false,
    keystroke: [],
    headers: [
      { text: "Question", align: "left", sortable: false, value: "question" },
      { text: "macOS", value: "macOS", sortable: false },
      { text: "Windows", value: "windows", sortable: false },
      { text: "Actions", value: "action", sortable: false }
    ],
    questions: [],
    editedIndex: -1,
    editedItem: {
      question: "",
      macOS: [],
      windows: []
    },
    defaultItem: {
      question: "",
      macOS: [],
      windows: []
    },
    quiz: 
      {
        details: {
          title: "",
          description: "",
          software: ""
        },
        questions: [
          // { question: "test", macOS: ["test"], windows: [] },
        ]
      }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Question" : "Edit Question";
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
    logKey: function(event) {
      event.preventDefault()
      this.keystroke.push(event.key)
      this.editedItem.macOS = this.keystroke
      console.log(this.keystroke)
      console.log(event.key)
    },
    saveQuiz() {
      console.log( this.quiz.details );
      console.log( this.quiz.questions );
      /*
      firebase
        .database()
        .ref("quizzes/")
        .set({
          quiz: this.quiz
        })
        .catch(err => {
          console.log(err);
        });
        console.log(firebase.data)
      */
    },
    initialize() {
    },

    editItem(item) {
      this.editedIndex = this.quiz.questions.indexOf(item);
      this.editedItem.macOS = this.keystroke
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.quiz.questions.indexOf(item);
      confirm("Are you sure you want to delete this question?") &&
        this.quiz.questions.splice(index, 1);
    },

    close() {      
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
      this.keystroke = []
    },

    save() {
      // this.editedItem.macOS = this.keystroke
      if (this.editedIndex > -1) {
        Object.assign(this.quiz.questions[this.editedIndex], this.editedItem);
      } else {
        this.quiz.questions.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

<style></style>
