<template>
  <v-container>
    <h1 class="text-center py-12 font-weight-light">Grades for {{this.name}}</h1>
    <v-expansion-panels>
      <v-expansion-panel v-for="(quiz, i) in attempts" :key="quiz.i">
        <v-expansion-panel-header>{{ i }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col class="d-flex justify-center">Attempt</v-col>
            <v-col class="d-flex justify-center">Correct</v-col>
            <v-col class="d-flex justify-center">Out Of</v-col>
            <v-col class="d-flex justify-center">Time</v-col>
            <v-col class="d-flex justify-center">Score</v-col>
          </v-row>
          <v-card>
            <v-row v-for="(attempt, i) in quiz" :key="attempt.i">
              <v-col class="py-0 d-flex justify-center">
                <p>{{ i }}</p>
              </v-col>
              <v-col class="py-0 d-flex justify-center">
                <p>{{ attempt.correct }}</p>
              </v-col>
              <v-col class="py-0 d-flex justify-center">
                <p>{{ attempt.incorrect }}</p>
              </v-col>
              <v-col class="py-0 d-flex justify-center">
                <span id="minutes">{{ getMinutes(attempt.timeInSeconds) }}</span>
                <span id="middle">:</span>
                <span id="seconds">{{ getSeconds(attempt.timeInSeconds) }}</span>
              </v-col>
              <v-col class="py-0 d-flex justify-center">
                <p>
                  {{ Math.trunc((attempt.correct / (attempt.correct + attempt.incorrect)) * 100)}}%
                </p>
              </v-col>
            </v-row>
            
          </v-card>

          <!-- <v-data-table
            :headers="headers"
            :items="i.i"
            hide-default-footer
            multi-sort
            class="elevation-1"
          />-->
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      name: null,
      uid: null,
      email: null,
      attempts: [],
      headers: [
        { text: "Attempts", align: "left", sortable: false, value: "correct" },
        { text: "Score", value: "correct.length" },
        { text: "Out of", value: "OutOf" },
        { text: "Time", value: "timeInSeconds" }
      ]
    };
  },
  mounted() {
    this.uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref("users/" + this.uid)
      .once("value")
      .then(snapshot => {
        console.log(snapshot.val().quizAttempts);
        this.attempts = snapshot.val().quizAttempts;
      });
  },
  methods: {
    formatNumber(num) {
      return (num < 10 ? "0" : "") + num.toString();
    },
    getMinutes(time) {
      return this.formatNumber(Math.floor(time / 60));
    },
    getSeconds(time) {
      return this.formatNumber(time % 60);
    },
  }
};
</script>

<style scoped></style>
