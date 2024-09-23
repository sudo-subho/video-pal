// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7yQbsJGvqqbuwWINoHwHUQA4w2UWFo0w",
  authDomain: "p-pal-33933.firebaseapp.com",
  projectId: "p-pal-33933",
  storageBucket: "p-pal-33933.appspot.com",
  messagingSenderId: "793312080471",
  appId: "1:793312080471:web:26d6c72325e39faa87e912",
  measurementId: "G-NPBQHYWTVQ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
