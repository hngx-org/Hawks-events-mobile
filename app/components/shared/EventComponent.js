import React from 'react';
import { TouchableOpacity , Text,Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 



const EventComponent = ({ event }) => {

    const navigation = useNavigation();

    const handleEventPress = () => {
        // Navigate to the group details screen when clicked
        navigation.navigate('Event Details');
      };

  return (
    <TouchableOpacity style={styles.container} onPress={handleEventPress}>
      <Text style={styles.eventName}>{event.name}</Text>
      <Text style={styles.eventDescription}>{event.description}</Text>
      <Text style={styles.eventDateTime}>{event.date} - {event.time}</Text>
      <Text style={styles.eventLocation}>{event.location}</Text>
      <Text style={styles.attendingCount}> <Image source={require('../../assets/images/people.png')}/> {event.attending} attending</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    height: 130,
    padding: 20,
    elevation: 3
  },
  eventName: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15
  },
  eventDescription: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.4
  },
  eventDateTime: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.25,
    color: '#FF9405'
  },
  eventLocation: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#75818F',
    letterSpacing: 0.25,
    marginBottom: 10
  },
  attendingCount: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 15,
    letterSpacing: 0.4
  },
});

export default EventComponent;
