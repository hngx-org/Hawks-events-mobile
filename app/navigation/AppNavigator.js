// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
      <Stack.Screen name="Main" component={MainNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;