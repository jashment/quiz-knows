<template>
  <v-container class="text-center">
    <h1 class="text-center py-12 font-weight-light">Create New Quiz</h1>
    <v-row>
      <v-col cols="6" class="mx-auto">
        <v-card class="pa-10 elevation-8">
          <p class="title">Quiz Details</p>
          <v-text-field
            v-model="quiz.details.title"
            clearable
            label="Quiz Title"
            placeholder="premiere practice"
          />
          <v-text-field
            v-model="quiz.details.software"
            clearable
            label="Software"
            placeholder="ex: adobe premiere"
          />
          <v-textarea
            v-model="quiz.details.description"
            clearable
            label="Quiz Description"
            rows="3"
            placeholder="example: Use shortcut keys from the Adobe Premiere program to answer the quiz questions."
          />
        </v-card>
      </v-col>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="quiz.questions"
      sort-by="macOS"
      class="elevation-8 mx-12 my-12"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer />
          <v-dialog v-model="dialog" max-width="500px" persistent>
            <template v-slot:activator="{ on }">
              <v-btn color="green" dark class="mb-2" v-on="on">New Question</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <v-textarea v-model="editedItem.question" dense clearable label="Question" />
                    </v-col>
                  </v-row>
                  <v-row />
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.macOS"
                        label="macOS Shortcut"
                        @keydown="logKey"
                      />
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.windows"
                        label="Windows Shortcut"
                        @keydown="logKeyW"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer />
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.action="{ item }">
        <v-icon small class="mr-5 title" color="blue" @click="editItem(item)">mdi-pencil-outline</v-icon>
        <v-icon small class="title" color="red" @click="deleteItem(item)">mdi-trash-can-outline</v-icon>
      </template>
      <template v-slot:no-data>
        <p>Add new question to see them here</p>
      </template>
    </v-data-table>
    <v-btn class="primary mb-12" @click="saveQuiz">Save Quiz</v-btn>
  </v-container>
</template>

<script>
import firebase from "firebase";

export default {
  data: () => ({
    dialog: false,
    headers: [
      { text: "Question", align: "start", sortable: false, value: "question" },
      { text: "macOS", value: "macOS", sortable: false },
      { text: "Windows", value: "windows", sortable: false },
      { text: "Actions", value: "action", sortable: false }
    ],
    // questions: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      macOS: "",
      windows: ""
    },
    defaultItem: {
      name: "",
      macOS: "",
      windows: ""
    },
    quiz: {
      details: {
        title: "",
        description: "",
        software: ""
      },
      questions: []
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
    saveQuiz() {
      console.log(this.quiz);
      firebase
        .database()
        .ref("quizzes/")
        .child(this.quiz.details.title)
        .set(this.quiz)
        .catch(err => {
          console.log(err);
        });
      // console.log(firebase.data)
    },
    initialize() {
      this.questions = [
        {
          name: "How do you make an edit wherever your playhead is located?",
          macOS: "Cmd, K",
          windows: "Ctrl, K"
        },
        {
          name:
            "Pressing ___ while your playhead is over an existing Marker will bring up the Marker dialog box",
          macOS: "M",
          windows: "M"
        },
        {
          name:
            "What key do you press to locate a source clip from within your timeline?",
          macOS: "F",
          windows: "F"
        },
        {
          name: "What keys bring up the Export Media dialog box?",
          macOS: "Cmd, M",
          windows: "Ctrl, M"
        },
        {
          name: "What key is for making In point on a clip?",
          macOS: "I",
          windows: "I"
        },
        {
          name: "What key is for making Out point on a clip?",
          macOS: "O",
          windows: "O"
        },
        {
          name: "What key makes your video playback at a faster speed?",
          macOS: "L",
          windows: "L"
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.quiz.questions.indexOf(item);
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
    },

    save() {
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
