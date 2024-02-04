import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PageNotFound from '@/pages/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    const scroll = {}
    if (to.meta.scrollSmooth) scroll.behavior = 'smooth'
    if (to.meta.toTop) scroll.top = 0

    return scroll
    // return { top: 0, behaviour: 'scroll' }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: () => import('@/pages/PageThreadShow.vue'),
      props: true
    },
    {
      path: '/forum/:forumId/thread/create',
      name: 'ThreadCreate',
      component: () => import('@/pages/ThreadCreate.vue'),
      props: true
    },
    {
      path: '/thread/:id/edit',
      name: 'ThreadEdit',
      component: () => import('@/pages/ThreadEdit.vue'),
      props: true
    },
    {
      path: '/forum/:id',
      name: 'Forum',
      component: () => import('@/pages/Forum.vue'),
      props: true
    },
    {
      path: '/category/:id',
      name: 'Category',
      component: () => import('@/pages/Category.vue'),
      props: true
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('@/pages/Profile.vue'),
      meta: { toTop: true, scrollSmooth: true }
    },
    {
      path: '/profile/edit',
      name: 'ProfileEdit',
      component: () => import('@/pages/Profile.vue'),
      props: { edit: true }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})

export default router
