/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import loginImage from '../assets/images/login.png';
 // Replace with your login image
 import {useAuth0} from 'react-native-auth0';


const LoginScreen = ({ navigation }) => {
  const {authorize} = useAuth0();

  const handleLogin = async () => {
    try {
      await authorize();
    } catch (e) {
        console.log(e);
    }
    // Implement your login logic here, e.g., Google Authentication
    // Once logged in, navigate to the Home screen or the main part of your app
    navigation.navigate('Main'); // Replace 'Home' with the actual screen name
  };

  return (
    <View style={styles.container}>
      <Image source={loginImage} />
      <Text style={styles.headerText}>Let's Get Started</Text>
      <Text style={styles.descriptionText}>
        Signup or login to see what is happening around you.
      </Text>
      <TouchableOpacity style={styles.touchable} onPress={handleLogin}>
        <View style={styles.signupButton}>
          <Image source={require('../assets/images/google-icon.png')} style={styles.googleIcon} />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.touchable} onPress={handleLogin}>
        <View style={styles.loginButton}>
          <Image source={require('../assets/images/google-icon.png')} style={styles.googleIcon} />
          <Text style={styles.buttonText}>Login with Google</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 42,
    letterSpacing: 0.25,
    alignSelf: 'flex-start',
    marginTop: 40,
  },
  descriptionText: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.5,
    marginTop: 20,
    alignSelf: 'flex-start',

  },
  touchable: {
    width: '100%',
  },
  signupButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#FF9405',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#FF9405',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#FF9405',
    fontSize: 16,
    marginLeft: 10,
  },
  googleIcon: {
    width: 24,
    height: 24,
  },
});

export default LoginScreen;
