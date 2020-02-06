<template>
  <v-container class="text-center">
    <h1 class="text-center py-12 font-weight-light">Students Enrolled</h1>
    <v-data-table
      :headers="headers"
      :items="students"
      sort-by="name"
      class="elevation-3 mx-12 my-12"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Students</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <!-- <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on"
                >New student</v-btn>
            </template> -->
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
                        label="student"
                      ></v-text-field>
                    </v-col> 
                  </v-row>
                  <v-row>
                      <v-col class="text-center pb-0">
                        <p>Enter keys separated by a comma. (example: cmd, shift, t)
                        </p>
                      </v-col>
                    </v-row>
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.macOS"
                        label="macOS Shortcut"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.windows"
                        label="Windows Shortcut"
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

      <template v-slot:item.photo="{ item }">
          <v-avatar size="30px">
                <v-img 
                    :src="item.photo"
                    max-height=60    
                    max-width=60
                    class="circular-thumb-frame"> 
                </v-img>
          </v-avatar>          
      </template>
        
      <template v-slot:item.action="{ item }">
        <v-icon small class="mr-5 title" @click="editItem(item)" color="blue">
          mdi-pencil-outline
        </v-icon>
        <v-icon small class="title" @click="deleteItem(item)" color="red">
          mdi-trash-can-outline
        </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
        { text: 'Photo', value: `photo`, sortable: false },
        { text: 'Name',value: 'name', sortable: false, },
        { text: 'UVU ID', value: 'uvuid', sortable: false },
        { text: 'Operating System', value: 'os', sortable: false },
        { text: 'Approved', value: 'approval', sortable: false },
        { text: 'Actions', value: 'action', sortable: false },
    ],
    students: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      uvuid: '',
      windows: '',
    },
    defaultItem: {
      name: '',
      uvuid: '',
      windows: '',
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New student' : 'Edit student'
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
      this.students = [
        {
          name: 'Jacob Mendez',
          photo: 'https://uinames.com/api/photos/male/2.jpg',
          uvuid: '55555555',
          os: 'macOS',
          approval: 'true'
        },
        {
          name: 'Wayne Bates',
          photo: 'https://uinames.com/api/photos/male/15.jpg',
          uvuid: '55555555',
          os: 'macOS',
          approval: 'true'
        },
        {
          name: 'Joyce Owens',
          photo: 'https://uinames.com/api/photos/female/21.jpg',
          uvuid: '55555555',
          os: 'macOS',
          approval: 'true'
        },
        {
          name: 'Eugene Herrera',
          photo: 'https://uinames.com/api/photos/male/20.jpg',
          uvuid: '55555555',
          os: 'Windows',
          approval: 'true'
        },
        {
          name: 'Brittany Washington',
          photo: 'https://uinames.com/api/photos/female/18.jpg',
          uvuid: '55555555',
          os: 'macOS',
          approval: 'true'
        },
        {
          name: 'Alan Curtis',
          photo: 'https://uinames.com/api/photos/male/6.jpg',
          uvuid: '55555555',
          os: 'macOS',
          approval: 'true'
        },
        {
          name: 'Lauren Wells',
          photo: 'https://uinames.com/api/photos/female/10.jpg',
          uvuid: '55555555',
          os: 'Windows',
          approval: 'true'
        },
      ]
    },

    editItem(item) {
      this.editedIndex = this.students.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      const index = this.students.indexOf(item)
      confirm('Are you sure you want to delete this student?') &&
        this.students.splice(index, 1)
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
        Object.assign(this.students[this.editedIndex], this.editedItem)
      } else {
        this.students.push(this.editedItem)
      }
      this.close()
    },
  },
}
</script>

<style>

</style>
