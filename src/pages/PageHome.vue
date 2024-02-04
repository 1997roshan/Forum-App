<script>
import ForumList from '@/components/ForumList.vue'
export default {
  components: {
    ForumList
  },
  // data() {
  //   return {
  //     forums: this.$store.state.forums
  //   }
  // },
  computed: {
    forums() {
      return this.$store.state.forums
    }
  }
}
</script>
<template>
  <ForumList :forums="forums" categoryName="" categoryId="" />
</template>

<style scoped>
h1 {
  font-weight: 900;
  font-size: 2rem;
}
</style>
