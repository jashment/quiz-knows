<template>
  <div>
    <div class="row mt-5">
      <div class="col-md-3" />
      <div class="col-md-6">
        <h3 class="text-center">
          Davinci Resolve: macOS
        </h3>
      </div>
      <div class="col-md-3">
        <v-card-actions>
          <v-btn
            color="#00beff"
            class="white--text"
            link
            to="/flashcardsdr2"
          >
            Windows
          </v-btn>
          <v-btn
            color="#00beff"
            class="white--text"
            link
            to="/flashcards"
          >
            Back
          </v-btn>
        </v-card-actions>
      </div>
    </div>

 <div class="side-container embed">
      <v-row
        v-for="card in cards"
        :key="card.i"
      >
        <v-col
          cols="10"
          class="mx-auto"
        >
          <vueFlashcard
            :front="card.question"
            :back="card.answer"
            header-front="Question"
            footer-front=""
            footer-back=""
            color-front="#424242"
            color-back="#01F0FF"
            color-text-front="white"
            color-text-back="black"
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import vueFlashcard from 'vue-flashcard'
export default {
  components: { vueFlashcard },
   data() {
    return {
cards: [
  {question: "What is the keystroke to Clear mark in and out?",
  answer: "Opt + X"},
  {question: "What is the keystroke Add Serial Node + CPW?",
  answer: "Opt + C"},
  {question: "What is the keystroke to Auto Color?",
  answer: "Opt + A"},
  {question: "What is the keystroke to Disable / Enable Current Node?",
  answer: "Cmd + D"},
  {question: "What is the keystroke to Disable / Enable All Nodes?",
  answer: "Opt + D"},
  {question: "What is the keystroke to quit the program?",
  answer: "Cmd + Q"},
  {question: "What is the keystroke Add Serial Node + LPW?",
  answer: "Opt + Q"},
  {question: "What is the keystroke start a new timeline?", 
  answer: "Cmd + N"},
  {question: "What is the keystroke to start a new bin?",
  answer: "Cmd + Shift + N"},
  {question: "What is the keystroke clear mark out?", 
  answer: "Opt + O"},
  {question: "What is the keystroke to open Cinemark Viewer?", 
  answer: "Cmd + F"},
  {question: "What is the keystroke to view Full Screen Viewer?",
   answer: "Shift + F"},
  {question: "What is the keystroke to Save a project?", 
  answer: "Cmd + S"},
  {question: "What is the keystroke to Audio Scrubbing?", 
  answer: "Shift + S"},
  {question: "What is the keystroke to Add a serial node?",
   answer: "Opt + S"},
  {question: "What is the keystroke to add and modify a new marker?",
   answer: "Cmd + M"},
  {question: "What is the keystroke to Delete a marker?", 
  answer: "Shift + M"},
  {question: "What is the keystroke to zoom out?", 
  answer: "Cmd + -"},
  {question: "What is the keystroke to zoom in?", 
  answer: "Cmd + ="},
  {question: "What is the keystroke to ripple delete?", 
  answer: "Shift + delete"},
  {question: "What is the keystroke to add a parallel node?",
   answer: "Opt + P"},
  {question: "What is the keystroke to Nudge the Multiframe left?",
   answer: "Shift + ,"},
  {question: "What is the keystroke to Nudge Multiframe Right?", 
  answer: "Shift + ."},
  {question: "What is the keystroke to Apply a video transition?",
   answer: "Cmd + D"},
],
    };
   }
}
</script>

<style scoped>
body {
  overflow: hidden; /* Hide scrollbars */
}

.side-container {
  overflow-y: auto;
  max-height: 700px;
  scroll-behavior: smooth;
  margin: 0;
}

.v-application {
  line-height: 3.5 !important;
}

.v-application p {
  font-size: 15px !important;
  line-height: 4 !important;
}

.row {
  margin-top: 0;
  margin-bottom: 0 !important;
  max-width: 800px;
  margin: auto;
}

.embed {
  height: 75vh;
 overflow: auto;
 -ms-overflow-style: none;
}

.embed::webkit-scrollbar {
  display: none;
}
</style>
