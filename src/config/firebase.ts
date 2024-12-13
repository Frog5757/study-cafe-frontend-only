// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-As3JI0J0pKs_0jc-7-5fWAMt9myLbCU",
  authDomain: "study-cafe-1c22b.firebaseapp.com",
  projectId: "study-cafe-1c22b",
  storageBucket: "study-cafe-1c22b.firebasestorage.app",
  messagingSenderId: "30896203304",
  appId: "1:30896203304:web:b598602249cfb9acf2f71d",
  measurementId: "G-42FLTH6FND",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
