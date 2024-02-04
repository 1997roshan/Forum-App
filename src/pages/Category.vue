<script>
import ForumList from '@/components/ForumList.vue'
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    ForumList
  },
  data() {
    return {
      categories: this.$store.state.categories,
      forums: this.$store.state.forums
    }
  },
  methods: {
    findCategory() {
      return this.categories.find((c) => c.id === this.id)
    },
    findForums() {
      return this.forums.filter((f) => f.categoryId === this.id)
    }
  }
}
</script>
<template>
  <div class="col-full push-top">
    <h1>{{ findCategory().name }}</h1>

    <ForumList :forums="findForums()" />
  </div>
</template>
