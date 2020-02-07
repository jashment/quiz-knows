<template>
<v-card>
    <div class="loggerDiv">
    <h1>Keyboard Events</h1>
    <label>Input:</label>
    <v-text-field type="text" v-on:keydown="logKey" v-model="pressedKey" />

    <span>{{ pressedKey }}</span>

    <span>{{ infoArray }}</span>
    <br />
    <v-btn @click="clearArray">Click Me to Clear</v-btn>
  </div>
</v-card>
  
</template>

<script>
export default {
  data() {
    return {
      pressedKey: '',
      infoArray: [],
      questions: [
        {
          name: 'How do you make an edit wherever your playhead is located?',
          macOS: 'Cmd, K',
          windows: 'Ctrl, K',
        },
        {
          name:
            'Pressing ___ while your playhead is over an existing Marker will bring up the Marker dialog box',
          macOS: 'M',
          windows: 'M',
        },
        {
          name:
            'What key do you press to locate a source clip from within your timeline?',
          macOS: 'F',
          windows: 'F',
        },
        {
          name: 'What keys bring up the Export Media dialog box?',
          macOS: 'Cmd, M',
          windows: 'Ctrl, M',
        },
        {
          name: 'What key is for making In point on a clip?',
          macOS: 'I',
          windows: 'I',
        },
        {
          name: 'What key is for making Out point on a clip?',
          macOS: 'O',
          windows: 'O',
        },
        {
          name: 'What key makes your video playback at a faster speed?',
          macOS: 'L',
          windows: 'L',
        },
      ]
    }
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
  mounted() {
    window.addEventListener('keypress', e => {
      e.preventDefault()
      String.fromCharCode(e.keyCode)
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
