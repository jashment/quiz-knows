<template>
  <div>
    <h1>Quizzes</h1>
    <!-- <center><router-link to="/cardlayout">Checkout Cards</router-link></center> -->
    <v-container>
      <v-row>
        <v-col
          v-for="quiz in quizzes"
          :key="quiz"
          cols="12"
          sm="4"
        >
          <v-card
            elevation="6"
            class="cardComp"
          >
            <div class="cardTop" />
            <v-card-title>{{ quiz.name }}</v-card-title>
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
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: () => ({
    quizzes: [
      { name: 'Adobe Premiere' },
      { name: 'Avid Media Composer' },
      { name: 'DaVinci Resolve' },
    ],
  }),
}
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
button {
  margin: auto;
}
div.cardComp.v-card {
  border-radius: 15px;
}
</style>
