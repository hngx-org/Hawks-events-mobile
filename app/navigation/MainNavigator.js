import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen'; // Import your HomeScreen component
import GroupListScreen from '../screens/MyGroupsScreen'; // Import your MyEventsScreen component
import ScheduleScreen from '../screens/ScheduleScreen'; // Import your ScheduleScreen component
import SettingsScreen from '../screens/SettingsScreen'; // Import your SettingsScreen component
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {Image} from 'react-native';



const Tab = createBottomTabNavigator();

function MainScreen() {

  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{  headerShown: false,
        tabBarActiveTintColor: "#FF9405",
        tabBarIcon: ({ color, size, focused }) => (
            <Image source={focused ? require('../assets/images/home-active.png') :  require('../assets/images/home.png')} />
        ), }} />
        <Tab.Screen name="My Groups" component={GroupListScreen}
        options={{  headerShown: false,
            tabBarActiveTintColor: "#FF9405",
            tabBarIcon: ({ color, size, focused }) => (
                <Image source={focused ? require('../assets/images/group-icon-active.png') :  require('../assets/images/group-icon.png')} />
            ), }}
        />
        <Tab.Screen name="My Schedule" component={ScheduleScreen}
        options={{ 
            tabBarActiveTintColor: "#FF9405",
            tabBarIcon: ({ color, size, focused }) => (
                <Image source={focused ? require('../assets/images/schedule-active.png') :  require('../assets/images/schedule.png')} />
            ), }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} 
        options={{
            tabBarActiveTintColor: "#FF9405",
            tabBarIcon: ({ color, size, focused }) => (
                <Image source={focused ? require('../assets/images/settings-active.png') :  require('../assets/images/settings.png')} />
            ), }}
        />
      </Tab.Navigator>
  );
}

export default MainScreen;