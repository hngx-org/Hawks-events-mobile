import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import loginImage from '../assets/svgs/login-illustration.svg'; // Replace with your login image

const ScheduleScreen = ({ navigation }) => {
 
  return (
    <View style={styles.container}>
          <Text style={styles.buttonText}>Schedule</Text>
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
    color: 'black', // Button text color
    fontSize: 18,
  },
});

export default ScheduleScreen;
