import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import WorkoutScreen from './WorkoutScreen';

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
  return workouts[randomIndex];
};

const App = () => {
  const todayWorkout = getRandomWorkout();

  return (
    <SafeAreaView style={styles.container}>
      <WorkoutScreen workout={todayWorkout} />
      <StatusBar style="auto" />
    </SafeAreaView>
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

