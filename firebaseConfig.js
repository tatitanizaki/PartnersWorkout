// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpH45QzbJM58jUvlCOBiJV6AbixYZxvko",
  authDomain: "partners-workout.firebaseapp.com",
  projectId: "partners-workout",
  storageBucket: "partners-workout.appspot.com",
  messagingSenderId: "480641770804",
  appId: "1:480641770804:web:7ca21ea98fa333895bf161",
  measurementId: "G-MJ0JGLKJ8V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { app, db };
