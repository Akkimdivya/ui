// src/config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfHKcrVNBL0Jw8XiD1fQ14MPlO1j1M5tY",
  authDomain: "fir-71b91.firebaseapp.com",
  projectId: "fir-71b91",
  storageBucket: "fir-71b91.appspot.com",
  messagingSenderId: "374541209864",
  appId: "1:374541209864:web:78ff5e2718435f3b0f1cbd",
  measurementId: "G-N1JXNDPE4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, createUserWithEmailAndPassword, signInWithEmailAndPassword };
