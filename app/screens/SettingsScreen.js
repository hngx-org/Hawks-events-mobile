import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
//import loginImage from '../assets/svgs/login-illustration.svg'; // Replace with your login image
import {createStackNavigator} from '@react-navigation/stack';
import userIcon from '../assets/images/userIcon.png';
import {useAuth0} from 'react-native-auth0';



const SettingsScreen = ({navigation}) => {
    const {clearSession, user} = useAuth0();
  
  const handleLogout = async () => {
    // Implement your login logic here, e.g., Google Authentication
    // Once logged in, navigate to the Home screen or the main part of your app

    try {
        await clearSession();
        navigation.navigate('Login'); // Replace 'Home' with the actual screen name
    } catch (e) {
        console.log(e);
    }

    
  };
  

 

  

  return (
    <View style={styles.container}>
      <View style={styles.displayBox}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: user.picture}} />
        </View>
        <View style={styles.displayInner}>
          <Text style={styles.nameText}>{user.name}</Text>
          <Text style={styles.emailText}>{user.email}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleLogout}>
        <View style={styles.logout}>
          <Image source={require('../assets/images/logout.png')} />
          <Text style={styles.logoutText}>Logout</Text>
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
    color: 'black', // Button text color
    fontSize: 18,
  },
});

export default SettingsScreen;
