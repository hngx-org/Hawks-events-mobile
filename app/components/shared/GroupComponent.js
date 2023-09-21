/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import group from '../../assets/images/group.png';
import { useNavigation } from '@react-navigation/native'; 


const GroupComponent = ({ name, upcomingEvents }) => {

    const navigation = useNavigation();

    const handleGroupPress = () => {
        // Navigate to the group details screen when clicked
        navigation.navigate('Group Details');
      };


  return (
    <TouchableOpacity style={styles.container} onPress={handleGroupPress}>
      {/* Background Image */}
      <Image source={group} style={styles.backgroundImage} />

      <View style={styles.overlay}>
      </View>

      {/* Group Name and View Button */}
      <View style={styles.contentContainer}>
        <Text style={styles.groupName}>{name}</Text>
      </View>

      {/* Number of Upcoming Events */}
      <Text style={styles.upcomingEvents}>{`${upcomingEvents} Upcoming Events`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    width: "50%",
    height: 200,
     // Semi-transparent background
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  overlay : {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    padding: 10,
    position: 'absolute',
    bottom: "50%",
    left: 0,
    right: 0,
  },
  groupName: {
    fontSize: 18,      // Font size 14px
    fontFamily: 'Roboto', // Use the Roboto font
    fontWeight: '500',  // Weight 500 (Medium)
    letterSpacing: 0.5, // Letter spacing 0.5%
    lineHeight: 16.41,  // Line height 16.41px
    textAlign: 'center', // Center align the text
    color: 'white',    // Black color
  },
  viewButton: {
    backgroundColor: '#400d40',
    padding: 8,
    borderRadius: 5,
    marginTop: 5,
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  upcomingEvents: {
    padding: 10,
    position: 'absolute',
    bottom: 0,
    right: 0,
    fontSize: 14,
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#5ECC62',
  },
});

export default GroupComponent;
