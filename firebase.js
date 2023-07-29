// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const app = initializeApp(firebaseConfig);
export const auth = getAuth(); 
export default app;