// App.js
global.window = global.window || {};
global.window.navigator = global.window.navigator || {};
global.window.navigator.userAgent = "ReactNative";
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig'; // Import db from firebaseConfig

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

export default App;

