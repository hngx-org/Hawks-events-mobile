/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import GroupComponent from '../components/shared/GroupComponent';
 // Replace with your login image

const GroupListScreen = ({ navigation }) => {

  const handleCreateGroupPress = () => {
    // Navigate to the Create Event Screen when the button is pressed
    navigation.navigate('Create Group');
  };
 
  return (
    <View style={styles.container}>
        <Text style={styles.buttonText}> My Groups</Text>
        <GroupComponent style={styles.groupComponent} name="GGB Dance" upcomingEvents={2}/>
        <TouchableOpacity
            style={styles.floatingButton}
            onPress={handleCreateGroupPress}
        >
        <Text style={styles.floatingButtonText}>+</Text>
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
    color: 'black', // Button text color
    fontSize: 18,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FF9405',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  floatingButtonText: {
    fontSize: 30,
    color: 'white',
  },
  groupComponent: {
    width: 200,
    height: 200,
  }
});

export default GroupListScreen;
