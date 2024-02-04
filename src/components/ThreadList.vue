<script>
import { RouterLink } from 'vue-router'

export default {
  props: {
    threads: {
      type: Array,
      required: true
    }
  },
  components: {
    RouterLink
  },

  computed: {
    posts() {
      return this.$store.state.posts
    },
    users() {
      return this.$store.state.users
    }
  },
  methods: {
    findPost(postId) {
      return this.posts.find((p) => p.id === postId)
    },
    findUser(userId) {
      return this.users.find((u) => u.id === userId)
    }
  }
}
</script>
<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>

      <div class="thread" v-for="thread in threads">
        <div>
          <p>
            <RouterLink :to="{ name: 'ThreadShow', params: { id: thread.id } }">{{
              thread.title
            }}</RouterLink>
          </p>
          <p class="text-faded text-xsmall">
            By <a href="#"> {{ findUser(thread.userId).name }} </a>,
            <AppDate :timestamp="thread.publishedAt" />
          </p>
        </div>

        <div class="activity">
          <p class="replies-count">{{ thread.posts.length }} replies</p>

          <img class="avatar-medium" :src="findUser(thread.userId).avatar" alt="" />
          <span>
            <a class="text-xsmall" href="profile.html">{{ findUser(thread.userId).name }}</a>
            <p class="text-faded text-xsmall"><AppDate :timestamp="thread.publishedAt" /></p>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
