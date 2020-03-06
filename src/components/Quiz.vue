<template>
  <v-container>
    <v-row v-if="endTest === false" class="d-flex justify-center">
      <v-col cols="8">
        <v-card  class="mt-12 d-flex" height="450px">
          <div class="loggerDiv">
            <h1 class="display-1 py-5">
              Question {{ questions[currentPage].id }}
            </h1>
            <label>{{ questions[currentPage].question }}</label>
            <v-text-field
              type="text"
              v-on:keydown="logKey"
              v-model="pressedKey"
              ref="input"
            />
            <v-row>
              <v-col v-if="answerArr.length == 0" class="py-7">
                <p class="text-center">Select input to type in answer</p>
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
              <v-btn @click="clearArray" class="error" elevation="4"
                  large
                >Clear</v-btn
              >
              <!--  submitQuestion(answerArr, question)-->
              <v-btn
                v-if="this.currentPage !== this.questions.length - 1"
                color="green"
                large
                @click=" 
                addAnswer(answerArr[0], questions[currentPage].question, questions[currentPage].id, questions[currentPage].windows)
                currentPage++                  
                "
                elevation="4"
                >Next</v-btn
              >
              <v-btn
                v-if="this.currentPage == this.questions.length - 1"
                color="primary"
                large
                @click="addAnswer(answerArr[0], questions[currentPage].question, questions[currentPage].id)"
                >Submit Quiz</v-btn
              >
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
        >
        </v-pagination>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2 class="text-center">Here are the results of your quiz</h2>
        <!-- <p>Score: {{ corrects.length }} / {{ calculateScore(this.corrects += this.wrongs) }}</p> -->
        <p>Time: </p>
      </v-col>
    </v-row>
    <v-row v-if="endTest == true">
      <!-- <v-col>
        Results:
        {{ this.$store.state.resultsArr }}
      </v-col> -->
      <v-col cols="6" class="ml-auto">
          <h2 class="text-center green--text">Correct Answers</h2>
          <v-card v-for="corrects in correct" :key="corrects.question" class="my-5 py-4 px-4">
              <v-card-title class="title">{{corrects.question}}</v-card-title>
              <v-card-text class="ml-8 headline font-weight-light">Your Answer: {{corrects.answer}}</v-card-text>
          </v-card>
      </v-col>
      <v-col cols="6" class="mr-auto">
          <h2 class="text-center red--text">Incorrect Answers</h2>
          <v-card v-for="wrongs in wrong" :key="wrongs.question" class="my-5 py-4 px-4">
              <v-card-title class="title">{{wrongs.question}}</v-card-title>
              <v-card-text class="ml-8 headline font-weight-light">Your Answer: {{wrongs.answer}}</v-card-text>
              <v-card-text class="ml-8 headline font-weight-light">Correct Answer: {{wrongs.correctAnswer}}</v-card-text>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      pressedKey: '',
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
      questions: [
        {
          question: 'How do you make an edit wherever your playhead is located?',
          macOS: ['Cmd, K'],
          windows: '1',
          answer: '',
          id: 1,
        },
        {
          question:
            'Pressing ___ while your playhead is over an existing Marker will bring up the Marker dialog box',
          macOS: ['M'],
          windows: '2',
          answer: '',
          id: 2,
        },
        {
          question:
            'What key do you press to locate a source clip from within your timeline?',
          macOS: ['F'],
          windows: '3',
          answer: '',
          id: 3,
        },
        // {
        //   question: 'What keys bring up the Export Media dialog box?',
        //   macOS: ['Cmd, M'],
        //   windows: '4',
        //   answer: '',
        //   id: 4,
        // },
        // {
        //   question: 'What key is for making In point on a clip?',
        //   macOS: ['I'],
        //   windows: '5',
        //   answer: '',
        //   id: 5,
        // },
        // {
        //   question: 'What key is for making Out point on a clip?',
        //   macOS: ['O'],
        //   windows: '6',
        //   answer: '',
        //   id: 6,
        // },
        // {
        //   question: 'What key makes your video playback at a faster speed?',
        //   macOS: ['L'],
        //   windows: '7',
        //   answer: '',
        //   id: 7,
        // },
        // {
        //   question: 'What key makes your video playback at a faster speed?',
        //   macOS: ['L'],
        //   windows: '7',
        //   answer: '',
        //   id: 8,
        // },
      ],
    }
  },
  methods: {
    addAnswer(answer, question, id, correctAnswer){
      //if correct push to correct array
      if(id < this.questions.length){
          if (this.questions[id-1].windows === answer) {
          //push question, id from original question, answer?
          this.correct.push({"question": question, "answer": answer,})
          console.log(this.correct)
          this.answerArr = []
          this.answerSet.clear()
        }
        //if wrong push to wrong array
        else {
          //push question, id from original question, answer?
          this.wrong.push({"question": question, "answer": answer, "correctAnswer": correctAnswer})
          console.log(this.wrong)
          this.answerArr = []        
          this.answerSet.clear()
        }
      }

      else {
        if (this.questions[id-1].windows === answer) {
          //push question, id from original question, answer?
          this.correct.push({"question": question, "answer": answer,})
          console.log(this.correct)
          this.answerArr = []
          this.answerSet.clear()
        }
        //if wrong push to wrong array
        else {
          //push question, id from original question, answer?
          this.wrong.push({"question": question, "answer": answer, "correctAnswer": correctAnswer})
          console.log(this.wrong)
          this.answerArr = []        
          this.answerSet.clear()
        }
        this.endTest = true;
      }
      //don't forget to submit the last answer as well
      // set quiz to false to transition to results
      // send results to the database
      // score, time length, attempt
    },
    addInput(input) {
      this.answerArr.push(input)
    },
    logKey: function(event) {
      event.preventDefault()
      if (event.key != 'Backspace') {
        if (this.answerSet.size < 4) {
          // console.log(event)
          if (this.answerSet.has(event.key)) {
            return 
          }
          else {
            if (event.key === ' ') {
              this.answerSet.add(event.key)
              this.addInput(event.code)
            }
            else {              
              this.answerSet.add(event.key)
              this.addInput(event.key)
            }            
          }
        }        
      }
    },    
    submitQuestion(answer, question) {
      //take mac or pc in to evaluate the array
      this.userAnswers.push(answer)

      if (answer === question) {
        this.correct.push({"question": question, "answer": answer})
      }
      else {
        this.wrong.push(this.question, answer)
      }
      console.log('Right ' + this.correct + 'Wrong ' + this.wrong)


    //   this.$store.state.results.push("This is where it works")
      this.answerArr = []
      this.answerSet.clear()
    //   console.log(this.userAnswers)
    },
    clearArray: function() { 
      this.answerSet.clear(
      )
      this.answerArr = []
    },
    submitQuiz(lastValue) {
      this.userAnswers.push(lastValue)
      for (let i = 0; i < this.questions.length; i++) {
        if(this.userAnswers[i] == this.questions[i].windows) {
          this.results.push(true)
          // this.correct.push(this.userAnswers)
          this.$store.state.resultsArr.push("true")
        }else {
            this.results.push(false)
            // this.incorrect.push(this.userAnswers)
            this.$store.state.resultsArr.push("false")
        }
      }
      this.endTest = true
    },
  },
  mounted() {
    this.$refs.input.focus();
    window.addEventListener('keypress', e => {
      e.preventDefault()
      String.fromCharCode(e.keyCode)
      this.logKey(e.key)
    })
  },
}
</script>

<style scoped>
.loggerDiv {
  width: 80%;
  margin: auto;
}
.v-card__text, .v-card__title {
  word-break: normal;
}
</style>
