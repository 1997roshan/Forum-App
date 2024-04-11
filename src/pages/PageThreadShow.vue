<template>
  <div class="col-large push-top">
    <h1>
      <!-- {{ thread.title }} -->
      <router-link
        :to="{ name: 'ThreadEdit', id: this.id }"
        class="btn-green btn-small"
        tag="button"
        >Edit Thread</router-link
      >
    </h1>
    <PostList :posts="threadPost" />
    <PostEditor @save="addPost" />
  </div>
</template>
<script>
import PostList from '@/components/PostList.vue'
import PostEditor from '@/components/PostEditor.vue'
import { db } from '@/utils/firebase'
export default {
  props: {
    id: {
      required: true,
      type: String
    }
  },

  methods: {
    addPost(e) {
      const post = { ...e.post, threadId: this.id }

      this.$store.dispatch('createPost', post)
    }
  },
  computed: {
    threads() {
      return this.$store.state.threads
    },
    posts() {
      return this.$store.state.posts
    },
    thread() {
      return this.threads.find((thread) => thread.id === this.id)
    },
    threadPost() {
      return this.posts.filter((p) => p.threadId === this.id)
    }
  },
  created() {
    //fetch data
    console.log('this is created')
    db.firestore
      .collection('threads')
      .doc(this.id)
      .onSnapshot((doc) => {
        const thread = { ...doc.data(), id: doc.id }
        this.$store.commit('setThread', { thread })
      })
  },
  components: { PostList, PostEditor }
}
</script>

<style scoped>
h1 {
  font-weight: 900;
  font-size: 2rem;
}
</style>
