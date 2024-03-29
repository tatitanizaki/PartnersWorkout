// LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { signInWithEmail } from './AuthService'; // Adjust path as needed

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const errorMessage = await signInWithEmail(email, password);
    if (errorMessage) {
      setError(errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <Text style={styles.subheader}>Please sign in to continue.</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
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
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.link}>
        <Text>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

// Add StyleSheet details based on your design
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
  

export default LoginScreen;

