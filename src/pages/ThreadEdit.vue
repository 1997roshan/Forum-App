<template>
  <div class="col-full push-top">
    <h1>
      Editing <i>{{ thread.title }}</i>
      <ThreadEditor :title="thread.title" :text="text" @save="save" @cancel="cancel" />
    </h1>
  </div>
</template>
<script>
import ThreadEditor from '../components/ThreadEditor.vue'
export default {
  components: { ThreadEditor },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  // mounted() {
  //   console.log('this')
  //   console.log(this.id)
  // },
  computed: {
    thread() {
      return this.$store.state.threads.find((thread) => thread.id === this.id)
    },

    text() {
      return this.$store.state.posts.find((post) => post.id === this.thread.posts[0]).text
    }
  },
  methods: {
    async save({ title, text }) {
      const thread = await this.$store.dispatch('updateThread', {
        text,
        title,
        id: this.id
      })
      this.$router.push({ name: 'ThreadShow', params: { id: thread.id } })
    },
    cancel() {
      this.$router.push({ name: 'ThreadShow', params: { id: this.id } })
    }
  }
}
</script>
