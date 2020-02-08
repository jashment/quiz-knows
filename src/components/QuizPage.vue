<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="6">
        <v-card class="mt-12 d-flex" height="400px">
          <div class="loggerDiv">
            <h1 class="display-1 py-5">
              Question {{ questions[currentPage].id }}
            </h1>
            <label>{{ questions[currentPage].name }}</label>
            <v-text-field
              type="text"
              v-on:keyup="logKey"
              v-model="pressedKey"
            />
            <v-row>
              <v-col v-for="(info, i) in infoArray" :key="info" cols="3">
                <v-card
                  class="text-center pa-6"
                  color="grey black--text"
                  elevation="6"
                >
                  {{ infoArray[i].toUpperCase() }}
                </v-card>
              </v-col>
            </v-row>
            <div class="d-flex justify-space-around py-8">
              <v-btn @click="clearArray" class="error" elevation="4"
                >Clear</v-btn
              >
              <v-btn
                v-if="this.currentPage !== this.questions.length - 1"
                color="green"
                @click="
                  currentPage++
                  submitQuestion(infoArray)
                "
                elevation="4"
                >Next</v-btn
              >
              <v-btn
                v-if="this.currentPage == this.questions.length - 1"
                color="primary"
                @click="submitQuiz(infoArray)"
                >Submit Quiz</v-btn
              >
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
    <v-row v-if="endTest == true">
      <v-col>
        Results:
        {{ results }}
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
      endTest: false,
      questions: [
        {
          name: 'How do you make an edit wherever your playhead is located?',
          macOS: ['Cmd, K'],
          windows: 'a',
          answer: '',
          id: 1,
        },
        {
          name:
            'Pressing ___ while your playhead is over an existing Marker will bring up the Marker dialog box',
          macOS: ['M'],
          windows: 'a,b',
          answer: '',
          id: 2,
        },
        {
          name:
            'What key do you press to locate a source clip from within your timeline?',
          macOS: ['F'],
          windows: 'a',
          answer: '',
          id: 3,
        },
        {
          name: 'What keys bring up the Export Media dialog box?',
          macOS: ['Cmd, M'],
          windows: 'a',
          answer: '',
          id: 4,
        },
        {
          name: 'What key is for making In point on a clip?',
          macOS: ['I'],
          windows: 'a',
          answer: '',
          id: 5,
        },
        {
          name: 'What key is for making Out point on a clip?',
          macOS: ['O'],
          windows: 'a',
          answer: '',
          id: 6,
        },
        {
          name: 'What key makes your video playback at a faster speed?',
          macOS: ['L'],
          windows: '',
          answer: '',
          id: 7,
        },
      ],
    }
  },
  methods: {
    logKey: function(event) {
      event.preventDefault()
      if (event.code != 'Backspace') {
        if (this.infoArray.length <= 3) {
          if (event.keyup === 'spacebar') {
            this.infoArray.push('spacebar')
          } else {
            this.infoArray.push(event.key)
          }
        }
      }
    },
    submitQuestion(answer) {
      //take mac or pc in to evaluate the array
      this.userAnswers.push(answer)
      this.infoArray = []
      // console.log(this.userAnswers)
    },
    clearArray: function() {
      this.infoArray = []
    },
    submitQuiz(lastValue) {
      // let results = []
      this.userAnswers.push(lastValue)
      for (let i = 0; i < this.questions.length; i++) {
        if(this.userAnswers[i] == this.questions[i].windows) {
          this.results.push(true)
        }else this.results.push(false)
      }
      // console.log(results)
      this.endTest = true
    },
  },
  mounted() {
    window.addEventListener('keypress', e => {
      e.preventDefault()
      String.fromCharCode(e.keyCode)
      // logKey(e.key)
    })
  },
}
</script>

<style scoped>
.loggerDiv {
  /* text-align: center; */
  width: 80%;
  margin: auto;
}
</style>
