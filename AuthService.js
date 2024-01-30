// AuthService.js
import auth from '@react-native-firebase/auth';

export const signUpWithEmail = async (email, password, navigation) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
    // Navigate to a screen after successful sign-up (e.g., home screen)
    navigation.navigate('WorkoutScreen');
  } catch (error) {
    console.error("Sign Up Error:", error);
    return error.message;
  }
};

export const signInWithEmail = async (email, password, navigation) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    // Navigate to a screen after successful sign-in (e.g., workout screen)
    navigation.navigate('WorkoutScreen');
  } catch (error) {
    console.error("Sign In Error:", error);
    let errorMessage = "Failed to sign in";
    if (error.code === 'auth/wrong-password') {
      errorMessage = "Incorrect password";
    } else if (error.code === 'auth/user-not-found') {
      errorMessage = "User not found";
    }
    return errorMessage;
  }
};

export const signOut = async (navigation) => {
  try {
    await auth().signOut();
    // Navigate to a screen after successful sign-out (e.g., login screen)
    navigation.navigate('Login');
  } catch (error) {
    console.error("Sign Out Error:", error);
    return error.message;
  }
};

