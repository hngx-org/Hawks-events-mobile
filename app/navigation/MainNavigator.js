import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen'; // Import your HomeScreen component
import GroupListScreen from '../screens/MyGroupsScreen'; // Import your MyEventsScreen component
import ScheduleScreen from '../screens/ScheduleScreen'; // Import your ScheduleScreen component
import SettingsScreen from '../screens/SettingsScreen'; // Import your SettingsScreen component
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
      <Tab.Navigator>
<<<<<<< HEAD
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="My Groups" component={GroupListScreen} options={{headerShown: false}}/>
=======
        <Tab.Screen name="Home" component={HomeScreen} options={{  headerShown: false,
        
        tabBarActiveTintColor: "#FF9405",
        tabBarIcon: ({ color, size, focused }) => (
          <MaterialCommunityIcons
            name="home"
            color={focused ? "#FF9405" : "gray"}
            size={size}
          />
        ), }} />
        <Tab.Screen name="My Groups" component={GroupListScreen} />
>>>>>>> 3a3b172e4a1b01e82468cb4b245ed0bb6489b0e2
        <Tab.Screen name="Schedule" component={ScheduleScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  );
}

export default MainScreen;