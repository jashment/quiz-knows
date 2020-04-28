<template>
  <v-container>
    <h1 class="text-center py-12 font-weight-light">Grades for {{ this.name }}</h1>
    <p class="text-center display-1 mt-12" v-if="this.attempts === undefined">This student currently has no quiz attempts.</p>
    <v-row>
      <v-col xl="8" class="mx-auto">
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
                    <p>{{ i += 1 }}</p>
                  </v-col>
                  <v-col class="py-0 d-flex justify-center">
                    <p>{{ attempt.correct }}</p>
                  </v-col>
                  <v-col class="py-0 d-flex justify-center">
                    <p>{{ attempt.incorrect + attempt.correct }}</p>
                  </v-col>
                  <v-col class="py-0 d-flex justify-center">
                    <span id="minutes">{{ getMinutes(attempt.timeInSeconds) }}</span>
                    <span id="middle">:</span>
                    <span id="seconds">{{ getSeconds(attempt.timeInSeconds) }}</span>
                  </v-col>
                  <v-col class="py-0 d-flex justify-center">
                    <p>{{ Math.trunc((attempt.correct / (attempt.correct + attempt.incorrect)) * 100)}}%</p>
                  </v-col>
                </v-row>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase";
import { mapGetters } from "vuex";

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
    firebase
      .database()
      .ref(`users/${this.$route.params.id}`)
      .once("value")
      .then(snapshot => {
        this.name = snapshot.val().firstName
        this.attempts = snapshot.val().quizAttempts
      });
  },
  computed: {
    ...mapGetters(["user"])
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
    }
  }
};
</script>

<style scoped></style>
