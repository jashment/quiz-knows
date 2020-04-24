<template>
  <div>
    <h1>Quizzes</h1>
    <v-container>
      <v-row>
        <v-col v-if="this.quizzes === null" class="d-flex flex-column text-center">
          <v-progress-circular
            :size="70"
            class="mx-auto mb-7"
            :width="7"
            color="cyan"
            indeterminate
          ></v-progress-circular>Loading Courses
        </v-col>
        <v-col v-for="(quiz, i) in quizzes" :key="quiz.i" cols="12" sm="4">
          <v-card elevation="6" class="cardComp">
            <div class="cardTop" />
            <v-card-title>{{ quiz.details.title }}</v-card-title>
            <v-card-subtitle>Take quiz to improve score and time</v-card-subtitle>
            <v-card-actions>
              <v-btn color="#00beff" class="white--text" @click="startQuiz(i)">View Quiz</v-btn>
              <v-spacer />
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-icon dark v-on="on">mdi-dots-vertical</v-icon>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, index) in menu"
                    :key="index"
                    @click="adjustQuiz(index, i)"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-divider class="my-8 elevation-12" />
      <v-row v-if="user.data.role === 'Teacher'">
        <v-col cols="4">
          <v-card to="teacher/create-quiz" elevation="6" class="mb-12">
            <center>
              <v-icon class="plus mt-8">mdi-plus</v-icon>
            </center>
            <v-card-title>Add New Quiz</v-card-title>
            <v-card-subtitle>Add a new quiz to list of available quizzes</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {},
  data: () => ({
    quizzes: null,
    menu: [{ title: "Edit Quiz" }, { title: "Delete Quiz" }]
  }),
  computed: {
    ...mapGetters(["user"])
  },
  mounted() {
    firebase
      .database()
      .ref("quizzes/")
      .once("value")
      .then(snapshot => {
        this.quizzes = snapshot.val();
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    startQuiz(quiz) {
      this.$router.replace("/quizzes/quiz-details/" + quiz);
    },
    adjustQuiz(button, quizIndex) {
      if (button === 0) {
        // Edit the quiz
      } else if (button === 1) {
        // delete quiz
        firebase
          .database()
          .ref("quizzes/" + quizIndex)
          .remove()
          .catch(err => {
            console.log(err);
          });
        this.$router.go();
      }
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 100px;
}

.cardComp {
  margin: auto;
}
div.cardTop {
  padding-top: 100px;
  background: linear-gradient(to bottom, #00f4ff 0%, #0cafff 100%);
}
.plus {
  font-size: 4rem;
}
button {
  margin: auto;
}
</style>
