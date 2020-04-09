<template>
  <div>
    <div class="row mt-5">
      <div class="col-md-3" />
      <div class="col-md-6">
        <h3 class="text-center">
          Avid Media: mac/os
        </h3>
      </div>
      <div class="col-md-3">
        <v-card-actions>
          <v-btn color="#00beff" class="white--text" link to="/flashcardsam2">
            Windows
          </v-btn>
          <v-btn color="#00beff" class="white--text" link to="/flashcards">
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
import vueFlashcard from "vue-flashcard";
export default {
  components: { vueFlashcard },
    data() {
    return {
cards: [
  {question: "What is the keystroke to Snap to Mid in Audio mix tool?",
  answer: "Opt + click Pan slider"},
  {question: "What is the keystroke Moves selected audio keyframe horizontally in timeline?", 
  answer: "Option + drag keyframe"},
  {question: "What is the keystroke to Create a new bin?", answer: "Cmd + N"},
  {question: "What is the keystroke to Close open windows, bins or dialog boxes?", 
  answer: "Cmd + W"},
  {question: "What is the keystroke to Duplicate selected clips, sequences, or titles?",
  answer: "Cmd + D"},
  {question: "What is the keystroke to Make a copy of the clip?",
  answer: "Cmd + drap clips between bins"},
  {question: "What is the keystroke to Remove an effect?", answer: "Cmd + Select segment + delete key"},
   {question: "What is the keystroke to Increases the height of selected track(s)?", 
   answer: "Cmd + L"},
  {question: "What is the keystroke to Decreases the height of selected track(s)?", 
  answer: "Cmd + K"},
  {question: "What is the keystroke to Add a new video track?", 
  answer: "Cmd + Y"},
  {question: "What is the keystroke to Add a new audio track?", answer: "Cmd + U"},
  {question: "What is the keystroke to select multiple segments?", answer: "Shift + click segments when in segment mode or effect mode"},
  {question: "What is the keystroke to select all tracks?", answer: "cmd + A"},
   {question: "What is the keystroke to de-select all tracks?", answer: "Shift + cmd + A"},
  {question: "What is the keystroke to Display the entire sequence in the timeline window?",
   answer: "Cmd + /"},
  {question: "What is the keystroke to open the Avid Calculator?", 
  answer: "Cmd + 2"},
  {question: "What is the keystroke to open the Command Pallete?", 
  answer: "Cmd + 3"},
  {question: "What is the keystroke to open the composer window?", answer: "Cmd + 4"},
  {question: "What is the keystroke to Media Creation?", answer: "Cmd + 5"},
   {question: "What is the keystroke open the project window?", answer: "cmd + 9"},
  {question: "What is the keystroke to change the relink option to unlink?", answer: "cmd + shift + clip menu"},
  {question: "What is the keystroke reverse the match frame?", answer: "Shift + R"},
  {question: "What is the keystroke to Apply a video transition?", answer: "Cmd + D"},
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
