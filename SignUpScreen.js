// SignUpScreen.js
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { signUpWithEmail } from './AuthService'; // Adjust the path as necessary

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Add confirm password state
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    // Add confirm password logic if necessary
    const errorMessage = await signUpWithEmail(email, password, navigation);
    if (errorMessage) {
      setError(errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Account</Text>
      <Text style={styles.subheader}>Please sign up to continue.</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.link}>
        <Text>Already have an account? Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#fff', // Assuming a white background
    },
    header: {
      fontSize: 26,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: '#333', // Replace with your color
    },
    subheader: {
      fontSize: 18,
      marginBottom: 20,
      textAlign: 'center',
      color: '#666', // Replace with your color
    },
    input: {
      height: 50,
      backgroundColor: '#f7f7f7', // Light grey background for input
      marginBottom: 15,
      paddingHorizontal: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#f0f0f0', // Light border for input
      fontSize: 16,
    },
    button: {
      backgroundColor: '#FFA500', // Example button color, replace with your color
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginBottom: 20,
    },
    buttonText: {
      color: '#fff', // Button text color
      fontWeight: 'bold',
      fontSize: 18,
    },
    link: {
      marginTop: 10,
      textAlign: 'center',
    },
    errorText: {
      color: 'red',
      textAlign: 'center',
      marginBottom: 10,
    },
  });
  

export default SignUpScreen;
