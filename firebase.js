// firebase.js
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCpH45QzbJM58jUvlCOBiJV6AbixYZxvko",
  authDomain: "partners-workout.firebaseapp.com",
  projectId: "partners-workout",
  storageBucket: "partners-workout.appspot.com",
  messagingSenderId: "480641770804",
  appId: "1:480641770804:web:7ca21ea98fa333895bf161",
  measurementId: "G-MJ0JGLKJ8V"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  export const db = firebase.firestore();
  
  // Functions to interact with Firestore
  
  export const getWorkouts = async () => {
    const snapshot = await db.collection('workouts').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  };
  
  export const addWorkout = async (workout) => {
    const docRef = await db.collection('workouts').add(workout);
    return docRef.id;
  };