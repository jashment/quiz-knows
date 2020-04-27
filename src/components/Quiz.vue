<template>
  <v-container>
    <v-row v-if="endTest === false && questions != null" class="d-flex justify-center">
      <v-col cols="8">
        <v-card class="mt-12 d-flex" height="450px">
          <div class="loggerDiv">
            <h1 class="display-1 py-5">Question {{ questions[currentPage].id }}</h1>
            <label>{{ questions[currentPage].question }}</label>
            <v-text-field ref="input" v-model="pressedKey" aria-autocomplete="off" type="text" label="type here to provide answer" @keydown="logKey" />
            <v-row>
              <v-col v-if="answerArr.length == 0" class="py-7">
              </v-col>
              <v-col v-for="(info, i) in answerArr" :key="info" cols="3">
                <v-card
                  class="text-center pa-6"
                  color="grey black--text"
                  elevation="6"
                >{{ answerArr[i].toUpperCase() }}</v-card>
              </v-col>
            </v-row>
            <div class="d-flex justify-space-around py-8">
              <v-btn class="red" elevation="4" large @click="clearArray">Clear Answer</v-btn>
              <v-btn
                v-if="this.currentPage !== this.questions.length - 1"
                color="green"
                large
                elevation="4"
                @click="
                  addAnswer(answerArr, currentPage);
                  currentPage++;
                "
              >Next</v-btn>
              <v-btn
                v-if="this.currentPage == this.questions.length - 1"
                color="primary"
                large
                @click="
                  addAnswer(answerArr, currentPage);
                  end();
                "
              >Submit Quiz</v-btn>
            </div>
          </div>
        </v-card>
        <v-pagination
          v-model="questions[currentPage].id"
          :length="questions.length"
          :value="currentPage"
          disabled
          class="pt-9"
          circle
        />
      </v-col>
    </v-row>
    <v-card class="mx-auto my-12" width="50%">
      <v-row v-if="endTest == true" class="flex-column">
        <v-col>
          <h2 class="text-center">Here are the results of your quiz</h2>
        </v-col>
        <v-row>
          <v-col class="d-flex flex-column align-center justify-center ml-12">
            <p class="headline text-center">Time:</p>
            <p class="subtitle-1 text-center">{{ this.seconds }} seconds</p>
          </v-col>
          <v-col class="d-flex flex-column align-center justify-center mr-12">
            <p class="headline">
              Score:
            </p>
            <p class="subtitle-1">
              {{ Math.trunc(
                (this.correct.length /
                (this.correct.length + this.wrong.length)) * 100)
              }}% ({{ this.correct.length }}/{{ this.correct.length + this.wrong.length }})
            </p>
          </v-col>
        </v-row>
            <v-btn width="200" class="mx-auto mb-5" outlined @click="toDashboard">Back To Quizzes Page</v-btn>
      </v-row>
    </v-card>

    <v-row v-if="endTest == true">
      <v-col cols="10" class="mx-auto">
        <h2 class="text-center green--text">Correct Answers</h2>
        <v-alert type="success" dense v-for="corrects in correct" :key="corrects.i">
            <p class="headline my-0">Question: {{ questions[corrects.index].question }}</p>
            <p class="my-0">Your Answer:</p>
            <v-chip label class="mx-4 headline text-center black--text" color="white" medium v-for="answer in questions[corrects.index].macOS" :key="answer.i">{{ answer }}</v-chip>
        </v-alert>
        <h2 class="text-center red--text">Incorrect Answers</h2>
        <v-alert type="error" icon="mdi-close-circle" dense v-for="wrongs in wrong" :key="wrongs.question">
          <p class="headline my-0 py-0">Question: {{ questions[wrongs.index].question }}</p>
          <v-row class="my-0 py-0">
            <v-col class="my-0 py-0">
              <p class="my-0 py-0">Your Answer:</p>
              <v-chip label class="mx-2 black--text headline text-center" color="white" medium v-for="answer in wrongs.answer" :key="answer.i">{{ answer }}</v-chip>
            </v-col>
            <v-col class="my-0 py-0">
              <p class="my-0 py-0">Correct Answer:</p>
              <v-chip label class="mx-2 headline text-center black--text" color="white" medium v-for="answer in questions[wrongs.index].macOS" :key="answer.i">{{ answer }}</v-chip>
            </v-col>
          </v-row>
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      pressedKey: "",
      test: [],
      startTime: null,
      endTime: null,
      seconds: null,
      infoArray: [],
      currentPage: 0,
      userAnswers: [],
      results: [],
      correct: [],
      wrong: [],
      endTest: false,
      answerSet: new Set(),
      empty: new Set(),
      answerArr: [],
      attempts: [],
      input: this.$refs.input,
      questions: null
    };
  },
  mounted() {
    firebase
      .database()
      .ref(`quizzes/${this.$route.params.id}/questions`)
      .once("value")
      .then(snapshot => {
        this.questions = snapshot.val();
      })
      .catch(err => {
        console.log(err);
      });

      this.uid = firebase.auth().currentUser.uid
    firebase
      .database()
      .ref('users/' + this.uid)
      .once("value")
      .then(snapshot => {
        if (snapshot.val().quizAttempts[this.$route.params.id] == null){
          this.attempts = []
        }
        else{
          this.attempts = snapshot.val().quizAttempts[this.$route.params.id]  
        }
            
      })

    this.startTime = new Date();
    window.addEventListener("keypress", e => {
      e.preventDefault();
      String.fromCharCode(e.keyCode);
      this.logKey(e.key);
    });
  },
  methods: {
    addAnswer(answer, index) {
      const currUserId = firebase.auth().currentUser.uid;
      let arr1 = answer.map(e => e.toLowerCase());
      let arr2 = this.questions[index].macOS.map(e => e.toLowerCase());
      arr1.sort();
      arr2.sort();
      let str1 = arr1.toString();
      let str2 = arr2.toString();

      if (index + 1 < this.questions.length) {
        if (str1 === str2) {
          this.correct.push({ index });
        } else {
          this.wrong.push({ index, answer });
        }
        this.answerArr = [];
        this.answerSet.clear();
      } else if (index + 1 === this.questions.length) {
        if (str1 === str2) {
          this.correct.push({ index });
        } else {
          this.wrong.push({ index, answer });
        }
        this.endTest = true;
        this.attempts.push({
            correct: this.correct.length,
            incorrect: this.wrong.length,
            timeInSeconds: this.end()})

        firebase
          .database()
          .ref(`users/${currUserId}`)
          .child("quizAttempts")
          .child(`${this.$route.params.id}`)
          .set(this.attempts);
      }
    },
    addInput(input) {
      this.answerArr.push(input);
    },
    end() {
      this.endTime = new Date();
      let timeDiff = this.endTime - this.startTime;
      timeDiff /= 1000;
      this.seconds = Math.round(timeDiff);
      return this.seconds;
    },
    logKey: function(event) {
      event.preventDefault();
      if (event.key != "Backspace") {
        if (this.answerSet.size < 4) {
          if (this.answerSet.has(event.key)) {
            return;
          } else {
            if (event.key === " ") {
              this.answerSet.add(event.key);
              this.addInput(event.code);
            } else {
              this.answerSet.add(event.key);
              this.addInput(event.key);
            }
          }
        }
      }
    },
    clearArray: function() {
      this.answerSet.clear();
      this.answerArr = [];
    },
    toDashboard() {
      this.$router.replace("/");
    }
  }
};
</script>

<style scoped>
.loggerDiv {
  width: 80%;
  margin: auto;
}
.v-card__text,
.v-card__title {
  word-break: normal;
}
</style>
