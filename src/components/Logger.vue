<template>
  <div>
    <h1>Keyboard Events</h1>
    <label>Input:</label>
    <v-text-field type="text" v-on:keydown="logName" v-model="name" />

    <span>{{ name }}</span>
    <span>{{ age }}</span>
    <span>{{ infoArray }}</span>
    <br />
    <v-btn @click="clearArray">Click Me to Clear</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age: '',
      infoArray: [],
    }
  },
  methods: {
    logName: function(event) {
      console.log(event)
      if (event.code != 'Backspace') {
        this.infoArray.push(event.key)
      }
      // console.log(this.infoArray)
    },
    logAge: function() {
      this.infoArray.push(this.age)
      console.log(this.infoArray)
    },
    clearArray: function() {
      this.infoArray = []
    },
  },
  mounted() {
    window.addEventListener('keypress', e => {
      console.log(String.fromCharCode(e.keyCode))
    })
  },
}
</script>

<style scoped>
</style>