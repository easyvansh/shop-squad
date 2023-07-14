import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqXj7S6Uo3AGtSjtWK0F26XINsgK6Cu6k",
  authDomain: "login-c0e7c.firebaseapp.com",
  projectId: "login-c0e7c",
  storageBucket: "login-c0e7c.appspot.com",
  messagingSenderId: "1001460306394",
  appId: "1:1001460306394:web:253a89e8406ea14424f0e3"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
