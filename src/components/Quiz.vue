<template>
  <v-container>
    <v-row
      v-if="endTest === false"
      class="d-flex justify-center"
    >
      <v-col cols="8">
        <v-card
          class="mt-12 d-flex"
          height="450px"
        >
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
              <v-col
                v-if="answerArr.length == 0"
                class="py-7"
              >
                <p class="text-center">
                  Select input to type in answer
                </p>
              </v-col>
              <v-col
                v-for="(info, i) in answerArr"
                :key="info"
                cols="3"
              >
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
              <v-btn
                class="error"
                elevation="4"
                large
                @click="clearArray"
              >
                Clear
              </v-btn>
              <v-btn
                v-if="this.currentPage !== this.questions.length - 1"
                color="green"
                large
                elevation="4"
                @click=" 
                  currentPage++
                  submitQuestion(answerArr)
                "
              >
                Next
              </v-btn>
              <v-btn
                v-if="this.currentPage == this.questions.length - 1"
                color="primary"
                large
                @click="submitQuiz(answerArr)"
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
    <v-row v-if="endTest == true">
      <!-- <v-col>
        Results:
        {{ this.$store.state.resultsArr }}
      </v-col> -->
      <v-col
        cols="4"
        class="ml-auto"
      >
        Correct Answers
        <v-card
          v-for="card in 5"
          :key="card"
          class="my-5"
          height="100px"
        >
          correct
        </v-card>
      </v-col>
      <v-col
        cols="4"
        class="mr-auto"
      >
        Incorrect Answers
        <v-card
          v-for="card in 5"
          :key="card"
          class="my-5"
          height="100px"
        >
          incorrect
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
      quizzing: true,
      userAnswers: [],
      results: [],
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
  mounted() {
    this.$refs.input.focus();
    window.addEventListener('keypress', e => {
      e.preventDefault()
      String.fromCharCode(e.keyCode)
      this.logKey(e.key)
    })
  },
  methods: {
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
    submitQuestion(answer) {
      //take mac or pc in to evaluate the array
      this.userAnswers.push(answer)
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
        //   this.results.push(true)
          this.$store.state.resultsArr.push("true")
        }else {
            // this.results.push(false)
            this.$store.state.resultsArr.push("false")
        }
      }
      this.endTest = true
      this.quizzing = false
    },
  },
}
</script>

<style scoped>
.loggerDiv {
  width: 80%;
  margin: auto;
}
</style>
