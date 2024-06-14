// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "nextbook-917b2.firebaseapp.com",
  projectId: "nextbook-917b2",
  storageBucket: "nextbook-917b2.appspot.com",
  messagingSenderId: "404734419430",
  appId: "1:404734419430:web:b0a54516ca647caccaf627",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const baseBucketUrl =
  "https://firebasestorage.googleapis.com/v0/b/nextbook-917b2.appspot.com/o/";
