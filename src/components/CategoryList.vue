<script>
import { RouterLink } from 'vue-router'

import ForumList from '@/components/ForumList.vue'
export default {
  props: {
    categories: {
      required: true,
      type: Array
    }
  },
  components: { RouterLink, ForumList },

  computed: {
    forums() {
      return this.$store.state.forums
    }
  },
  methods: {
    forumsInCategory(category) {
      return this.forums.filter((f) => f.categoryId === category.id)
    }
  }
}
</script>
<template>
  <div class="col-full push-top"></div>

  <div class="col-full">
    <!-- <div class="forum-list" v-for="category in categories" :key="category.id">
      <h2 class="list-title">
        <RouterLink :to="{ name: 'Category', params: { id: category.id } }">{{
          category.name
        }}</RouterLink>
      </h2>
    </div> -->

    <ForumList
      v-for="category in categories"
      :key="category.id"
      :forums="forumsInCategory(category)"
      :categoryName="category.name"
      :categoryId="category.id"
    />
  </div>
</template>
