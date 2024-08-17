// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnjWGDdYf2qWKzOWjvKY1_i5OGyDeHrbg",
  authDomain: "shippuden-32a5b.firebaseapp.com",
  projectId: "shippuden-32a5b",
  storageBucket: "shippuden-32a5b.appspot.com",
  messagingSenderId: "432101535481",
  appId: "1:432101535481:web:be9aa64d6baebc7cbebc28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
