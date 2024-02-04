<script>
export default {
  data() {
    return {
      newPost: ''
    }
  },
  methods: {
    save() {
      const post = {
        // publishedAt: Date.now() / 1000,
        text: this.newPost,
        threadId: this.id
        // userId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2'
      }

      this.$emit('save', { post })
      this.newPost = ''
    }
    // cancel() {
    //   const cancelPost = {

    //   }
    //   return this.$router.push({ name: 'Forum', params: { id: this.forum.id } })
    // }
  }
}
</script>
<template>
  <div class="col-full push-top">
    <form @submit.prevent="save">
      <div class="form-group">
        <label for="thread_content">Content:</label>
        <textarea
          v-model="newPost"
          id="thread_content"
          class="form-input"
          name="content"
          rows="8"
          cols="140"
        ></textarea>
      </div>

      <div class="btn-group">
        <button class="btn btn-ghost" @click="cancel()">Cancel</button>

        <button class="btn btn-blue" type="submit" name="Publish">Publish</button>
      </div>
    </form>
  </div>
</template>
