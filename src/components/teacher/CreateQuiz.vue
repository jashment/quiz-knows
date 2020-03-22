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
                        v-model="editedItem.name"
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
        <p>Add new question to see them here</p>
        <!-- <v-btn color="primary" @click="initialize">
          Reset
        </v-btn> -->
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
    headers: [
      { text: "Question", align: "left", sortable: false, value: "question" },
      { text: "macOS", value: "macOS", sortable: false },
      { text: "Windows", value: "windows", sortable: false },
      { text: "Actions", value: "action", sortable: false }
    ],
    questions: [],
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
    quiz: 
      {
        details: {
          title: "",
          description: "",
          software: ""
        },
        questions: [
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
    saveQuiz() {
      console.log(this.quiz);
      // firebase
      //   .database()
      //   .ref("quizzes/")
      //   .set({
      //     quiz: this.quiz
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
      //   console.log(firebase.data)
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
      this.editedIndex = this.questions.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.questions.indexOf(item);
      confirm("Are you sure you want to delete this question?") &&
        this.questions.splice(index, 1);
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
        Object.assign(this.questions[this.editedIndex], this.editedItem);
      } else {
        this.quiz.questions.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

<style></style>
