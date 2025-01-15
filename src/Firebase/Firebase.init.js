// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGo6Z9TBe0kIVuvC7wFPW9ztQVaRdgISk",
  authDomain: "dragon-news-4f7de.firebaseapp.com",
  projectId: "dragon-news-4f7de",
  storageBucket: "dragon-news-4f7de.firebasestorage.app",
  messagingSenderId: "434360891357",
  appId: "1:434360891357:web:d48d0512c52ee2ea056834"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth