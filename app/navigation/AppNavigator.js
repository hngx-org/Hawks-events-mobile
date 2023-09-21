// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import MainNavigator from '../navigation/MainNavigator';
import GroupDetailsScreen from '../screens/GroupDetailsScreen';
import CreateGroupScreen from '../screens/CreateGroupScreen';
import EventDetailsScreen from '../screens/EventDetailsScreen';
import CreateEventScreen from '../screens/CreateEventScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
      <Stack.Screen name="Main" component={MainNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Group Details" component={GroupDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Create Group" component={CreateGroupScreen} options={{ title: 'Create Group' }} />
        <Stack.Screen name="Event Details" component={EventDetailsScreen} options={{ title: 'Event Details' }} />
        <Stack.Screen name="Create Event" component={CreateEventScreen} options={{ title: 'Create Event' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;