import { createStore } from 'vuex'

import { findById, upsert } from '../helpers'
export default createStore({
  state: { authId: '7uVPJS9GHoftN58Z2MXCYDqmNAh2' },
  getters: {
    authUser: (state) => {
      const user = findById(state.users, state.authId)
      if (!user) return null
      return {
        ...user,
        get posts() {
          return state.posts.filter((post) => post.userId == user.id)
        },
        get postsCount() {
          return this.posts.length
        },
        get threads() {
          return state.threads.filter((thread) => thread.userId == user.id)
        },
        get threadsCount() {
          return this.threads.length
        }
      }
    }
  },
  actions: {
    createPost({ commit, state }, post) {
      post.id = Math.random() + '-dsakeddd'
      ;(post.userId = state.authId),
        (post.publishedAt = Date.now() / 1000),
        commit('setPost', { post })
      commit('appendPostToThread', { postId: post.id, threadId: post.threadId })
    },
    async createThread({ commit, state, dispatch }, { text, title, forumId }) {
      const id = Math.random() + '-dsakeddd'
      const userId = state.authId
      const publishedAt = Date.now() / 1000
      const thread = { forumId, title, id, userId, publishedAt }
      commit('setThread', { thread })
      commit('appendThreadToForum', { threadId: id, forumId })
      commit('appendThreadToUser', { threadId: id, userId })

      dispatch('createPost', { text, threadId: id })
      return findById(state.threads, id)
    },
    async updateThread({ commit, state }, { title, text, id }) {
      const thread = findById(state.threads, id)
      const post = findById(state.posts, thread.posts[0])
      const newThread = { ...thread, title }
      const newPost = { ...post, text }
      commit('setThread', { thread: newThread })
      commit('setPost', { post: newPost })
      return newThread
    },
    updateUser({ commit }, user) {
      commit('setUser', { user, userId: user.id })
    }
  },
  mutations: {
    setPost(state, { post }) {
      upsert(state.posts, post)
      // const index = findById(state.posts, post.id)
      // if (post.id && index !== -1) {
      //   state.posts[index] = post
      // } else {
      //   state.posts.push(post)
      // }
    },
    setThread(state, { thread }) {
      upsert(state.threads, thread.id)
      // const index = findById(state.threads, thread.id)
      // if (thread.id && index !== -1) {
      //   state.threads[index] = thread
      // } else {
      //   state.threads.push(thread)
      // }
    },
    setUser(state, { user, userId }) {
      const userIndex = findById(state.users, userId)
      state.users[userIndex] = user
    },
    appendPostToThread(state, { postId, threadId }) {
      // const thread = state.threads.find((thread) => thread.id === threadId) //the code below is the replacement for this one working with findById
      const thread = findById(state.threads, threadId)
      thread.posts = thread.posts || []
      thread.posts.push(postId)
    },
    appendThreadToForum(state, { threadId, forumId }) {
      const forum = findById(state.forums, forumId)
      forum.threads = forum.threads || []
      forum.threads.push(threadId)
    },
    appendThreadToUser(state, { threadId, userId }) {
      const user = findById(state.users, userId)
      user.threads = user.threads || []
      user.threads.push(threadId)
    }
  }
})
const appendChildToParent = () => {
  return (state, { postId, threadId }) => {
    const thread = findById(state.threads, threadId)
    thread.posts = thread.posts || []
    thread.posts.push(postId)
  }
}
