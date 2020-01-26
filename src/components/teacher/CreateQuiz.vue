<template>
<v-container>
  <h1 class="text-center py-12 font-weight-light">Create New Quiz</h1>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="macOS"
    class="elevation-1 mx-12 my-12"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Premeire Quiz</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">New Question</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      v-model="editedItem.name"
                      label="Question"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="editedItem.carbs"
                      label="macOS Shortcut"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="editedItem.protein"
                      label="windows Shortcut"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">
        edit
      </v-icon>
      <v-icon small @click="deleteItem(item)">
        delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</v-container>
  
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: 'Quesion',
        align: 'left',
        sortable: false,
        value: 'name',
      },
      { text: 'macOS', value: 'macOS' },
      { text: 'Windows', value: 'windows' },
      { text: 'Actions', value: 'action', sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      macOS: 0,
      windows: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: '',
      macOS: 0,
      windows: 0,
      carbs: 0,
      protein: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Question' : 'Edit Question'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
  },

  created() {
    this.initialize()
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          name: 'How do you make an edit wherever your playhead is located?',
          macOS: 'Cmd + K',
          windows: 'Ctrl + K',
        },
        {
          name: 'Pressing ___ while your playhead is over an existing Marker will bring up the Marker dialog box',
          macOS: 'M',
          windows: 'M',
        },
        {
          name: 'What key do you press to locate a source clip from within your timeline?',
          macOS: 'F',
          windows: 'F',
        },
        {
          name: 'What keys bring up the Export Media dialog box?',
          macOS: 'Cmd + M',
          windows: 'Ctrl + M',
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
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item)
      confirm('Are you sure you want to delete this item?') &&
        this.desserts.splice(index, 1)
    },

    close() {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },
  },
}
</script>

<style></style>
