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
    flexDirection: 'column',
    padding: 20,
    gap: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: 70, // Adjust the width as needed
    height: 70, // Adjust the height as needed
    resizeMode: 'contain', // You can adjust the resizeMode as needed
  },
  imageContainer: {
    width: 80,
    borderRadius: '50%',
  },
  displayBox: {
    flexDirection: 'row',
    height: 70,
  },
  logout: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  nameText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: 0.005,
    textAlign: 'left',
    width: 123,
    height: 16,
  },
  emailText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0.0025,
    textAlign: 'left',
  },
});

export default SettingsScreen;
