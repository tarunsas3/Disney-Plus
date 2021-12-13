// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfZ5-sE00qxJ7yijE9WLiwNXmfd5AKSkg",
  authDomain: "disney-plus-e29c7.firebaseapp.com",
  projectId: "disney-plus-e29c7",
  storageBucket: "disney-plus-e29c7.appspot.com",
  messagingSenderId: "553669364171",
  appId: "1:553669364171:web:96d70c0109d8d37127ce4e",
  measurementId: "G-2QFRS05J96",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
