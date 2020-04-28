<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col v-if="this.details != null" cols="8">
        <h2 class="pt-12">
          <span class="cyan--text">{{ this.$route.params.id }}</span> Overview
        </h2>
        <v-divider />
        <div class="d-flex justify-space-between pt-4">
          <p>
            <strong>Program:</strong>
            {{ details.details.software }}
          </p>
          <p>
            <strong>Operating System:</strong>
          </p>
          <p>
            <strong>Questions:</strong>
            {{ details.questions.length }}
          </p>
        </div>
        <v-divider />
        <p class="pt-4">
          <strong>Instructions</strong>
        </p>
        {{ details.details.description }}
        <center>
          <v-btn color="green" class="mt-8" @click="takeQuiz()">
            Take Quiz
          </v-btn>
        </center>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase";

export default {
  data: () => ({
    details: null,
  }),
  mounted() {
    firebase
      .database()
      .ref(`quizzes/${this.$route.params.id}`)
      .once("value")
      .then(snapshot => {
        this.details = snapshot.val()
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    takeQuiz() {
      this.$router.replace("/quizzes/quiz/" + this.$route.params.id)
    }
  }
};
</script>

<style>
</style>
