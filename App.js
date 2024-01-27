import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';


// Initialize Firebase
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

const App = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const workoutsCollectionRef = collection(db, 'workouts');
        const querySnapshot = await getDocs(workoutsCollectionRef);
        const workoutsData = querySnapshot.docs.map(doc => doc.data());
        setWorkouts(workoutsData);
      } catch (error) {
        console.error("Error fetching workouts:", error);
        // Handle the error appropriately
      }
    };

    fetchWorkouts();
  }, []);

const getRandomWorkout = () => {
  const randomIndex = Math.floor(Math.random() * workouts.length);
  return workouts[randomIndex] || {
    name: 'Default Workout',
    movements: [],
    equipments: [],
    description: 'No description available',
  };
};

  const todayWorkout = getRandomWorkout();

  return (
    <NavigationContainer>
      <StackNavigator workout={todayWorkout} />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { db }; // Export the Firestore reference for use in other components
export default App;

