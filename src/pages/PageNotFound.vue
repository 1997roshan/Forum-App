<script>
import { RouterLink } from 'vue-router'
export default {
  components: {
    RouterLink
  }
}
</script>
<template>
  <h1>Page not Found</h1>
  <RouterLink :to="{ name: 'PageNotFound' }"><h3>Browse More</h3></RouterLink>
</template>
