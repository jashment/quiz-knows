<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="8">
        <h2 class="pt-12">
          Quiz Overview
        </h2>
        <v-divider />
        <div class="d-flex justify-space-between pt-4">
          <p>
            <strong>Program:</strong>
            {{ details[0].program }}
          </p>
          <p>
            <strong>Operating System:</strong>
            {{ details[1].os }}
          </p>
          <p>
            <strong>Questions:</strong>
            {{ details[2].questions }}
          </p>
        </div>
        <v-divider />
        <p class="pt-4">
          <strong>Instructions</strong>
        </p>
        <p>{{ details[3].instructions }}</p>
        <center>
          <v-btn color="green" class="mt-8" to="/quizzes/quiz">
            Take Quiz
          </v-btn>
        </center>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    details: [
      { program: "Adobe Premiere" },
      { os: "Mac OS" },
      { questions: 25 },
      {
        instructions: `Use shortcut keys from the Adobe Premiere program to answer the quiz
            questions. Try to improve your score and time, as you can take the quiz as many 
            times as you would like`
      }
    ]
  })
};
</script>

<style>
/* p {
  padding-top: 20px;
} */
</style>
