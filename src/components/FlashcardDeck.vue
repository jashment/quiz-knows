<template>
  <div>
      <p class="display-1 text-center mt-12">Flashcards for {{ this.$route.params.id }}</p>
      <div class="text-center mt-12">
        <v-btn x-large v-if="os" color="success" @click="os = false"><v-icon left large class="mr-8">mdi-microsoft-windows</v-icon>Microsoft Windows Questions</v-btn>
        <v-btn x-large v-if="!os" color="success" @click="os = true"><v-icon left large class="mr-8">mdi-apple</v-icon>Apple macOS Questions</v-btn>
      </div>
    <v-row v-for="card in questions" :key="card.i" class="my-12">
      <v-col cols="8" class="mx-auto">
        <vueFlashcard
           v-if="os"
          :front="card.question"
          :back="formatAnswer(card.macOS)"
          header-front="Question"
          color-front="#424242"
          color-back="#01F0FF"
          color-text-front="white"
          color-text-back="black"
        />
        <vueFlashcard
           v-if="!os"
          :front="card.question"
          :back="formatAnswer(card.windows)"
          header-front="Question"
          color-front="#424242"
          color-back="#01F0FF"
          color-text-front="white"
          color-text-back="black"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import firebase from "firebase";
import vueFlashcard from "vue-flashcard";
export default {
  components: { vueFlashcard },
  data() {
    return {
      questions: null,
      os: true,
    };
  },
  mounted() {
    firebase
      .database()
      .ref(`quizzes/${this.$route.params.id}/questions`)
      .once("value")
      .then((snapshot) => {
        this.questions = snapshot.val();
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
      formatAnswer(arr) {
          let val1 = ''
          for (let i = 0; i < arr.length; i++) {
              val1 += ` ${arr[i]} + `
          }
          return `${val1.toUpperCase().slice(0, -2)} `
      }
  }
};
</script>

<style scoped>
button {
    /* background: linear-gradient(to bottom, #00f4ff 0%, #0cafff 100%); */
    /* color: #424242!important; */
}
</style>
