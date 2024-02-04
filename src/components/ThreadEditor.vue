<template>
  <form @submit.prevent="save">
    <div class="form-group">
      <label for="thread_title">Title:</label>
      <input type="text" v-model="form.title" id="thread_title" class="form-input" name="title" />
    </div>

    <div class="form-group">
      <label for="thread_content">Content:</label>
      <textarea
        v-model="form.text"
        id="thread_content"
        class="form-input"
        name="content"
        rows="8"
        cols="140"
      ></textarea>
    </div>

    <div class="btn-group">
      <button class="btn btn-ghost" @click.prevent="$emit('cancel')">Cancel</button>
      <button class="btn btn-blue" type="submit" name="Publish">
        {{ existing ? 'Update' : 'Publish' }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    text: { type: String, default: '' },
    title: { type: String, default: '' }
  },
  data() {
    return {
      form: {
        text: this.text,
        title: this.title
      }
    }
  },
  mounted() {
    console.log(this.existing)
  },
  computed: {
    existing() {
      return !!this.title
    }
  },
  methods: {
    save() {
      this.$emit('save', { ...this.form })
    }
  }
}
</script>
