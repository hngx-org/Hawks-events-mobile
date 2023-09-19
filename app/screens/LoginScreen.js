import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import loginImage from '../assets/svgs/login-illustration.svg'; // Replace with your login image

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    // Implement your login logic here, e.g., Google Authentication
    // Once logged in, navigate to the Home screen or the main part of your app
    navigation.navigate('Home'); // Replace 'Home' with the actual screen name
  };
  

 

  return (
    <View style={styles.container}>
      <Image source={loginImage} style={styles.image} />
      <TouchableOpacity onPress={handleLogin}>
        <View style={styles.loginButton}>
          <Text style={styles.buttonText}>Login with Google</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: 'contain', // You can adjust the resizeMode as needed
  },
  loginButton: {
    backgroundColor: '#007bff', // Replace with your preferred button color
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white', // Button text color
    fontSize: 18,
  },
});

export default LoginScreen;
