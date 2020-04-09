<template>
  <div>
    <div class="row mt-5">
      <div class="col-md-3" />
      <div class="col-md-6">
        <h3 class="text-center">
          Adobe Premier: macOS
        </h3>
      </div>
      <div class="col-md-3">
        <v-card-actions>
          <v-btn color="#00beff" class="white--text" link to="/flashcardsap2">
            Windows
          </v-btn>
          <v-btn color="#00beff" class="white--text" link to="/flashcards">
            Back
          </v-btn>
        </v-card-actions>
      </div>
    </div>

<div class="side-container embed">
<v-row v-for="card in cards" :key="card.i">
  <v-col cols="10" class="mx-auto">
    <vueFlashcard
    :front="card.question"
    :back="card.answer"
    header-front="Question"
    footer-front=""
    footer-back=""
    color-front="#424242"
    color-back="#01F0FF"
    color-text-front="white"
    color-text-back="black" />
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
{question: "What is the keystroke to start a project?",
answer: "Opt + Cmd + N"
},
{question: "What is the keystroke to start a sequence?",
answer: "Cmd + N"
},
{question: "What is the keystroke to select BIN?",
answer: "Cmd + /"},
{question: "What is the keystroke to Open a Project?",
answer: "Cmd + O"
},
{question: "What is the keystroke to Close a Project?", answer: "Shift + Cmd + W"},
{question: "What is the keystroke to close a file?", 
answer: "Cmd + W"},
{question: "What is the keystroke to undo?", 
answer: "Cmd + Z"},
{question: "What is the keystroke to Redo?", 
answer: "Shift + Cmd + Z"},
{question: "What is the keystroke to Cut?", 
answer: "Cmd + X"},
{question: "What is the keystroke to Copy?",
answer: "Cmd + C"},
{question: "What is the keystroke to Paste?", 
answer: "Cmd + V"},
{question: "What is the keystroke to Paste Insert?",
answer: "Shift + Cmd + V"},
{question: "What is the keystroke to Make a Subclip?",
answer: "Cmd + U"},
{question: "What is the keystroke to clip audio channels?", 
answer: "Shift + G"},
{question: "What is the keystroke adjust the gain?", 
answer: "G"},
{question: "What is the keystroke to adjust the Speed/Duration?",
answer: "Cmd + R"},
{question: "What is the keystroke to enable a clip?",
answer: "Shift + Cmd + E"},
{question: "What is the keystroke to Link a clip?", 
answer: "Cmd + L"},
{question: "What is the keystroke to group clips?", 
answer: "Cmd + G"},
{question: "What is the keystroke to ungroup clips?",
answer: "Shift + Cmd + G"},
{question: "What is the keystroke Render Effects in the work area?",
answer: "Enter"},
{question: "What is the keystroke match the frame?",
answer: "F"},
{question: "What is the keystroke reverse the match frame?",
answer: "Shift + R"},
{question: "What is the keystroke to Apply a video transition?",
answer: "Cmd + D"},
{question: "What is the keystroke to Reset to a Saved Layout?",
answer: "Opt + Shift + 0"},
{question: "What is the keystroke to open the Audio Clip Mixer?",
answer: "Shift + 9"},
{question: "What is the keystroke open the Audio Track Mixer?",
answer: "Shift + 6"},
{question: "What is the keystroke to open the Effect Controls?",
answer: "Shift + 5"},
{question: "What is the keystroke to open Timelines?",
answer: "Shift + 3"},
{question: "What is the keystroke to Show/Hide Tracks?",
answer: "Opt + Cmd + T"},
{question: "What is the keystroke to Loop through audio tracks?", answer: "Cmd + L"},
{question: "What is the keystroke to Record Video?", answer: "V"},
{question: "What is the keystroke to Record Audio?", answer: "A"},
{question: "What is the keystroke to Remove a selected effect?", answer: "Delete"},
{question: "What is the keystroke to create a new text layer?", answer: "Cmd + T"},
{question: "What is the keystroke to Bring to Front?", answer: "Cmd + Shift + ]"},
{question: "What is the keystroke to Bring Forward a graphic?", answer: "Cmd + ]"},
{question: "What is the keystroke to Send a graphic Backward?", answer: "Cmd + ["},
{question: "What is the keystroke Clear a Selection in graphics panel?", answer: "delete"},
{question: "What is the keystroke to step backward on the history panel?", answer: "left"},
{question: "What is the keystroke to step forward on the history panel?", answer: "Right"},
{question: "What is the keystroke to delete in the history panel?", answer: "delete"},
{question: "What is the keystroke to open the Arc Tool?", answer: "A"},
{question: "What is the keystroke to open the eclipse tool?", answer: "E"},
{question: "What is the keystroke to insert a copyright symbol?", answer: "Opt + Shift + Cmd + C"},
{question: "What is the keystroke Insert a Registered Symbol?", answer: "Opt + Shift + Cmd + R"},
{question: "What is the keystroke to Open in Source Monitor?", answer: "Shift + O"},
{question: "What is the keystroke to Select the Directory List?", answer: "Shift + Left"}
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
