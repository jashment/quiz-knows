<template>
  <div>
    <h1>Flashcards</h1>
    <v-container>
      <v-row>
        <v-col
          v-if="this.quizzes === null"
          class="d-flex flex-column text-center"
        >
          <v-progress-circular
            :size="70"
            class="mx-auto mb-7"
            :width="7"
            color="cyan"
            indeterminate
          ></v-progress-circular
          >Loading Flashcards
        </v-col>
        <v-col v-for="(quiz, i) in quizzes" :key="quiz.i" sm="3">
          <v-card elevation="6" class="cardComp">
            <!-- <div class="cardTop d-flex justify-center flex-column" />  -->
            <center><v-icon size="150" class="mt-6">mdi-cards-outline</v-icon></center>
            <v-card-title>{{ quiz.details.title }} - (Flashcards)</v-card-title>
            <v-card-subtitle
              >Practice your knowledge by practicing these Flashcards</v-card-subtitle
            >
            <v-card-actions>
              <v-btn color="#00beff" class="white--text" @click="startQuiz(i)"
                >Practice</v-btn
              >
            </v-card-actions>
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
    quizzes: null,
  }),
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
      this.$router.replace("/flashcards/deck/" + quiz);
    },
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
