// StackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WorkoutScreen from './WorkoutScreen';
import LoginScreen from './LoginScreen'; // Import the LoginScreen

const Stack = createStackNavigator();

const StackNavigator = ({ workout }) => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
      <Stack.Screen name="Home" options={{ title: 'Today\'s Workout' }}>
        {(props) => <WorkoutScreen {...props} workout={workout} />}
      </Stack.Screen>
      {/* Add more screens as needed */}
    </Stack.Navigator>
  );
};

export default StackNavigator;



