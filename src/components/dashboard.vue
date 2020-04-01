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
        <v-col
          v-for="quiz in quizzes"
          :key="quiz.i"
          cols="12"
          sm="4"
        >
          <v-card
            elevation="6"
            class="cardComp"
          >
            <div class="cardTop" />
            <v-card-title>{{ quiz.details.title }}</v-card-title>
            <v-card-subtitle>
              Take quiz to improve score and time
            </v-card-subtitle>
            <v-card-actions>
              <v-btn
                color="#00beff"
                class="white--text"
                to="/quizzes/quiz-details"
              >
                View Quiz
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <!-- v-if="account === teacher" -->
      <v-divider class="my-8 elevation-12" />
      <v-row>
        <v-col cols="4">
          <v-card to="teacher/create-quiz" elevation="6" class="mb-12">
            <center>
              <v-icon class="plus mt-8">
                mdi-plus
              </v-icon>
            </center>
            <v-card-title>Add New Quiz</v-card-title>
            <v-card-subtitle>
              Add a new quiz to list of available quizzes
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import firebase from "firebase";


export default {
  name: "App",
  components: {},
  data: () => ({
    quizzes: null
  }),
  mounted() {
      firebase
        .database()
        .ref('quizzes/')
        .once('value')
        .then(snapshot => {
          console.log(snapshot.val())
          this.quizzes = snapshot.val()
        })
        .catch(err => {
          console.log(err);
        });
    },
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
div.cardComp.v-card {
  /* border-radius: 15px; */
}
</style>
