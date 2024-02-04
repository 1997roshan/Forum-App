<template>
  <div class="profile-card">
    <p class="text-center">
      <img :src="user.avatar" :alt="`${user.name} profile picture`" class="avatar-xlarge" />
    </p>

    <h1 class="title">{{ user.username }}</h1>

    <p class="text-lead">{{ user.name }}</p>

    <p class="text-justify">{{ user.bio || 'No bio specified.' }}</p>

    <span class="online">{{ user.name }} is online</span>

    <div class="stats">
      <span>{{ user.postsCount }} Posts</span>
      <span>{{ user.threadsCount }} Threads</span>
    </div>

    <hr />

    <p class="text-large text-center" v-if="user.website">
      <i class="fa fa-globe"></i>
      <a :href="user.website" target="blank">{{ user.website }}</a>
    </p>
    <button class="text-center">
      <hr />
      <router-link :to="{ name: 'ProfileEdit' }" class="btn-green btn-small"
        >Edit Profile</router-link
      >
    </button>
  </div>
</template>
<script>
export default {
  props: {
    user: {
      required: true,
      type: Object
    }
  }
}
</script>
