import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen'; // Import your HomeScreen component
import GroupListScreen from '../screens/MyGroupsScreen'; // Import your MyEventsScreen component
import ScheduleScreen from '../screens/ScheduleScreen'; // Import your ScheduleScreen component
import SettingsScreen from '../screens/SettingsScreen'; // Import your SettingsScreen component

const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="My Groups" component={GroupListScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Schedule" component={ScheduleScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  );
}

export default MainScreen;