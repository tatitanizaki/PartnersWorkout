// StackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WorkoutScreen from './WorkoutScreen';

const Stack = createStackNavigator();

const StackNavigator = ({ workout }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{ title: 'Today\'s Workout' }}>
        {(props) => <WorkoutScreen {...props} workout={workout} />}
      </Stack.Screen>
      {/* Add more screens as needed */}
    </Stack.Navigator>
  );
};

export default StackNavigator;


