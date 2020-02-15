<template>
  <div class="row">
    <div class="col-lg-9 col-md-9">
      <div class="row">
        <div class="col-md-4 col-lg-4 col-sm-4">
          <vue-flashcard
            front="What does CTRL + V do?"
            back="Pastes what the user copied"
            header-front="Queston"
            footer-front
            footer-back
            color-front="#424242"
            color-back="#01F0FF"
            color-text-front="white"
            color-text-back="black"
          />
        </div>
        <div class="col-md-4 col-lg-4 col-sm-4">
          <vue-flashcard
            front="What does CTRL + C do?"
            back="Copies content to clipboard"
            header-front="Queston"
            footer-front
            footer-back
            color-front="#424242"
            color-back="#01F0FF"
            color-text-front="white"
            color-text-back="black"
          />
        </div>
        <div class="col-md-4 col-lg-4 col-sm-4">
          <vue-flashcard
            front="What happens when you press CTRL + Q?"
            back="undefined"
            header-front="Queston"
            footer-front
            footer-back
            color-front="#424242"
            color-back="#01F0FF"
            color-text-front="white"
            color-text-back="black"
          />
        </div>
      </div>
    </div>

    <div class="col-md-3">
      <div class="row side-container">
        <div class="col-md-12">
          <vue-flashcard
            front="What does CTRL + V do?"
            back="Pastes what the user copied"
            header-front="Queston"
            footer-front
            footer-back
            color-front="#424242"
            color-back="#01F0FF"
            color-text-front="white"
            color-text-back="black"
          />
          <vue-flashcard
            front="What does CTRL + V do?"
            back="Pastes what the user copied"
            header-front="Queston"
            footer-front
            footer-back
            color-front="#424242"
            color-back="#01F0FF"
            color-text-front="white"
            color-text-back="black"
          />
          <vue-flashcard
            front="What does CTRL + V do?"
            back="Pastes what the user copied"
            header-front="Queston"
            footer-front
            footer-back
            color-front="#424242"
            color-back="#01F0FF"
            color-text-front="white"
            color-text-back="black"
          />
          <vue-flashcard
            front="What does CTRL + V do?"
            back="Pastes what the user copied"
            header-front="Queston"
            footer-front
            footer-back
            color-front="#424242"
            color-back="#01F0FF"
            color-text-front="white"
            color-text-back="black"
          />
        </div>
      </div>
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
.side-container {
  overflow-y: auto;
  max-height: 700px;
  scroll-behavior: smooth;
}
</style>
