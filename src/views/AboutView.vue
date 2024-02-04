<script>
import CategoryList from '@/components/CategoryList.vue'
export default {
  components: {
    CategoryList
  },

  data() {
    return {
      threads: this.$store.state.threads,
      posts: this.$store.state.posts,
      users: this.$store.state.users,
      categories: this.$store.state.categories
    }
  }
}
</script>
<template>
  <div class="">
    <CategoryList :categories="categories" />
  </div>
</template>
