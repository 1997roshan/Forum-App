<template>
  <div class="col-full push-top">
    <h1>
      Create new thread in <i>{{ forum.name }}</i>
      <ThreadEditor @save="save" @cancel="cancel" />
    </h1>
  </div>
</template>
<script>
import ThreadEditor from '../components/ThreadEditor.vue'
import ThreadEdit from '../pages/ThreadEdit.vue'
export default {
  components: { ThreadEditor, ThreadEdit },
  props: {
    forumId: {
      type: String,
      required: true
    }
  },

  computed: {
    forum() {
      return this.$store.state.forums.find((f) => f.id === this.forumId)
    }
  },
  methods: {
    async save({ title, text }) {
      const thread = await this.$store.dispatch('createThread', {
        text,
        title,
        forumId: this.forumId
      })
      this.$router.push({ name: 'ThreadShow', params: { id: thread.id } })
    },
    cancel() {
      this.$router.push({ name: 'Forum', params: { id: this.forum.id } })
    }
  }
}
</script>
