import './assets/main.css'
import { db } from './utils/firebase'
import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import store from './store'
import AppDate from '@/components/AppDate.vue'

// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app'
// import firebaseConfig from '@/config/firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyDshMBde4Rr48jfDznjlE45Je5ayrrpA54',
//   authDomain: 'vue-practice-forum.firebaseapp.com',
//   projectId: 'vue-practice-forum',
//   storageBucket: 'vue-practice-forum.appspot.com',
//   messagingSenderId: '916265863398',
//   appId: '1:916265863398:web:dd81d7a76dd434d408d327'
// }

// Initialize Firebase
const app = db
const forumApp = createApp(App)

// app.use(createPinia())
forumApp.use(store)
forumApp.use(router)

// Register component globally
forumApp.component('AppDate', AppDate)

forumApp.mount('#app')
