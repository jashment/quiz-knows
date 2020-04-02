<template>
  <v-container>
    <v-row
      v-if="endTest === false && questions != null"
      class="d-flex justify-center"
    >
      <v-col cols="8">
        <v-card class="mt-12 d-flex" height="450px">
          <div class="loggerDiv">
            <h1 class="display-1 py-5">
              Question {{ questions[currentPage].id }}
            </h1>
            <label>{{ questions[currentPage].question }}</label>
            <v-text-field
              ref="input"
              v-model="pressedKey"
              type="text"
              @keydown="logKey"
            />
            <v-row>
              <v-col v-if="answerArr.length == 0" class="py-7">
                <p class="text-center">
                  Select input to type in answer
                </p>
              </v-col>
              <v-col v-for="(info, i) in answerArr" :key="info" cols="3">
                <v-card
                  class="text-center pa-6"
                  color="grey black--text"
                  elevation="6"
                >
                  {{ answerArr[i].toUpperCase() }}
                </v-card>
              </v-col>
            </v-row>
            <div class="d-flex justify-space-around py-8">
              <v-btn class="red" elevation="4" large @click="clearArray">
                Clear Answer
              </v-btn>
              <!--  submitQuestion(answerArr, question)-->
              <v-btn
                v-if="this.currentPage !== this.questions.length - 1"
                color="green"
                large
                elevation="4"
                @click="
                  addAnswer(answerArr, currentPage);
                  currentPage++;
                "
              >
                Next
              </v-btn>
              <v-btn
                v-if="this.currentPage == this.questions.length - 1"
                color="primary"
                large
                @click="
                  addAnswer(answerArr, currentPage);
                  end();
                "
              >
                Submit Quiz
              </v-btn>
              <!-- to="/quizzes/quiz/results" -->
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
    <v-card class="ml-auto mr-auto" width="50%">
      <v-row v-if="endTest == true" class="d-flex flex-column">
        <v-col>
          <h2 class="text-center">
            Here are the results of your quiz
          </h2>
        </v-col>
        <v-row>
          <v-col class="text-center" width="50%">
            <p>Time: {{ this.seconds }} seconds</p>
            <p>
              Score:
              {{
                Math.trunc(
                  (this.correct.length /
                    (this.correct.length + this.wrong.length)) *
                    100
                )
              }}%
            </p>
            <v-container width="300px">
              <v-progress-linear
                height="25px"
                :value="
                  (this.correct.length /
                    (this.correct.length + this.wrong.length)) *
                    100
                "
              >
                {{ this.correct.length }}/{{
                  this.correct.length + this.wrong.length
                }}
              </v-progress-linear>
            </v-container>
          </v-col>
        </v-row>
      </v-row>
    </v-card>

    <v-row v-if="endTest == true">
      <v-col cols="6" class="ml-auto">
        <h2 class="text-center green--text">
          Correct Answers
        </h2>
        <v-card
          v-for="corrects in correct"
          :key="corrects.i"
          class="my-5 py-4 px-4"
        >
          <v-card-title class="display font-weight-light">
            <!-- {{ this.questions[corrects.index].question }} -->
            Question: {{ questions[corrects.index].question }}
          </v-card-title>
          <v-divider dark />
          <!-- <v-card-text class="green--text ml-8 headline font-weight-light">Your Answer: {{corrects.answer}}</v-card-text> -->
          <v-card-text class="green--text ml-8 headline font-weight-light">
            Your Answer: {{ questions[corrects.index].macOS }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6" class="mr-auto">
        <h2 class="text-center red--text">
          Incorrect Answers
        </h2>
        <v-card
          v-for="wrongs in wrong"
          :key="wrongs.question"
          class="my-5 py-4 px-4"
        >
          <v-card-title class="display font-weight-light">
            Question: {{ questions[wrongs.index].question }}
          </v-card-title>
          <v-divider dark />
          <!-- <v-card-text class="red--text ml-8 headline font-weight-light">Your Answer: {{wrongs.answer}}</v-card-text> -->
          <v-card-text class="red--text ml-8 headline font-weight-light">
            Your Answer: <span v-for="ans in wrongs.answer" :key="ans.i">{{ ans }} </span>
          </v-card-text>
          <!-- <v-card-text class="green--text ml-8 headline font-weight-light">Correct Answer: {{wrongs.correctAnswer}}</v-card-text> -->
          <v-card-text class="green--text ml-8 headline font-weight-light">
            Correct Answer:
            <span v-for="ans in questions[wrongs.index].macOS" :key="ans"
              >{{ ans }}
            </span>
          </v-card-text>
        </v-card>
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
        console.log(this.questions);
      })
      .catch(err => {
        console.log(err);
      });

    this.startTime = new Date();
    // this.$refs.input.focus();
    window.addEventListener("keypress", e => {
      e.preventDefault();
      String.fromCharCode(e.keyCode);
      this.logKey(e.key);
    });
  },
  methods: {
    addAnswer(answer, index) {
      console.log(index + 1);
      console.log(this.questions.length);

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
        // console.log(this.wrong);
        console.log(this.questions);
        console.log(this.correct);
        this.endTest = true;
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
