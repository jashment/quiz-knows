<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="6">
        <v-card
          class="mt-12 d-flex"
          height="400px"
        >
          <div class="loggerDiv">
            <h1 class="display-1 py-5">
              Question {{ questions[currentPage].id }}
            </h1>
            <label>{{ questions[currentPage].name }}</label>
            <v-text-field
              v-model="pressedKey"
              type="text"
              @keyup="logKey"
            />
            <v-row>
              <v-col
                v-for="(info, i) in infoArray"
                :key="info"
                cols="3"
              >
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
              <v-btn
                class="error"
                elevation="4"
                @click="clearArray"
              >
                Clear
              </v-btn>
              <v-btn
                v-if="currentPage !== questions.length - 1"
                color="green"
                elevation="4"
                @click="
                  currentPage++
                  submitQuestion(infoArray)
                "
              >
                Next
              </v-btn>
              <v-btn
                v-if="currentPage == questions.length - 1"
                color="primary"
                @click="submitQuiz(infoArray)"
              >
                Submit Quiz
              </v-btn>
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
      <v-col>
        Results:
        {{ results }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  components: {
  },
  mounted() {
    window.addEventListener('keypress', e => {
      e.preventDefault()
      String.fromCharCode(e.keyCode)
      // logKey(e.key)
    })
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
        if (this.userAnswers[i] == this.questions[i].windows) {
          this.results.push(true)
        } else this.results.push(false)
      }
      // console.log(results)
      this.endTest = true
    },
  },
}
</script>

<style></style>
