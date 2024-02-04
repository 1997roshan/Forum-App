<script>
import { RouterLink } from 'vue-router'

export default {
  props: {
    forums: {
      required: true,
      type: Array
    },
    categoryName: {
      type: String,
      default: 'Forums'
    },
    categoryId: {
      type: String,
      required: false
    }
  },
  components: {
    RouterLink
  },

  methods: {
    forumThreadsLength(forum) {
      if (forum.threads?.length) {
        return forum.threads.length > 1 ? 'threads' : 'thread'
      } else {
        return 'no threads'
      }
    }
  }
}
</script>
<template>
  <div class="col-full">
    <RouterLink
      :to="{ name: 'Category', params: { id: categoryId } }"
      v-if="categoryId && categoryName"
      ><h1 class="list-title">{{ categoryName }}</h1></RouterLink
    >
    <div class="forum-list">
      <div class="forum-listing" v-for="forum in forums" :key="forum.id">
        <div class="forum-details">
          <RouterLink :to="{ name: 'Forum', params: { id: forum.id } }">{{
            forum.name
          }}</RouterLink>

          <p>{{ forum.description }}</p>
        </div>

        <div class="threads-count">
          <p>
            <span class="count">{{ forum.threads?.length }}</span
            >{{ forumThreadsLength(forum) }}
          </p>
        </div>

        <div class="last-thread"></div>
      </div>
    </div>
  </div>
</template>
