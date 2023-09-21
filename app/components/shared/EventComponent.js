/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity , Text, View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 



const EventComponent = ({ event }) => {
  // Variable for the share icon
  const shareIcon = 'https://img.icons8.com/windows/32/share-rounded.png';
  // Variable for the like icon
  const likeIcon = 'https://img.icons8.com/ios/50/facebook-like--v1.png';

  return (
    <View style={styles.container}>
      {/* Event name */}
      <View style={styles.eventNameContainer}>
        <Text style={styles.eventName}>{event.name}</Text>
        <Image source={{uri:shareIcon}} style={styles.icon} />
      </View>
      {/* Event description */}
      <View>
        <Text style={styles.eventDescription}>{event.description}</Text>
        <Text style={styles.eventDateTime}>{event.date} - {event.time}</Text>
        <Text style={styles.eventLocation}>{event.location}</Text>
      </View>
      {/* Attendees */}
      <View style={styles.eventAttendeeContainer}>
        <Text style={styles.attendingCount}> <Image source={require('../../assets/images/people.png')}/> {event.attending} attending</Text>
        <Image source={{uri: likeIcon}} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    height: 'auto',
    paddingTop: 15,
    paddingBottom: 20,
    paddingHorizontal: 25,
    // Add the line below if we want to add a shadow to the event cards
    // shadowOffset: {width: 0, height: 0},
    // shadowColor: 'black',
    // shadowOpacity: 1,
    // shadowRadius: 5,
  },
  eventNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 7,
  },
  eventName: {
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 26,
  },
  icon: {
    width: 20,
    height: 20,
  },
  eventDescription: {
    fontFamily: 'Roboto',
    fontSize: 16,
    marginBottom: 5,
  },
  eventDateTime: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF9405',
  },
  eventLocation: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#75818F',
  },
  eventAttendeeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  attendingCount: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 14,
  },
});

export default EventComponent;
