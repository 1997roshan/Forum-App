<script>
import ThreadList from '../components/ThreadList.vue'
import { RouterLink } from 'vue-router'
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: { ThreadList, RouterLink },
  data() {
    return {
      forums: this.$store.state.forums,
      threads: this.$store.state.threads
    }
  },
  computed: {
    forum() {
      return this.forums.find((f) => f.id === this.id)
    },
    threadsFinder() {
      return this.threads.filter((t) => t.forumId === this.id)
    }
  }
}
</script>

<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>Welcome to the Forum</h1>
        <h2>{{ forum.name }}</h2>
        <p class="text-lead">{{ forum.description }}</p>
      </div>
      <router-link
        :to="{ name: 'ThreadCreate', params: { forumId: this.forum.id } }"
        class="btn-green btn-small"
        >Start a thread</router-link
      >
    </div>
  </div>

  <div class="col-full push-top">
    <ThreadList :threads="threadsFinder" />
  </div>
</template>
