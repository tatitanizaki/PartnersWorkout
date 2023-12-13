import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WorkoutScreen = ({ workout }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Workout</Text>
      <Text style={styles.workoutName}>{workout.name}</Text>
      <Text style={styles.description}>{workout.description}</Text>
      <Text style={styles.movements}>Movements: {workout.movements.join(', ')}</Text>
      <Text style={styles.equipments}>Equipments: {workout.equipments.join(', ')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  workoutName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    marginBottom: 10,
  },
  movements: {
    marginBottom: 5,
  },
  equipments: {
    marginBottom: 10,
  },
});

export default WorkoutScreen;
