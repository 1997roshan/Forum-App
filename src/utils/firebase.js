import { initializeApp } from 'firebase/app'
import firebaseConfig from '@/config/firebase'
const db = initializeApp(firebaseConfig)

export { db }
