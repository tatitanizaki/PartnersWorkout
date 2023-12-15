import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WorkoutScreen = ({ workout, navigation }) => {
    console.log(workout); // Log the workout object to the console
    if (!workout) {
        // Handle the case where workout is undefined
        return <Text>No workout data available</Text>;
      }
  
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Workout</Text>
      <Text style={styles.workoutName}>{workout.name}</Text>
      <Text style={styles.description}>{workout.description}</Text>
      <Text style={styles.movements}>Movements: {workout.movements.join(', ')}</Text>
      <Text style={styles.equipments}>Equipments: {workout.equipments.join(', ')}</Text>
      <Button title="Next Workout" onPress={() => navigation.push('Home')} />
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
