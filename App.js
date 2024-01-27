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

// Sample workout data
const workouts = [
  {
    name: 'Test Workout',
    movements: ['Box Jump', 'Burpee', 'Ground-to-Overhead', 'Pull-Up', 'Wall Ball'],
    equipments: ['Barbell', 'Box', 'Medicine Ball', 'Pull-Up Bar'],
    description: 'For Time (with a Partner)\n200 Box Jump Overs (24/20 in)\n150 Wall Balls (20/14 lb)\n100 Ground-to-Overheads (100/70 lb)\n75 Bar Over Burpees\n50 Pull-Ups\nPartition the work above any way',
  },
  // Add more workouts as needed
];

const getRandomWorkout = () => {
  const randomIndex = Math.floor(Math.random() * workouts.length);
  return workouts[randomIndex] || {
    name: 'Default Workout',
    movements: [],
    equipments: [],
    description: 'No description available',
  };
};
const App = () => {
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

