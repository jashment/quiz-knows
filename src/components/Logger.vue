<template>
  <div class="loggerDiv">
    <h1>Keyboard Events</h1>
    <label>Input:</label>
    <v-text-field type="text" v-on:keyup="logKey" v-model="pressedKey" />

    <span>{{ pressedKey }}</span>

    <span>{{ infoArray }}</span>
    <br />
    <v-btn @click="clearArray">Click Me to Clear</v-btn>
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
  methods: {
    logKey: function(event) {
      console.log(event)
      // event.preventDefault()
      if (event.code != 'Backspace') {
        this.infoArray.push(event.key)
      }
    },
    clearArray: function() {
      this.infoArray = []
    },
  },
  mounted() {
    window.addEventListener('keypress', e => {
      // e.preventDefault()
      console.log(String.fromCharCode(e.keyCode))
    })
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