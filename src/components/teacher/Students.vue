<template>
  <v-container class="text-center">
    <h1 class="text-center py-12 font-weight-light">
      Students Enrolled
    </h1>
    <v-data-table
      :headers="headers"
      :items="students"
      sort-desc="approval"
      sort-by="approval"
      class="elevation-3 mx-12 my-12"
    >
      <template v-slot:item.approval="{ item }">
        <v-chip
          :color="getColor(item.approval)"
          dark
        >
          {{
            getApproved(item.approval)
          }}
        </v-chip>
      </template>

      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Students</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          />
          <v-spacer />
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <v-card>
              <v-card-title>
                <span class="headline">Student Approval</span>
              </v-card-title>

              <!-- If student has not been approed, ability to approve -->
              <v-card-text v-if="editedItem.approval === false">
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                      class="text-center"
                    >
                      <p class="title font-weight-regular">
                        Would you like to approve
                        <span class="font-weight-bold blue--text">{{
                          editedItem.name
                        }}</span>
                        to your course?
                      </p>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions v-if="editedItem.approval === false">
                <v-spacer />
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="green"
                  @click="save(true)"
                >
                  Approve
                </v-btn>
              </v-card-actions>

              <!-- end of not approving student -->

              <!-- If student has been approved, ability to remove approval -->
              <v-card-text v-if="editedItem.approval === true">
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                      class="text-center"
                    >
                      <p class="title font-weight-regular">
                        Would you like to remove approval for
                        <span class="font-weight-bold blue--text">{{
                          editedItem.name
                        }}</span>
                        to your course?
                      </p>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions v-if="editedItem.approval === true">
                <v-spacer />
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="red"
                  @click="save(false)"
                >
                  Remove Approval
                </v-btn>
              </v-card-actions>

              <!-- end of removing approval from student -->
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>

      <template v-slot:item.photo="{ item }">
        <v-avatar size="30px">
          <v-img
            :src="item.photo"
            max-height="60"
            max-width="60"
            class="circular-thumb-frame"
          />
        </v-avatar>
      </template>

      <template v-slot:item.action="{ item }">
        <v-icon
          small
          class="mr-5 title"
          color="blue"
          @click="editItem(item)"
        >
          mdi-pencil-outline
        </v-icon>
        <v-icon
          small
          class="title"
          color="red"
          @click="deleteItem(item)"
        >
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
      { text: 'Name', value: 'name', sortable: false },
      { text: 'UVU ID', value: 'uvuid', sortable: false },
      { text: 'Operating System', value: 'os', sortable: false },
      { text: 'SignUp Date', value: 'signUp', sortable: false },
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
      return this.editedIndex === 'Approve student'
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
    getColor(approve) {
      // if (approval === true) return 'red'
      // else if (approval === false) return 'orange'
      // else return 'green'
      console.log(approve)
      return approve ? 'green' : 'red'
    },
    getApproved(approval) {
      if (approval === true) return 'Approved'
      else return 'Not Approved'
    },
    initialize() {
      this.students = [
        {
          name: 'Jacob Mendez',
          photo: 'https://uinames.com/api/photos/male/2.jpg',
          uvuid: '55555555',
          os: 'macOS',
          signUp: '3/1/20',
          approval: true,
        },
        {
          name: 'Wayne Bates',
          photo: 'https://uinames.com/api/photos/male/15.jpg',
          uvuid: '55555555',
          os: 'macOS',
          signUp: '3/1/20',
          approval: true,
        },
        {
          name: 'Joyce Owens',
          photo: 'https://uinames.com/api/photos/female/21.jpg',
          uvuid: '55555555',
          os: 'macOS',
          signUp: '3/1/20',
          approval: true,
        },
        {
          name: 'Eugene Herrera',
          photo: 'https://uinames.com/api/photos/male/20.jpg',
          uvuid: '55555555',
          os: 'Windows',
          signUp: '3/1/20',
          approval: false,
        },
        {
          name: 'Brittany Washington',
          photo: 'https://uinames.com/api/photos/female/18.jpg',
          uvuid: '55555555',
          os: 'macOS',
          signUp: '3/1/20',
          approval: true,
        },
        {
          name: 'Alan Curtis',
          photo: 'https://uinames.com/api/photos/male/6.jpg',
          uvuid: '55555555',
          os: 'macOS',
          signUp: '3/1/20',
          approval: false,
        },
        {
          name: 'Lauren Wells',
          photo: 'https://uinames.com/api/photos/female/10.jpg',
          uvuid: '55555555',
          os: 'Windows',
          signUp: '3/1/20',
          approval: false,
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

    save(test) {
      this.editedItem.approval = test
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

<style></style>
