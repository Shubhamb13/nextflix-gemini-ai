// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiUS8nrYvInPktWVfXCSd4UadCkPPATaQ",
  authDomain: "netflix-gpt-5e5ac.firebaseapp.com",
  projectId: "netflix-gpt-5e5ac",
  storageBucket: "netflix-gpt-5e5ac.firebasestorage.app",
  messagingSenderId: "757791722914",
  appId: "1:757791722914:web:1c570642b8c6cba0b976fb",
  measurementId: "G-H4DGFXYXY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
