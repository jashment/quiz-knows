<template>
  <div class="loggerDiv">
    <h1>Keyboard Events</h1>
    <label>Input:</label>
    <v-text-field
      v-model="pressedKey"
      type="text"
      @keydown="logKey"
    />

    <span>{{ pressedKey }}</span>

    <span>{{ infoArray }}</span>
    <br>
    <v-btn @click="clearArray">
      Click Me to Clear
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pressedKey: '',
      infoArray: [],
    }
  },
  mounted() {
    window.addEventListener('keypress', e => {
      e.preventDefault()
      String.fromCharCode(e.keyCode)
    })
  },
  methods: {
    logKey: function(event) {
      event.preventDefault()
      if (event.code != 'Backspace') {
        this.infoArray.push(event.key)
      }
    },
    clearArray: function() {
      this.infoArray = []
    },
  },
}
</script>

<style scoped>
.loggerDiv {
  text-align: center;
  width: 50%;
  margin: auto;
}
</style>
