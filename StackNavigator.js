// StackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WorkoutScreen from './WorkoutScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={WorkoutScreen} />
      {/* Add more screens as needed */}
    </Stack.Navigator>
  );
};

export default StackNavigator;

