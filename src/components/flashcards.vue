<template>
  <div class="row">
    <div class="col-md-4 col-lg-4 col-sm-4">
      <vue-flashcard
        front="What does CTRL + V do?"
        back="Pastes what the user copied"
        headerFront="Queston"
        footerFront=""
        footerBack=""
        colorFront="#424242"
        colorBack="#01F0FF"
        colorTextFront="white"
        colorTextBack="black"
      >
      </vue-flashcard>
    </div>
    <div class="col-md-4 col-lg-4 col-sm-4">
      <vue-flashcard
        front="What does CTRL + C do?"
        back="Copies content to clipboard"
        headerFront="Queston"
        footerFront=""
        footerBack=""
        colorFront="#424242"
        colorBack="#01F0FF"
        colorTextFront="white"
        colorTextBack="black"
      >
      </vue-flashcard>
    </div>
    <div class="col-md-4 col-lg-4 col-sm-4">
      <vue-flashcard
        front="What happens when you press CTRL + Q?"
        back="undefined"
        headerFront="Queston"
        footerFront=""
        footerBack=""
        colorFront="#424242"
        colorBack="#01F0FF"
        colorTextFront="white"
        colorTextBack="black"
      >
      </vue-flashcard>
    </div>
  </div>
</template>

<script>
import vueFlashcard from 'vue-flashcard'
export default {
  components: { vueFlashcard },
}
</script>

<style scoped>

</style>
