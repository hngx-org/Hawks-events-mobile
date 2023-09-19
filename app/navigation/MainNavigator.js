import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen'; // Import your HomeScreen component
import MyEventsScreen from './screens/MyEventsScreen'; // Import your MyEventsScreen component
import ScheduleScreen from './screens/ScheduleScreen'; // Import your ScheduleScreen component
import SettingsScreen from './screens/SettingsScreen'; // Import your SettingsScreen component

const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="My Events" component={MyEventsScreen} />
        <Tab.Screen name="Schedule" component={ScheduleScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainScreen;