
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIENtYDAae4t6ST2pfdkpgAQCLdeAvmYE",
  authDomain: "study-cafe-v3.firebaseapp.com",
  projectId: "study-cafe-v3",
  storageBucket: "study-cafe-v3.firebasestorage.app",
  messagingSenderId: "153469570777",
  appId: "1:153469570777:web:ed377167e0d4162109b8c8",
  measurementId: "G-32E9WKYC2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;